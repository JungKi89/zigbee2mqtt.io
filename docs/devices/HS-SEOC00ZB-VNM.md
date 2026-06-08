---
title: "VSmart HS-SEOC00ZB-VNM control via MQTT"
description: "Integrate your VSmart HS-SEOC00ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# VSmart HS-SEOC00ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SEOC00ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | Occupancy sensor |
| Exposes | battery, occupancy |
| Picture | ![VSmart HS-SEOC00ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SEOC00ZB-VNM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기의 버튼을 3초간 누르고 있으면 LED 표시등이 빠르게 깜박이면서 페어링 모드로 진입합니다.

### 초기화
기기를 초기화하려면 버튼을 10초간 누르고 있으면 LED 표시등이 3번 깜박입니다.

### 설치
- 천장 또는 벽에 센서를 설치합니다
- 센서가 모니터링할 영역을 명확히 볼 수 있는지 확인합니다
- 권장 설치 높이: 2.5~3미터
- 에어컨 통풍구나 열원 근처에 설치하지 마세요
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

