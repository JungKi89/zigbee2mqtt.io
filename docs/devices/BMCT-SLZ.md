---
title: "Bosch BMCT-SLZ control via MQTT"
description: "Integrate your Bosch BMCT-SLZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:34:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BMCT-SLZ

|     |     |
|-----|-----|
| Model | BMCT-SLZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Light/shutter control unit II |
| Exposes | device_mode, power, energy, reset_energy_meters |
| Picture | ![Bosch BMCT-SLZ](https://www.zigbee2mqtt.io/images/devices/BMCT-SLZ.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
이 기기는 설치 코드를 사용하여 페어링해야 합니다. 설치 코드는 스마트폰으로 기기의 QR 코드를 스캔하여 얻을 수 있습니다 (95자리, 영숫자). 기기는 전원이 켜지거나 초기화된 후 3분 동안 페어링 모드가 활성화됩니다. 페어링 모드를 다시 활성화하려면 기기가 아직 페어링되지 않은 상태에서 아무 버튼이나 누르세요. zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.

#### 기기 제거 후 페어링 실패
기기가 제거된 후 네트워크에 다시 접속할 때 페어링이 실패할 수 있습니다. 이 경우 zigbee2mqtt에 기기가 나열되지만 검색이 실패하고 오류 메시지가 발생합니다. 이 문제를 해결하려면 설치 코드를 다시 추가하세요. 기기가 자동으로 올바르게 재검색됩니다.

### 설정
기기는 2채널 조명 스위치 또는 롤러 셔터/윈도우 블라인드로 작동할 수 있습니다. 페어링 후 기기 모드는 처음에 'disabled'로 설정되어 있어 스위칭이나 열기/닫기 명령을 수락하지 않습니다. 프런트엔드를 통해 또는 `zigbee2mqtt/FRIENDLY_NAME/set`에 `{"device_mode": "shutter"}` 또는 `{"device_mode": "light"}`를 게시하여 기기 모드를 'light' 또는 'shutter'로 설정해야 합니다.

### 초기화
기기를 초기 설정으로 초기화하려면 LED 옆에 있는 시스템 버튼을 기기 LED가 노란색으로 깜빡이기 시작할 때까지 길게 누르세요. 시스템 버튼을 놓고 LED가 녹색으로 켜질 때까지 다시 길게 누르세요. 그러면 기기가 재시작되고 접속할 Zigbee 네트워크를 검색합니다. 문제가 발생한 경우 (예: 두 번째 버튼 누름이 너무 짧은 경우) 기기 LED가 빨간색으로 깜빡입니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Device mode (enum)
Device mode.
Value can be found in the published state on the `device_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_mode": NEW_VALUE}`.
The possible values are: `light`, `shutter`, `disabled`.

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

