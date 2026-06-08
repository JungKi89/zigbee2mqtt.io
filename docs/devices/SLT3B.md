---
title: "Hive SLT3B control via MQTT"
description: "Integrate your Hive SLT3B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT3B

|     |     |
|-----|-----|
| Model | SLT3B  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery |
| Picture | ![Hive SLT3B](https://www.zigbee2mqtt.io/images/devices/SLT3B.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
온도조절기 컨트롤러를 Zigbee2MQTT와 온도조절기 모두에 페어링하려면 공장 초기화가 필요합니다. 공장 초기화를 시작하려면 메뉴 버튼과 뒤로 가기 버튼을 동시에 누르고 유지합니다. 디바이스를 공장 초기화하려면 카운트다운이 끝날 때까지 기다린 후 버튼을 놓습니다. 디바이스가 초기화되고 언어가 선택되면 Zigbee2MQTT가 디바이스를 찾아야 합니다. 디바이스는 Zigbee2MQTT에 보고하는 동시에 보일러를 제어할 수 있어야 합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

