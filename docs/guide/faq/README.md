---
sidebarDepth: 0
redirectFrom: /information/FAQ.md
---

# 자주 묻는 질문 (FAQ)

[[toc]]

## 모든 Zigbee 구현에 적용되는 일반적인 제한 사항

각 Zigbee2MQTT 인스턴스는 단 하나의 전용 Zigbee Coordinator 라디오 adapter 또는 모듈과 단 하나의 Zigbee 네트워크에만 연결할 수 있으며, 해당 Zigbee Coordinator는 다른 애플리케이션에서 이미 사용 중이어서는 안 됩니다. 다른 Zigbee 구현에 연결되었거나 연결된 적이 있는 기기는 Zigbee2MQTT에 페어링/참가하기 전에 반드시 공장 초기화가 필요합니다. 자세한 내용은 각 기기 제조사의 문서를 참고하세요.

모든 Zigbee 기기는 하나의 Zigbee Coordinator와 하나의 Zigbee 네트워크에만 페어링/참가할 수 있습니다. 즉, Zigbee 기기는 단 하나의 Zigbee gateway에만 연결될 수 있습니다. Zigbee 기기를 다른 Zigbee 네트워크로 이동하려면 해당 기기를 공장 초기화한 후 다른 Zigbee gateway에 다시 페어링/참가해야 합니다. 이는 [CSA (Connectivity Standards Alliance)](https://csa-iot.org/all-solutions/zigbee/)가 관장하는 현재(및 이전) Zigbee 프로토콜 사양의 제한 사항이며, Zigbee2MQTT만의 제한이 아닌 모든 Zigbee 구현에 동일하게 적용됩니다.

모든 Zigbee 구현에 적용되는 또 다른 제한 사항은 Zigbee 프로토콜 사양에 "IP를 통한 Zigbee" 또는 "LAN/WAN을 통한 Zigbee"가 존재하지 않는다는 점입니다. 따라서 Zigbee 네트워크 mesh 내에서 Zigbee 무선 신호로 직접 도달할 수 없는 두 개의 별도 위치나 사이트에 동일한 Zigbee 네트워크를 확장하는 것은 불가능합니다. 즉, 이더넷이나 VPN과 같은 다른 매체를 통해 단일 Zigbee 네트워크 통신을 변환·브리지하는 "Zigbee network adapter" 또는 유사한 솔루션을 사용하는 것은 방법이 없습니다. 따라서 일부 제품의 마케팅 자료에서 "Zigbee Router" 모드로 원격 사이트에 Zigbee 네트워크를 확장할 수 있다고 홍보하더라도, 실제로 그런 기능을 제공하는 네트워크 연결 원격 Zigbee adapter는 존재하지 않습니다. 실제로 이러한 "Zigbee network adapter" 제품의 "Zigbee Router" 기능은 Zigbee 라디오 칩을 독립 실행 모드로 전환하여 이더넷 네트워크 부분과 분리된 일반 Zigbee Router 기기처럼 동작하게 할 뿐입니다.

"Install Code" 또는 "QR Code"를 통한 Zigbee 3.0 기기의 커미셔닝 지원은 현재 Zigbee2MQTT에서 `zstack`(Texas Instruments ZNP), `ember`(Silicon Labs EmberZNet), `deconz`(Dresden Elektronik deCONZ, 최신 coordinator 펌웨어 필요) adapter 타입의 라디오에만 구현되어 있습니다. 다른 라디오 adapter 타입은 [zigbee-herdsman](https://github.com/Koenkk/zigbee-herdsman)의 해당 adapter/드라이버 지원이 부족하거나, 제조사의 펌웨어 명령/API 및 문서에서 지원이 누락되어 있기 때문입니다.

Zigbee2MQTT는 현재 ZSE("Zigbee Smart Energy") 프로파일만 사용하는 기기를 지원하지 않습니다. 이는 "Zigbee SE" 사양이 더 일반적인 Zigbee Home Automation + Zigbee 조명을 포함하는 표준 Zigbee 3.0 사양에 포함되지 않기 때문이며, 통상적으로 Zigbee Coordinator 라디오 adapter와 모듈에서 사용할 수 있는 대부분의 Zigbee Coordinator 펌웨어에도 구현되어 있지 않습니다. 대개 제조사가 Zigbee Smart Energy용 별도의 Zigbee 프로토콜 스택 SDK를 제공하기 때문입니다.

## 네트워크가 불안정하거나 성능이 저하되면 어떻게 해야 하나요?

- 연결이 불량하거나 불안정한 Zigbee 기기를 재시작해 보세요. coordinator를 다른 위치로 이동한 경우 라우팅 경로가 유실될 수 있습니다.
- [네트워크 범위 및 안정성 향상하기](../../advanced/zigbee/02_improve_network_range_and_stability.md)를 참고하세요.

## 기기가 페어링되지 않거나 페어링에 실패하는 이유는 무엇인가요?

이 문제는 두 가지 경우로 나눌 수 있습니다: 로그가 전혀 표시되지 않는 경우 또는 인터뷰가 실패하는 경우입니다.

### 로그가 전혀 표시되지 않는 경우

- [참가(joining)가 활성화되어 있는지](../usage/pairing_devices.md) 확인하세요.
- 간섭이 너무 많을 수 있습니다. coordinator USB를 USB 연장 케이블로 연결해 보세요. 이 문제는 Raspberry Pi 3, 4와 함께 사용할 때 자주 발생합니다.
- Texas Instruments CC2652 또는 CC1352 기반 adapter를 사용 중인 경우, coordinator 메모리에서 router가 누락되었을 수 있습니다. [coordinator 점검](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-coordinator-check)을 실행하고 누락된 router를 다시 페어링하세요.
- Raspberry Pi를 사용 중이라면 다른 USB 기기를 모두 분리해 보세요. 그 후 페어링이 작동하면, 해당 USB 기기를 전원이 공급되는 USB 허브를 통해 연결해 보세요.
- 다른 Zigbee 네트워크/허브의 전원이 꺼져 있는지 확인하세요. 예를 들어 IKEA gateway에 먼저 페어링된 IKEA 전구를 페어링하려는 경우 IKEA gateway의 전원을 끄세요. 그래도 해결되지 않으면 IKEA 허브에 연결된 모든 기기의 전원도 꺼 보세요.
- 배터리로 구동되는 기기라면 배터리를 교체해 보세요.
- coordinator의 기기 한도에 도달했을 수 있습니다. 특히 소스 라우팅 펌웨어와 함께 CC2531 또는 CC2530을 사용할 때 자주 발생합니다. coordinator를 다시 플래시하고 Zigbee2MQTT 시작 직후 기기를 페어링해 보세요.
- coordinator에 더 가까운 위치에서 기기를 페어링해 보세요.
- CC2531/CC2530 coordinator 전용:
    - Zigbee2MQTT를 중지하고, coordinator를 분리한 후 10초 대기, coordinator를 다시 연결하고, Zigbee2MQTT를 시작한 뒤 다시 페어링을 시도하세요.
    - 위의 방법으로 해결되지 않으면 coordinator를 다시 플래시해 보세요(이미 페어링된 기기는 다시 페어링할 필요가 없습니다).

### 인터뷰 실패

- coordinator에 더 가까운 위치에서 기기를 페어링해 보세요.
- 간섭이 너무 많을 수 있습니다. coordinator USB를 USB 연장 케이블로 연결해 보세요. 이 문제는 Raspberry Pi 4와 함께 사용할 때 자주 발생합니다.
- 배터리로 구동되는 기기라면 배터리를 교체해 보세요. 기기에 버튼이 있다면 3초마다 버튼을 눌러 기기가 깨어있는 상태를 유지해 보세요.
- 기기를 2~3회 다시 페어링해 보세요.
- Zigbee2MQTT의 버그일 수 있습니다. 디버그 로그를 첨부하여 [새 이슈를 생성](https://github.com/Koenkk/zigbee2mqtt/issues/new)해 주세요. [디버그 로깅 활성화 방법](../configuration/logging.md#debugging).
- 기기가 `ieeeAddress`가 `0x000000000000000`인 상태로 참가하는 경우(Zigbee2MQTT 로그에 `Starting interview of '0x0000000000000000'`이 표시됨) CC253X가 고장났을 수 있습니다. [이슈 #2761 참고](https://github.com/Koenkk/zigbee2mqtt/issues/2761).
- 기기가 전구인 경우 [Touchlink](../usage/touchlink.md)를 통해 초기화를 시도해 보세요.
- coordinator가 아닌 전구(조명) router 가까이에서 페어링해 보세요.

## 다른 adapter로 마이그레이션하는 방법은 무엇인가요?

예를 들어 CC2530/CC2531에서 더 강력한 adapter(예: CC2652/CC1352)로 마이그레이션하려는 경우 아래 안내를 따르세요:

::: warning
한 adapter에서 다른 adapter로의 마이그레이션은 백업 및 복원 지원이 필요하며, 현재 `zstack`(Texas Instrument)과 `ember` adapter에서만 구현되어 있습니다. 다른 adapter(`conbee`, `ezsp`, `zboss`, `zigate`)는 백업 및 복원이 **지원되지 않습니다**. 다만 [이 방법](https://github.com/Koenkk/zigbee2mqtt/discussions/26716)으로 성공할 수도 있습니다.

`zstack` -> `ember` 또는 `ember` -> `zstack`으로 전환할 때 다시 페어링이 **필요하지 않을 수도** 있지만, 공식적으로 지원되지 않으므로 결과는 다를 수 있습니다. 전환 후 모든 기기가 정상 동작하는지 확인하고, 동작하지 않는 기기는 다시 페어링하세요. 새 기기 페어링이 작동하지 않는 경우, coordinator를 통해서만 참가를 허용하면서 coordinator 근처의 router 일부를 다시 페어링하세요. 그 후 다시 페어링된 router를 통해 페어링이 작동해야 합니다.
:::

1. 최신 버전의 Zigbee2MQTT를 실행 중인지 확인하세요.
1. Zigbee2MQTT를 중지하세요.
1. 마이그레이션 시 [기기를 다시 페어링해야 하는지 여부를 확인하세요](#what-does-and-does-not-require-re-pairing-of-all-devices).
    - 다시 페어링이 필요한 경우: `data/coordinator_backup.json`(있는 경우)과 `data/database.db`를 삭제하세요(Home Assistant 애드온으로 실행 중인 경우 `data/`는 `zigbee2mqtt/`로 이름이 변경되어 있습니다).
    - 다시 페어링이 **필요하지 않은** 경우: [이전 adapter의 ieee 주소를 새 adapter에 복사하세요](../adapters/flashing/copy_ieeaddr.html).
1. `configuration.yaml`에서 `serial` -> `port`를 업데이트하세요.
    - 이전 adapter에서 마이그레이션하는 경우(예: zbt-1 -> zbt2) `baud`도 업데이트해야 할 수 있습니다.
1. Zigbee2MQTT를 시작하세요.

- 다시 페어링이 필요한 경우:
    1. 전원이 공급되는 모든 기기의 전원을 차단하세요.
    1. 기기를 하나씩 다시 페어링하세요.
- 다시 페어링이 **필요하지 않은** 경우에도 기기가 응답하지 않으면, 전원에서 몇 초간 분리했다가 다시 연결하여 일부 router를 재시작하세요.

## Zigbee2MQTT 인스턴스를 다른 환경으로 이동하는 방법은 무엇인가요?

네트워크 정보는 coordinator와 `data/` 디렉토리 아래의 파일에 모두 저장됩니다(Home Assistant 애드온으로 실행 중인 경우 `data/`는 `zigbee2mqtt/`로 이름이 변경되어 있습니다).
인스턴스를 다른 환경으로 이동하려면 `data` 디렉토리의 내용을 복사하고 `configuration.yaml`에서 coordinator 경로를 업데이트하세요. 그런 다음 Zigbee2MQTT를 시작할 수 있습니다.

## 모든 기기를 다시 페어링해야 하는 경우와 그렇지 않은 경우

### 다시 페어링이 필요한 경우

다음과 같은 경우 모든 기기를 다시 페어링해야 합니다:

- `configuration.yaml`에서 network key(`network_key`) 또는 panID(`pan_id`)를 변경하는 경우.
- `configuration.yaml`에서 Zigbee channel(`channel`)을 변경하면 **일부** 기기의 다시 페어링이 필요할 수 있습니다. 자세한 내용은 [문서](../configuration/zigbee-network.md#changing-the-zigbee-channel)를 참고하세요.
- adapter 전환 시 다시 페어링이 필요합니다. **다음 경우는 예외**입니다:
    - `configuration.yaml`의 `serial.adapter`가 `zstack` 또는 `ember`이고 `serial.adapter` 타입이 동일하게 유지되는 경우(예: `zstack` -> `zstack`은 다시 페어링이 **필요하지 않습니다**).
        - 예외적으로, CC2531 또는 CC2530(Z-Stack 1.2)에서 CC2652/CC1352(Z-Stack 3)로 전환하는 경우 다시 페어링이 **필요합니다**.
    - `zstack` -> `ember` 또는 `ember` -> `zstack`으로 전환할 때 다시 페어링이 **필요하지 않을 수도** 있지만, 공식적으로 지원되지 않으므로 결과는 다를 수 있습니다.
        - 전환 후 모든 기기가 정상 동작하는지 확인하고, 동작하지 않는 기기는 다시 페어링하세요. 새 기기 페어링이 작동하지 않는 경우, coordinator를 통해서만 참가를 허용하면서 coordinator 근처의 router 일부를 다시 페어링하세요. 그 후 다시 페어링된 router를 통해 페어링이 작동해야 합니다.

### 다시 페어링이 필요하지 않은 경우

다음과 같은 경우 기기를 다시 페어링할 **필요가 없습니다**:

- Zigbee2MQTT를 다른 버전으로 업데이트하거나 다운그레이드하는 경우.
- coordinator 펌웨어를 업데이트하는 경우.
    - 플래싱 후 기기를 제어할 수 없는 경우 다음을 시도해 보세요:
        - Zigbee 네트워크가 안정화될 수 있도록 몇 분 기다리세요.
        - 기기에 Zigbee 명령(예: 켜기/끄기)을 보내세요.
        - 기기를 재부팅하세요(전원을 뽑았다가 다시 꽂으세요).
- Zigbee2MQTT를 실행하는 시스템을 교체하는 경우.
    - 이 경우 `data` 디렉토리의 내용을 반드시 복사해야 합니다.

## 네트워크 맵에서 일부 링크가 누락되는 이유는 무엇인가요?

걱정하지 마세요. end device(배터리 구동)에서 이런 현상이 발생하는 경우 대부분은 해당 기기가 네트워크 맵에서 더 이상 연결되지 않는다는 의미가 **아닙니다**.
일부 end device(예: Xiaomi 도어 센서)는 너무 오랫동안 절전 모드로 진입하여, 부모(router)가 child ageing으로 인해 child 테이블에서 해당 기기를 제거하는 경우가 있습니다. 이것이 링크가 누락되는 원인입니다. child 테이블에 없더라도 end device는 router를 통해 통신할 수 있습니다. 모든 router가 child ageing을 사용하는 것은 아니기 때문에(Zigbee 3.0 기능) 항상 이런 현상이 발생하는 것은 아닙니다.

## RSSI 및 LQI 값은 어떻게 해석하나요?

네트워크 맵은 페어링된 기기 간의 멀티홉 연결과 수신 신호 강도 지표(RSSI, Received Signal Strength Indicator) 및 링크 품질 지표(LQI, Link Quality Indication)의 누적 보고 값을 표시합니다. 이 값들이 보고되는 방식은 각 기기에서 사용하는 Zigbee 네트워크 스택에 따라 다릅니다. LQI 값은 메시지가 mesh 네트워킹 매트릭스를 통해 전파될 때 각 단계에서 수정될 수 있습니다.

RSSI 및 LQI 값 해석은 복잡합니다. Zigbee 전문가가 아니거나 전문가의 안내를 받지 않는 한 이 값들은 무시하는 것을 권장합니다. 오해를 불러일으킬 수 있습니다. 이 값들을 분석할 때 RSSI나 LQI를 단독으로 판단하지 않는 것이 중요합니다. Zigbee 메시지가 누락되는 문제를 해결할 때는 RSSI와 LQI의 조합을 함께 해석해야 합니다.

RSSI(수신 신호 강도 지표) 값은 두 기기 사이의 원시 신호 강도를 나타내는 지표입니다. RSSI 값은 -dBm 형식의 음수(1밀리와트 기준 측정 전력의 0~-100 데시벨 전력 비율)입니다. 낮은 음수 값일수록 간섭이 적고 신호가 좋다는 것을 의미합니다. RSSI 정보는 endpoint 기기와 해당 기기의 첫 번째 홉 사이에서만 측정됩니다. 따라서 Zigbee Coordinator까지의 신호 강도가 아닌 가장 가까운 Zigbee Router 기기까지의 신호 강도를 나타낼 수 있습니다.

- 일반적으로 RSSI가 -60 이상(-50, -40 등)이면 강한 신호(메시지 손실 없음)로 간주합니다.
- RSSI가 -80 이하(-85, -90 등)이면 잡음이 많은 환경으로 간주하며 메시지 손실이 발생할 수 있습니다.

LQI(링크 품질 지수) 값은 Zigbee에서 해석하기 어려울 수 있습니다. Zigbee 사양과 IEEE 802.15.4 사양이 LQI 측정 방법을 표준화하지 않기 때문입니다. LQI 값은 양수 척도로 표시됩니다. 그러나 Zigbee 기기가 제공하는 값이 모든 기기 제조사와 Zigbee 스택에서 통일된 표준으로 측정되지 않기 때문에 항상 신뢰할 수는 없습니다. 예를 들어 Silicon Labs EmberZNet 스택 기반 Zigbee 기기는 LQI에 양수 표시 값을 사용하며 높을수록 좋고 낮을수록 나쁩니다. Texas Instruments Z-Stack은 수신한 각 패킷의 LQI를 원시 "수신 신호 강도 지수"(RSSI)로부터 라디오의 최소/최대 RF 전력 수준 사이를 선형 스케일링하여 계산하며, 이는 수신 신호 강도에 기반한 LQI 값을 제공합니다. 이는 동일한 주파수 범위 내에 간섭이 있는 잡음 환경(실제 링크 품질이 저하되더라도 RSSI 값이 높게 표시될 수 있음)에서 오해를 불러일으킬 수 있습니다. 다른 제조사와 Zigbee 스택은 또 다른 방식으로 LQI 값을 측정하고 계산합니다.

- 이론적으로 LQI 값이 255이면 오류율이 0임을 의미하며, 완벽한 링크 품질을 나타냅니다.
- 일반적으로 LQI 값이 높을수록 좋고 낮을수록 나쁩니다. 다만 기기에 따라 현실은 다를 수 있습니다.
- 일반적으로 기기의 LQI 값이 40 이상을 유지하면 정상적인 운영 조건에서 해당 링크가 허용 가능한 수준이라고 볼 수 있습니다.

## `action` 속성이 항상 비어 있는 이유는 무엇인가요?

Home Assistant 레거시 action 센서가 활성화된 경우(`configuration.yaml`에서 `homeassistant.legacy_action_sensor: true`) 버튼 등의 `action` 속성은 거의 항상 비어 있습니다. `{"action": "single"}`과 같이 `action`이 게시되면 즉시 `{"action": ""}`이 뒤따릅니다. 이는 Home Assistant action 센서에서 상태 변화를 트리거하기 위한 것입니다(예: 자동화에서 사용할 수 있도록).

## Zigbee2MQTT는 기기를 20개까지만 지원한다고 하던데(CC2530/CC2531 adapter 사용 시), 맞나요?

전혀 그렇지 않습니다! 예를 들어, 기본 Zigbee2MQTT CC2531 펌웨어는 coordinator에 **직접** 연결된 20개의 기기를 지원합니다. 그러나 네트워크에 router가 있으면 네트워크 크기를 확장할 수 있습니다. AC 전원으로 구동되는 기기(예: 전구)는 거의 모두 router 역할을 하며, 다른 [CC2530/CC2531을 router로](../../advanced/zigbee/05_create_a_cc2530_router.md) 사용할 수도 있습니다(최대 21개 기기 지원).

### 예시

기본 Zigbee2MQTT CC2531 coordinator 펌웨어 + CC2531 router 2개를 사용하는 경우 기기 한도는 다음과 같습니다:

- Coordinator: 15 - 2개 router = 13
- Router 1: 21
- Router 2: 21
- **기기 한도: 55개**

## 일반적인 오류 코드

일반적인 오류 코드 목록과 해결 방법:

- `MAC_CHANNEL_ACCESS_FAILURE`: 무선 주파수 대역이 너무 혼잡할 때 발생합니다. 주로 전자레인지가 켜져 있거나 동일한 채널에 WiFi 네트워크가 있을 때 발생합니다. 해결 방법은 [Zigbee 채널 변경으로 WiFi 간섭 줄이기](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wifi-interference-by-changing-the-zigbee-channel)를 참고하세요.
- `NWK_TABLE_FULL`: 위의 `MAC_CHANNEL_ACCESS_FAILURE`와 동일한 원인으로 [보고된](https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560) 오류입니다.

## Zigbee2MQTT를 여러 인스턴스로 실행하는 방법은 무엇인가요?

여러 Zigbee2MQTT 인스턴스를 설정하는 경우 서로 다른 `base_topic`과 `channel`을 사용하는 것이 중요합니다. [`configuration.yaml`](../configuration/README.md)에서 설정할 수 있습니다.

## Zigbee2MQTT가 일정 시간 후 충돌합니다

Zigbee2MQTT가 일정 시간 실행 후 `SRSP - AF - dataRequest after 6000ms` 또는 `SRSP - ZDO - mgmtPermitJoinReq after 6000ms`와 같은 오류로 충돌하면 adapter가 충돌한 것입니다.

- 일반적으로 adapter를 다시 연결하고 Zigbee2MQTT를 재시작하면 해결됩니다.
- CC2530 또는 CC2531 adapter를 사용 중이라면 [권장 adapter](../adapters/README.md)로 업그레이드를 고려하세요. CC2530/CC2531은 레거시 하드웨어로 메모리 손상이 쉽게 발생합니다.
- adapter에 최신 펌웨어를 사용하고 있는지 확인하세요. 최신 펌웨어 링크는 [adapter 페이지](../adapters/README.md)를 참고하세요.
- Raspberry Pi를 사용 중인 경우, 불량 전원 공급 장치를 사용하거나 다른 USB 기기를 Pi에 직접 연결할 때(특히 외장 SSD) 이 문제가 발생할 수 있습니다. 다른 USB 기기를 전원이 공급되는 USB 허브를 통해 연결해 보세요.
- USB autosuspend 기능을 비활성화하세요. `cat /sys/module/usbcore/parameters/autosuspend` 명령이 `1` 또는 `2`를 반환하면 활성화된 것입니다. 비활성화하려면 다음을 실행하세요:

    ```bash
    sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT="/&usbcore.autosuspend=-1 /' /etc/default/grub
    update-grub
    systemctl reboot
    ```

    - Raspberry Pi의 경우 `/boot/cmdline.txt`를 편집하여 줄 끝에 `usbcore.autosuspend=-1`을 추가해야 합니다.
