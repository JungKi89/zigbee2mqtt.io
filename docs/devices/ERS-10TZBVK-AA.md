---
title: "Tuya ERS-10TZBVK-AA control via MQTT"
description: "Integrate your Tuya ERS-10TZBVK-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ERS-10TZBVK-AA

|     |     |
|-----|-----|
| Model | ERS-10TZBVK-AA  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart knob |
| Exposes | action_brightness_delta, action_step_size, action_color_temperature_delta, action_transition_time, action_rate, battery, operation_mode, action |
| Picture | ![Tuya ERS-10TZBVK-AA](https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVK-AA.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
초록 LED가 깜빡일 때까지 뒷면의 리셋 버튼을 누르세요.

> 참고: 리셋 버튼을 놓은 후 기기가 페어링될 때까지 초록 LED가 계속 깜빡여야 합니다. 몇 번만 깜빡이다가 멈추면 배터리 잔량이 너무 낮은 것(<3V)이므로 배터리를 교체해야 합니다.

### `toggle` 액션이 예상치 못한 Zigbee 기기를 켜고 끔
문제의 원인은 노브 제조사와 다른 기기가 기본적으로 그룹 0에 배치되어 있기 때문입니다. 이를 해결하려면 Z2M에서 다른 ID (예: ID=1)로 그룹을 수동으로 생성하고 노브를 추가하세요.
자세한 내용은 [이 이슈](https://github.com/Koenkk/zigbee2mqtt/issues/12397)를 참조하세요.

### 기기 작동
기기는 두 가지 모드로 설정 가능합니다: COMMAND와 EVENT (현재 모드는 operation_mode 속성에 게시됨). 세 번 누르기는 펌웨어에 따라 다를 수 있으며 (액션 없음) COMMAND와 EVENT 모드 간에 전환됩니다.

- `COMMAND` 모드

| 사용자 동작 | `action` 속성 |
| ------------- | ------------- |
| 왼쪽 회전 | brightness_step_down|
| 오른쪽 회전 | brightness_step_up|
| 한 번 클릭 | toggle|
| 누름+길게 누르기 > 3초 | hue_move|
| 놓기 | hue_stop|
| 누름+길게 누르기 + 왼쪽 회전 | color_temperature_step_down|
| 누름+길게 누르기 + 오른쪽 회전 | color_temperature_step_up|

Action_Step_Size = %숫자값 (0_255)
Action_Rate = 항상 "값 없음" 유지
- `EVENT` 모드

| 사용자 동작 | `action` 속성 |
|--------------| ------------- |
| 왼쪽 회전 | rotate_left |
| 오른쪽 회전 | rotate_right |
| 한 번 클릭 | single |
| 두 번 클릭 | double |
| 길게 누르기 | hold |

action_step_size, action_transition_time, action_rate는 여전히 존재하지만 "값 없음"으로 표시됩니다
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Action brightness delta (numeric)
Value can be found in the published state on the `action_brightness_delta` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-255` and the maximum value is `255`.

### Action step size (numeric)
Value can be found in the published state on the `action_step_size` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Action color temperature delta (numeric)
Value can be found in the published state on the `action_color_temperature_delta` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-65535` and the maximum value is `65535`.

### Action transition time (numeric)
Value can be found in the published state on the `action_transition_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Action rate (numeric)
Value can be found in the published state on the `action_rate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Operation mode (enum)
Operation mode: "command" - for group control, "event" - for clicks.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `toggle`, `brightness_step_up`, `brightness_step_down`, `color_temperature_step_up`, `color_temperature_step_down`, `saturation_move`, `hue_move`, `hue_stop`, `single`, `double`, `hold`, `rotate_left`, `rotate_right`.

