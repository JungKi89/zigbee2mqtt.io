---
title: "Aqara RTCZCGQ11LM control via MQTT"
description: "Integrate your Aqara RTCZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara RTCZCGQ11LM

|     |     |
|-----|-----|
| Model | RTCZCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Presence sensor FP1 |
| Exposes | presence, device_temperature, power_outage_count, presence_event, monitoring_mode, approach_distance, motion_sensitivity, reset_nopresence_status, region_upsert, region_delete, action |
| Picture | ![Aqara RTCZCGQ11LM](https://www.zigbee2mqtt.io/images/devices/RTCZCGQ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 채널
이 센서는 Zigbee 채널 21-24에서 [작동하지 않습니다](https://github.com/Koenkk/zigbee2mqtt/issues/11019#issuecomment-1064063808).

### 어댑터 펌웨어
이 기기가 작동하려면 어댑터에 최소한 다음 펌웨어가 필요합니다:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26580700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26580700.bin.GCF)

*이미 기기를 페어링한 경우 어댑터 펌웨어를 업그레이드한 후 다시 페어링해야 합니다.*

### 페어링
기기의 리셋 버튼을 약 5초 동안 길게 누릅니다(파란 불빛이 깜박이기 시작할 때까지).
이후 기기가 자동으로 연결됩니다. 작동하지 않으면 버튼을 짧게 한 번 눌러보세요.

기기가 멈추는 경우가 있습니다. 기기 부팅 시 LED를 주의 깊게 확인해야 합니다 - 한 번 깜박이고 잠시 후 두 번 깜박여야 합니다. 한 번만 깜박이면 기기가 멈춘 것이며 특별한 초기화가 필요합니다. 한 가지 방법은 전원을 연결한 후 두 번 깜박이는 것이 보일 때까지 버튼을 12초 동안 계속 누르는 것입니다 - 여러 번 시도해야 성공할 수 있습니다. 기기가 정상화된 직후 페어링 모드로 진입하세요.

![RTCZCGQ11LM pairing](../images/pairing/RTCZCGQ11LM_pairing.jpg)

### 기능 지원

#### 감지 영역 (설정)

기기는 `4x7` 감지 그리드에서 여러 구역으로 구성된 최대 `10`개의 감지 영역을 추가할 수 있습니다. 아래에 시각화되어 있습니다:
![RTCZCGQ11LM pairing](../images/device_specific/RTCZCGQ11LM_detection_regions.jpg)

각 구역은 어떤 영역에도 추가할 수 있습니다. 예를 들어 구역 `X1 Y1`을 `영역 1`과 `영역 2` 모두에 동시에 추가할 수 있습니다.

X1과 Y[1,2,3]을 포함한 영역 1은 `zigbee2mqtt/FRIENDLY_NAME/set`에 페이로드 `{ "region_upsert": { "region_id": 1, "zones": [{"x": 1, "y": 1},{"x": 1, "y": 2},{"x": 1, "y": 3}]}}`를 게시하여 설정할 수 있습니다.

**참고**: 여러 구역은 `[]`에 있습니다.


#### 감지 영역 (이벤트)

기기가 생성된 영역 중 하나에서 이벤트를 감지하면 `action` expose에 이 이벤트를 노출합니다.
이벤트는 `region_<REGION_ID>_<EVENT_NAME>` 스키마를 따릅니다:
- `<REGION_ID>`는 사용자가 지정한 `1`~`10`의 영역 식별자입니다.
- `<EVENT_NAME>`은 다음 중 하나입니다:
  - `enter` - 영역 진입 시 발생, 빠른 반응
  - `leave` - 영역 이탈 시 발생, 빠른 반응
  - `occupied` - 기기가 영역 점유를 확인했을 때 발생, 느린 반응
  - `unoccupied` - 기기가 영역이 더 이상 점유되지 않음을 확인했을 때 발생, 느린 반응

예: `region_1_enter`는 사람이 `영역 1`에 진입할 때 발생합니다.

#### 기타 영역

`기타 영역` (출구, 입구, 간섭원, 경계)은 현재 지원되지 않습니다. 리버스 엔지니어링 작업은 [여기](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/5928#issuecomment-1166545226)에 문서화되어 있습니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Presence event (enum)
Presence events: "enter", "leave", "left_enter", "right_leave", "right_enter", "left_leave", "approach", "away".
Value can be found in the published state on the `presence_event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `enter`, `leave`, `left_enter`, `right_leave`, `right_enter`, `left_leave`, `approach`, `away`.

### Monitoring mode (enum)
Monitoring mode with or without considering right and left sides.
Value can be found in the published state on the `monitoring_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"monitoring_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"monitoring_mode": NEW_VALUE}`.
The possible values are: `undirected`, `left_right`.

### Approach distance (enum)
The distance at which the sensor detects approaching.
Value can be found in the published state on the `approach_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"approach_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"approach_distance": NEW_VALUE}`.
The possible values are: `far`, `medium`, `near`.

### Motion sensitivity (enum)
Different sensitivities means different static human body recognition rate and response speed of occupied.
Value can be found in the published state on the `motion_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Reset nopresence status (enum)
Reset the status of no presence.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_nopresence_status": NEW_VALUE}`.
The possible values are: ``.

### Region upsert (composite)
Definition of a new region to be added (or replace existing one). Creating or modifying a region requires you to define which zones of a 7x4 detection grid should be active for that zone. Regions can overlap, meaning that a zone can be defined in more than one region (eg. "zone x = 1 & y = 1" can be added to region 1 & 2). "Zone x = 1 & y = 1" is the nearest zone on the right (from sensor's perspective, along the detection path)..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"region_upsert": {"region_id": VALUE, "zones": VALUE}}`
- `region_id` (numeric) min value is 1, max value is 10
- `zones` (list): list of dictionaries in the format {"x": 1, "y": 1}, {"x": 2, "y": 1} 

### Region delete (composite)
Region definition to be deleted from the device..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"region_delete": {"region_id": VALUE}}`
- `region_id` (numeric) min value is 1, max value is 10

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `region_*_enter`, `region_*_leave`, `region_*_occupied`, `region_*_unoccupied`.

