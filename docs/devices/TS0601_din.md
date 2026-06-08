---
title: "Tuya TS0601_din control via MQTT"
description: "Integrate your Tuya TS0601_din via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-01T14:47:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_din

|     |     |
|-----|-----|
| Model | TS0601_din  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Zigbee smart energy meter DDS238-2 Zigbee |
| Exposes | switch (state), voltage, power, current, energy |
| Picture | ![Tuya TS0601_din](https://www.zigbee2mqtt.io/images/devices/TS0601_din.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
페어링 모드로 진입하려면 화면에 "--Init-"이 표시될 때까지 버튼을 누르고 있습니다.

### 수동 토글
릴레이를 수동으로 전환하려면 버튼을 세 번 연속으로 누릅니다.

### 상태 업데이트
아래 "Exposes" 섹션에 언급된 것처럼 노출된 값을 읽기(`/get`)할 수 없습니다. 기기는 30초마다 고정된 속도로 값을 직접 전송합니다. 전송된 값은 전송 시점의 정확한 수치입니다. 따라서 전류와 같은 값의 읽기가 불안정할 수 있습니다. 예를 들어 릴레이에 연결된 부하가 15초 동안 전류를 소비하고 이후 15초 동안 유휴 상태(전력 소비 없음)라면, 릴레이가 전류 값을 0으로 전송할 수 있습니다.

안정적인 값은 에너지뿐이며, 이는 증분식으로 계산되어 저장됩니다.

### 에너지 값
이 값은 미터가 약 0.2 kWh를 측정할 때까지 `null`로 표시됩니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

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

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

