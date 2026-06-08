---
title: "Bosch BTH-RA control via MQTT"
description: "Integrate your Bosch BTH-RA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-12-01T15:07:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BTH-RA

|     |     |
|-----|-----|
| Model | BTH-RA  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Radiator thermostat II |
| Exposes | climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, running_state, pi_heating_demand), setpoint_change_source, operating_mode, window_detection, boost_heating, remote_temperature, child_lock, display_brightness, display_switch_on_duration, display_orientation, displayed_temperature, valve_adapt_status, automatic_valve_adapt, valve_adapt_process, error_state, battery, battery_low |
| Picture | ![Bosch BTH-RA](https://www.zigbee2mqtt.io/images/devices/BTH-RA.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
이 디바이스를 페어링하려면 설치 코드를 통해 기기를 등록해야 합니다. 이 TRV는 Zigbee 전용 버전과 Zigbee + Matter 버전 두 가지로 출시되어 있으며, 버전에 따라 페어링 과정이 약간 다릅니다.

#### Zigbee 전용 TRV 페어링 (Matter 미지원 버전)
배터리 커버 안쪽의 QR 코드를 스마트폰으로 스캔하여 설치 코드를 얻을 수 있습니다. 그런 다음 배터리를 재삽입하여 디바이스를 페어링 모드로 진입시킵니다. 디스플레이에 ">o<"가 표시되면 페어링 모드 상태입니다. 페어링이 완료되기 전에 밸브의 버튼을 누르지 마세요. 이후 아래의 "Zigbee2MQTT 설치 코드 입력" 섹션으로 진행하세요.

#### Zigbee + Matter TRV 페어링 (`Smart radiator thermostat II [+M]`)
Matter 지원 버전을 페어링하려는 경우, QR 코드는 Matter 전용입니다. IEEE 주소와 설치 코드(QR 코드 옆에 표시됨)를 조합하여 설치 코드를 구성할 수 있습니다: Bosch 접두사(40자), IEEE 주소(16자), DLK, 설치 코드(36자). 설치 코드 예시: `RB01SG0D83101826480080000000000000000000XXXXXXXXXXXXXXXXDLKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
디바이스도 Zigbee 페어링 모드로 진입해야 합니다. 초기화 후 LED 점멸로 페어링 모드를 표시합니다:
- 파란색 점멸: Matter 페어링 모드
- 주황색 점멸: Zigbee 페어링 모드
Matter 페어링 모드에서 Zigbee 페어링 모드로 전환하려면 공장 초기화 후 메인 버튼을 3초간 누르세요. 디스플레이에 "Z"가 표시되면 Zigbee 페어링 모드로 전환된 것입니다. 이후 아래의 "Zigbee2MQTT 설치 코드 입력" 섹션으로 진행하세요.

### Zigbee2MQTT에 설치 코드 입력
Zigbee2MQTT에서 "Settings" --> "Tools"로 이동한 후 "Add install code"를 클릭합니다. 설치 코드를 붙여넣고 "OK"를 클릭하여 확인한 다음, 참가 허용(permit joining)이 활성화되어 있는지 확인합니다. 디바이스가 네트워크에 참가할 때까지 기다립니다. 밸브 디스플레이에는 여전히 ">o<"가 표시되어 있어야 합니다. 이제 밸브의 버튼을 눌러 밸브 적응(valve adaption) 과정을 시작할 수 있습니다.

### 공장 초기화
디바이스를 공장 초기화하려면 배터리 중 하나를 제거합니다. 전면의 메인 버튼을 누른 채로 배터리를 다시 삽입합니다. 디바이스 LED가 "RES"를 표시하며 주황색으로 깜박이기 시작하면 메인 버튼을 놓고, LED가 초록색으로 켜질 때까지 다시 누른 채로 유지합니다. 그러면 디바이스가 보정(calibration) 과정으로 재시작되고 참가할 Zigbee 네트워크를 탐색합니다. 문제가 발생한 경우 LED가 빨간색으로 깜박이기 시작합니다. 이 경우 처음부터 다시 시도해야 합니다.

### 제조사 전용 동작 모드 사용
Zigbee 사양에 따라 디바이스가 노출하는 `system_mode`는 항상 'heat'입니다. 디바이스의 실제 동작 모드를 설정하거나 읽으려면 제조사 전용 기능인 'operating mode'를 사용하세요(아래 참고).
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `system_mode`, `running_state`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pi_heating_demand": ""}`.
- `local_temperature`: Temperature used by the heating algorithm. This is the temperature measured on the device (by default) or the remote temperature (if set within the last 30 min). (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Setpoint change source (enum)
Source of the current setpoint temperature.
Value can be found in the published state on the `setpoint_change_source` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"setpoint_change_source": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Operating mode (enum)
Bosch-specific operating mode.
Value can be found in the published state on the `operating_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operating_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operating_mode": NEW_VALUE}`.
The possible values are: `schedule`, `manual`, `pause`.

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

### Remote temperature (numeric)
Input for remote temperature sensor. Required at least every 30 minutes to prevent fallback to the internal sensor!.
Value can be found in the published state on the `remote_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

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

### Display orientation (enum)
You can rotate the display content by 180° here. This is recommended if your thermostat is fitted vertically, for instance..
Value can be found in the published state on the `display_orientation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_orientation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_orientation": NEW_VALUE}`.
The possible values are: `standard_arrangement`, `rotated_by_180_degrees`.

### Displayed temperature (enum)
Select which temperature should be displayed on your radiator thermostat display.
Value can be found in the published state on the `displayed_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"displayed_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"displayed_temperature": NEW_VALUE}`.
The possible values are: `set_temperature`, `measured_temperature`.

### Valve adaptation status (enum)
Specifies the current status of the valve adaptation.
Value can be found in the published state on the `valve_adapt_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_adapt_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `none`, `ready_to_calibrate`, `calibration_in_progress`, `error`, `success`.

### Automatic valve adaptation requested (binary)
Specifies if an automatic valve adaptation is being requested by the thermostat (for example after a successful firmware upgrade). If this is the case, the valve adaptation will be automatically started as soon as the adaptation status is 'ready_to_calibrate' or 'error'..
Value can be found in the published state on the `automatic_valve_adapt` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"automatic_valve_adapt": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` automatic valve adaptation requested is ON, if `false` OFF.

### Trigger adaptation process (enum)
Trigger the valve adaptation process. Only possible when the adaptation status is 'ready_to_calibrate' or 'error'..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_adapt_process": NEW_VALUE}`.
The possible values are: `adapt`.

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

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

