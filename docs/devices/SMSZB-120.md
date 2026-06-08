---
title: "Develco SMSZB-120 control via MQTT"
description: "Integrate your Develco SMSZB-120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-08T17:49:06Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco SMSZB-120

|     |     |
|-----|-----|
| Model | SMSZB-120  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Smoke detector with siren |
| Exposes | smoke, battery_low, test, max_duration, alarm, reliability, fault, temperature, battery, voltage |
| Picture | ![Develco SMSZB-120](https://www.zigbee2mqtt.io/images/devices/SMSZB-120.png) |
| White-label | Frient 94430, Cavius 2103 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### 공장 초기화
디바이스를 공장 초기화하려면 빨간 표시등이 연속적으로 깜박이기 시작할 때까지 유일한 버튼을 누르고 유지합니다. 디바이스가 초기화되고 다시 페어링이 가능해집니다.

Develco 기술 매뉴얼에 따르면 SMSZB-120은 네트워크를 검색할 때 Zigbee 채널 11~24를 스캔합니다.

### 경고 사용법
경고(Warning)는 단일 모드인 `burglar`만 지원합니다.

`warning` 사용 시간은 `max_duration`보다 짧을 수 있지만 더 길게는 설정할 수 없습니다. `max_duration`이 60초로 설정된 상태에서 `duration`을 90초로 설정하려 하면 경고는 60초만 적용됩니다. `max_duration`의 기본값은 240초입니다.

이 디바이스는 `strobe` 및 `strobe_duty_cycle` 기능을 지원하지 않습니다.


### 알람 수동 트리거 (구형 `warning` 방식)
연기 알람을 수동으로 트리거하려면 `zigbee2mqtt/FRIENDLY_NAME/set`으로 다음 페이로드를 발행합니다:

시작:
* `{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}`
여기서:
- `duration`: 알람이 울리는 초 단위 시간
- `level`: `low`, `medium`, `high`, `very_high`
- `mode`: `stop`, `burglar`
- `strobe`: 지원하지 않음
- `strobe_duty_cycle`: 지원하지 않음

중지:
* `{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}`

### 알람 트리거 (간단한 방법)
`zigbee2mqtt/FRIENDLY_NAME/set`으로 페이로드 `{"alarm": "START"}` 및 `{"alarm": "OFF"}`를 발행하여 설정할 수 있습니다.
`max_duration`은 Zigbee2MQTT UI에서 설정하거나 `{"max_duration": NEW_VALUE}`를 발행하여 설정합니다.
이 알람은 최고 볼륨으로 사전 설정되어 있습니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Max duration (numeric)
Duration of Siren.
Value can be found in the published state on the `max_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Alarm (binary)
Manual Start of Siren.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `START` alarm is ON, if `OFF` OFF.

### Reliability (enum)
Indicates reason if any fault.
Value can be found in the published state on the `reliability` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `no_fault_detected`, `unreliable_other`, `process_error`.

### Fault (binary)
Indicates whether the device are in fault state.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` fault is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

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

