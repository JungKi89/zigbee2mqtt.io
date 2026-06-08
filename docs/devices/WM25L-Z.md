---
title: "Smartwings WM25L-Z control via MQTT"
description: "Integrate your Smartwings WM25L-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-03-03T21:28:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Smartwings WM25L-Z

|     |     |
|-----|-----|
| Model | WM25L-Z  |
| Vendor  | [Smartwings](/supported-devices/#v=Smartwings)  |
| Description | Roller shade |
| Exposes | cover (state, position), battery |
| Picture | ![Smartwings WM25L-Z](https://www.zigbee2mqtt.io/images/devices/WM25L-Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
모터 헤드의 버튼을 6초간 길게 눌러 모터가 두 번 피드백할 때까지 누른 후 버튼을 놓습니다. 빨간 LED가 켜지면 페어링 모드에 진입한 것입니다.

### 끝 위치 설정
롤러 블라인드 최대 확장 길이는 블라인드를 원하는 위치로 이동한 후 위 또는 아래 버튼을 두 번 눌러 설정할 수 있습니다.
끝 위치를 재설정하여 더 확장된 새 끝 위치를 정의하려면 블라인드를 완전히 여세요. 그런 다음 위 또는 아래 버튼을 두 번 누릅니다. 이제 블라인드 확장 길이를 다시 설정할 수 있습니다.

### 열기/닫기 동작
기기가 열기와 닫기 동작이 바뀐 상태로 배송된 경우 (OPEN이 차양을 짧게 하는 대신 길게 만드는 경우), 포함된 리모컨으로 동작을 바꿀 수 있습니다. 열기/닫기 동작을 반전시키려면:

1. 리모컨 뒷면을 열고 P (프로그램 버튼)를 한 번 누릅니다 - 모터가 잠깐 한 번 작동합니다.
2. 리모컨의 위 및 아래 화살표 버튼을 모터가 잠깐 한 번 작동할 때까지 짧게 길게 누릅니다.
3. 이제 열기/닫기 동작이 반전됩니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

