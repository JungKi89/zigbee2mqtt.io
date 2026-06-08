---
title: "Bosch BTH-RM control via MQTT"
description: "Integrate your Bosch BTH-RM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-27T19:44:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BTH-RM

|     |     |
|-----|-----|
| Model | BTH-RM  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Room thermostat II |
| Exposes | operating_mode, climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, occupied_cooling_setpoint, system_mode, running_state, control_sequence_of_operation), setpoint_change_source, humidity, cable_sensor_mode, cable_sensor_temperature, window_detection, boost_heating, child_lock, display_brightness, display_switch_on_duration, activity_led, error_state, battery, voltage, battery_low |
| Picture | ![Bosch BTH-RM](https://www.zigbee2mqtt.io/images/devices/BTH-RM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 알려진 문제
펌웨어 버전 [`0.2.9`](https://github.com/Koenkk/zigbee-OTA/pull/873)가 과도한 배터리 소모를 유발한다는 [여러](https://github.com/Koenkk/zigbee2mqtt/issues/30048) [보고](https://community.bosch-smarthome.com/t5/technische-probleme/raumthermostat-2-batterie-alle-2-monate-leer/td-p/93359)가 있습니다. 공식 OTA 업데이트가 아직 철회되지 않았으므로, Bosch의 수정 버전이 출시될 때까지 업데이트를 하지 않을 것을 권장합니다.

### 페어링
이 디바이스를 페어링하려면 설치 코드를 통해 기기를 등록해야 합니다. 배터리 커버 안쪽의 QR 코드를 스마트폰으로 스캔하여 설치 코드를 얻을 수 있습니다. 그런 다음 디바이스를 페어링 모드로 진입시킵니다. Zigbee2MQTT에서 "Settings" --> "Tools"로 이동한 후 "Add install code"를 클릭합니다. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 다음, 참가 허용(permit joining)이 활성화되어 있는지 확인합니다. 디바이스가 네트워크에 참가할 때까지 기다립니다.


### 공장 초기화
디바이스를 공장 초기화하려면 배터리 중 하나를 제거합니다. 전면의 메인 버튼을 누른 채로 배터리를 다시 삽입합니다. 디바이스 LED가 "RES"를 표시하며 주황색으로 깜박이기 시작하면 메인 버튼을 놓고, LED가 초록색으로 켜질 때까지 다시 누른 채로 유지합니다. 그러면 디바이스가 보정(calibration) 과정으로 재시작되고 참가할 Zigbee 네트워크를 탐색합니다. 문제가 발생한 경우 LED가 빨간색으로 깜박이기 시작합니다. 이 경우 처음부터 다시 시도해야 합니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Operating mode (enum)
Bosch-specific operating mode.
Value can be found in the published state on the `operating_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operating_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operating_mode": NEW_VALUE}`.
The possible values are: `schedule`, `manual`, `pause`.

### Climate 
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `occupied_cooling_setpoint`, `system_mode`, `running_state`, `control_sequence_of_operation`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `occupied_cooling_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_cooling_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_cooling_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `cool`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Setpoint change source (enum)
Source of the current setpoint temperature.
Value can be found in the published state on the `setpoint_change_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"setpoint_change_source": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Cable sensor mode (enum)
Select a configuration for the sensor connection. If you select "with_regulation", the measured temperature on the cable sensor is used by the heating/cooling algorithm instead of the local temperature..
Value can be found in the published state on the `cable_sensor_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cable_sensor_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cable_sensor_mode": NEW_VALUE}`.
The possible values are: `not_used`, `cable_sensor_without_regulation`, `cable_sensor_with_regulation`.

### Cable sensor temperature (numeric)
Measured temperature value on the cable sensor (if enabled).
Value can be found in the published state on the `cable_sensor_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cable_sensor_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Window detection (binary)
Activates the window open mode, where the thermostat disables any heating/cooling to prevent unnecessary energy consumption. Please keep in mind that the device itself does not detect any open windows!.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `ON` window detection is ON, if `OFF` OFF.

### Activate boost heating (binary)
Activate boost heating (opens TRV for 5 minutes).
Value can be found in the published state on the `boost_heating` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"boost_heating": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` activate boost heating is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the thermostat.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Display brightness (numeric)
Sets brightness of the display.
Value can be found in the published state on the `display_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Display switch-on duration (numeric)
Sets the time before the display is automatically switched off.
Value can be found in the published state on the `display_switch_on_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_switch_on_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_switch_on_duration": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `s`.

### Activity LED state (enum)
Determines the state of the little dot on the display next to the heating/cooling symbol.
Value can be found in the published state on the `activity_led` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"activity_led": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"activity_led": NEW_VALUE}`.
The possible values are: `off`, `auto`, `on`.

### Error state (text)
Indicates whether the device encounters any errors or not.
Value can be found in the published state on the `error_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"error_state": ""}`.
It's not possible to write (`/set`) this value.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

