---
title: "VSmart HS-SEDR00ZB-VNM control via MQTT"
description: "Integrate your VSmart HS-SEDR00ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# VSmart HS-SEDR00ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SEDR00ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | Door/window sensor |
| Exposes | contact, battery_low, tamper |
| Picture | ![VSmart HS-SEDR00ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SEDR00ZB-VNM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기의 버튼을 3초간 누르고 있으면 LED 표시등이 빠르게 깜박이면서 페어링 모드로 진입합니다.

### 초기화
기기를 초기화하려면 버튼을 10초간 누르고 있으면 LED 표시등이 3번 깜박입니다.

### 설치
- 메인 유닛에서 자석 부품을 분리합니다
- 메인 유닛을 문/창문 프레임에 설치합니다
- 자석 부품을 문/창문에 설치합니다
- 닫혔을 때 두 부품 사이의 거리가 2cm 미만인지 확인합니다
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

