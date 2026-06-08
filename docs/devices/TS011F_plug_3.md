---
title: "Tuya TS011F_plug_3 control via MQTT"
description: "Integrate your Tuya TS011F_plug_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS011F_plug_3

|     |     |
|-----|-----|
| Model | TS011F_plug_3  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart plug (with power monitoring by polling) |
| Exposes | switch (state), countdown, power_outage_memory, indicator_mode, power, current, voltage, energy, child_lock |
| Picture | ![Tuya TS011F_plug_3](https://www.zigbee2mqtt.io/images/devices/TS011F_plug_3.png) |
| White-label | VIKEFON TS011F, BlitzWolf BW-SHP15, AVATTO MIUCOT10Z, NEO PLUG-001SPB2 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 디바이스 꺼짐 문제
이 플러그가 무작위로 꺼진다고 여러 사람이 보고했습니다. [GitHub 이슈](https://github.com/Koenkk/zigbee2mqtt/issues/11648)를 참조하세요.

### 속성 리포팅 기능 오류

2021년 4분기 이후에 생산된 플러그에 기본 탑재된 펌웨어 버전 1.0.5부터 이 플러그의 핵심 기능이 손상되었습니다. TuYa가 전력, 전압 및 전류 값의 자동 리포팅을 비활성화하여 대신 폴링이 필요합니다. 폴링 주기는 `measurement_poll_interval` 옵션으로 제어할 수 있습니다.

플러그가 영향을 받는 경우, `TS011F_plug_1` 대신 [TS011F_plug_3](TS011F_plug_3.md)으로 감지됩니다.

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/9057 -->

### 에너지 초기화

`소비 에너지 합계`를 초기화하려면 Dev 콘솔을 사용하여 다음을 실행합니다:
`Endpoint`: `1`
`Cluster`: `0x00` (`genBasic`)
`Command`: `0` (`resetFactDefault`)
`Payload`: (변경하지 마세요)

다음에 플러그가 폴링될 때 `소비 에너지 합계`가 다시 0부터 시작됩니다.

### 페어링

전원 켜기/끄기 버튼을 길게 누릅니다(5초). 버튼이 파란색으로 깜박여 페어링 모드임을 나타냅니다. 파란색 깜박임이 멈추면 페어링되어 LED가 빨간색으로 표시됩니다. LED가 파란색이면 디바이스가 페어링되지 않았거나 페어링에 실패한 것입니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Countdown (numeric)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power outage memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on/off`, `on`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

