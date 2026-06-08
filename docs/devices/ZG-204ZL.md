---
title: "Tuya ZG-204ZL control via MQTT"
description: "Integrate your Tuya ZG-204ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-05-07T18:17:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZG-204ZL

|     |     |
|-----|-----|
| Model | ZG-204ZL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Luminance motion sensor |
| Exposes | occupancy, illuminance, battery, sensitivity, keep_time, illuminance_interval |
| Picture | ![Tuya ZG-204ZL](https://www.zigbee2mqtt.io/images/devices/ZG-204ZL.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
보고된 값이 너무 높다는 [미해결 이슈](https://github.com/Koenkk/zigbee2mqtt/issues/18950)가 있습니다.

### 페어링
페어링을 시작하려면 핀이나 클립을 사용하여 디바이스 측면의 핀홀 버튼을 약 10초간 누르세요. LED가 켜진 후 페어링 과정이 진행되는 동안 깜빡이기 시작합니다.

### 값 읽기 및 설정

저전력 디바이스이므로 모션 센서는 대부분의 시간 동안 접근할 수 없으며, 활성화된 경우(예: 모션 감지 시)에만 접근 가능합니다. 따라서 값을 읽거나 설정하는 요청(예: `sensitivity` 또는 `keep_time`)은 센서가 모션을 감지할 때만 작동합니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
PIR sensor sensitivity (refresh and update only while active).
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Keep time (enum)
PIR keep time in seconds (refresh and update only while active).
Value can be found in the published state on the `keep_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The possible values are: `10`, `30`, `60`, `120`.

### Illuminance interval (numeric)
Brightness acquisition interval (refresh and update only while active).
Value can be found in the published state on the `illuminance_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_interval": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `720`.
The unit of this value is `minutes`.

