---
title: "Hive SLT2 control via MQTT"
description: "Integrate your Hive SLT2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-19T20:48:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT2

|     |     |
|-----|-----|
| Model | SLT2  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery |
| Picture | ![Hive SLT2](https://www.zigbee2mqtt.io/images/devices/SLT2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링

온도조절기 컨트롤러를 Zigbee2MQTT와 온도조절기 리시버 모두에 페어링하려면 공장 초기화가 필요합니다. 공장 초기화를 시작하려면:

1. 배터리를 제거합니다.
2. "+" 버튼과 "-" 버튼을 동시에 누른 채로 유지합니다.
3. 버튼을 누른 상태에서 배터리를 다시 삽입합니다.
4. 화면에 "FIND" 문구가 나타날 때까지 기다립니다(약 10초).
5. 페어링이 완료되면 "FIND" 문구가 사라지고 온도가 표시됩니다.

Zigbee2MQTT가 온도조절기를 찾아야 합니다. 화면에 "REJOIN" 문구가 나타나면 버튼을 너무 일찍 놓은 것이므로 과정을 반복해야 합니다. 컨트롤러는 Zigbee2MQTT에 보고하는 동시에 보일러를 제어할 수 있어야 합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

