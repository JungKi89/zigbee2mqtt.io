---
title: "Custom devices (DiY) MiCASAGasCounter control via MQTT"
description: "Integrate your Custom devices (DiY) MiCASAGasCounter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:09:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) MiCASAGasCounter

|     |     |
|-----|-----|
| Model | MiCASAGasCounter  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | Zigbee Gas counter |
| Exposes | gas, battery, voltage, battery_low, gas_counter_set |
| Picture | ![Custom devices (DiY) MiCASAGasCounter](https://www.zigbee2mqtt.io/images/devices/MiCASAGasCounter.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
>> ## Notes
Zigbee 가스 카운터로, 카운터에서 직접 가스 소비량을 측정하여 코디네이터에 값을 보고합니다.
홈 서버의 개입 없이 자체적으로 계량하는 기기를 만드는 것이 목표입니다.
이 기기는 DIY 장치이므로 문서를 확인해야 합니다.
이 기기를 Zigbee2MQTT와 함께 사용하려면 커스텀 펌웨어를 플래시해야 하며, 방법은 [여기](https://github.com/IgnacioHR/ZigbeeGasCounter)에 설명되어 있습니다. 직접 유닛을 제작해야 합니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Gas (numeric)
Total gas consumption in m³.
Value can be found in the published state on the `gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"gas": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `m³`.

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

### Gas counter set (numeric)
Write absolute gas meter value.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gas_counter_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.

