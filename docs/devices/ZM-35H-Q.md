---
title: "Tuya ZM-35H-Q control via MQTT"
description: "Integrate your Tuya ZM-35H-Q via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:02:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZM-35H-Q

|     |     |
|-----|-----|
| Model | ZM-35H-Q  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Motion sensor |
| Exposes | occupancy, battery_low, battery, sensitivity, keep_time |
| Picture | ![Tuya ZM-35H-Q](https://www.zigbee2mqtt.io/images/devices/ZM-35H-Q.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
페어링을 시작하려면 핀이나 클립을 사용하여 디바이스 측면의 핀홀 버튼을 약 10초간 누르세요. LED가 켜진 후 페어링 과정이 진행되는 동안 깜빡이기 시작합니다.

### 값 읽기 및 설정

저전력 디바이스이므로 모션 센서는 대부분의 시간 동안 접근할 수 없으며, 활성화된 경우(예: 모션 감지 시)에만 접근 가능합니다. 따라서 값을 읽거나 설정하는 요청(예: `sensitivity` 또는 `keep_time`)은 일반적으로 즉시 처리되지 않습니다. 대신 대기열에 추가되어 다음 기회에 전송됩니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
PIR sensor sensitivity.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Keep time (enum)
PIR keep time in seconds.
Value can be found in the published state on the `keep_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"keep_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The possible values are: `30`, `60`, `120`.

