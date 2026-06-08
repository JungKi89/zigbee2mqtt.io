---
title: "EnOcean PTM 215ZE control via MQTT"
description: "Integrate your EnOcean PTM 215ZE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EnOcean PTM 215ZE

|     |     |
|-----|-----|
| Model | PTM 215ZE  |
| Vendor  | [EnOcean](/supported-devices/#v=EnOcean)  |
| Description | Pushbutton transmitter module |
| Exposes | action |
| Picture | ![EnOcean PTM 215ZE](https://www.zigbee2mqtt.io/images/devices/PTM-215ZE.png) |
| White-label | Easyfit by EnOcean EWSxZ, Trio2sys 20020002 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 기기는 Zigbee Green Power 기기로 매우 에너지 효율적입니다.
Green Power 기기의 메시지는 일반 Zigbee 기기가 직접 “이해”할 수 없어 먼저 “변환”이 필요합니다.
모든 Zigbee 기기가 이 변환을 지원하는 것은 아니며, 현재 이를 지원하는 기기는 Philips Hue 기기만 알려져 있습니다. 따라서 Green Power 기기는 Philips Hue 기기의 범위 내에 있어야 사용할 수 있습니다.

Green Power 기기는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

### 페어링
페어링을 시작하기 전에 **[문서](https://www.zigbee2mqtt.io/advanced/zigbee/01_zigbee_network.html#green-power-devices)**의 해당 섹션을 주의 깊게 읽어보세요.

페어링은 NFC 또는 물리적 버튼으로 할 수 있습니다. 기본적으로 직접 커미셔닝 모드가 비활성화되어 있어 페어링 과정을 쉽게 하려면 NFC 사용을 강력히 권장합니다.

#### NFC
가장 간단한 방법은 NFC 기능이 있는 호환 스마트폰(iOS, Android)을 사용하는 것입니다.

필요한 도구 “EnOcean Tool”은 [Google Play Store](https://play.google.com/store/apps/details?id=de.enocean.easytool&hl=en)와 [Apple Store](https://apps.apple.com/de/app/enocean-tool/id1497283202)에서 다운로드할 수 있습니다.

첫 번째 설정 시 기기를 잠금 해제할 내장 NFC PIN을 얻기 위해 PTM 215ZE 뒷면의 QR 코드를 스캔합니다. 이후 필요한 경우 사용자가 특정 PIN을 지정할 수 있습니다. 자세한 내용은 문서 [EnOcean PTM 215ZE 매뉴얼 4장 (NFC 인터페이스)](https://www.enocean.com/wp-content/uploads/redaktion/pdf/enocean_modules_24ghz/ptm-215ze/user-manual-pdf/PTM_215ZE_User_Manual-1.pdf)를 참고하세요.

#### 물리적 버튼
이 기기에는 4개의 버튼이 있습니다:

| 번호 | 버튼 | 위치 | Zigbee 채널 |
|-|-|-|-|
| 1 | A0 | 왼쪽 상단 | 15 |
| 2 | A1 | 왼쪽 하단 | 20 |
| 3 | B0 | 오른쪽 상단 | 11 |
| 4 | B1 | 오른쪽 하단 | 25 |

모듈이 단일 로커 스위치에 통합된 경우 모든 버튼을 노출하려면 캡을 제거해야 합니다. 버튼은 해당 버튼의 접점을 잡고 에너지 바를 밀면 누를 수 있습니다.

페어링을 시작하려면 두 개의 서로 다른 버튼을 차례로 짧게(7초 미만) 누릅니다. 기기의 아무 버튼(A0, A1, B0, B1)이나 사용할 수 있습니다.

다음으로 위 표를 참고하여 네트워크가 사용하는 Zigbee 채널을 찾습니다(모르는 경우 Zigbee2MQTT의 기본값인 채널 11일 가능성이 높습니다). 원하는 채널에 맞는 버튼(A0, A1, B0 또는 B1)을 선택하고 다음 길게-짧게-길게 순서를 실행합니다:

1. 선택한 버튼을 7초 이상 길게 누른 후 놓기
2. 선택한 버튼을 빠르게 누르기(2초 미만)
3. 선택한 버튼을 다시 7초 이상 길게 누른 후 놓기

그런 다음 선택한 버튼을 짧게(7초 미만) 눌러 라디오 채널 11을 선택합니다. 계속 짧게 눌러 라디오 채널을 증가시킵니다. 채널 26에 도달하면 다음에는 채널 11이 사용됩니다.

기기가 페어링되면 채널을 확인해야 합니다. 이전에 사용한 버튼 이외의 다른 버튼을 누릅니다.

자세한 내용은 [EnOcean PTM 215ZE 매뉴얼 3.6.2.1장](https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-215ze/user-manual-pdf/PTM_215ZE_User_Manual-1.pdf)을 참고하세요.

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
The possible values are: `press_1`, `release_1`, `press_2`, `release_2`, `press_3`, `release_3`, `press_4`, `release_4`, `press_1_and_2`, `release_1_and_2`, `press_1_and_3`, `release_1_and_3`, `press_1_and_4`, `release_1_and_4`, `press_2_and_3`, `release_2_and_3`, `press_2_and_4`, `release_2_and_4`, `press_3_and_4`, `release_3_and_4`, `press_energy_bar`, `release_energy_bar`, `press_or_release_all`, `lock`, `unlock`, `half_open`, `tilt`.

