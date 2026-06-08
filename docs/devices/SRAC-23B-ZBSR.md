---
title: "Climax SRAC-23B-ZBSR control via MQTT"
description: "Integrate your Climax SRAC-23B-ZBSR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-13T14:40:13Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax SRAC-23B-ZBSR

|     |     |
|-----|-----|
| Model | SRAC-23B-ZBSR  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Smart siren |
| Exposes | battery_low, tamper, warning, squawk, max_duration, alarm |
| Picture | ![Climax SRAC-23B-ZBSR](https://www.zigbee2mqtt.io/images/devices/SRAC-23B-ZBSR.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### warning 사용법
Warning은 단일 모드 `burglar`만 지원합니다.

`warning` 사용 시간은 `max_duration`보다 짧을 수 있지만 더 길 수는 없습니다. `max_duration`이 60초로 설정된 경우 `duration`을 90초로 설정하려 해도 경고는 60초 동안만 적용됩니다. `max_duration`의 기본값은 300초입니다.

이 기기는 `strobe_duty_cycle` 기능을 지원하지 않습니다.


### 알람 트리거 (고급)
이 사이렌은 다음 페이로드로 `zigbee2mqtt/FRIENDLY_NAME/set`에 발행하여 수동으로 트리거할 수 있습니다:

시작:
* `{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}`
여기서:
- `duration`: 알람이 켜져 있을 초 수
- `level`: `low`, `medium`, `high`, `very_high`
- `mode`: `stop`, `burglar`
- `strobe`: `true`, `false`
- `strobe_duty_cycle`: 지원되지 않음

중지:
* `{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}`

### 알람 트리거 (간단)
`zigbee2mqtt/FRIENDLY_NAME/set`에 페이로드 `{"alarm": "START"}` 및 `{"alarm": "OFF"}`를 발행하여 설정할 수 있습니다.
Zigbee2MQTT UI에서 또는 `{"max_duration": NEW_VALUE}`를 발행하여 `max_duration`을 설정하세요.
이 알람은 최대 볼륨으로 사전 설정되어 있습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "strobe_level": VALUE, "strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe_level` (enum): Intensity of the strobe allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s

### Squawk (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"squawk": {"state": VALUE, "level": VALUE, "strobe": VALUE}}`
- `state` (enum): Set Squawk state allowed values: `system_is_armed`, `system_is_disarmed`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) for Squawk allowed values: `true` or `false`

### Max duration (numeric)
Duration of Siren.
Value can be found in the published state on the `max_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Alarm (binary)
Manual start of siren.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `START` alarm is ON, if `OFF` OFF.

