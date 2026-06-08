---
title: "eCozy 1TST-EU control via MQTT"
description: "Integrate your eCozy 1TST-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# eCozy 1TST-EU

|     |     |
|-----|-----|
| Model | 1TST-EU  |
| Vendor  | [eCozy](/supported-devices/#v=eCozy)  |
| Description | Smart heating thermostat |
| Exposes | battery, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand) |
| Picture | ![eCozy 1TST-EU](https://www.zigbee2mqtt.io/images/devices/1TST-EU.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 제어
섭씨로 현재 온도 조회 (범위 0x954d ~ 0x7fff, 즉 -273.15°C ~ 327.67°C)
```json
{
    "local_temperature": ""
}
```

실제 표시된 실내 온도에 더하거나 뺄 오프셋을 0.1°C 단위로 조회 또는 설정
```js
{
    "local_temperature_calibration": "NUMBER"       // 가능한 값: –2.5 ~ +2.5; 읽기 시 비워두기
}
```

온도 표시 모드 설정
```js
{
    "temperature_display_mode": ""      // 가능한 값: 0 = °C 설정, 1 = °F 설정
}
```

실내 점유 상태 조회. 냉난방 공간이 점유되어 있는지 여부를 지정합니다. 1이면 공간 점유, 0이면 미점유.
```json
{
    "thermostat_occupancy": ""
}
```

점유 시 난방 설정값을 NUMBER(섭씨)로 조회 또는 설정
```js
{
    "occupied_heating_setpoint": "NUMBER"       // 가능한 값: MinHeatSetpointLimit ~ MaxHeatSetpointLimit, 기본 7 ~ 30; 읽기 시 비워두기
}
```

미점유 시 난방 설정값을 NUMBER(섭씨)로 조회 또는 설정
```js
{
    "unoccupied_heating_setpoint": "NUMBER"       // 가능한 값: MinHeatSetpointLimit ~ MaxHeatSetpointLimit, 기본 7 ~ 30; 읽기 시 비워두기
}
```

난방 설정값을 NUMBER(°C 단위)만큼 증가 또는 감소
```js
{
    "setpoint_raise_lower": {
    "mode": "0x00",       // 가능한 값: 아래 표 참조
    "amount": "NUMBER"    // 가능한 값: 설정값을 0.1°C 단위로 증가(또는 감소)할 양을 지정하는 부호 있는 8비트 정수
    }
}
```

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | 난방 (난방 설정값 조정)
0x01            | 냉방 (냉방 설정값 조정)
0x02            | 모두 (난방 및 냉방 설정값 조정)

현지 온도, 외부 온도 및 점유가 내부 센서에 의해 측정되는지 원격 네트워크 센서에 의해 측정되는지 조회 또는 설정
```js
{
    "remote_sensing": "NUMBER"      // 가능한 값: 아래 표 참조; 읽기 시 비워두기
}
```

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – 현지 온도 내부 측정 / 1 – 현지 온도 원격 측정
1          | 0 – 외부 온도 내부 측정 / 1 – 외부 온도 원격 측정
2          | 0 – 점유 내부 감지 / 1 – 점유 원격 감지

제어 동작 순서 조회 또는 설정
```js
{
    "control_sequence_of_operation": "VALUE"       // 가능한 값: 아래 표 참조; 읽기 시 비워두기
}
```

Values                                    | SystemMode 가능한 값
------------------------------------------|-------------------------------------
`cooling only`                            | 난방 및 긴급 모드 불가
`cooling with reheat`                     | 난방 및 긴급 모드 불가
`heating only`                            | 냉방 및 예냉 불가
`heating with reheat`                     | 냉방 및 예냉 불가
`cooling and heating 4-pipes`             | 모든 모드 가능
`cooling and heating 4-pipes with reheat` | 모든 모드 가능

시스템 모드 조회 또는 설정
```js
{
    "system_mode": "VALUE"       // 가능한 값: 아래 표 참조; 읽기 시 비워두기
}
```

Values              |
--------------------|
`off`               |
`auto`              |
`cool`              |
`heat`              |
`emergency heating` |
`precooling`        |
`fan_only`          |
`dry`               |
`sleep`             |

실행 상태 조회
```js
{
    "running_state": ""       // 읽기 시 비워두기
}
```
가능한 값:

Values |
-------|
`off`  |
`cool` |
`heat` |

밸브 위치 / 난방 요구량
```
{
    "pi_heating_demand": 0       // 읽기 시 비워두기
}
```
장치에 따라 밸브 위치 또는 난방량을 보고합니다. 0=최소, 255=최대

주간 스케줄 조회 또는 설정
```js
{
    "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 설정값 유지 해제 또는 0x01 유지
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff ~ 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  // 아래 표 참조
    }                                                   // 읽기 시 비워두기
}
```

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – 단순/설정값 모드. 온도조절기 설정값은 온도조절기나 원격에서 수동으로 올리거나 내릴 때만 변경됨(내부 스케줄 프로그래밍 제외). / 1 – 스케줄 프로그래밍 모드. 프로그래밍된 주간 스케줄 설정을 활성화하거나 비활성화. *참고: 이전 주간 스케줄 프로그래밍 설정을 지우거나 삭제하지 않습니다.*
1               | 0 - 자동/복구 모드 OFF / 1 – 자동/복구 모드 ON
2               | 0 – 절전/EnergyStar 모드 OFF / 1 – 절전/EnergyStar 모드 ON

주간 스케줄 초기화
```json
{
    "clear_weekly_schedule": ""
}
```
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. Writing (`/set`) this attribute is not possible. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-2.5` and the maximum value is `2.5` with a step size of `0.1`.

