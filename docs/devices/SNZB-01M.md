---
title: "SONOFF SNZB-01M control via MQTT"
description: "Integrate your SONOFF SNZB-01M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01M

|     |     |
|-----|-----|
| Model | SNZB-01M  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Four-way wireless button |
| Exposes | battery, action |
| Picture | ![SONOFF SNZB-01M](https://www.zigbee2mqtt.io/images/devices/SNZB-01M.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

**모든 정보는 SONOFF 웹사이트에서 가져온 것입니다. 확인이 필요합니다!**

### 배터리
CR2477 배터리 1개를 사용합니다.

**이 디바이스는 사용하지 않을 때 에너지 절약을 위해 *슬립* 상태로 전환됩니다.**  
슬립 중에는 Z2M 명령에 응답하지 않습니다.  
버튼을 눌러 깨어있게 하고 상호작용이 가능하도록 합니다.

### 페어링
**리셋 버튼을 5초간 누르고 유지합니다**. LED 표시등이 연결될 때까지 천천히 깜박여야 합니다.  
버튼은 후면 커버 아래, 배터리 옆에 있습니다.

### 바인딩

**이 리모컨은 개별 디바이스 및/또는 그룹을 직접 제어할 수 있습니다.**

- 네트워크 내부에서 [바인딩](../guide/usage/binding.md)을 통해 페어링할 수 있습니다: 
  - 토글용 `OnOff` 클러스터 
  - 조광용 `LevelCtrl` 클러스터
  - 씬 변경용 `Scenes` 클러스터
- [Touchlink](../guide/usage/touchlink.md)를 통한 네트워크 외부 페어링이 가능합니다.  
  - 대상 디바이스에 매우 가까이 유지하고 **버튼 1**을 '표시등이 약 3초간 고정될 때까지 누른 후 놓습니다'.
  - *클로닝*에 대한 정보 없음
  
### 액션 매핑

| 실제 동작       |        Z2M 액션 |       바인드 액션 |
| --------------- | ----------------: | ----------------: |
| 버튼 1 단일 누름 | `single_button_1` |        'On/Off' ? |
| 버튼 1 이중 누름 | `double_button_1` |                 ? |
| 버튼 1 삼중 누름 | `triple_button_1` |                 ? |
| 버튼 1 길게 누름 |   `long_button_1` |                 ? |
| 버튼 2 단일 누름 | `single_button_2` |                 ? |
| 버튼 2 이중 누름 | `double_button_2` |                 ? |
| 버튼 2 삼중 누름 | `triple_button_2` |                 ? |
| 버튼 2 길게 누름 |   `long_button_2` |      'Brighten' ? |
| 버튼 3 단일 누름 | `single_button_3` |                 ? |
| 버튼 3 이중 누름 | `double_button_3` |                 ? |
| 버튼 3 삼중 누름 | `triple_button_3` |                 ? |
| 버튼 3 길게 누름 |   `long_button_3` |           'Dim' ? |
| 버튼 4 단일 누름 | `single_button_4` | 'Switch Scenes' ? |
| 버튼 4 이중 누름 | `double_button_4` |                 ? |
| 버튼 4 삼중 누름 | `triple_button_4` |                 ? |
| 버튼 4 길게 누름 |   `long_button_4` |                 ? |
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_button_1`, `double_button_1`, `long_button_1`, `triple_button_1`, `single_button_2`, `double_button_2`, `long_button_2`, `triple_button_2`, `single_button_3`, `double_button_3`, `long_button_3`, `triple_button_3`, `single_button_4`, `double_button_4`, `long_button_4`, `triple_button_4`.

