---
title: "Aqara WXKG15LM control via MQTT"
description: "Integrate your Aqara WXKG15LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-07-01T08:15:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG15LM

|     |     |
|-----|-----|
| Model | WXKG15LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless remote switch H1 (double rocker) |
| Exposes | battery, voltage, click_mode, operation_mode, action |
| Picture | ![Aqara WXKG15LM](https://www.zigbee2mqtt.io/images/devices/WXKG15LM.png) |
| White-label | Aqara WRS-R02 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### 페어링
왼쪽과 오른쪽 로커를 10초 동안 누르고 있어 스위치를 공장 초기화합니다. 이렇게 하면 리모컨이 페어링 모드로 전환되어 Zigbee2MQTT에 페어링됩니다.

### 클릭 모드 변경
Zigbee2MQTT로 click_mode를 변경하는 데 문제가 있으면 물리적으로 클릭 모드를 전환할 수 있습니다. 두 로커 중 하나를 빠르게 5번 클릭하면 됩니다. 클릭 모드가 fast 모드와 multi 모드 사이에서 전환됩니다.

### 바인딩
현재 두 개의 로커가 있더라도 바인딩에는 하나의 엔드포인트만 사용할 수 있습니다 (https://github.com/Koenkk/zigbee-herdsman-converters/blob/eed5fde987891f996c428339569dbff1893e62a1/devices/xiaomi.js#L2370 참조). 어떤 로커를 사용하든 항상 `toggle_1` 이벤트를 받습니다.
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

### Click mode (enum)
Click mode, fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold.
Value can be found in the published state on the `click_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"click_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_mode": NEW_VALUE}`.
The possible values are: `fast`, `multi`.

### Operation mode (enum)
Operation mode, select "command" to enable bindings (wake up the device before changing modes!).
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_left`, `single_right`, `single_both`, `double_left`, `double_right`, `double_both`, `triple_left`, `triple_right`, `triple_both`, `hold_left`, `hold_right`, `hold_both`.

