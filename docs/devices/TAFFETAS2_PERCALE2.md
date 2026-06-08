---
title: "Acova TAFFETAS2/PERCALE2 control via MQTT"
description: "Integrate your Acova TAFFETAS2/PERCALE2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Acova TAFFETAS2/PERCALE2

|     |     |
|-----|-----|
| Model | TAFFETAS2/PERCALE2  |
| Vendor  | [Acova](/supported-devices/#v=Acova)  |
| Description | Taffetas 2 / Percale 2 heater |
| Exposes | climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration), occupancy |
| Picture | ![Acova TAFFETAS2/PERCALE2](https://www.zigbee2mqtt.io/images/devices/TAFFETAS2-PERCALE2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링

- `Mode` 버튼을 길게 눌러 설정 모드로 진입합니다
- Enki 박스와 이미 페어링된 경우, `-` (빼기) 버튼을 `Off`가 표시될 때까지 길게 누릅니다 (전용 앱을 사용하여 Enki 박스에서 히터를 먼저 제거해야 할 수도 있습니다)
- `+` (더하기) 버튼을 화면에 코드가 나타날 때까지 길게 누릅니다 (이 코드는 여기서는 사용하지 않는 Enki 박스 앱의 페어링 코드입니다)
- zigbee2mqtt에서 페어링 모드를 켭니다
- 화면에 "진행 표시줄"이 나타날 때까지 `+` 버튼을 누릅니다 (경우에 따라 길게 누릅니다)
- 페어링을 기다립니다. 기기가 몇 초 내에 zigbee2mqtt에 표시되고 화면에 `On`이 표시되어야 합니다
- `Mode` 버튼을 길게 눌러 설정 모드를 종료합니다 (또는 약 30초~1분 기다립니다). 기기 화면 오른쪽 상단에 "Box"와 온도 설정값이 표시되어야 합니다
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `28`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-2.5` and the maximum value is `2.5` with a step size of `0.1`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

