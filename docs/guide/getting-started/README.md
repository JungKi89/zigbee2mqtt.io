---
sidebarDepth: 1
next: ../usage/
redirectFrom: /getting_started/what_do_i_need.md
---

# 시작하기

## 사전 준비 사항

Zigbee2MQTT를 사용하려면 다음 하드웨어가 필요합니다:

1. <img src="../../images/zzh.jpg" title="ZZH" class="float-left" /> **Zigbee adapter** — Zigbee2MQTT가 실행되는 호스트 시스템과 Zigbee 무선 통신 사이의 인터페이스입니다.
   Zigbee2MQTT는 USB, GPIO, 또는 WIFI/Ethernet을 통한 원격 연결 등 다양한 연결 방식의 adapter를 지원합니다.
   권장 adapter는 [zStack](../adapters/zstack.md)과 [EmberZNet](../adapters/emberznet.md)입니다. 지원되는 모든 adapter는 [지원되는 Adapter 목록](../adapters/README.md)을 참고하세요. 설치 전에 adapter 전용 권장 사항을 확인하여 추가 설정 파라미터가 필요한지 파악하는 것을 권장합니다. <br class="clear" />

2. <img src="../../images/pi.jpg" title="Raspberry Pi" class="float-left" /> **호스트 시스템** — Zigbee2MQTT를 실행할 컴퓨터(예: Raspberry Pi 또는 Intel NUC)입니다. Zigbee2MQTT는 Linux, Windows, MacOS를 포함한 다양한 플랫폼에서 실행됩니다. MQTT broker가 설치되어 있어야 합니다. [Mosquitto](https://www.mosquitto.org/download/) ([Raspberry Pi 설치 튜토리얼](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/))가 권장 MQTT broker이지만 [다른 broker](https://mqtt.org/software/)도 정상적으로 동작합니다. <br class="clear" />

3. <img src="../../images/xiaomi_sensors.jpg" title="Zigbee devices" class="float-left" /> Zigbee2MQTT에 페어링할 하나 이상의 **Zigbee 기기**. <br class="clear" />

::: tip 팁
<img alt="USB Cable" src="../../images/usb_extension_cable.jpg" class="float-left" /> 네트워크 범위와 안정성을 향상시키려면 USB 연장 케이블을 사용하세요. 기기에서 어떤 문제(타임아웃, 페어링 불가, 기기 접속 불가, 네트워크 이탈 등)가 발생하면 가장 먼저 이 방법을 시도하여 간섭을 줄이세요.
[네트워크 범위 및 안정성 향상하기](../../advanced/zigbee/02_improve_network_range_and_stability.md)를 참고하세요. <br class="clear" />
:::

## 설치

다음 단계는 Zigbee2MQTT를 설치하는 것입니다. 사용 중인 플랫폼에 맞는 [설치 안내](../installation/)를 따르세요. Zigbee2MQTT가 시작되면 아래의 온보딩 절차를 진행할 수 있습니다.

## 온보딩

Zigbee2MQTT는 처음 실행 시(`configuration.yaml`이 존재하지 않을 때) 온보딩 프로세스를 제공합니다.

온보딩 페이지는 기본적으로 frontend와 동일한 URL(`http://localhost:8080`)에서 접근할 수 있습니다. _참고: 특정 설정(Home Assistant 등)에서는 이 URL이 다를 수 있습니다._

<img src="../../images/onboarding.png" alt="Onboarding" style="border: 2px solid black;">

검색 과정에서 `adapter type`을 알 수 없는 경우, 가장 일반적인 adapter 목록을 해당 페이지에서 확인할 수 있습니다: [zstack](../adapters/zstack.md), [ember](../adapters/emberznet.md), [deconz](../adapters/deconz.md), [zigate](../adapters/zigate.md), [zboss](../adapters/zboss.md).

:::tip 팁
adapter 검색 프로세스는 시리얼 및 mDNS로 검색 가능한 기기를 찾으려 시도합니다.
페이지를 새로 고침하면 검색 프로세스가 다시 실행됩니다.

_참고: 모든 환경에서 이 기능이 제공되지 않을 수 있습니다. 제공되지 않는 경우 adapter 경로와 타입을 직접 입력해야 합니다._
:::

설정을 제출한 후 Zigbee2MQTT의 유효성 검사에 실패하면 페이지에 오류 내용이 표시됩니다.

초기 설정을 제출한 후 Zigbee2MQTT가 시작에 실패하면(예: 잘못된 adapter 경로), 다음 실행 시 온보딩이 다시 실행됩니다.

:::tip 팁
온보딩 실패 페이지는 페이지의 `Close` 버튼을 누르거나 프로세스를 수동으로 종료하기 전까지 `node` 프로세스가 종료되지 않도록 유지합니다.
:::

:::tip 팁
나중에(설정 변경이 필요할 때) 온보딩을 강제 실행하려면 환경 변수 `Z2M_ONBOARD_FORCE_RUN=1`을 사용하세요.
환경에 따라 토글 형태로 제공될 수도 있고(예: Home Assistant 애드온), `node` 프로세스에 직접 설정해야 할 수도 있습니다.
:::

:::details 온보딩 프로세스 커스터마이즈를 위한 환경 변수
온보딩 서버를 커스터마이즈해야 하는 경우 다음 환경 변수를 사용할 수 있습니다:

- `Z2M_ONBOARD_NO_SERVER=1` => 온보딩 서버를 완전히 비활성화 (_아래 모든 옵션보다 우선 적용됨_)
- `Z2M_ONBOARD_URL=http://0.0.0.0:8080` => 온보딩 페이지에 접근할 URL 설정
- `Z2M_ONBOARD_NO_FAILURE_PAGE=1` => 실패 페이지 비활성화 (_실패 내용은 로그에 기록되고 프로세스가 즉시 종료됨_)
- `Z2M_ONBOARD_FORCE_RUN=1` => 위의 팁 참고
- `Z2M_ONBOARD_NO_REDIRECT=1` => frontend가 활성화된 경우, 온보딩 유효성 검사 페이지가 frontend로 리다이렉트하는 것을 방지 (_frontend URL이 일반적이지 않은 설정에서 유용함_)

:::

## 기기 연결

[지원되는 기기 목록](../../supported-devices/)에서 기기를 검색하고 페어링 방법에 따라 진행하세요.

안내가 없는 경우 기기를 공장 초기화하여 페어링할 수 있습니다.

아래와 유사한 로그가 출력되면 기기 페어링이 완료된 것이며, frontend와 MQTT 메시지를 통해 기기를 제어할 수 있습니다.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```
