---
title: "Excellux ZG-104PLV control via MQTT"
description: "Integrate your Excellux ZG-104PLV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux ZG-104PLV

|     |     |
|-----|-----|
| Model | ZG-104PLV  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | PIR motion sensor, vibration sensor, and light sensor |
| Exposes | presence, vibration, illuminance_warning, battery, illuminance, vibration_count, sampling_interval, vibration_sensitivity, illuminance_v0, illuminance_v1, illuminance_calibration |
| Picture | ![Excellux ZG-104PLV](https://www.zigbee2mqtt.io/images/devices/ZG-104PLV.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR2450 배터리 1개 사용

### 문제점
#### 네트워크 스팸
이 디바이스는 센서 상태 변화가 없을 때에도 매우 빈번한 Zigbee 트래픽(초당 여러 메시지)을 발생시킬 수 있습니다. 이로 인해 배터리 수명이 크게 단축될 수 있습니다(몇 주).
#### 조도 센서 감도 낮음
이 디바이스는 PIR 센서 영역을 조도 센서로 사용하며, 주변이 아직 어둡지 않은 경우에도 `lux=0`을 보고합니다(같은 위치의 다른 센서에서는 `lux>1000`). 불투명한 프레넬 렌즈 돔 중앙에 약 1mm의 작은 구멍을 뚫으면 약간 개선할 수 있습니다. 그러나 이 수정 후에도 복도가 실제로 어두울 때만 조명을 켜고 싶은 위치에는 적합하지 않습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (enum)
Presence state, true: motion detected, false: no motion.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `true`, `false`.

### Vibration (binary)
Vibration state, true: vibration detected, false: no vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Illuminance warning (enum)
Illuminance warning level.
Value can be found in the published state on the `illuminance_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Vibration count (numeric)
Vibration count detected by the vibration sensor.
Value can be found in the published state on the `vibration_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `times`.

### Sampling interval (numeric)
Sampling illuminance interval.
Value can be found in the published state on the `sampling_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `1200`.
The unit of this value is `s`.

### Vibration sensitivity (numeric)
Vibration sensitivity.
Value can be found in the published state on the `vibration_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.

### Illuminance v0 (numeric)
Illuminance v0 threshold setting.
Value can be found in the published state on the `illuminance_v0` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_v0": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illuminance v1 (numeric)
Illuminance v1 threshold setting.
Value can be found in the published state on the `illuminance_v1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_v1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illuminance calibration (numeric)
Illuminance calibration.
Value can be found in the published state on the `illuminance_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_calibration": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `lux`.

