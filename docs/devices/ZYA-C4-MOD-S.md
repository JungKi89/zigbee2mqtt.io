---
title: "Yale ZYA-C4-MOD-S control via MQTT"
description: "Integrate your Yale ZYA-C4-MOD-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-17T10:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Yale ZYA-C4-MOD-S

|     |     |
|-----|-----|
| Model | ZYA-C4-MOD-S  |
| Vendor  | [Yale](/supported-devices/#v=Yale)  |
| Description | Control4 module for Yale KeyFree/Keyless/Doorman/Assure/nexTouch locks |
| Exposes | lock (state, lock_state), battery, battery_low, auto_lock_time, volume, action |
| Picture | ![Yale ZYA-C4-MOD-S](https://www.zigbee2mqtt.io/images/devices/ZYA-C4-MOD-S.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기를 페어링하려면 Zigbee2MQTT에서 참여를 허용하고, ZYA-C4-MOD-S가 잠금장치에 삽입되어 있는지 확인한 후 모듈 옆의 버튼을 3번 클릭합니다(차임음이 들려야 합니다). 잠시 기다리면 성공 시 또 다른 차임음이 들립니다. 페어링에 실패하면 잠금장치가 3번 비프음을 내고 빨간색 표시등이 깜박입니다. 이 경우 과정을 다시 반복하세요.

### 제거
기기를 제거할 때는 Zigbee2MQTT의 기기 삭제 기능을 사용하지 마세요. 실패할 가능성이 높습니다. 대신 모듈 옆의 버튼을 3번 클릭하면 차임음이 들리고 잠시 후 또 다른 차임음이 납니다. 그런 다음 Zigbee2MQTT에서 기기가 네트워크에서 성공적으로 이탈했으며 다시 페어링할 수 있다는 것을 확인할 수 있습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Auto lock time (enum)
Value can be found in the published state on the `auto_lock_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_lock_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_lock_time": NEW_VALUE}`.
The possible values are: `off`, `30seconds`, `60seconds`, `2minutes`, `3minutes`.

### Volume (enum)
Value can be found in the published state on the `volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `silent`, `low`, `high`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `unknown`, `lock`, `unlock`, `lock_failure_invalid_pin_or_id`, `lock_failure_invalid_schedule`, `unlock_failure_invalid_pin_or_id`, `unlock_failure_invalid_schedule`, `one_touch_lock`, `key_lock`, `key_unlock`, `auto_lock`, `schedule_lock`, `schedule_unlock`, `manual_lock`, `manual_unlock`, `non_access_user_operational_event`.

