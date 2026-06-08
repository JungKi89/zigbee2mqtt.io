---
title: "HOBEIAN ZG-204ZK control via MQTT"
description: "Integrate your HOBEIAN ZG-204ZK via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-204ZK

|     |     |
|-----|-----|
| Model | ZG-204ZK  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | 24Ghz human presence sensor |
| Exposes | presence, battery, fading_time, detection_distance, static_detection_sensitivity, motion_detection_sensitivity, indicator, anti_interference |
| Picture | ![HOBEIAN ZG-204ZK](https://www.zigbee2mqtt.io/images/devices/ZG-204ZK.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

제조사는 다양한 설정의 의미, 권장 기본값, 값 조정 방법 및 좋은 결과를 얻기 위한 여러 고려사항(설치 위치 등)을 설명하는 상세한 [기술 문서](https://doc.szalarm.com/zg-205Z/en/)를 제공합니다.

외관이 동일한 여러 버전의 디바이스가 있는 것으로 보입니다. `Zigbee Model=TS0601, Zigbee Manufacturer=_TZE200_kb5noeto`로 감지된 디바이스는 "재실 감지됨" 상태에서 멈추는 것으로 알려져 있습니다. 더 많은 사용자 경험은 이 [리뷰](https://smarthomescene.com/reviews/zigbee-battery-powered-presence-sensor-zg-204zm-review/)를 참고하세요.
해결 방법 중 하나는 PCB에서 잔류 납땜 플럭스를 제거하거나 일부 부품을 다시 납땜하는 것입니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

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
The minimal value is `10` and the maximum value is `28800`.
The unit of this value is `s`.

### Detection distance (numeric)
Detection distance.
Value can be found in the published state on the `detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.
The unit of this value is `m`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity.
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Indicator (binary)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Anti interference (binary)
Anti interference function.
Value can be found in the published state on the `anti_interference` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"anti_interference": NEW_VALUE}`.
If value equals `ON` anti interference is ON, if `OFF` OFF.

