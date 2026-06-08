---
title: "Legrand ZLGP17/ZLGP18 control via MQTT"
description: "Integrate your Legrand ZLGP17/ZLGP18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Legrand ZLGP17/ZLGP18

|     |     |
|-----|-----|
| Model | ZLGP17/ZLGP18  |
| Vendor  | [Legrand](/supported-devices/#v=Legrand)  |
| Description | Wireless and batteryless (double) lighting control |
| Exposes | action |
| Picture | ![Legrand ZLGP17/ZLGP18](https://www.zigbee2mqtt.io/images/devices/ZLGP17-ZLGP18.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 디바이스는 Zigbee Green Power 디바이스로, 매우 에너지 효율적입니다.
Green Power 디바이스의 메시지는 일반 Zigbee 디바이스에서 "이해"할 수 없으므로 먼저 "번역"이 필요합니다.
모든 Zigbee 디바이스가 이 번역을 수행할 수 있는 것은 아니며, 현재 이를 수행할 수 있는 유일한 디바이스는 Philips Hue 디바이스입니다. 따라서 Green Power 디바이스를 사용하려면 Philips Hue 디바이스의 통신 범위 내에 있어야 합니다.

Green Power 디바이스는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

### ZLGP17 페어링
채널 11에서 이 디바이스를 페어링하려면 설정 버튼(디바이스 뒷면)을 누른 상태에서 메인 버튼(위 또는 아래)을 누르세요.

이 디바이스는 채널 11뿐만 아니라 모든 채널에서 작동할 수 있습니다. 이에 대해서는 [Legrand ZLGP17 매뉴얼 챕터 6.2](https://www.admin.legrandoc.com/files/documents/S000111963EN-00.pdf)를 참고하세요.

### ZLGP18 페어링
채널 11에서 이 디바이스를 페어링하려면 설정 버튼(디바이스 뒷면)을 누른 상태에서 첫 번째 면의 버튼(위 또는 아래)을 누른 다음, 두 번째 면도 동일하게 수행하세요.

참고: 디바이스의 각 면은 개별 ZLGP17로 취급됩니다.

이 디바이스는 채널 11뿐만 아니라 모든 채널에서 작동할 수 있습니다. 이에 대해서는 [Legrand ZLGP18 매뉴얼 챕터 6.2](https://www.admin.legrandoc.com/files/documents/S000112516EN-00.pdf)를 참고하세요.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_once`, `press_twice`.

