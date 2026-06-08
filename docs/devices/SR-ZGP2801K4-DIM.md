---
title: "Sunricher SR-ZGP2801K4-DIM control via MQTT"
description: "Integrate your Sunricher SR-ZGP2801K4-DIM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-03T18:14:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZGP2801K4-DIM

|     |     |
|-----|-----|
| Model | SR-ZGP2801K4-DIM  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Pushbutton transmitter module |
| Exposes | action |
| Picture | ![Sunricher SR-ZGP2801K4-DIM](https://www.zigbee2mqtt.io/images/devices/SR-ZGP2801K4-DIM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
이 기기는 Zigbee Green Power 기기로 매우 에너지 효율적입니다.
Green Power 기기의 메시지는 일반 Zigbee 기기에서 “이해”할 수 없으므로 먼저 “변환”이 필요합니다.
모든 Zigbee 기기가 이 변환을 수행할 수 있는 것은 아니며, 현재 이를 수행할 수 있는 유일한 기기는 Philips Hue 기기입니다. 따라서 Green Power 기기는 사용하려면 Philips Hue 기기의 통신 범위 안에 있어야 합니다.

Green Power 기기는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

### 페어링
이 기기는 Zigbee 네트워크가 채널 11-26에서 실행되어야 합니다.

GP 스위치를 호환 가능한 Zigbee 조명 기기에 페어링하기:
1단계: 호환 조명 기기의 GP 스위치 학습 모드를 활성화합니다(일반적으로 조명 기기는 “prog.” 또는 “reset” 버튼을 4번 짧게 누르거나 전원을 4번 껐다 켜서 모드에 진입합니다). 해당 조명 기기의 매뉴얼을 참조하세요.
2단계: GP 스위치를 학습 모드로 진입시킵니다.
학습 모드에 진입하려면 스위치에서 버튼 하나를 선택합니다. (전체 과정에 동일한 버튼을 사용하며, 다른 버튼을 누르면 학습 모드가 종료됩니다.)
다음 순서를 실행합니다:
1. 선택한 버튼을 7초 이상 누르고 있다가 놓습니다.
2. 버튼을 한 번 짧게 누르고 놓습니다.
3. 버튼을 다시 7초 이상 누르고 있다가 놓습니다.
이제 스위치가 학습 모드에 진입했습니다.
약 1초 동안 기다리며 조명 기기에 페어링 성공 표시가 나타나는지 확인합니다. 일반적으로 조명 기기는 두 번 깜빡여 페어링 성공을 알립니다.
페어링 성공 후 다른 버튼을 눌러 스위치의 학습 모드를 종료합니다. 3단계는 무시하세요.
표시가 없으면 3단계를 계속 실행합니다.
3단계: 16개 Zigbee 채널을 순환합니다.
스위치에서 호환 조명 기기로 올바른 Zigbee 채널로 무선 신호를 보내야 합니다. 조명 기기는 16개의 가능한 채널 중 하나를 사용하며 자동으로 채널이 설정됩니다. 스위치를 사용하면 조명 기기가 사용하는 채널을 찾을 때까지 각 채널로 신호가 전송됩니다.
학습 모드에 진입하면 스위치는 기본 채널 11로 신호를 전송합니다.

스위치 채널을 변경하려면 선택한 버튼을 짧게 눌러 기본 채널 11에서 다음 채널로 이동합니다. 버튼을 누를 때마다 스위치는 다음 채널로 전송합니다.
버튼을 누를 때마다 약 1초를 기다리며 조명 기기에 페어링 성공 표시가 나타나는지 확인합니다.
페어링에 성공하면 스위치의 학습 모드를 종료합니다. 채널 26까지 도달했는데도 표시가 없으면 스위치가 처음부터 학습 모드에 진입하지 않은 것일 수 있습니다. 2단계를 반복하여 학습 모드로 진입시켜야 합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `press_on`, `press_off`, `press_high`, `press_low`, `hold_high`, `hold_low`, `release`.

