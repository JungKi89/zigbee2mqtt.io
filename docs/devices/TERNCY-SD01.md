---
title: "TERNCY TERNCY-SD01 control via MQTT"
description: "Integrate your TERNCY TERNCY-SD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-26T17:45:15Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TERNCY TERNCY-SD01

|     |     |
|-----|-----|
| Model | TERNCY-SD01  |
| Vendor  | [TERNCY](/supported-devices/#v=TERNCY)  |
| Description | Knob smart dimmer |
| Exposes | battery, direction, action |
| Picture | ![TERNCY TERNCY-SD01](https://www.zigbee2mqtt.io/images/devices/TERNCY-SD01.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 채널
이 기기는 Zigbee 채널 20-24에서 [작동하지 않습니다](https://github.com/Koenkk/zigbee2mqtt/discussions/7259#discussioncomment-6012304).

### 페어링
기기의 노브를 8초 동안 누르고 있습니다 (표시등이 파란색으로 3번 깜빡일 때까지). 페어링이 성공하면 표시등이 파란색으로 계속 깜빡이고, 실패하면 빨간색으로 깜빡입니다.

### 더 이상 사용되지 않는 click 이벤트
기본적으로 이 기기는 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 `legacy: false`를 설정합니다. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Direction (text)
Value can be found in the published state on the `direction` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`, `quadruple`, `rotate`.

