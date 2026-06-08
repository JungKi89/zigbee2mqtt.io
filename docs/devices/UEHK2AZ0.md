---
title: "Universal Electronics Inc UEHK2AZ0 control via MQTT"
description: "Integrate your Universal Electronics Inc UEHK2AZ0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-03-15T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Universal Electronics Inc UEHK2AZ0

|     |     |
|-----|-----|
| Model | UEHK2AZ0  |
| Vendor  | [Universal Electronics Inc](/supported-devices/#v=Universal%20Electronics%20Inc)  |
| Description | Xfinity security keypad |
| Exposes | battery, voltage, occupancy, battery_low, tamper, presence, contact, temperature, action_code, action_transaction, action_zone, action |
| Picture | ![Universal Electronics Inc UEHK2AZ0](https://www.zigbee2mqtt.io/images/devices/UEHK2AZ0.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 서버에서 경계 설정/해제
경계 모드를 설정하려면 `zigbee2mqtt/FRIENDLY_NAME/set` 토픽에 다음 페이로드를 게시하세요:

```js
{
    "arm_mode": {
        "mode": "arm_all_zones"
    }
}
```
ZCL 사양에 따른 유효한 `mode` 값은 `disarm`, `arm_day_zones`, `arm_night_zones`, `arm_all_zones`, `exit_delay`, `entry_delay`, `not_ready`, `in_alarm`, `arming_stay`, `arming_night`, `arming_away`입니다.
### 키패드에서 경계 설정/해제
키패드에서 경계 모드 설정을 시도하면, Zigbee2MQTT는 `zigbee2mqtt/FRIENDLY_NAME` 토픽에 다음 페이로드를 게시합니다:

```js
{
    "action": "arm_all_zones", // 예시
    "action_code": "123", // 입력된 코드
    "action_zone": 0, // 경계 설정 중인 구역 (항상 0)
    "action_transaction": 99 // 트랜잭션 번호
}
```

자동화 서버는 요청을 검증하고 키패드에 요청 승인 또는 거부 알림을 전송해야 합니다.

`zigbee2mqtt/FRIENDLY_NAME/set`에 다음 페이로드를 전송하여 처리합니다:

```js
{
    "arm_mode": {
        "transaction": 99, // 트랜잭션 번호 (키패드 요청의 `action_transaction`과 동일해야 함)
        "mode": "arm_all_zones" // 모드 (키패드 요청의 `action`과 동일해야 함)
    }
}
```
유효한 `mode` 값은 `disarm`, `arm_day_zones`, `arm_night_zones`, `arm_all_zones`, `invalid_code`, `not_ready`, `already_disarmed`입니다.

자동화 서버는 알림 이후 실제로 올바른 경계 모드로 변경해야 합니다. 위 예시의 경우, 서버는 `exit_delay`로 응답하고 경과 시간(예: 30초)을 카운트한 후 다시 `arm_all_zones`로 모드를 변경해야 합니다 (위의 "서버에서 경계 설정/해제" 섹션 참조).
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

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

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Action code (numeric)
Pin code introduced..
Value can be found in the published state on the `action_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action transaction (numeric)
Last action transaction number..
Value can be found in the published state on the `action_transaction` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action zone (text)
Alarm zone. Default value 0.
Value can be found in the published state on the `action_zone` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disarm`, `arm_day_zones`, `identify`, `arm_night_zones`, `arm_all_zones`, `exit_delay`, `emergency`.

