---
title: "Heiman HS2WD-E control via MQTT"
description: "Integrate your Heiman HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS2WD-E

|     |     |
|-----|-----|
| Model | HS2WD-E  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart siren |
| Exposes | battery, max_duration, warning |
| Picture | ![Heiman HS2WD-E](https://www.zigbee2mqtt.io/images/devices/HS2WD-E.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링

기기 케이스의 작은 구멍에 동봉된 핀을 넣고 LED가 깜박이기 시작할 때까지 약 5초간 누르고 있습니다.

### 알람 작동
`zigbee2mqtt/FRIENDLY_NAME/set`에 메시지 `{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}`를 게시하여 알람을 작동시킬 수 있습니다.

여기서:
- `duration`: 알람이 울리는 시간(초) (최대 1800초)
- `mode`: `stop` 또는 `emergency`
- `strobe`: `true` 또는 `false`로 알람 중 스트로브가 한 번 번쩍이도록 설정
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Max duration (numeric)
Max duration of Siren.
Value can be found in the published state on the `max_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE, "mode": VALUE}}`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `emergency`

