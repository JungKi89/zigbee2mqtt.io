---
title: "Acova ALCANTARA2 control via MQTT"
description: "Integrate your Acova ALCANTARA2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-02-01T18:08:24
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Acova ALCANTARA2

|     |     |
|-----|-----|
| Model | ALCANTARA2  |
| Vendor  | [Acova](/supported-devices/#v=Acova)  |
| Description | Alcantara 2 heater |
| Exposes | climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, running_state) |
| Picture | ![Acova ALCANTARA2](https://www.zigbee2mqtt.io/images/devices/ALCANTARA2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링

- `Mode` 버튼을 길게 눌러 설정 모드로 진입합니다
- 이미 Enki box와 페어링된 경우, `-` (마이너스) 버튼을 `Off`가 표시될 때까지 길게 누릅니다 (전용 앱을 통해 Enki box에서 히터를 먼저 제거해야 할 수도 있습니다)
- `+` (플러스) 버튼을 화면에 코드가 나타날 때까지 길게 누릅니다 (이는 여기서 사용하지 않는 Enki box 앱용 페어링 코드입니다)
- zigbee2mqtt에서 페어링 모드를 활성화합니다
- 화면에 "진행 표시줄"이 나타날 때까지 `+` 버튼을 누릅니다 (길게 눌러야 하는 경우도 있습니다)
- 페어링을 기다립니다. 몇 초 후에 기기가 zigbee2mqtt에 표시되고 화면에 `On`이 표시되어야 합니다
- `Mode` 버튼을 길게 눌러 설정 모드를 종료합니다 (또는 약 30초에서 1분 대기). 이제 화면 오른쪽 상단에 "Box"와 온도 설정값이 표시되어야 합니다
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `28`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

