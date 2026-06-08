---
title: "ADEO LDSENK08 control via MQTT"
description: "Integrate your ADEO LDSENK08 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-31T11:26:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ADEO LDSENK08

|     |     |
|-----|-----|
| Model | LDSENK08  |
| Vendor  | [ADEO](/supported-devices/#v=ADEO)  |
| Description | ENKI LEXMAN wireless smart door window sensor with vibration |
| Exposes | battery_low, contact, vibration, tamper, battery, sensitivity |
| Picture | ![ADEO LDSENK08](https://www.zigbee2mqtt.io/images/devices/LDSENK08.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### 초기화/페어링:
- 초기화를 위해 먼저 배터리 커버를 제거해야 합니다.
그런 다음 주 버튼을 최소 5초간 누르면 빨간색 LED가 빠르게 깜박이기 시작합니다.
- 버튼을 놓으면 빨간색 LED가 일반 깜박임으로 전환되며, 깜박임 주기는 0.5초 ON, 0.5초 OFF로 3분간 계속됩니다.
- 진동 센서가 성공적으로 페어링되면 빨간색 LED가 녹색으로 바뀌고 약 10초 후 깜박임이 멈추며 꺼집니다.
- 진동 센서가 네트워크 참가에 실패하면 빨간색 LED가 3분간 계속 깜박이다가 꺼집니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (numeric)
Sensitivity of the motion sensor.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4`.

