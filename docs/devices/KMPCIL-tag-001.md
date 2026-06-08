---
title: "KMPCIL KMPCIL-tag-001 control via MQTT"
description: "Integrate your KMPCIL KMPCIL-tag-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-01T15:00:02
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# KMPCIL KMPCIL-tag-001

|     |     |
|-----|-----|
| Model | KMPCIL-tag-001  |
| Vendor  | [KMPCIL](/supported-devices/#v=KMPCIL)  |
| Description | Arrival sensor |
| Exposes | battery, presence, power_state, occupancy, vibration, temperature |
| Picture | ![KMPCIL KMPCIL-tag-001](https://www.zigbee2mqtt.io/images/devices/KMPCIL-tag-001.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 설치
도착 센서는 처음 전원을 켜면 페어링 모드가 됩니다. 다음 단계에 따라 센서를 초기화하여 페어링 모드로 강제로 돌아갈 수 있습니다.

1. 모든 전원 제거 (배터리 및 DC)
2. 보드 뒷면의 버튼을 누릅니다.
3. DC 전원을 연결하고 4~5초를 셉니다 (그 이상은 안 됨).
4. 버튼을 놓습니다. 이 시점에서 모듈이 페어링 모드가 됩니다.

도착 센서가 페어링 모드가 되면, 새 디바이스에 대한 표준 Zigbee2MQTT 페어링 프로세스를 따르세요.

### 추가 참고 사항
https://community.home-assistant.io/t/zigbee-arrival-sensor-for-car/382529/7 를 참조하세요.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `presence_timeout_dc`: Time in seconds after which presence is cleared after detecting it (default 60 seconds) while in DC. The value must be a number with a minimum value of `60`

* `presence_timeout_battery`: Time in seconds after which presence is cleared after detecting it (default 420 seconds) while in Battery. The value must be a number with a minimum value of `120`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Power state (binary)
Value can be found in the published state on the `power_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power state is ON, if `false` OFF.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

