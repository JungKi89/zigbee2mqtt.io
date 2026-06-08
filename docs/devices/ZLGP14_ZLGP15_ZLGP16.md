---
title: "Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT"
description: "Integrate your Legrand ZLGP14/ZLGP15/ZLGP16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-01T08:09:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Legrand ZLGP14/ZLGP15/ZLGP16

|     |     |
|-----|-----|
| Model | ZLGP14/ZLGP15/ZLGP16  |
| Vendor  | [Legrand](/supported-devices/#v=Legrand)  |
| Description | Wireless and batteryless scenario switch (home arrival/departure, 1-4 switches, daytime day/night) |
| Exposes | action |
| Picture | ![Legrand ZLGP14/ZLGP15/ZLGP16](https://www.zigbee2mqtt.io/images/devices/ZLGP14-ZLGP15-ZLGP16.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 디바이스는 Zigbee Green Power 디바이스로, 매우 에너지 효율적입니다.  
ZLGP14, ZLGP15, ZLGP16 여러 모델의 디바이스 식별자가 동일합니다(현재까지). 커맨드 ID만 다릅니다(16~23).  
현재 지원되는 모델은 다음과 같습니다:   
- ZLGP14 (귀가/외출)
- ZLGP15 (1~4번 스위치)
- ZLGP16 (낮/밤)

### 페어링
이 디바이스를 페어링하려면 설정 버튼(디바이스 뒷면)을 누른 상태에서 아무 버튼이나 누르세요.  
자세한 내용은 아래 제조사 문서를 참고하세요.

### 제조사 문서
- ZLGP14 [EN](https://www.admin.legrandoc.com/files/documents/S000113314EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113314FR-00.pdf)
- ZLGP15 [EN](https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113321FR-00.pdf)
- ZLGP16 [EN](https://www.admin.legrandoc.com/files/documents/S000113317EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113317FR-00.pdf)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `home_arrival`, `home_departure`, `press_1`, `press_2`, `press_3`, `press_4`, `daytime_day`, `daytime_night`.

