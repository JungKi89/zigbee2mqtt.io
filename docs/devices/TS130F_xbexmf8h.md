---
title: "Tuya TS130F_xbexmf8h control via MQTT"
description: "Integrate your Tuya TS130F_xbexmf8h via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-26T00:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS130F_xbexmf8h

|     |     |
|-----|-----|
| Model | TS130F_xbexmf8h  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Blind/curtain motor controller |
| Exposes | cover (state, position), calibration_time, motor_reversal, calibration, backlight_mode |
| Picture | ![Tuya TS130F_xbexmf8h](https://www.zigbee2mqtt.io/images/devices/TS130F_xbexmf8h.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
정지 버튼을 10초간 눌러 페어링 모드로 진입합니다.

### 캘리브레이션

* 스위치의 열기 버튼을 눌러 블라인드가 완전히 열릴 때까지 기다립니다.
* 스위치의 정지 버튼을 누릅니다.
* 기기를 캘리브레이션 모드로 전환합니다. [아래](#calibration-binary)를 참고하세요.
* 스위치의 닫기 버튼을 눌러 블라인드가 완전히 닫힐 때까지 기다립니다.
* 스위치의 정지 버튼을 누릅니다.
* 캘리브레이션 모드를 비활성화합니다. [아래](#calibration-binary)를 참고하세요.

### 인디케이터 모드
이 기기는 인디케이터 모드를 지원하지 않습니다. 백라이트 LED는 단순 켜기/끄기 제어만 가능합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration time (numeric)
Calibration time measured by motor.
Value can be found in the published state on the `calibration_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Motor reversal (binary)
Reverse motor direction.
Value can be found in the published state on the `motor_reversal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Calibration (binary)
Calibration mode.
Value can be found in the published state on the `calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.

### Backlight mode (binary)
Switch backlight.
Value can be found in the published state on the `backlight_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"backlight_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

