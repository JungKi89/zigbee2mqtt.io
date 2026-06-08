---
title: "Moes ERS-10TZBVB-AA control via MQTT"
description: "Integrate your Moes ERS-10TZBVB-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:08:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ERS-10TZBVB-AA

|     |     |
|-----|-----|
| Model | ERS-10TZBVB-AA  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart button |
| Exposes | battery, operation_mode, action |
| Picture | ![Moes ERS-10TZBVB-AA](https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVB-AA.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

버튼을 세 번 누르면 작동 모드가 전환됩니다.
이는 수신된 페이로드 `{"action": null, "operation_mode": NEW_VALUE}`로 표시되며, 아래 각 섹션에 나열된 모드 간에 순환합니다.
모드에 따라 한 번 누르기, 두 번 누르기, 길게 누르기로 전송되는 액션이 다릅니다.

### 페어링

드라이버로 뒤 커버를 여세요. 초록 LED가 깜빡이기 시작할 때까지 리셋 버튼을 6초간 누르세요.
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
The possible values are: `single`, `double`, `hold`, `brightness_move_to_level`, `color_temperature_move`, `brightness_step_up`, `brightness_step_down`, `on`, `off`.

