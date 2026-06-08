---
sidebarDepth: 1
redirectFrom: /information/binding.md
---

# Binding

Zigbee는 binding을 지원하여 Zigbee2MQTT나 홈 오토메이션 소프트웨어의 개입 없이 기기가 서로 직접 제어할 수 있게 합니다.

## 언제 사용해야 하나요

binding의 사용 사례로는 예를 들어 TRADFRI wireless dimmer가 있습니다. dimmer를 전구 또는 그룹에 직접 binding하면 다음과 같은 장점이 있습니다:

- **부드러움:** 전구를 직접 제어하여 디밍 피드백을 개선하고, MQTT/홈 오토메이션 소프트웨어 왕복에 대한 필요성을 줄입니다.
- **안정성:** 홈 오토메이션 소프트웨어, Zigbee2MQTT 또는 코디네이터가 다운되어도 작동합니다.

## 명령어

::: tip
아래 모든 명령어는 프론트엔드에서도 실행할 수 있습니다. 기기를 클릭하고 _Bind_ 탭으로 이동하세요.
:::

Binding은 `zigbee2mqtt/bridge/request/device/bind`를 사용하여 bind하고, `zigbee2mqtt/bridge/request/device/unbind`를 사용하여 unbind할 수 있습니다. 페이로드는 `{"from": SOURCE, "to": TARGET}`이어야 하며, `SOURCE`와 `TARGET`은 그룹 또는 기기의 `friendly_name`일 수 있습니다. 요청 페이로드 예시: `{"from": "my_remote", "to": "my_bulb"}`, 응답 페이로드 예시: `{"data":{"from":"my_remote","from_endpoint":"default","to":"my_bulb","clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`. 응답의 `clusters`는 bind/unbind된 클러스터를 나타내고, `failed`는 bind/unbind에 실패한 클러스터를 나타냅니다. 모든 클러스터 bind에 실패하면 `status`는 `error`로 설정됩니다.

기본적으로 지원되는 모든 클러스터가 bind됩니다. bind/unbind할 클러스터를 제한하려면 요청 페이로드에 `clusters`를 추가하세요. 예: `{"from": "my_remote", "to": "my_bulb", "clusters": ["genOnOff"]}`. 가능한 클러스터는 `genScenes`, `genOnOff`, `genLevelCtrl`, `lightingColorCtrl`, `closuresWindowCovering`입니다.

binding 시 대상 기기에 리포팅이 설정됩니다. 이로 인해 bind 소스에 의해 상태가 변경될 때 대상 기기가 상태를 업데이트합니다. unbinding 시 이 리포팅은 다시 제거됩니다. 이를 건너뛰려면 `skip_disable_reporting`을 사용하세요(예: `{"from": "my_remote", "to": "my_bulb", "skip_disable_reporting": true}`).

배터리 구동 기기의 binding/unbinding이 실패하는 경우, 대부분 기기가 절전 상태이기 때문입니다. MQTT 메시지를 전송하기 바로 전에 리모컨 버튼을 눌러 기기를 깨울 수 있습니다.

위의 예시에서 TRADFRI wireless dimmer가 `SOURCE` 기기이고 전구가 `TARGET` 기기입니다. 그룹을 대상으로 사용할 때는 그룹의 friendly_name을 사용해야 하며, 그룹 ID는 작동하지 않습니다.

### 특정 엔드포인트에 binding

**대부분의 사용자에게는 해당되지 않습니다**

기본 엔드포인트 대신 특정 엔드포인트에 bind하려면 페이로드 `{"from": SOURCE, "from_endpoint": SOURCE_ENDPOINT, "to": TARGET, "to_endpoint": TARGET_ENDPOINT}`를 지정하세요. `SOURCE_ENDPOINT`와 `TARGET_ENDPOINT`는 원하는 엔드포인트 ID 또는 이름입니다. 요청 페이로드 예시: `{"from": "my_remote", "from_endpoint": "top", "to": "my_bulb", "to_endpoint": 3}`, 응답 페이로드 예시: `{"data":{"from":"my_remote","from_endpoint":"top","to":"my_bulb","to_endpoint":3,"clusters":["genScenes","genOnOff","genLevelCtrl"],"failed":[]},"status":"ok"}`

`SOURCE_ENDPOINT`와 `TARGET_ENDPOINT`는 선택사항입니다. `SOURCE_ENDPOINT`를 지정하지 않으면 `SOURCE` 기기의 기본 엔드포인트가 사용됩니다. `TARGET_ENDPOINT`도 마찬가지이나, `TARGET`이 기기일 때만 사용됩니다.

::: tip
기기의 기본 엔드포인트는 첫 번째 등록된 엔드포인트입니다(대부분 엔드포인트 ID 1).
:::

### 리모컨을 그룹에 binding

리모컨을 그룹에 binding하면 Zigbee2MQTT의 개입 없이 리모컨이 기기 그룹을 직접 제어할 수 있습니다.

예를 들어 `my_remote`라는 IKEA E1743 리모컨과 `bulb_1`, `bulb_2`라는 두 개의 전구가 있을 때, 두 전구를 같은 그룹에 넣고 리모컨을 해당 그룹에 binding하면 리모컨으로 두 전구를 제어할 수 있습니다.

이를 위해 다음 단계를 수행하세요:

1. `configuration.yaml`에 새 그룹을 만들고 `friendly_name`을 지정하세요([그룹(Groups)](./groups.md) 참조). 이 예시에서는 `friendly_name`을 `my_group`으로 설정합니다.
2. 다음 두 MQTT 메시지를 전송하여 두 전구를 그룹에 추가합니다.
    - `zigbee2mqtt/bridge/request/group/members/add`에 페이로드 `{"group":"my_group","device":"bulb_1"}`
    - `zigbee2mqtt/bridge/request/group/members/add`에 페이로드 `{"group":"my_group","device":"bulb_2"}`
3. 다음 MQTT 메시지를 전송하여 리모컨을 그룹에 binding합니다.
    - `zigbee2mqtt/bridge/request/device/bind`에 페이로드 `{"from": "my_remote", "to": "my_group"}`

### Binding 해제 (Clearing bindings)

`zigbee2mqtt/bridge/request/device/binds/clear`를 사용하여 binding을 전체 또는 선택적으로 해제할 수 있습니다.

모든 binding을 해제하려면 예를 들어 `{"target": "my_device"}` 페이로드로 topic을 전송하세요.

IEEE 주소로 선택적 binding 해제는 예를 들어 `{"target": "my_deivce", "ieee_list": ["0xa1a2a3a4a5a6a7a8", "0xb1b2b3b4b5b6b7b8"]}` 페이로드로 topic을 전송하세요.

::: tip
Binding을 해제하면 요청/응답에 따라 Zigbee2MQTT가 내부적으로 사용하는 캐시 데이터가 자동으로 업데이트됩니다. 이 요청이 성공적으로 실행된 후 Zigbee2MQTT의 binding은 기기의 실제 binding을 반영해야 합니다.
:::

## 기기

모든 기기가 이를 지원하지는 않으며, 기본적으로 기기 자체의 Zigbee 구현에 달려 있습니다. 자세한 내용은 기기별 페이지(지원 기기 페이지를 통해 접근 가능)를 확인하세요.

## 상태 변경

기기에 binding이 설정되면 Zigbee2MQTT가 해당 기기에 대한 리포팅을 자동으로 구성합니다. 이로 인해 bound 기기를 통해 상태가 변경될 때 기기가 상태 변경을 보고합니다.

이 기능이 작동하려면 기기가 이를 지원해야 합니다. 같은 제조사의 기기는 (대부분) 동일한 기능을 갖고 있으므로, 아래 표가 기기의 지원 여부를 파악하는 데 도움이 될 것입니다.

| 브랜드              | 켜기/끄기 | 밝기 | 색상 | 색온도 | 색상 모드 |
| :------------------ | :-------: | :--: | :--: | :----: | :-------: |
| Philips Hue (구형)  |    N¹     |  N²  |  N   |   N    |     N     |
| Philips Hue (신형³) |     Y     |  Y   |  Y   |   Y    |     N     |
| IKEA                |     Y     |  Y   |  Y   |   Y    |     Y     |
| Innr                |     Y     |  Y   |  Y   |   Y    |     Y     |
| GLEDOPTO            |     N     |  N   |  N   |   N    |     N     |
| OSRAM               |     Y     |  Y   |  N   |   N    |     Y     |
| Müller Licht        |     N     |  N   |  N   |   N    |     Y     |

1. 구형 펌웨어(날짜 20170908 이하)의 전구는 켜기/끄기를 보고합니다.
2. binding이 전구를 업데이트하면 Zigbee2MQTT가 수동으로 변경 사항을 폴링합니다.
3. 2019년경부터 출시된 램프 및 전구

기기가 리포팅을 **지원하지 않는** 경우, 기기를 그룹에 추가하고 리모컨을 기기에 직접 binding하는 대신 그룹에 binding하세요. 이렇게 하면 bound 리모컨이 기기를 제어할 때 Zigbee2MQTT가 기기를 폴링하여 업데이트를 확인합니다. 트래픽을 최소화하기 위해 모든 기기에 대해 활성화되지 않았습니다. 작동하지 않는 경우 [여기](https://github.com/Koenkk/zigbee2mqtt/issues)에 이슈를 생성해 주세요.

unbinding 시 기기 또는 기기가 속한 그룹에 binding이 없으면, `genOnOff`, `genLevelCtrl`, `lightingColorCtrl`, `closuresWindowCovering` 클러스터의 수동 설정 리포팅이 제거됩니다. 이러한 리포팅을 다시 설정해야 합니다.
