---
title: "Bosch BSP-FZ2 control via MQTT"
description: "Integrate your Bosch BSP-FZ2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSP-FZ2

|     |     |
|-----|-----|
| Model | BSP-FZ2  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Smart plug compact (type F plug) |
| Exposes | switch (state), power_on_behavior, power, energy, reset_energy_meters |
| Picture | ![Bosch BSP-FZ2](https://www.zigbee2mqtt.io/images/devices/BSP-FZ2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
이 기기를 페어링하려면 스마트폰으로 기기의 QR 코드 스티커를 스캔하여 얻은 설치 코드를 통해 기기를 설치해야 합니다. 그런 다음 기기를 페어링 모드로 설정하세요. zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.


### 초기화
기기를 초기화하려면 전원을 콘센트에서 뽑으세요. 상단의 메인 버튼을 누른 채로 다시 꽂으세요. LED가 주황색으로 깜빡이기 시작하면 메인 버튼을 놓고 LED가 녹색으로 켜질 때까지 다시 길게 누르세요. 그러면 기기가 재시작되고 접속할 Zigbee 네트워크를 검색합니다. 문제가 발생한 경우 기기 LED가 빨간색으로 깜빡이기 시작합니다. 처음부터 다시 시작해야 합니다.
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

### Reset energy meters (enum)
Triggers the reset of all energy meters on the device to 0 kWh.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_energy_meters": NEW_VALUE}`.
The possible values are: `reset`.

