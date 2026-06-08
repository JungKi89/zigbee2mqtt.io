# Docker Stack 장치 매핑

_이 내용은 Docker Stack을 사용할 때만 해당됩니다_

Docker stack은 swarm 모드에서 스택을 배포할 때 `--devices` 옵션을 사용한 장치 매핑을 지원하지 않습니다. 이에 대한 두 가지 해결 방법이 있습니다. 두 방법 모두 장치를 볼륨으로 바인딩하는 것부터 시작합니다.

## cgroup v1 및 v2에 대한 자동 장치 매핑

Docker Stack에서 장치를 활성화하는 가장 쉬운 해결책은 [allfro device-mapping-manager docker 이미지](https://github.com/allfro/device-mapping-manager)입니다. 이 컨테이너는 자체 호스트의 모든 볼륨 마운트를 읽어 장치를 식별하고, 호스트의 권한을 수정하여 컨테이너가 사용할 수 있도록 합니다. 다른 해결책과 달리 이 방법은 cgroup의 두 버전 모두에서 작동합니다.

이 컨테이너는 스택이 아닌 docker에 직접 배포해야 합니다. 실제 장치 매퍼 컨테이너를 실행하는 프록시 역할을 하는 privileged 서비스가 있는 스택을 생성하여 이 문제를 해결할 수 있습니다.

```yaml
version: '3.8'

services:
    dmm:
        image: docker
        entrypoint: docker
        restart: unless-stopped
        privileged: true
        command: |
            run
            -i
            --rm
            --privileged
            --cgroupns=host
            --pid=host
            --userns=host
            -v /sys:/host/sys
            -v /var/run/docker.sock:/var/run/docker.sock
            -v /dev:/dev
            # Docker 버전 > 29.0.0인 경우 아래 줄의 주석을 해제하세요
            # -e DOCKER_API_VERSION=1.44
            ghcr.io/allfro/allfro/device-mapping-manager:latest
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
        deploy:
            mode: global
```

## 수동 cgroup v1

수동으로 올바른 권한을 설정하는 방법도 있습니다. 이 방법은 [Add support for devices with "service create"](https://github.com/docker/swarmkit/issues/1244#issuecomment-285935430)에서 찾은 해결책을 기반으로 합니다. 모든 공로는 해당 기여자에게 있습니다.

이 방법은 많은 최신 배포판에서 기본적으로 활성화되지 않은 cgroup v1에서만 작동합니다.

1. 직렬 adapter 확인
   다음 명령을 사용하여 직렬 adapter를 확인합니다:

    ```shell
    sudo lsusb -v
    ```

    ```
    Bus 001 Device 005: ID 0451:16a8 Texas Instruments, Inc.
    Device Descriptor:
      bLength                18
      bDescriptorType         1
      bcdUSB               2.00
      bDeviceClass            2 Communications
      bDeviceSubClass         0
      bDeviceProtocol         0
      bMaxPacketSize0        32
      idVendor           0x0451 Texas Instruments, Inc.
      idProduct          0x16a8
      bcdDevice            0.09
      iManufacturer           1 Texas Instruments
      iProduct                2 TI CC2531 USB CDC
      iSerial                 3 __0X00124B001936AC60
      bNumConfigurations      1
      Configuration Descriptor:
    	bLength                 9
    	bDescriptorType         2
    	wTotalLength           67
    	bNumInterfaces          2
    	bConfigurationValue     1
    	iConfiguration          0
    	bmAttributes         0x80
    	  (Bus Powered)
    	MaxPower               50mA
    	Interface Descriptor:
    	  bLength                 9
    	  bDescriptorType         4
    	  bInterfaceNumber        0
    	  bAlternateSetting       0
    	  bNumEndpoints           1
    	  bInterfaceClass         2 Communications
    	  bInterfaceSubClass      2 Abstract (modem)
    	  bInterfaceProtocol      1 AT-commands (v.25ter)
    	  iInterface              0
    	  CDC Header:
    		bcdCDC               1.10
    	  CDC ACM:
    		bmCapabilities       0x02
    		  line coding and serial state
    	  CDC Union:
    		bMasterInterface        0
    		bSlaveInterface         1
    	  CDC Call Management:
    		bmCapabilities       0x00
    		bDataInterface          1
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x82  EP 2 IN
    		bmAttributes            3
    		  Transfer Type            Interrupt
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval              64
    	Interface Descriptor:
    	  bLength                 9
    	  bDescriptorType         4
    	  bInterfaceNumber        1
    	  bAlternateSetting       0
    	  bNumEndpoints           2
    	  bInterfaceClass        10 CDC Data
    	  bInterfaceSubClass      0 Unused
    	  bInterfaceProtocol      0
    	  iInterface              0
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x84  EP 4 IN
    		bmAttributes            2
    		  Transfer Type            Bulk
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval               0
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x04  EP 4 OUT
    		bmAttributes            2
    		  Transfer Type            Bulk
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval               0
    Device Status:     0x0000
      (Bus Powered)
    ```

2. UDEV 규칙

    직렬 adapter에 대한 새로운 udev 규칙을 생성합니다. `idVendor`와 `idProduct`는 `lsusb` 명령의 값과 일치해야 합니다. 아래 규칙은 `/dev/zigbee-serial` 장치를 생성합니다:

    ```shell
    echo "SUBSYSTEM==\"tty\", ATTRS{idVendor}==\"0451\", ATTRS{idProduct}==\"16a8\", SYMLINK+=\"zigbee-serial\",  RUN+=\"/usr/local/bin/docker-setup-zigbee-serial.sh\"" | sudo tee /etc/udev/rules.d/99-zigbee-serial.rules
    ```

    다음 명령을 사용하여 새로 생성된 규칙을 다시 로드합니다:

    ```shell
    sudo udevadm control --reload-rules
    ```

3. docker-setup-zigbee-serial.sh 생성

    ```shell
    sudo nano /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

    다음 내용을 복사합니다:

    ```shell
    #!/bin/bash
    USBDEV=`readlink -f /dev/zigbee-serial`
    read minor major < <(stat -c '%T %t' $USBDEV)
    if [[ -z $minor || -z $major ]]; then
    	echo 'Device not found'
    	exit
    fi
    dminor=$((0x${minor}))
    dmajor=$((0x${major}))
    CID=`docker ps -a --no-trunc | grep koenkk/zigbee2mqtt | head -1 |  awk '{print $1}'`
    if [[ -z $CID ]]; then
    	echo 'CID not found'
    	exit
    fi
    echo 'Setting permissions'
    echo "c $dmajor:$dminor rwm" > /sys/fs/cgroup/devices/docker/$CID/devices.allow
    ```

    권한을 설정합니다:

    ```shell
    sudo chmod 744 /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

4. docker-event-listener.sh 생성

    ```shell
    sudo nano /usr/local/bin/docker-event-listener.sh
    ```

    다음 내용을 복사합니다:

    ```shell
    #!/bin/bash
    docker events --filter 'event=start'| \
    while read line; do
    	/usr/local/bin/docker-setup-zigbee-serial.sh
    done
    ```

    권한을 설정합니다:

    ```shell
    sudo chmod 744 /usr/local/bin/docker-event-listener.sh
    ```

5. docker-event-listener.service 생성

    ```shell
    sudo nano /etc/systemd/system/docker-event-listener.service
    ```

    다음 내용을 복사합니다:

    ```shell
    [Unit]
    Description=Docker Event Listener for Zigbee serial adapter
    After=network.target
    StartLimitIntervalSec=0
    [Service]
    Type=simple
    Restart=always
    RestartSec=1
    User=root
    ExecStart=/bin/bash /usr/local/bin/docker-event-listener.sh

    [Install]
    WantedBy=multi-user.target
    ```

    권한을 설정합니다:

    ```shell
    sudo chmod 744 /etc/systemd/system/docker-event-listener.service
    ```

    데몬 다시 로드

    ```shell
    sudo systemctl daemon-reload
    ```

    Docker 이벤트 리스너 시작

    ```shell
    sudo systemctl start docker-event-listener.service
    ```

    Docker 이벤트 리스너 상태 확인

    ```shell
    sudo systemctl status docker-event-listener.service
    ```

    Docker 이벤트 리스너 활성화

    ```shell
    sudo systemctl enable docker-event-listener.service
    ```

6. Zigbee2MQTT 스택 확인 및 배포

    직렬 adapter를 다시 연결합니다. 다음 명령으로 확인합니다:

    ```shell
    ls -al /dev/zigbee-serial
    ```

    ```shell
    lrwxrwxrwx 1 root root 7 Sep 28 21:14 /dev/zigbee-serial -> ttyACM0
    ```

    다음은 `docker-stack-zigbee2mqtt.yml` 예시입니다:

    ```yaml
    version: "3.7"
    services:
      zigbee2mqtt:
    	image: koenkk/zigbee2mqtt:latest-dev
    	environment:
    	  - TZ=Europe/Amsterdam
    	volumes:
    	  - /mnt/docker-cluster/zigbee2mqtt/data:/app/data
    	  - /dev/zigbee-serial:/dev/zigbee-serial
    	networks:
    	  - proxy_traefik-net
    	deploy:
    	  placement:
    		constraints: [node.hostname == rpi-3]
    	  replicas: 1

    networks:
      proxy_traefik-net:
    	external: true
    ```

    위 예시에서 `proxy_traefik-net`은 mqtt 브로커에 연결하는 네트워크입니다. 제약 조건은 Docker가 직렬 adapter가 연결된 해당 노드(`rpi-3`)에만 배포하도록 합니다. 볼륨 바인딩 `/mnt/docker-cluster/zigbee2mqtt/data`는 `configuration.yaml`이 저장되는 zigbee2mqtt 영구 디렉토리입니다.

    Zigbee2MQTT의 `configuration.yaml`이 `/dev/zigbee-serial`을 가리키도록 설정해야 합니다:

    ```yaml
    [...]
      port: /dev/zigbee-serial
    [...]
    ```

    스택을 배포합니다:

    ```shell
    docker stack deploy zigbee2mqtt --compose-file docker-stack-zigbee2mqtt.yml
    ```

## 문제 해결

위의 과정을 따랐음에도 컨테이너가 올바르게 시작되지 않고 서비스 로그에 장치에 대한 "Operation not permitted" 메시지가 나타날 수 있습니다:

```
Error: Error while opening serialport 'Error: Error: Operation not permitted, cannot open /dev/zigbee-serial'
```

이는 docker/containerd에서 완전히 지원되지 않는 cgroupv2 사용으로 인한 것입니다.
cgroupv2에서 cgroupv1으로 전환하려면 grub cmdline에 `systemd.unified_cgroup_hierarchy=false`를 추가해야 합니다.
예를 들어 Raspian Bullseye가 설치된 Raspberry Pi 4에서 /boot/cmdline.txt 파일의 줄 끝에 추가할 수 있습니다:

```
[...] rootfstype=ext4 fsck.repair=yes rootwait cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 systemd.unified_cgroup_hierarchy=false
```
