---
title: "Alecto SMART-SMOKE10 control via MQTT"
description: "Integrate your Alecto SMART-SMOKE10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-14T22:06:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Alecto SMART-SMOKE10

|     |     |
|-----|-----|
| Model | SMART-SMOKE10  |
| Vendor  | [Alecto](/supported-devices/#v=Alecto)  |
| Description | Smoke detector |
| Exposes | smoke_state, battery_state, checking_result, smoke_value, battery, lifecycle, self_checking, silence |
| Picture | ![Alecto SMART-SMOKE10](https://www.zigbee2mqtt.io/images/devices/SMART-SMOKE10.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
테스트 버튼을 3번 누릅니다(빨간 LED가 켜진 상태로 유지될 때까지).
이후 디바이스가 초기화되고 네트워크에 참가를 시도합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke state (enum)
Value can be found in the published state on the `smoke_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `alarm`, `normal`.

### Battery state (enum)
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`.

### Checking result (enum)
Value can be found in the published state on the `checking_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `check_success`, `check_failure`, `others`.

### Smoke value (numeric)
Value can be found in the published state on the `smoke_value` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery (numeric)
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Lifecycle (binary)
Value can be found in the published state on the `lifecycle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` lifecycle is ON, if `false` OFF.

### Self checking (binary)
Value can be found in the published state on the `self_checking` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_checking": NEW_VALUE}`.
If value equals `true` self checking is ON, if `false` OFF.

### Silence (binary)
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `true` silence is ON, if `false` OFF.

