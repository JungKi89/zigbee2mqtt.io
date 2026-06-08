---
title: "Sunricher SR-ZG9001K12-DIM-Z4 control via MQTT"
description: "Integrate your Sunricher SR-ZG9001K12-DIM-Z4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9001K12-DIM-Z4

|     |     |
|-----|-----|
| Model | SR-ZG9001K12-DIM-Z4  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | 4 zone remote and dimmer |
| Exposes | battery, action |
| Picture | ![Sunricher SR-ZG9001K12-DIM-Z4](https://www.zigbee2mqtt.io/images/devices/SR-ZG9001K12-DIM-Z4.png) |
| White-label | RGB Genie ZGRC-KEY-013 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
리모컨의 All On 버튼을 상태 LED가 켜질 때까지 누르고 있습니다. 그런 다음 즉시 All Off 버튼을 누릅니다. 상태 LED가 5번 빠르게 깜빡이면 페어링 성공입니다.

### 초기화
리모컨의 All On 버튼을 상태 LED가 켜질 때까지 누르고 있습니다. 그런 다음 즉시 All On 버튼을 5번 누릅니다. 상태 LED가 3번 깜빡이면 초기화 성공입니다.


### 더 이상 사용되지 않는 click 이벤트
기본적으로 이 기기는 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 대해 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```
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
The possible values are: `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `on`, `off`, `recall_*`.

