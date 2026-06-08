---
title: "Xiaomi ZNCZ02LM control via MQTT"
description: "Integrate your Xiaomi ZNCZ02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi ZNCZ02LM

|     |     |
|-----|-----|
| Model | ZNCZ02LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mi smart plug |
| Exposes | switch (state), power, energy, device_temperature, power_outage_memory |
| Picture | ![Xiaomi ZNCZ02LM](https://www.zigbee2mqtt.io/images/devices/ZNCZ02LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
기기의 버튼을 약 10초 동안 길게 누릅니다
(파란색 불이 깜박이기 시작했다가 멈출 때까지). 버튼을 놓고 기다립니다.

페어링 프로세스가 시작되기 전에 기존 코디네이터에서 스위치 페어링을 해제해야 할 수도 있습니다.
이를 할 수 없다면 배터리(있는 경우)를 제거하고, 버튼을 눌러(기기를 완전히 방전) 배터리를 다시 장착한 후 다시 페어링을 시도해 보세요.

### 정전 후 상태 기억
이 옵션을 사용하면 기기가 전원에 재연결될 때 마지막 켜기/끄기 상태를 복원합니다.
이 옵션을 설정하려면 `zigbee2mqtt/FRIENDLY_NAME/set`에 페이로드 `{"power_outage_memory": true}` (또는 `false`)를 게시합니다.
그런 다음 플러그/스위치의 버튼으로 한 번 토글하면, 이후부터 전원 재연결 시 상태를 복원합니다.


### 전압
일부 버전의 플러그는 전압을 제공합니다. 이는 기기의 펌웨어에 따라 다릅니다. `dateCode` `02-28-2017`인 것이 작동 확인됩니다 (`data/database.db`에서 확인 가능). Xiaomi는 펌웨어 파일을 제공하지 않으므로 소프트웨어를 다운그레이드/업그레이드할 수 없습니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage memory (binary)
Enable/disable the power outage memory, this recovers the on/off mode after power failure.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
If value equals `true` power outage memory is ON, if `false` OFF.

