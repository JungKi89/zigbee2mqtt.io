---
title: "Aqara SJCGQ11LM control via MQTT"
description: "Integrate your Aqara SJCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:54
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara SJCGQ11LM

|     |     |
|-----|-----|
| Model | SJCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Water leak sensor |
| Exposes | battery, voltage, device_temperature, power_outage_count, trigger_count, water_leak, battery_low |
| Picture | ![Aqara SJCGQ11LM](https://www.zigbee2mqtt.io/images/devices/SJCGQ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR2032 배터리를 사용합니다.

### 페어링
디바이스 상단(물방울 로고)을 세게 누르는 방식으로 리셋 버튼을 약 5초간 길게 누릅니다(물방울 아래 디바이스 내부의 파란 불빛이 깜박이기 시작할 때까지). 이후 디바이스가 자동으로 네트워크에 참가합니다.
경우에 따라 센서가 페어링을 거부할 수 있습니다. 배터리를 제거한 후, 다시 삽입하는 동시에 페어링이 완료될 때까지 리셋 버튼을 누른 채로 유지하세요.

> [!NOTE]
> 페어링 문제가 발생하는 경우:
> - 리셋 버튼을 약 5초간 눌러 깜박임이 나타날 때까지 기다린 후, 1초 대기하고 버튼을 짧게 2번 눌러 통신을 강제합니다.
> - 다른 네트워크에서 디바이스를 이전하는 경우, 새 네트워크에 페어링하기 전에 이전 네트워크를 끄세요.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Trigger count (numeric)
Indicates how many times the sensor was triggered (since last scheduled report).
Value can be found in the published state on the `trigger_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

