---
title: "Tuya TS0601_thermostat control via MQTT"
description: "Integrate your Tuya TS0601_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_thermostat

|     |     |
|-----|-----|
| Model | TS0601_thermostat  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Radiator valve with thermostat |
| Exposes | child_lock, switch (state), window_open, battery_low, position, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, preset, running_state), away_preset_days, boost_time, comfort_temperature, eco_temperature, force, max_temperature, min_temperature, away_preset_temperature, week, workdays_schedule, holidays_schedule |
| Picture | ![Tuya TS0601_thermostat](https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat.png) |
| White-label | Moes HY368, Moes HY369RT, SHOJZJ 378RT, Silvercrest TVR01, Immax 07732B, Evolveo Heat M30 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링

페어링 중에는 밸브를 코디네이터 가까이에 두세요.

1. *화면 켜기*: 홈 버튼(🏠)을 짧게 누릅니다.
2. *설정 진입*: 홈 버튼(🏠)을 3초 동안 길게 누릅니다.
3. *WiFi 설정 선택*: 플러스 버튼(➕)을 4번 눌러 오른쪽에 **`5`**가 표시되고 WiFi 로고가 깜박이는지 확인합니다.
4. *WiFi 설정 진입*: 홈 버튼(🏠)을 한 번 더 누릅니다. 이제 WiFi 로고만 표시되고 깜박임이 없습니다.
5. *페어링 모드 활성화*: 홈 버튼(🏠)을 길게 누릅니다. WiFi 로고가 깜박이기 시작합니다.
6. *화면 유지*: 몇 초마다 홈 버튼(🏠)을 터치합니다.

### 현재 온도
기기가 local_temperature를 전송하도록 강제하려면 다음 MQTT 명령을 사용합니다:
* `topic`: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration
* `payload`: 현재_보정값

현재_보정값은 0이어도 되지만, 이 기기에 대해 온도를 보정한 경우 현재 값을 전송하세요.
이 명령 후 서모스탯은 두 개의 메시지로 응답합니다. 하나는 보정 변경 확인이고, 다른 하나는 현재 local_temperature입니다.

### 기기 특정 기능 제어

- 단순히 켜고 끄기만 필요한 경우, `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 "force"를 설정할 수 있습니다.
  
  페이로드 값은 다음과 같습니다:\
  open -> 밸브를 완전히 열고 유지\
  close -> 밸브를 완전히 닫고 유지\
  normal -> 정상 밸브 작동

    ```json
    {
        "force": "open"
    }
    ```

- `zigbee2mqtt/FRIENDLY_NAME/set/schedule` 토픽을 사용하여 평일 또는 휴일(예: 주말)에 6개 타임슬롯으로 일정을 설정합니다. 페이로드 값 예시:

    ```json
    {
        "workdays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    ```

    ```json
    {
        "holidays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    ```
- `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 "week" 일정 패턴을 설정할 수 있습니다. 페이로드 값:
  5+2 -> 평일이 월~금이고 토~일이 휴일인 경우 사용
  6+1 -> 평일이 월~토이고 일요일이 휴일인 경우 사용
  7 -> 평일 일정이 전체 주에 적용되는 경우 사용

    ```json
    {
        "week": "5+2"
    }
    ```

- `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 "boost time"을 설정할 수 있습니다. 단, 값은 100의 배수로 내림됩니다.

    ```json
    {
        "boost_time": 200
    }
    ```
- `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 기기의 "comfort temperature" 수준을 설정할 수 있습니다.

    ```json
    {
        "comfort_temperature": 21
    }
    ```
- `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 기기의 "eco temperature" 수준을 설정할 수 있습니다.

    ```json
    {
        "eco_temperature": 17
    }
    ```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Window open (binary)
Window open?.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` window open is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Valve detection (switch)
The current state of this switch is in the published state under the `valve_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_detection": "ON"}`, `{"valve_detection": "OFF"}` or `{"valve_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Position (numeric)
Position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `local_temperature_calibration`, `preset`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device, in the `heat` mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode `auto` instead setting the desired temperature.. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`, `auto`, `off`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `schedule`, `manual`, `boost`, `complex`, `comfort`, `eco`, `away`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `0.5`.

### Auto lock (switch)
The current state of this switch is in the published state under the `auto_lock` property (value is `AUTO` or `MANUAL`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_lock": "AUTO"}`, `{"auto_lock": "MANUAL"}` or `{"auto_lock": "undefined"}`.
It's not possible to read (`/get`) this value.

### Away mode (switch)
The current state of this switch is in the published state under the `away_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": "ON"}`, `{"away_mode": "OFF"}` or `{"away_mode": "undefined"}`.
It's not possible to read (`/get`) this value.

### Away preset days (numeric)
Away preset days.
Value can be found in the published state on the `away_preset_days` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_preset_days": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Boost time (numeric)
Boost time.
Value can be found in the published state on the `boost_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `900`.
The unit of this value is `s`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Force (enum)
Force the valve position.
Value can be found in the published state on the `force` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"force": NEW_VALUE}`.
The possible values are: `normal`, `open`, `close`.

### Max temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `16` and the maximum value is `70`.
The unit of this value is `°C`.

### Min temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `°C`.

### Away preset temperature (numeric)
Away preset temperature.
Value can be found in the published state on the `away_preset_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_preset_temperature": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `35`.
The unit of this value is `°C`.

### Week (enum)
Week format user for schedule.
Value can be found in the published state on the `week` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"week": NEW_VALUE}`.
The possible values are: `5+2`, `6+1`, `7`.

### Workdays schedule (text)
Workdays schedule, 6 entries max, example: "00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C".
Value can be found in the published state on the `workdays_schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"workdays_schedule": NEW_VALUE}`.

### Holidays schedule (text)
Holidays schedule, 6 entries max, example: "00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C".
Value can be found in the published state on the `holidays_schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holidays_schedule": NEW_VALUE}`.

