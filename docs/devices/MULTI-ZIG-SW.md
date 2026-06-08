---
title: "smarthjemmet.dk MULTI-ZIG-SW control via MQTT"
description: "Integrate your smarthjemmet.dk MULTI-ZIG-SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-27T19:44:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# smarthjemmet.dk MULTI-ZIG-SW

|     |     |
|-----|-----|
| Model | MULTI-ZIG-SW  |
| Vendor  | [smarthjemmet.dk](/supported-devices/#v=smarthjemmet.dk)  |
| Description | Multi switch from Smarthjemmet.dk |
| Exposes | switch_type_1, switch_type_2, switch_type_3, switch_type_4, battery, action, voltage |
| Picture | ![smarthjemmet.dk MULTI-ZIG-SW](https://www.zigbee2mqtt.io/images/devices/MULTI-ZIG-SW.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[Smarthjemmet.dk의 멀티 스위치](https://smarthjemmet.dk)
### 페어링
기기가 자동으로 페어링 모드(LED 깜빡임)로 시작하지 않으면, 기기를 4번 켜고 끄는 방식으로 수동으로 시작할 수 있습니다(4번째에는 켜진 상태 유지).

- 배터리를 삽입하고 1초 기다리기
- 배터리 분리
- 배터리를 삽입하고 1초 기다리기
- 배터리 분리
- 배터리를 삽입하고 1초 기다리기
- 배터리 분리
- 배터리 삽입

이제 LED가 5~10초 간격으로 깜빡여야 합니다.

동영상 가이드: [https://www.youtube.com/watch?v=LkbnLPhi5Ts](https://www.youtube.com/watch?v=LkbnLPhi5Ts)

### 스위치 유형
MULTI-ZIG-SW는 4개의 입력에 대해 두 가지 모드를 지원합니다: Switch와 multi-click.

Switch는 입력을 램프 스위치처럼 ON/OFF 스위치로 사용합니다.
Multi-click은 입력을 여러 번 클릭할 수 있게 합니다. 지원되는 클릭 유형은 다음과 같습니다:

- Single (button_X_single)
- Double (button_X_double)
- Triple (button_X_triple)
- Hold (button_X_hold)
- Release (button_X_release)

기기가 배터리로 작동하므로, 깨어있는 동안에만 모드 전환이 가능합니다. 모드를 변경할 때는 클릭으로 입력을 활성화하여 기기를 온라인 상태로 유지하세요.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch type 1 (enum, button_1 endpoint)
Value can be found in the published state on the `switch_type_1_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_1_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_1_button_1": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 2 (enum, button_2 endpoint)
Value can be found in the published state on the `switch_type_2_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_2_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_2_button_2": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 3 (enum, button_3 endpoint)
Value can be found in the published state on the `switch_type_3_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_3_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_3_button_3": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 4 (enum, button_4 endpoint)
Value can be found in the published state on the `switch_type_4_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_4_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_4_button_4": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

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
The possible values are: `single`, `double`, `triple`, `hold`, `release`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

