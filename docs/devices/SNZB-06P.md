---
title: "SONOFF SNZB-06P control via MQTT"
description: "Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-28T10:54:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-06P

|     |     |
|-----|-----|
| Model | SNZB-06P  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee occupancy sensor |
| Exposes | occupancy, occupancy_timeout, occupancy_sensitivity, illumination |
| Picture | ![SONOFF SNZB-06P](https://www.zigbee2mqtt.io/images/devices/SNZB-06P.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
펌웨어 1.0.3은 오동작할 수 있으며, 2023년 12월 기준으로 1.0.5로 업그레이드하는 것을 권장합니다.

Z2M에서 현재 노출되지 않는 추가 설정은 Dev 콘솔에서 조정할 수 있습니다:
### 감도
msOccupancySensing 클러스터를 선택하면 ultrasonicUToOThreshold 속성이 감도 설정입니다.


1은 감지 거리 2.5m의 낮은 감도를 나타냅니다.  
2는 감지 거리 3.5m의 중간 감도를 나타냅니다.  
3은 감지 거리 4m의 높은 감도를 나타냅니다.

### 감지 지속 시간
msOccupancySensing 클러스터를 선택하면 ultrasonicOToUDelay가 감지 지속 시간 설정입니다.


1.0.5 미만의 펌웨어 버전에서는 최단 감지 지속 시간이 30초이며, 그렇지 않으면 센서가 감지 상태로 영구적으로 유지됩니다.

펌웨어 1.0.5 이상에서는 최단 감지 지속 시간을 15초로 설정할 수 있습니다.

[출처 - Sonoff 문서](https://www.sonoff.in/blog/product-guides-3/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide-111)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy timeout (numeric)
Occupied to unoccupied delay.
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `65535`.

### Occupancy sensitivity (enum)
Sensitivity of human presence detection.
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Illumination (enum)
Only updated when occupancy is detected.
Value can be found in the published state on the `illumination` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `dim`, `bright`.

