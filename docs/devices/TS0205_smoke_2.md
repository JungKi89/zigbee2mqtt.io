---
title: "Tuya TS0205_smoke_2 control via MQTT"
description: "Integrate your Tuya TS0205_smoke_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0205_smoke_2

|     |     |
|-----|-----|
| Model | TS0205_smoke_2  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Optical smoke sensor (model YG500A on the PCB) |
| Exposes | battery, smoke, tamper |
| Picture | ![Tuya TS0205_smoke_2](https://www.zigbee2mqtt.io/images/devices/TS0205_smoke_2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
녹색 LED가 깜박이기 시작할 때까지 측면의 리셋 버튼을 약 5초간 누릅니다. 버튼을 놓으면 페어링됩니다 - 페어링에 성공하면 LED가 몇 초간 녹색으로 고정되었다가 꺼집니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

