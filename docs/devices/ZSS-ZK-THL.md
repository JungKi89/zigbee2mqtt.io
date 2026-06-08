---
title: "Moes ZSS-ZK-THL control via MQTT"
description: "Integrate your Moes ZSS-ZK-THL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-30T19:17:03Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZSS-ZK-THL

|     |     |
|-----|-----|
| Model | ZSS-ZK-THL  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart temperature and humidity meter with display |
| Exposes | battery, humidity, temperature, illuminance |
| Picture | ![Moes ZSS-ZK-THL](https://www.zigbee2mqtt.io/images/devices/ZSS-ZK-THL.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
이 기기는 사용 가능한 전원과 온도 센서 간의 심각한 설계 결함이 있어 권장하지 않습니다. 자세한 내용은 [https://pvvx.github.io/ZSS-ZK-THL/](https://pvvx.github.io/ZSS-ZK-THL/)을 참조하세요.

### 페어링
화면에 점 3개가 나타날 때까지 측면의 주황색 버튼을 누릅니다.

### 호환성 문제

이 기기는 Tuya Hub에 연결되지 않으면 잠시 후 멈춥니다. [#7535](https://github.com/Koenkk/zigbee2mqtt/issues/7535)를 참조하세요. 일부 사용자는 릴레이 기기를 통해 허브에 연결하면 정상 동작한다고 보고합니다.

### 사용 제한

기기는 조도 변화를 즉시 보고합니다. 반면 온도는 한 시간마다 보고되므로 이 기기는 온도 조절기 구축에는 적합하지 않습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

