---
title: "EnOcean PTM 215Z control via MQTT"
description: "Integrate your EnOcean PTM 215Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-02T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EnOcean PTM 215Z

|     |     |
|-----|-----|
| Model | PTM 215Z  |
| Vendor  | [EnOcean](/supported-devices/#v=EnOcean)  |
| Description | Pushbutton transmitter module |
| Exposes | action |
| Picture | ![EnOcean PTM 215Z](https://www.zigbee2mqtt.io/images/devices/PTM-215Z.png) |
| White-label | Niko 91004, NodOn CWS-4-1-01_HUE, Vimar 03906, Sunricher SR-ZGP2801K4-FOH-E, Sunricher SR-ZG2833PAC, LED-Trading 9125, Feller 4120.2.S.FMI.61, Namron 4512727 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 기기는 Zigbee Green Power 기기로 매우 에너지 효율적입니다.
Green Power 기기의 메시지는 일반 Zigbee 기기가 직접 “이해”할 수 없어 먼저 “변환”이 필요합니다.
모든 Zigbee 기기가 이 변환을 지원하는 것은 아닙니다. 변환을 지원하는 기기로는 Philips Hue 기기와 일부 Ikea Tradfri 전구(예: [LED2107C4](https://www.zigbee2mqtt.io/devices/LED2107C4.html)가 동작 확인됨)가 알려져 있습니다. 따라서 Green Power 기기는 이러한 기기 중 하나의 범위 내에 있어야 사용할 수 있습니다.

Green Power 기기는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

### 페어링
페어링을 시작하기 전에 **[문서](https://www.zigbee2mqtt.io/advanced/zigbee/01_zigbee_network.html#green-power-devices)**의 해당 섹션을 주의 깊게 읽어보세요. 또한 Zigbee 네트워크가 사용하는 채널을 확인하는 것이 중요합니다(기본값은 11). Zigbee2MQTT 프런트엔드의 `설정 > 고급`에서 확인하거나, [채널 변경 방법](https://www.zigbee2mqtt.io/guide/configuration/zigbee-network.html#changing-the-zigbee-channel)을 참고하세요.

이 기기에는 4개의 버튼이 있습니다:

| 번호 | 버튼 | 위치 | 채널 |
|-|-|-|-|
| 1 | A0 | 왼쪽 상단     | 15 |
| 2 | A1 | 왼쪽 하단  | 20 |
| 3 | B0 | 오른쪽 상단    | 11 |
| 4 | B1 | 오른쪽 하단 | 25 |

모듈이 단일 로커 스위치에 통합된 경우 모든 버튼을 노출하려면 캡을 제거해야 합니다. 버튼은 해당 버튼의 접점을 잡고 에너지 바를 밀면 누를 수 있습니다.

페어링하려면 네트워크 채널에 해당하는 버튼을 7초 이상 길게 누릅니다.

기기가 페어링되면 채널을 확인해야 합니다. A1과 B0을 함께 누릅니다. 중요: 페어링과 이 단계 사이에 다른 버튼을 누르지 마세요.

다른 채널에 페어링하려면 기기를 공장 초기화해야 합니다. 모든 버튼(A0, A1, B0, B1)을 동시에 7초 이상 길게 눌러 초기화할 수 있습니다.

또는 다음 패턴으로 스위치를 초기화할 수 있습니다:
1. 왼쪽 상단(A0) 누르기
2. 오른쪽 상단(B0)을 약 10초 동안 길게 누르기
3. 오른쪽 상단(B0)과 왼쪽 하단(A1)을 동시에 누르기
4. 왼쪽 상단(A0) 누르기
참고: 모듈이 올바른 방향으로 놓여 있는지 확인하세요.

### 커미셔닝 비활성화
위 단락에 따라 라디오 채널이 선택될 때마다 PTM 215Z 기기는 버튼을 7초 이상(길게 누르기) 누르면 “Join” 요청을 발송합니다. 이 Join 요청은 선택된 채널에서 브로드캐스트(목적지 ID 0xFFFF)로 전송됩니다.

버튼 A0, A1, B1을 동시에 7초 이상(길게 누르기) 눌러 커미셔닝을 비활성화할 수 있습니다.

## Home Assistant
Home Assistant 커뮤니티 포럼에서 이 기기와 잘 작동하는 자동화 블루프린트를 찾을 수 있습니다:

@vandalon
https://community.home-assistant.io/t/zigbee2mqtt-enocean-ptm-215z-friends-of-hue-switch/429770

@chris-1243
https://community.home-assistant.io/t/zigbee2mqtt-ptm215z-ze-and-ptm216z/873595

예를 들어 조명의 밝기를 높이거나 낮추는 데 유용한 `held_#` 같은 기능을 추가합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_1`, `release_1`, `press_2`, `release_2`, `press_3`, `release_3`, `press_4`, `release_4`, `press_1_and_3`, `release_1_and_3`, `press_2_and_4`, `release_2_and_4`, `press_energy_bar`.

