---
title: "iCasa ICZB-RM11S control via MQTT"
description: "Integrate your iCasa ICZB-RM11S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# iCasa ICZB-RM11S

|     |     |
|-----|-----|
| Model | ICZB-RM11S  |
| Vendor  | [iCasa](/supported-devices/#v=iCasa)  |
| Description | Zigbee 3.0 remote control |
| Exposes | battery, action, action_group |
| Picture | ![iCasa ICZB-RM11S](https://www.zigbee2mqtt.io/images/devices/ICZB-RM11S.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
리모컨의 All On 버튼을 상태 LED가 켜질 때까지 길게 누릅니다.
그런 다음 즉시 All Off 버튼을 누릅니다.
상태 LED가 5번 빠르게 깜박이면 페어링 성공을 나타냅니다.

### 초기화
리모컨의 All On 버튼을 상태 LED가 켜질 때까지 길게 누릅니다.
그런 다음 즉시 All On 버튼을 5번 누릅니다.
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
The possible values are: `recall_*`, `on`, `off`, `brightness_stop`, `brightness_move_up`, `brightness_move_down`.

### Action group (numeric)
Group where the action was triggered on.
Value can be found in the published state on the `action_group` property.
It's not possible to read (`/get`) or write (`/set`) this value.

