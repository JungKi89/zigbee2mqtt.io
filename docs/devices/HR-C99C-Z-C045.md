---
title: "ADEO HR-C99C-Z-C045 control via MQTT"
description: "Integrate your ADEO HR-C99C-Z-C045 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-06T20:18:53Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ADEO HR-C99C-Z-C045

|     |     |
|-----|-----|
| Model | HR-C99C-Z-C045  |
| Vendor  | [ADEO](/supported-devices/#v=ADEO)  |
| Description | RGB CTT LEXMAN ENKI remote control |
| Exposes | battery, action |
| Picture | ![ADEO HR-C99C-Z-C045](https://www.zigbee2mqtt.io/images/devices/HR-C99C-Z-C045.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
리모컨 뒷면에 있는 작은 리셋 버튼을 3초간 누르고 있으면(앞면 LED가 깜박일 때까지) 기기가 초기화되고 네트워크 참가를 시도합니다.

### 원형 버튼이 생성하는 동작
가운데 원형 버튼 클릭이 다음을 전환하는 방식이라는 점을 알아두는 것이 중요합니다:
`color_saturation_step_down` 과 `color_temperature_step_up` (원형 버튼 아래쪽)
`color_saturation_step_up` 과 `color_temperature_step_down` (원형 버튼 위쪽)
`color_hue_step_down` 과 없음 (원형 버튼 왼쪽)
`color_hue_step_up` 과 없음 (원형 버튼 오른쪽)
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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `scene_1`, `scene_2`, `scene_3`, `scene_4`, `color_saturation_step_up`, `color_saturation_step_down`, `color_stop`, `color_hue_step_up`, `color_hue_step_down`, `color_temperature_step_up`, `color_temperature_step_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`.

