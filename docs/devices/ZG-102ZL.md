---
title: "Tuya ZG-102ZL control via MQTT"
description: "Integrate your Tuya ZG-102ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-11-9T1:17:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZG-102ZL

|     |     |
|-----|-----|
| Model | ZG-102ZL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Luminance door sensor |
| Exposes | contact, illuminance, battery, illuminance_interval |
| Picture | ![Tuya ZG-102ZL](https://www.zigbee2mqtt.io/images/devices/ZG-102ZL.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
페어링을 시작하려면 핀이나 클립으로 기기 측면의 버튼(핀홀)을 약 5초 동안 누릅니다. LED가 켜졌다가 페어링 진행 중에 깜박이기 시작합니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

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

### Illuminance interval (numeric)
Brightness acquisition interval (refresh and update only while active).
Value can be found in the published state on the `illuminance_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_interval": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `720`.
The unit of this value is `minutes`.

