---
title: "NodOn SIN-4-FP-21 control via MQTT"
description: "Integrate your NodOn SIN-4-FP-21 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# NodOn SIN-4-FP-21

|     |     |
|-----|-----|
| Model | SIN-4-FP-21  |
| Vendor  | [NodOn](/supported-devices/#v=NodOn)  |
| Description | Pilot wire heating module |
| Exposes | switch (state), power_on_behavior, power, energy, pilot_wire_mode |
| Picture | ![NodOn SIN-4-FP-21](https://www.zigbee2mqtt.io/images/devices/SIN-4-FP-21.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
### 페어링

처음으로 전원이 켜지면 릴레이 스위치 LED가 주황색으로 깜빡이며 Zigbee 네트워크 참가를 시도합니다.
릴레이 스위치가 네트워크에 올바르게 참가하면 LED가 녹색으로 바뀝니다.
15분 이내에 네트워크에 참가하지 못하면 LED가 주황색으로 바뀝니다. 릴레이 스위치 버튼을 잠깐 누르고 다시 시도하세요.

모듈을 네트워크에서 제거하려면 모듈 초기화를 수행하세요:
1. 모듈 버튼을 5초 이상 누릅니다. LED가 주황색으로 깜빡입니다.
2. 버튼을 다시 (짧게) 눌러 초기화를 확인합니다. 초기화가 성공하면 LED가 빨간색과 녹색으로 번갈아 깜빡이다가 주황색으로 깜빡입니다.
3. 모듈이 원래 구성으로 복원되어 새로운 Zigbee 네트워크 참가 준비가 됩니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Pilot wire mode (enum)
Controls the target temperature of the heater, with respect to the temperature set on that heater. Possible values: comfort (target temperature = heater set temperature) eco (target temperature = heater set temperature - 3.5°C), frost_protection (target temperature = 7 to 8°C), off (heater stops heating), and the less commonly used comfort_-1 (target temperature = heater set temperature - 1°C), comfort_-2 (target temperature = heater set temperature - 2°C),..
Value can be found in the published state on the `pilot_wire_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pilot_wire_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pilot_wire_mode": NEW_VALUE}`.
The possible values are: `comfort`, `eco`, `frost_protection`, `off`, `comfort_-1`, `comfort_-2`.

