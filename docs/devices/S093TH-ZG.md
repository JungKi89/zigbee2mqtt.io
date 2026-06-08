---
title: "HZC Electric S093TH-ZG control via MQTT"
description: "Integrate your HZC Electric S093TH-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-10-10T21:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HZC Electric S093TH-ZG

|     |     |
|-----|-----|
| Model | S093TH-ZG  |
| Vendor  | [HZC Electric](/supported-devices/#v=HZC%20Electric)  |
| Description | Temperature and humidity sensor |
| Exposes | temperature, humidity |
| Picture | ![HZC Electric S093TH-ZG](https://www.zigbee2mqtt.io/images/devices/S093TH-ZG.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
기기 전면에는 표시 LED(빨간색/주황색/녹색)가 있고 뒷면에는 버튼이 있습니다.

기기는 Zigbee 3.0을 지원하고 CR2450 배터리로 동작하며, 온도 정확도 ±1.5K, 습도 정확도 5%입니다. 공시 배터리 수명은 2년이며 동작 온도는 -10°C~+45°C입니다. 크기는 45 x 45 x 17.1mm입니다.

### 공장 초기화
버튼을 세 번 짧게 누르고 한 번 길게 누릅니다. 약 10초 후 LED가 빨간색으로 빠르게 깜박입니다. 그런 다음 버튼을 놓습니다. LED가 3초 동안 빨간색으로 유지되다가 초기화됩니다.

### 페어링
버튼을 세 번 누릅니다.

기기가 페어링되지 않은 경우 LED가 주황색으로 천천히 깜박이고 기기가 페어링을 시도합니다.

기기가 페어링되었지만 연결할 수 없는 경우 LED가 3초 동안 주황색으로 빠르게 깜박입니다.

기기가 페어링된 경우 LED가 5초 동안 녹색으로 천천히 깜박입니다.

### LED 표시
전원 켜짐 시 LED가 천천히 7번 깜박입니다.

페어링 중 LED가 네트워크를 검색하는 동안 주황색으로 천천히 깜박입니다. 검색은 2분 후 타임아웃됩니다.

페어링 진행 중 LED가 녹색으로 켜진 상태를 유지합니다. 공식 문서에서 이것이 실제로 무엇을 의미하는지 매우 불명확합니다.

페어링에 성공하면 LED가 꺼집니다.

페어링이 실패하면 LED가 3초 동안 주황색으로 고정됩니다.

배터리가 10% 미만이면 LED가 1분에 한 번 주황색으로 깜박입니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

