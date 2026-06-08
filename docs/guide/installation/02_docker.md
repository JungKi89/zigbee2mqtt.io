---
next: 14_securing.md
redirectFrom: /information/docker.md
---

# Docker

공식 [Zigbee2MQTT Docker 이미지](https://github.com/Koenkk/zigbee2mqtt/pkgs/container/zigbee2mqtt)를 사용하여 Docker 컨테이너에서 Zigbee2MQTT를 실행할 수 있습니다.

이 이미지는 다음 아키텍처를 지원합니다: `linux/386`, `linux/amd64`, `linux/arm/v6`, `linux/arm/v7`, `linux/arm64`, `linux/riscv64`.

사용 가능한 태그:

- 최신 릴리즈 버전: `latest`
- 최신 개발 버전 ([`dev`](https://github.com/Koenkk/zigbee2mqtt/tree/dev) 브랜치 기반): `latest-dev`
- 특정 릴리즈 버전, 예: `2.0.0`, `2.0`, `2`

::: warning
Raspberry Pi 1 및 zero 사용자: Docker에서 잘못된 이미지 아키텍처를 선택하는 버그가 있습니다.
컨테이너를 실행하기 전에 `docker pull ghcr.io/koenkk/zigbee2mqtt --platform linux/arm/v6` 명령으로 올바른 이미지를 가져오세요.
:::

## 컨테이너 실행

먼저 [여기](../configuration/adapter-settings.md#determine-location-of-the-adapter)에 설명된 대로 adapter의 위치를 파악합니다.

다음 명령을 실행하되, `--device` 파라미터를 adapter 위치에 맞게 수정하세요.

```bash
$ docker run \
   --name zigbee2mqtt \
   --restart=unless-stopped \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   -e TZ=Europe/Amsterdam \
   ghcr.io/koenkk/zigbee2mqtt
```

**파라미터 설명:**

- `--name zigbee2mqtt`: 컨테이너 이름
- `--restart=unless-stopped`: 부팅 시 자동 시작 및 충돌 후 자동 재시작
- `--device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0`: adapter 위치. `:` 앞의 경로는 호스트의 경로이고, 뒤의 경로는 컨테이너 내부로 매핑되는 경로입니다. 호스트에서는 항상 `/dev/serial/by-id/` 경로를 사용해야 합니다.
- `-v $(pwd)/data:/app/data`: Zigbee2MQTT가 설정을 저장하는 디렉토리 (pwd는 현재 작업 디렉토리로 매핑됩니다)
- `-v /run/udev:/run/udev:ro`: adapter 자동 감지에 필요합니다
- `-e TZ=Europe/Amsterdam`: 타임존 설정
- `-p 8080:8080`: Docker 컨테이너 내부에서 호스트로 포트 포워딩 (frontend용)

::: tip
같은 호스트(localhost)에서 MQTT 서버를 실행하는 경우, `docker0` 브리지의 IP를 사용하여 연결할 수 있습니다: `server: mqtt://172.17.0.1`.
:::

처음 시작 시, Zigbee2MQTT는 포트 8080에서 온보딩을 시작합니다.
해당 페이지로 이동하여 설정을 진행하세요.
[온보딩](../getting-started/README.md#onboarding)에 대한 자세한 정보를 참고하세요.

온보딩이 완료되면 Zigbee2MQTT가 시작됩니다.

::: details (대안) Docker를 사용한 rootless 컨테이너

배포 보안을 향상시키기 위해 Zigbee2MQTT를 _non-root_ 사용자로 실행할 수 있습니다.

1. adapter에 접근 권한이 있는 그룹을 확인합니다 (Ubuntu에서는 `dialout`에 할당될 수 있습니다). `ttyACM0`을 adapter 위치에 맞게 수정하세요.

```
$ ls -l /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 Nov 5 16:31 /dev/ttyACM0
```

2. 현재 사용자로 Zigbee2MQTT를 실행하려면 `uid` (UserID)와 `gid` (GroupID)를 확인합니다:

```
$ id
uid=1001(pi) gid=1001(pi) Groups=...
```

3. `device`, `user` (uid:gid), `group-add`를 업데이트한 후 docker 컨테이너를 시작합니다:

```
$ sudo docker run \
   --name=zigbee2mqtt \
   --restart=unless-stopped \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   --user 1001:1001 \
   --group-add dialout \
   -e TZ=Europe/Amsterdam \
   ghcr.io/koenkk/zigbee2mqtt
```

**파라미터 설명:**

- `--user 1001:1001`: 제공된 UserID와 GroupID를 사용하여 컨테이너 내에서 Zigbee2MQTT 프로세스를 실행합니다
- `--group-add dialout`: 사용자에게 `dialout` 그룹을 할당하여 장치에 접근할 수 있도록 합니다

:::

::: details (대안) Podman (>3.2)을 사용한 rootless

```
$ podman run \
   --name=zigbee2mqtt \
   --restart=unless-stopped \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   --group-add keep-groups \
   -e TZ=Europe/Amsterdam \
   ghcr.io/koenkk/zigbee2mqtt
```

::: tip
SELinux가 활성화된 경우 볼륨 마운트에 `:z` 접미사를 추가해야 할 수 있습니다: `-v $(pwd)/data:/app/data:z`
:::

### 업데이트

최신 Docker 이미지로 업데이트하려면:

```bash
docker pull ghcr.io/koenkk/zigbee2mqtt:latest
docker rm -f zigbee2mqtt
# 위의 안내에 따라 컨테이너를 다시 실행합니다
```

## Docker Compose

Docker Compose 파일 예시:

```yaml
services:
    zigbee2mqtt:
        container_name: zigbee2mqtt
        image: ghcr.io/koenkk/zigbee2mqtt
        restart: unless-stopped
        volumes:
            - ./data:/app/data
            - /run/udev:/run/udev:ro
        ports:
            # Frontend 포트
            - 8080:8080
        environment:
            - TZ=Europe/Berlin
        devices:
            # adapter 위치와 일치하는지 확인하세요
            - /dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0
```

`docker-compose.yml`의 `zigbee2mqtt` 서비스 블록에 필요한 속성을 추가하여 Docker Compose로 rootless 컨테이너를 실행할 수도 있습니다:

```yaml
group_add:
    - dialout
user: 1000:1000
```

### 컨테이너 시작

Docker 컨테이너를 시작하려면:

```bash
docker compose up -d zigbee2mqtt
```

선택적으로 `zigbee2mqtt`를 생략하면 compose 파일에 나열된 모든 컨테이너를 시작합니다.

### 업데이트

최신 Docker 이미지로 업데이트하려면:

```bash
docker compose pull zigbee2mqtt
docker compose up -d zigbee2mqtt
```

선택적으로 `zigbee2mqtt`를 생략하면 compose 파일의 모든 컨테이너에 대한 새 이미지를 가져오고, 업데이트된 컨테이너를 재시작합니다.

## 추가 링크

- [Docker Stack 장치 매핑](./docker//docker_stack.md)
- [Synology DSM 7.0에서 Docker](./docker//docker_synology.md)
