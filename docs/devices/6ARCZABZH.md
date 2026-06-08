---
title: "Leedarson 6ARCZABZH control via MQTT"
description: "Integrate your Leedarson 6ARCZABZH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-01-14T19:34:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Leedarson 6ARCZABZH

|     |     |
|-----|-----|
| Model | 6ARCZABZH  |
| Vendor  | [Leedarson](/supported-devices/#v=Leedarson)  |
| Description | 4-Key Remote Controller |
| Exposes | battery, action |
| Picture | ![Leedarson 6ARCZABZH](https://www.zigbee2mqtt.io/images/devices/6ARCZABZH.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 더 이상 사용되지 않는 click 이벤트
이 기기는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 대해 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```
<!-- Notes END: Do not edit below this line -->




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
The possible values are: `colortemp_up_release`, `colortemp_down_release`, `on`, `off`, `brightness_up`, `brightness_down`, `colortemp_up`, `colortemp_down`, `colortemp_up_hold`, `colortemp_down_hold`.

