---
title: "EnOcean PTM 216Z control via MQTT"
description: "Integrate your EnOcean PTM 216Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EnOcean PTM 216Z

|     |     |
|-----|-----|
| Model | PTM 216Z  |
| Vendor  | [EnOcean](/supported-devices/#v=EnOcean)  |
| Description | Pushbutton transmitter module |
| Exposes | action |
| Picture | ![EnOcean PTM 216Z](https://www.zigbee2mqtt.io/images/devices/PTM-216Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 기기는 Zigbee Green Power 기기로 매우 에너지 효율적입니다.
Green Power 기기의 메시지는 일반 Zigbee 기기가 직접 “이해”할 수 없어 먼저 “변환”이 필요합니다.
모든 Zigbee 기기가 이 변환을 지원하는 것은 아니며, 현재 이를 지원하는 기기는 Philips Hue 기기만 알려져 있습니다. 따라서 Green Power 기기는 Philips Hue 기기의 범위 내에 있어야 사용할 수 있습니다.

Green Power 기기는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

이 모듈과 액추에이터 간의 바인딩은 액추에이터가 Zigbee Green Power 표준을 지원하고 액추에이터의 사용자 인터페이스가 “Finding & binding” 또는 “EZ-mode”를 지원하는 경우 작동할 수 있습니다. 자세한 내용은 액추에이터 공급업체에 문의하세요.


### 페어링
페어링을 시작하기 전에 **[문서](https://www.zigbee2mqtt.io/advanced/zigbee/01_zigbee_network.html#green-power-devices)**의 해당 섹션을 주의 깊게 읽어보세요.

2020년 이후에 제조된 모델은 NFC 또는 물리적 버튼으로 페어링할 수 있습니다.

#### NFC
가장 간단한 방법은 NFC 기능이 있는 호환 스마트폰(iOS, Android)을 사용하는 것입니다.

필요한 도구 “EnOcean Tool”은 [Google Play Store](https://play.google.com/store/apps/details?id=de.enocean.easytool&hl=en)와 [Apple Store](https://apps.apple.com/de/app/enocean-tool/id1497283202)에서 다운로드할 수 있습니다.

첫 번째 설정 시 기기를 잠금 해제할 내장 NFC PIN을 얻기 위해 PTM 216Z 뒷면의 QR 코드를 스캔합니다. 이후 필요한 경우 사용자가 특정 PIN을 지정할 수 있습니다. 자세한 내용은 문서 [EnOcean PTM 216Z 매뉴얼 4장 (NFC 인터페이스)](https://www.enocean.com/wp-content/uploads/redaktion/pdf/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-2.pdf)를 참고하세요.


#### 물리적 버튼
이 기기에는 4개의 버튼이 있습니다:

| 번호 | 버튼 | 위치 |
|-|-|-|
| 1 | A0 | 왼쪽 상단 |
| 2 | A1 | 왼쪽 하단 |
| 3 | B0 | 오른쪽 상단 |
| 4 | B1 | 오른쪽 하단 |

모듈이 단일 로커 스위치에 통합된 경우 모든 버튼을 노출하려면 캡을 제거해야 합니다. 버튼은 해당 버튼의 접점을 잡고 에너지 바를 밀면 누를 수 있습니다.

페어링하려면 해당 채널에 맞는 버튼을 7초 이상 길게 누릅니다.

| 버튼 | 채널 |
|-|-|
| A0 | 15 |
| A1 | 20 |
| B0 | 11 |
| B1 | 25 |

기기가 페어링되면 채널을 확인해야 합니다. A1과 B0을 함께 누릅니다. 중요: 페어링과 이 단계 사이에 다른 버튼을 누르지 마세요.

다른 채널에 페어링하려면 기기를 공장 초기화해야 합니다. 모든 버튼(A0, A1, B0, B1)을 동시에 7초 이상 눌러 초기화할 수 있습니다.

이 기기는 11, 15, 20, 25 채널 외에도 어떤 채널에서도 작동할 수 있습니다. 이에 대해서는 [EnOcean PTM 216Z 매뉴얼 3.6.3장](https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-2.pdf)을 참고하세요.


## Home Assistant
Home Assistant 커뮤니티 포럼에서 이 기기와 잘 작동하는 자동화 블루프린트를 찾을 수 있습니다:

@chris-1243
https://community.home-assistant.io/t/zigbee2mqtt-ptm215z-ze-and-ptm216z/873595

예를 들어 조명의 밝기를 높이거나 낮추는 데 유용한 `held_#` 같은 기능을 추가합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_1`, `press_2`, `press_1_and_2`, `press_3`, `press_1_and_3`, `press_2_and_3`, `press_1_and_2_and_3`, `press_4`, `press_1_and_4`, `press_2_and_4`, `press_1_and_2_and_4`, `press_3_and_4`, `press_1_and_3_and_4`, `press_2_and_3_and_4`, `press_all`, `press_energy_bar`, `release`, `short_press_2_of_2`.

