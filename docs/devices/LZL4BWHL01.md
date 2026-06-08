---
title: "Lutron LZL4BWHL01 control via MQTT"
description: "Integrate your Lutron LZL4BWHL01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lutron LZL4BWHL01

|     |     |
|-----|-----|
| Model | LZL4BWHL01  |
| Vendor  | [Lutron](/supported-devices/#v=Lutron)  |
| Description | Connected bulb remote control |
| Exposes | action |
| Picture | ![Lutron LZL4BWHL01](https://www.zigbee2mqtt.io/images/devices/LZL4BWHL01.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
리모컨의 상단 버튼과 하단 버튼을 약 15초간 길게 눌러 Lutron Connected Bulb Remote를 공장 초기화합니다. 리모컨의 LED가 빠르게 깜빡이면 초기화가 완료된 것입니다.

초기화 후 상단 버튼을 약 2초간 길게 눌러 네트워크에 페어링할 수 있습니다.

#### Connected Bulb Remote를 사용하여 스마트 전구(Hue, Cree, GE Link) 초기화하기
Lutron Connected Bulb Remote로 스마트 전구를 초기화하려면, 리모컨을 전구 가까이(약 7~8cm)에 가져다 대고 리모컨의 2번째 버튼과 하단 버튼을 길게 누릅니다. 전구가 점멸하고 리모컨의 LED가 켜집니다. 리모컨의 LED가 꺼질 때까지 두 버튼을 계속 누르고 있으세요.

초기화 후 전구는 자동으로 네트워크 참여를 시도합니다.

이 방법은 Philips Hue 전구, IKEA TRADFRI 전구, GE Link 전구, Connected Cree 전구, EcoSmart SMART 전구에서 사용할 수 있습니다.
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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness_step_down`, `brightness_step_up`, `brightness_stop`, `brightness_move_to_level`.

