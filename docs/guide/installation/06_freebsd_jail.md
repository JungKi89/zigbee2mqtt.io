---
next: 14_securing.md
---

# FreeBSD jail

이 안내서는 [FreeBSD jail](https://en.wikipedia.org/wiki/FreeBSD_jail)에서 Zigbee2MQTT를 실행하는 방법을 설명합니다.

설명을 간단하게 하기 위해 이 가이드는 [TrueNAS CORE](https://www.truenas.com/truenas-core/)에서 실행하고 Home Assistant와 함께 사용하기 위해 _Mosquitto MQTT_ jail에 Zigbee2MQTT를 설치하는 것을 가정합니다. 이 설정은 Zigbee와 Home Assistant 간의 인터페이스에 MQTT만 사용합니다. 다른 FreeBSD 머신에서도 이 안내서를 따를 수 있습니다.

## Jail 생성

먼저 Zigbee2MQTT와 Mosquitto를 모두 실행할 jail을 생성해야 합니다. TrueNAS 웹 UI에서 `Plugins`로 이동하여 `Community` 플러그인을 선택한 후 `Mosquitto MQTT`를 선택하면 됩니다.

jail의 터미널에 접속하려면, 웹 UI의 _Jails_ 아래 _Shell_ 기능을 사용하거나, TrueNAS에 SSH로 접속한 후 다음 명령을 실행합니다:

```sh
sudo iocage console <jail-name>
```

## 설치

jail의 셸 내에서 다음 명령을 입력합니다:

```bash
# Node.js와 필요한 의존성을 설치합니다:
# - 공식 Node 저장소에서 Node 22를 설치하는 것을 권장합니다. 방법은 https://github.com/nodesource/distributions/blob/master/README.md 를 참고하세요.
# - 구형 i386 하드웨어는 [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/)에서 버전 20.9.0으로 작동할 수 있습니다.
# - `npm`을 선택하면 `node`도 함께 설치됩니다.
pkg install git gmake gcc
corepack enable

# 올바른 Node.js 버전이 설치되었는지 확인합니다
node --version  # V20.x 또는 V22.X가 출력되어야 합니다

# 설치 폴더 생성 (/usr/local 접두사는 기본 시스템에 포함되지 않은 소프트웨어에 사용됩니다)
mkdir -p /usr/local/opt/zigbee2mqtt
cd /usr/local/opt/zigbee2mqtt

# Zigbee2MQTT 저장소를 클론합니다
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git .

# 의존성을 설치합니다
pnpm install --frozen-lockfile

# Zigbee2MQTT를 빌드합니다
pnpm run build
```

## Zigbee2MQTT 시작

모든 설정이 완료되면 Zigbee2MQTT를 시작할 수 있습니다.

```bash
cd /usr/local/opt/zigbee2mqtt
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

## (선택 사항) rc로 데몬 실행

Zigbee2MQTT를 데몬으로 실행하고(백그라운드에서) jail 시작 시 자동으로 시작하려면 서비스 파일을 생성합니다.

```sh
# Zigbee2MQTT용 서비스 파일을 생성합니다 (`nano`가 설치되어 있다고 가정하며, `vi`도 사용할 수 있습니다)
nano /usr/local/etc/rc.d/zigbee2mqtt
```

이 파일에 다음 내용을 추가합니다:

```
#!/bin/sh

# PROVIDE: zigbee2mqtt
# REQUIRE: DAEMON NETWORKING
# BEFORE: LOGIN
# KEYWORD: shutdown

. /etc/rc.subr

name="zigbee2mqtt"
rcvar=zigbee2mqtt_enable

: ${zigbee2mqtt_enable:="NO"}

# watchdog 활성화
zigbee2mqtt_env="Z2M_WATCHDOG=default"

# daemon
pidfile="/var/run/${name}.pid"
node="/usr/local/bin/node"
script_js="/usr/local/opt/zigbee2mqtt/index.js"
command=/usr/sbin/daemon
procname="daemon"
command_args=" -c -f -P ${pidfile} ${node} ${script_js}"

load_rc_config $name
run_rc_command "$1"
```

파일을 저장하고 종료합니다.

실행 권한을 부여합니다:

```sh
chmod +x /usr/local/etc/rc.d/zigbee2mqtt
```

설정이 올바른지 확인합니다:

```sh
# 활성화하지 않고 Zigbee2MQTT를 시작합니다
service zigbee2mqtt onestart

# 상태 확인
service zigbee2mqtt onestatus
```

출력은 다음과 같이 나타납니다:

```
root@zigbee2mqtt:/usr/local/opt/zigbee2mqtt # service zigbee2mqtt onestatus
zigbee2mqtt is running as pid 80246.
```

모든 것이 정상적으로 작동하면, jail 시작 시 Zigbee2MQTT가 자동으로 시작되도록 init 시스템을 설정합니다:

```sh
service zigbee2mqtt enable
```

완료! 😃

나중에 유용하게 사용할 수 있는 몇 가지 팁:

```sh
# Zigbee2MQTT 중지
service zigbee2mqtt stop

# Zigbee2MQTT 시작
service zigbee2mqtt start
```

## (나중을 위해) Zigbee2MQTT를 최신 버전으로 업데이트

Zigbee2MQTT를 최신 버전으로 업데이트하려면 다음을 실행합니다:

```sh
# Zigbee2MQTT 디렉토리에서 업데이트 스크립트를 실행합니다
cd /usr/local/opt/zigbee2mqtt
./update.sh
```
