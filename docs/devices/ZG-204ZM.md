---
title: "Tuya ZG-204ZM control via MQTT"
description: "Integrate your Tuya ZG-204ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZG-204ZM

|     |     |
|-----|-----|
| Model | ZG-204ZM  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | PIR 24Ghz human presence sensor |
| Exposes | presence, motion_state, battery, fading_time, static_detection_distance, static_detection_sensitivity, indicator, motion_detection_mode, motion_detection_sensitivity, illuminance |
| Picture | ![Tuya ZG-204ZM](https://www.zigbee2mqtt.io/images/devices/ZG-204ZM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

제조사는 다양한 설정의 의미, 권장 기본값, 값 조정 방법 및 좋은 결과를 얻기 위한 여러 고려사항(설치 위치 등)을 설명하는 상세한 [기술 문서](https://doc.szalarm.com/zg-205Z/en/)를 제공합니다.

외관이 동일한 여러 버전의 디바이스가 있는 것으로 보입니다. `Zigbee Model=TS0601, Zigbee Manufacturer=_TZE200_kb5noeto`로 감지된 디바이스는 "재실 감지됨" 상태에서 멈추는 것으로 알려져 있습니다. 더 많은 사용자 경험은 이 [리뷰](https://smarthomescene.com/reviews/zigbee-battery-powered-presence-sensor-zg-204zm-review/)를 참고하세요.
해결 방법 중 하나는 PCB에서 잔류 납땜 플럭스를 제거하거나 일부 부품을 다시 납땜하는 것입니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Motion state (enum)
Motion state.
Value can be found in the published state on the `motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `large`, `small`, `static`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Fading time (numeric)
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `28800`.
The unit of this value is `s`.

### Static detection distance (numeric)
Static detection distance.
Value can be found in the published state on the `static_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.
The unit of this value is `m`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Indicator (binary)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Motion detection mode (enum)
Motion detection mode (Firmware version>=0122052017).
Value can be found in the published state on the `motion_detection_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_mode": NEW_VALUE}`.
The possible values are: `only_pir`, `pir_and_radar`, `only_radar`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity (Firmware version>=0122052017).
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

