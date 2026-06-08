---
title: "DIYRuZ DIYRuZ_FreePad control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_FreePad via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-19T20:48:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_FreePad

|     |     |
|-----|-----|
| Model | DIYRuZ_FreePad  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | DiY 8/12/20 button keypad |
| Exposes | battery, action, switch_type, switch_actions |
| Picture | ![DIYRuZ DIYRuZ_FreePad](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_FreePad.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[DIY 8/12/20 버튼 키패드](http://modkam.ru/?p=1114)


### 펌웨어
오픈 소스 펌웨어는 여기에서 확인할 수 있습니다: [Github](https://github.com/diyruz/freepad)

### 참가 방법:
#### 디바이스가 FN(공장 초기화) 상태인 경우:
1. 버튼 (1)을 2~3초간 누르고 있어 디바이스 LED가 깜박이기 시작할 때까지 유지합니다
2. 기다립니다. 성공적으로 참가하면 LED가 5번 깜박입니다
3. 참가에 실패하면 LED가 3번 깜박입니다

#### 디바이스가 네트워크에 연결된 경우:
1. 버튼 (1)을 10초간 누르면 디바이스가 FN(공장 초기화) 상태로 초기화됩니다
2. FN 디바이스의 1단계로 이동합니다

### Touch Link 사용 방법
1. 리모컨을 TL 디바이스 근처에 가져갑니다
2. 버튼 (2)을 5초간 누릅니다
TL 기능은 네트워크 연결 없이도 작동할 수 있습니다
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `*_single`, `*_double`, `*_triple`, `*_quadruple`, `*_release`, `*_hold`.

### Switch type (enum, button_1 endpoint)
Value can be found in the published state on the `switch_type_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_1 endpoint)
Value can be found in the published state on the `switch_actions_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_1": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_2 endpoint)
Value can be found in the published state on the `switch_type_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_2 endpoint)
Value can be found in the published state on the `switch_actions_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_2": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_3 endpoint)
Value can be found in the published state on the `switch_type_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_3": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_3 endpoint)
Value can be found in the published state on the `switch_actions_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_3": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_4 endpoint)
Value can be found in the published state on the `switch_type_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_4": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_4 endpoint)
Value can be found in the published state on the `switch_actions_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_4": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_5 endpoint)
Value can be found in the published state on the `switch_type_button_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_5": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_5 endpoint)
Value can be found in the published state on the `switch_actions_button_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_5": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_6 endpoint)
Value can be found in the published state on the `switch_type_button_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_6": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_6 endpoint)
Value can be found in the published state on the `switch_actions_button_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_6": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_7 endpoint)
Value can be found in the published state on the `switch_type_button_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_7": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_7 endpoint)
Value can be found in the published state on the `switch_actions_button_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_7": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_8 endpoint)
Value can be found in the published state on the `switch_type_button_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_8": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_8 endpoint)
Value can be found in the published state on the `switch_actions_button_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_8": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_9 endpoint)
Value can be found in the published state on the `switch_type_button_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_9": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_9 endpoint)
Value can be found in the published state on the `switch_actions_button_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_9": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_10 endpoint)
Value can be found in the published state on the `switch_type_button_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_10": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_10 endpoint)
Value can be found in the published state on the `switch_actions_button_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_10": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_11 endpoint)
Value can be found in the published state on the `switch_type_button_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_11": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_11 endpoint)
Value can be found in the published state on the `switch_actions_button_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_11": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_12 endpoint)
Value can be found in the published state on the `switch_type_button_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_12": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_12 endpoint)
Value can be found in the published state on the `switch_actions_button_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_12": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_13 endpoint)
Value can be found in the published state on the `switch_type_button_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_13": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_13 endpoint)
Value can be found in the published state on the `switch_actions_button_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_13": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_14 endpoint)
Value can be found in the published state on the `switch_type_button_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_14": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_14 endpoint)
Value can be found in the published state on the `switch_actions_button_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_14": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_15 endpoint)
Value can be found in the published state on the `switch_type_button_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_15": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_15 endpoint)
Value can be found in the published state on the `switch_actions_button_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_15": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_16 endpoint)
Value can be found in the published state on the `switch_type_button_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_16": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_16 endpoint)
Value can be found in the published state on the `switch_actions_button_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_16": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_17 endpoint)
Value can be found in the published state on the `switch_type_button_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_17": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_17 endpoint)
Value can be found in the published state on the `switch_actions_button_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_17": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_18 endpoint)
Value can be found in the published state on the `switch_type_button_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_18": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_18 endpoint)
Value can be found in the published state on the `switch_actions_button_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_18": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_19 endpoint)
Value can be found in the published state on the `switch_type_button_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_19": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_19 endpoint)
Value can be found in the published state on the `switch_actions_button_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_19": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_20 endpoint)
Value can be found in the published state on the `switch_type_button_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_20": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_20 endpoint)
Value can be found in the published state on the `switch_actions_button_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_20": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

