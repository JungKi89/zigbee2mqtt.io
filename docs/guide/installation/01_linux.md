---
next: 14_securing.md
---

# Linux

::: warning
설치 방법으로는 [Docker](./02_docker.md) 사용을 권장합니다.
Docker를 사용하면 NodeJS 설정 및 의존성 설치와 같은 일반적인 설치 문제를 피할 수 있습니다.
:::

이 안내서는 Linux에서 Zigbee2MQTT를 실행하는 방법을 설명합니다.

설명을 간단하게 하기 위해 이 가이드는 Raspberry Pi 4에서 실행하는 것을 가정하지만, 어떤 Linux 머신에서도 동작합니다.

따라서 아래 예제에서는 사용자 `pi`를 사용하지만, 배포판에 따라 다를 수 있습니다. 예를 들어 Openhabian에서는 `openhabian`을 사용해야 합니다.

::: tip TIP
시작하기 전에 시스템에 MQTT 브로커가 설치되어 있는지 확인하세요.
설치 방법에 대한 다양한 튜토리얼이 있습니다. [예시](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/).
Mosquitto가 권장 MQTT 브로커이지만 다른 것도 잘 작동합니다.
:::

## 설치

```bash
# Node.js 저장소를 설정하고, Node.js와 필요한 의존성을 설치합니다.
# 참고 1: 구형 i386 하드웨어는 [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/)에서 버전 20.9.0으로 작동할 수 있습니다.
# 참고 2: Ubuntu의 경우 아래 Snap을 통한 설치 방법을 참고하세요.
sudo apt-get install -y curl
sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc libsystemd-dev
corepack enable

# 올바른 Node.js 버전이 설치되었는지 확인합니다
node --version  # V20.x 또는 V22.X가 출력되어야 합니다

# zigbee2mqtt 디렉토리를 생성하고 현재 사용자를 소유자로 설정합니다
sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt

# Zigbee2MQTT 저장소를 클론합니다
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt

# 의존성을 설치합니다 ("pi" 사용자로 실행)
cd /opt/zigbee2mqtt
pnpm install --frozen-lockfile
```

::: tip TIP
Ubuntu에서는 Snap을 통해 Node.js를 설치할 수 있습니다.

```bash
# snap 스토어에서 최신 nodejs를 설치합니다
# Node.js가 시스템에 완전한 접근이 필요하므로 --classic 인수가 필요합니다.
# --channel=XX 인수를 사용하여 레거시 버전을 설치할 수도 있습니다(14 이상 필요).
sudo snap install node --classic
corepack enable

# node가 설치되었는지 확인합니다
# snap 스토어 안내를 따랐을 때 이 단계에서 오류가 발생하면, BIN 경로를 다음과 같이 조정합니다:
## PATH=$PATH:/snap/node/current/bin
# 그런 다음 위의 방법으로 Node.js를 다시 확인합니다
node --version
```

:::

## Zigbee2MQTT 시작

모든 설정이 완료되면 Zigbee2MQTT를 시작할 수 있습니다.

```bash
cd /opt/zigbee2mqtt
pnpm start
```

처음 시작 시, Zigbee2MQTT는 포트 8080에서 온보딩을 시작합니다.
해당 페이지로 이동하여 설정을 진행하세요.
[온보딩](../getting-started/README.md#onboarding)에 대한 자세한 정보를 참고하세요.

온보딩이 완료되면 다음과 같은 내용이 표시됩니다:

```bash
Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
Zigbee2MQTT:info  2019-11-09T13:04:01: Starting zigbee-herdsman...
Zigbee2MQTT:info  2019-11-09T13:04:03: zigbee-herdsman started
Zigbee2MQTT:info  2019-11-09T13:04:03: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
Zigbee2MQTT:info  2019-11-09T13:04:03: Currently 0 devices are joined:
Zigbee2MQTT:info  2019-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost
Zigbee2MQTT:info  2019-11-09T13:04:03: Connected to MQTT server
```

Zigbee2MQTT는 `CTRL + C`를 눌러 중지할 수 있습니다.

## (선택 사항) systemctl로 데몬 실행

Zigbee2MQTT를 데몬으로 실행하고(백그라운드에서) 부팅 시 자동으로 시작하려면 systemctl로 실행합니다.

```bash
# Zigbee2MQTT용 systemctl 설정 파일을 생성합니다
sudo nano /etc/systemd/system/zigbee2mqtt.service
```

이 파일에 다음 내용을 추가합니다:

```
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
Environment=NODE_ENV=production
Type=notify
ExecStart=/usr/bin/node index.js
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
# Zigbee2MQTT 메시지가 syslog를 가득 채우지 않게 하려면 StandardOutput=null을 사용하세요. 더 많은 옵션은 systemd.exec(5)을 참고하세요
StandardError=inherit
WatchdogSec=10s
Restart=always
RestartSec=10s
User=pi

[Install]
WantedBy=multi-user.target
```

::: tip NOTE

> Raspberry Pi 1 또는 Zero를 사용 중이고 이 [가이드](https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb)를 따랐다면, `ExecStart=/usr/bin/node index.js`를 `ExecStart=/usr/local/bin/node index.js`로 교체하세요.

:::

::: tip

SD 카드로 구동되는 Raspberry Pi 또는 시스템을 사용하는 경우, 디스크에 기록되는 로그 파일 양을 최소화하고 싶을 것입니다. `StandardOutput=inherit`가 설정된 systemd 서비스는 모든 것을 두 번 로깅합니다: 한 번은 systemd 유닛을 통해 `journalctl`에, 한 번은 `data/log` 아래 파일에 기본 로깅됩니다. 하나만 유지하는 것을 권장합니다:

- `data/log` 아래의 로그만 유지 --> systemd 유닛에서 `StandardOutput=null` 사용. **또는**
- `journalctl` 로깅만 유지 --> Zigbee2MQTT 설정에서 [`advanced.log_output = ['console']`](https://www.zigbee2mqtt.io/guide/configuration/logging.html) 설정.

:::

::: tip

모든 Zigbee2MQTT 데이터를 다른 디렉토리에 저장하려면, `[Service]` 아래에 `Environment=ZIGBEE2MQTT_DATA=/path/to/data`를 추가하세요.

:::

::: tip

`Type=notify`를 사용하면 Zigbee2MQTT가 시작되어 [Frontend](../configuration/frontend.md) 소켓에서 수신 대기할 때 systemd에 알립니다. 이는 다른 의존 systemd 유닛을 시작하거나 `ExecStartPost=` 속성을 사용할 때 유용합니다. 예를 들어 [Reverse Proxy](../configuration/frontend.md#nginx-proxy-configuration)가 Zigbee2MQTT의 Unix 소켓에 접근할 수 있도록 하려면, `[Service]` 섹션에 `ExecStartPost=setfacl -m u:www-data:rw /run/zigbee2mqtt/zigbee2mqtt.sock`을 추가하고 `apt install acl`을 실행하면 됩니다. 파일을 저장하고 종료하세요.

:::

설정이 올바른지 확인합니다:

```bash
# Zigbee2MQTT 시작
sudo systemctl start zigbee2mqtt

# 상태 확인
systemctl status zigbee2mqtt.service
```

출력은 다음과 같이 나타납니다:

```bash
pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service
● zigbee2mqtt.service - zigbee2mqtt
   Loaded: loaded (/etc/systemd/system/zigbee2mqtt.service; disabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-06-07 20:27:22 BST; 3s ago
 Main PID: 665 (pnpm)
   CGroup: /system.slice/zigbee2mqtt.service
           └─679 /usr/bin/node index.js

Jun 07 20:27:22 raspberry systemd[1]: Started zigbee2mqtt.
Jun 07 20:27:23 raspberry pnpm[665]: > zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt
Jun 07 20:27:23 raspberry pnpm[665]: > node index.js
Jun 07 20:27:24 raspberry pnpm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Jun 07 20:27:25 raspberry pnpm[665]: Zigbee2MQTT:info  2019-11-09T13:04:01: Starting Zigbee2MQTT version 1.6.0 (commit #720e393)
```

모든 것이 정상적으로 작동하면, 부팅 시 Zigbee2MQTT가 자동으로 시작되도록 systemctl을 설정합니다:

```bash
sudo systemctl enable zigbee2mqtt.service
```

완료! 😃

나중에 유용하게 사용할 수 있는 몇 가지 팁:

```bash
# Zigbee2MQTT 중지
sudo systemctl stop zigbee2mqtt

# Zigbee2MQTT 시작
sudo systemctl start zigbee2mqtt

# Zigbee2MQTT 로그 확인
sudo journalctl -u zigbee2mqtt.service -f
```

## (나중을 위해) Zigbee2MQTT를 최신 버전으로 업데이트

Zigbee2MQTT를 최신 버전으로 업데이트하려면 다음을 실행합니다:

```sh
# Zigbee2MQTT 디렉토리에서 업데이트 스크립트를 실행합니다
cd /opt/zigbee2mqtt
./update.sh
```
