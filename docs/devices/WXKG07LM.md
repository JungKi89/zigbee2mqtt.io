---
title: "Aqara WXKG07LM control via MQTT"
description: "Integrate your Aqara WXKG07LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-29T17:11:59Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG07LM

|     |     |
|-----|-----|
| Model | WXKG07LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless remote switch D1 (double rocker) |
| Exposes | battery, voltage, action |
| Picture | ![Aqara WXKG07LM](https://www.zigbee2mqtt.io/images/devices/WXKG07LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR2032 배터리를 사용합니다.

### 페어링
LED가 깜박이기 시작할 때까지 아무 버튼이나 10초 동안 누르고 있습니다.

### 더 이상 사용되지 않는 클릭 이벤트
이 기기는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 `legacy: false`를 설정하세요. 예시:

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

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_left`, `single_right`, `single_both`, `double_left`, `double_right`, `double_both`, `hold_left`, `hold_right`, `hold_both`.

