---
title: "Trust ZCTS-808 control via MQTT"
description: "Integrate your Trust ZCTS-808 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Trust ZCTS-808

|     |     |
|-----|-----|
| Model | ZCTS-808  |
| Vendor  | [Trust](/supported-devices/#v=Trust)  |
| Description | Wireless contact sensor |
| Exposes | contact, battery_low, tamper, battery |
| Picture | ![Trust ZCTS-808](https://www.zigbee2mqtt.io/images/devices/ZCTS-808.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
센서를 Zigbee2MQTT에 페어링할 때,
기기가 완전히 구성되기 전에 절전 모드로 진입하지 않도록 10초 동안 센서를 계속 열고 닫아야(서로 인접한 센서 부품을 당겼다 삽입하기 반복) 합니다.
그렇지 않으면 기기가 상태 변화를 전송하지 않습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

