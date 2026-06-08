---
title: "MiBoxer FUT089Z control via MQTT"
description: "Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-04-30T08:00:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MiBoxer FUT089Z

|     |     |
|-----|-----|
| Model | FUT089Z  |
| Vendor  | [MiBoxer](/supported-devices/#v=MiBoxer)  |
| Description | RGB+CCT Remote |
| Exposes | battery, voltage, action |
| Picture | ![MiBoxer FUT089Z](https://www.zigbee2mqtt.io/images/devices/FUT089Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기를 페어링하려면:
- Zigbee2MQTT에서 연결 허용
- 중앙 빨간 LED가 빠르게 깜빡이기 시작할 때까지 마스터 ON과 OFF 버튼을 동시에 누르고 있으세요


### 기기 동작

리모컨은 기본적으로 세 가지 센서 값을 보고합니다:
- `Battery` (%)
- `Voltage` (mV)
- `Linkquality` (lqi)

리모컨에는 7쌍의 번호가 매겨진 켜기/끄기 버튼이 있으며, 각 쌍은 별도의 구역을 제어합니다. 또한 상단에 구역 8 전용 `ON` 및 `OFF` 버튼으로 구성된 8번째 버튼 그룹이 있습니다.
각 구역은 특정 Zigbee 그룹에 해당합니다. 기본적으로 구역 1은 Zigbee 그룹 101, 구역 2는 102 등으로 매핑됩니다.
여러 MiBoxer FUT089Z 리모컨을 사용할 경우, 기본적으로 모두 같은 Zigbee 그룹(101-108)을 제어합니다.

버튼을 누르거나 슬라이더를 터치할 때마다 기기는 하나 또는 두 개의 연속 액션과 해당 그룹 ID를 전송합니다. 그룹 ID는 기기 상태와 함께 `action_group`으로 게시됩니다:

| 버튼 / 슬라이더 | 액션 | 그룹 ID  |
|-----------------|--------|-----------|
| 버튼 1-7 `I`  | `on`   | 101 - 107 |
| 버튼 1-7 `O`  | `off`  | 101 - 107 |
| `R`, `G`, `B` | `move_to_hue_and_saturation`, 이후 `brightness_move_to_level`  | 마지막으로 누른 켜기/끄기 버튼의 그룹 ID |
| `W` | `color_temperature_move`, 이후 `brightness_move_to_level` |마지막으로 누른 켜기/끄기 버튼의 그룹 ID |
| `ON` | `on` | 108 |
| `OFF` | `off` |108  |
| 색상 휠 |`move_to_hue_and_saturation`, 이후 `brightness_move_to_level` | 
| 밝기 슬라이더   | `brightness_move_to_level` | 마지막으로 누른 켜기/끄기 버튼의 그룹 ID |
| 색온도 / 채도 슬라이더  | 기기의 내부 상태에 따라 `move_to_hue_and_saturation` 또는 `color_temperature_move`, 이후 `brightness_move_to_level`. `move_to_hue_and_saturation` 상태는 색상 휠을 터치하거나 R, G, B 버튼 중 하나를 먼저 누르면 강제할 수 있습니다. `color_temperature_move`는 W 버튼을 먼저 누르면 강제할 수 있습니다. | 마지막으로 누른 켜기/끄기 버튼의 그룹 ID |
|`10S` / `30S Delay OFF` |10 / 30초 지연 후 `off` | 마지막으로 누른 켜기/끄기 버튼의 그룹 ID |

### 기기 설정

#### 제어 값 노출 

기본적으로 리모컨 제어에서 색조/채도/레벨 값은 노출되지 않습니다. 이 제어 값을 보이게 하려면 기기별 `expose_values` 옵션을 활성화하세요.

이 옵션은 최근 요청된 설정을 나타내는 네 가지 추가 값을 노출합니다:
- `level`: 밝기 레벨
- `color_temperature`: 색온도
- `hue`: 색조
- `saturation`: 채도

_(참고: 노출된 값이 즉시 나타나지 않으면 변경 사항이 적용되도록 Zigbee2MQTT를 재시작해야 할 수 있습니다)_

#### 구역 인식 액션
기기는 기본적으로 모든 구역에서 동일한 `on` / `off` / `move_to_hue_and_saturation` / `brightness_move_to_level` / `color_temperature_move` 액션을 전송하며, 구역의 그룹 ID는 기기 상태에서만 접근할 수 있습니다. 각 구역에 대한 별도 액션 전송을 활성화하려면 기기별 `zone_actions` 옵션을 활성화하세요.

활성화되면 각 액션에 해당 구역 ID가 포함됩니다:
- `on_zone_1`, `on_zone_2`, ...
- `off_zone_1`, `off_zone_2`, ...
- `move_to_hue_and_saturation_zone_1`, `move_to_hue_and_saturation_zone_2`, ...
- ...

#### 그룹 ID 변경

리모컨은 기본적으로 7쌍의 켜기/끄기 버튼에 그룹 ID 101-107을, 마스터 `ON`/`OFF` 버튼에 그룹 ID 108을 사용하도록 설정되어 있습니다. 따라서 다르게 설정하지 않는 한 네트워크의 모든 FUT089Z 기기가 같은 조명을 제어합니다.
이 동작을 사용자 정의하거나 기존 그룹 ID와의 충돌을 해결하려면 기기별 `zone_[0-8]_group_id` 옵션에 원하는 ID를 설정하여 기본 할당을 재정의할 수 있습니다.

새 그룹 ID 설정을 기기에 적용하려면 변경 후 임의의 버튼을 누르세요.

### 조명 및 스위치 제어

#### Home Assistant 자동화

기본적으로 Home Assistant `device` 트리거와 `state` 트리거를 모두 사용할 수 없습니다. 이는 리모컨의 비표준 통신 방식 때문입니다. 그러나 `mqtt` 트리거를 사용하여 기기의 메시지에 반응하고, 페이로드를 파싱한 후 Home Assistant 내에서 수행할 작업을 결정할 수 있습니다.

다음은 `MiBoxerRemote1`의 버튼 4로 `kitchen_light`를 제어하는 전체 기능 예시입니다: 

``` YAML
triggers:
  - topic: zigbee2mqtt/MiBoxerRemote1
    trigger: mqtt
conditions: []
actions:
  - variables:
      mylight: light.kitchen_light
      group: 104
  - if:
      - condition: template
        value_template: "{{ trigger.payload_json.action_group | int(0) == group | int(0) }}"
    then:
      - if:
          - condition: template
            value_template: "{{ trigger.payload_json.action.startswith('move_to_hue_and_saturation') }}"
        then:
          - action: light.turn_on
            data:
              hs_color:
                - "{{ trigger.payload_json.action_hue*360/254 }}"
                - "{{ (trigger.payload_json.action_saturation-170)/84*100 }}"
            target:
              entity_id: "{{ mylight }}"
      - if:
          - condition: template
            value_template: "{{ trigger.payload_json.action.startswith('brightness_move_to_level') }}"
        then:
          - action: light.turn_on
            data:
              brightness: "{{ trigger.payload_json.action_level }}"
            target:
              entity_id: "{{ mylight }}"
      - if:
          - condition: template
            value_template: "{{ trigger.payload_json.action.startswith('color_temperature_move') }}"
        then:
          - action: light.turn_on
            data:
              color_temp: "{{ trigger.payload_json.action_color_temperature }}"
            target:
              entity_id: "{{ mylight }}"
      - if:
          - condition: template
            value_template: "{{ trigger.payload_json.action.startswith('on') }}"
        then:
          - action: light.turn_on
            target:
              entity_id: "{{ mylight }}"
      - if:
          - condition: template
            value_template: "{{ trigger.payload_json.action.startswith('off') }}"
        then:
          - action: light.turn_off
            target:
              entity_id: "{{ mylight }}"
mode: single
```

`expose_values`와 `zone_actions` 옵션을 모두 활성화하면 자동화에 `device` 및 `state` 트리거도 사용할 수 있습니다 (Home Assistant에서 디바이스로 이동하여 자동화를 추가하면 자동으로 쉽게 생성할 수 있습니다):

켜기/끄기 버튼:

``` YAML
alias: MiBoxerRemote1_Button_Zone_8_On
description: ""
triggers:
  - trigger: device
    domain: mqtt
    device_id: 37c0de12e46bb817b3ed5dcae834feee
    type: action
    subtype: on_zone_8
condition: []
action:
  - service: light.turn_on
    data: {}
    target:
      device_id: 0887f3aa92fa71265fcb5f1d7021c2a7
mode: restart
```
밝기 슬라이더:  

``` YAML
alias: MiBoxerRemote1_BrightnessSlider
description: ""
triggers:
  - trigger: device
    domain: mqtt
    device_id: 37c0de12e46bb817b3ed5dcae834feee
    type: action
    subtype: brightness_move_to_level_zone_3
condition: []
action:
  - service: light.turn_on
    data:
      brightness: |
        {{ states("sensor.miboxerremote1_level") }}
      transition: 0.2
    target:
      device_id: 8984f2bd0c64baa8badb3fe895f7dd95
    enabled: true
mode: restart
```

#### Zigbee 그룹을 통한 직접 제어

위에서 설명한 방법의 대안으로, 또는 그 방법에 추가하여 이 리모컨으로 Zigbee 조명 등을 직접 제어할 수도 있습니다.

MQTT(및 Home Assistant 등)를 거치지 않고 조명이나 스마트 플러그를 직접 제어하려면:
- 먼저 올바른 ID(10X)로 Zigbee 그룹을 생성하고,
- 원하는 이름을 붙인 후,
- 제어하려는 기기를 해당 그룹에 추가합니다 (올바른 종단점을 사용하도록 주의하세요).
  매우 중요: 리모컨 자체는 그룹에 추가하지 마세요.

리모컨 상단의 `ON` 및 `OFF` 마스터 버튼은 그룹 ID 108의 추가 구역을 제어합니다.
예를 들어 마스터 스위치나 다른 조명/스마트 플러그로 사용할 수 있습니다.

이 방식의 장점은 Zigbee2MQTT가 다운되어도 리모컨이 작동한다는 것입니다. Zigbee 컨트롤러 없이도 작동합니다.
완벽한 비상 백업처럼 보입니다.


### 기술 참고사항

- 채도/색온도 슬라이더 제어는 아직 완전히 이해되지 않은 동작을 나타냅니다. 슬라이더는 기기의 내부 상태에 따라 채도와 색온도 값 전송을 번갈아 가며 수행합니다. `R`, `G`, `B` 버튼을 누르거나 색상 휠을 터치하면 "채도 모드"를 강제할 수 있으며, `W` 버튼을 누르면 "색온도 모드"가 강제됩니다. 켜기/끄기 버튼을 누르면 슬라이더가 기본 동작(채도 또는 색온도 모드 중 하나)으로 되돌아갑니다. 이 기본 동작을 변경하는 메커니즘은 아직 알려지지 않았습니다.  
- 대부분의 배터리 구동 기기와 마찬가지로, 이 리모컨은 초기 설정 후 Zigbee 명령을 지속적으로 수신하지 않습니다. 기기에 명령을 보낼 때(Leave, Configure 또는 그룹 ID 변경 등), 명령이 수신되도록 이후에 임의의 버튼을 누르세요.
- 리모컨은 조명 출력 클러스터 바인딩이나 수동 그룹 참여를 지원하지 않습니다 (내부 구역/그룹 매핑에만 의존합니다).

### Touchlink
리모컨은 Touchlink를 지원합니다. Touchlink 설정이 일반 그룹 설정과 어떻게 상호작용하는지 명확하지 않으므로, Touchlink를 사용하려면 네트워크에 페어링하지 않는 것이 좋습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `zone_1_group_id`: Group ID for zone 1 (default: 101). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_2_group_id`: Group ID for zone 2 (default: 102). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_3_group_id`: Group ID for zone 3 (default: 103). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_4_group_id`: Group ID for zone 4 (default: 104). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_5_group_id`: Group ID for zone 5 (default: 105). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_6_group_id`: Group ID for zone 6 (default: 106). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_7_group_id`: Group ID for zone 7 (default: 107). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `zone_8_group_id`: Group ID for zone 8 (default: 108). The value must be a number with a minimum value of `1` and with a maximum value of `65535`

* `expose_values`: Expose additional numeric values for action properties (hue, saturation, level, etc.). The value must be `true` or `false`

* `zone_actions`: Publish zone-specific actions with zone IDs (e.g., on_zone_1, off_zone_2). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_move_to_level`, `color_temperature_move`, `move_to_hue_and_saturation`.

