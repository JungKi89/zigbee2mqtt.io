---
title: "Shyugj S901D-ZG control via MQTT"
description: "Integrate your Shyugj S901D-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shyugj S901D-ZG

|     |     |
|-----|-----|
| Model | S901D-ZG  |
| Vendor  | [Shyugj](/supported-devices/#v=Shyugj)  |
| Description | Door sensor |
| Exposes | battery, alarm_1, alarm_2, tamper, battery_low |
| Picture | ![Shyugj S901D-ZG](https://www.zigbee2mqtt.io/images/devices/S901D-ZG.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 공장 초기화

후면의 작은 버튼을 10초 동안 누르고 있으면 센서가 공장 초기화됩니다. 이 시간 동안 LED가 빠르게 빨간색으로 깜빡이다가 3초간 고정되며, 초기화가 완료됩니다.

### 페어링

후면의 작은 버튼을 세 번 짧게 누릅니다. 기기가 네트워크에 연결되어 있지 않으면 LED가 주황색으로 천천히 깜빡이면서 사용 가능한 네트워크에 참가를 시도합니다. 기기가 이미 네트워크에 연결되어 있으면 LED가 5초간 녹색으로 깜빡입니다. 이 경우 새 네트워크에 페어링하려면 공장 초기화가 필요합니다.

### LED 의미

| 깜빡임/고정 | 색상 | 지속 시간 | 의미 |
|-----|-----|-----|-----|
| 깜빡임 | 녹색 | 7초 | 전원 켜짐 |
| 깜빡임 | 주황색 | - | 페어링 중 (타임아웃: 2분) |
| 고정 | 녹색 | - | 페어링 성공 |
| 고정 | 주황색 | 3초 | 페어링 실패 |
| 깜빡임 | 주황색 | 1분에 한 번 | 배터리 부족 |
| 깜빡임 | 주황색 | 빠르게 | 네트워크 연결 끊김 |
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm 1 (binary)
Indicates whether IAS Zone alarm 1 is active.
Value can be found in the published state on the `alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 1 is ON, if `false` OFF.

### Alarm 2 (binary)
Indicates whether IAS Zone alarm 2 is active.
Value can be found in the published state on the `alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 2 is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

