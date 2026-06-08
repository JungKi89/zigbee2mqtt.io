---
title: "ADEO LDSENK09 control via MQTT"
description: "Integrate your ADEO LDSENK09 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-07-01T08:15:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ADEO LDSENK09

|     |     |
|-----|-----|
| Model | LDSENK09  |
| Vendor  | [ADEO](/supported-devices/#v=ADEO)  |
| Description | Security system key fob |
| Exposes | action |
| Picture | ![ADEO LDSENK09](https://www.zigbee2mqtt.io/images/devices/LDSENK09.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
### 페어링
리모컨은 배터리를 처음 연결할 때 자동으로 페어링을 시작합니다.
수동으로 초기화/페어링하려면 `disarm` (왼쪽 하단)과 `arm_day_zones` (오른쪽 상단) 버튼을 3초간 동시에 누르고 LED가 깜박이기 시작하면 놓습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `panic`, `disarm`, `arm_partial_zones`, `arm_all_zones`.

