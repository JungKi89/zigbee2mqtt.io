---
title: "smarthjemmet.dk QUAD-ZIG-SW control via MQTT"
description: "Integrate your smarthjemmet.dk QUAD-ZIG-SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:52:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# smarthjemmet.dk QUAD-ZIG-SW

|     |     |
|-----|-----|
| Model | QUAD-ZIG-SW  |
| Vendor  | [smarthjemmet.dk](/supported-devices/#v=smarthjemmet.dk)  |
| Description | FUGA compatible switch from Smarthjemmet.dk |
| Exposes | switch_type_1, switch_type_2, switch_type_3, switch_type_4, battery, action, voltage |
| Picture | ![smarthjemmet.dk QUAD-ZIG-SW](https://www.zigbee2mqtt.io/images/devices/QUAD-ZIG-SW.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[FUGA compatible switch from Smarthjemmet.dk](https://smarthjemmet.dk)
### 페어링
기기가 자동으로 페어링 모드(LED 깜박임)로 시작되지 않은 경우, 기기의 전원을 네 번 켰다 끄되 네 번째에는 켜진 상태로 유지하면 수동으로 시작할 수 있습니다.

- 배터리 삽입 후 1초 대기
- 배터리 빼기
- 배터리 삽입 후 1초 대기
- 배터리 빼기
- 배터리 삽입 후 1초 대기
- 배터리 빼기
- 배터리 삽입

LED가 이제 5~10초 간격으로 깜박여야 합니다.

동영상 가이드: [https://www.youtube.com/watch?v=LkbnLPhi5Ts](https://www.youtube.com/watch?v=LkbnLPhi5Ts)

### 스위치 유형
QUAD-ZIG-SW는 네 개의 입력에 대해 스위치(Switch)와 멀티 클릭(Multi-click) 두 가지 모드를 지원합니다.

스위치 모드는 입력을 전등 스위치처럼 켜기/끄기 스위치로 전환합니다.
멀티 클릭 모드는 입력이 여러 번 클릭될 수 있게 합니다. 다양한 클릭 유형:

- 단일 클릭 (button_X_single)
- 더블 클릭 (button_X_double)
- 트리플 클릭 (button_X_triple)
- 길게 누르기 (button_X_hold)
- 놓기 (button_X_release)

기기는 배터리로 동작하기 때문에 깨어 있을 때만 모드를 전환합니다. 모드를 변경할 때는 클릭으로 입력을 활성화하여 기기가 온라인 상태를 유지하도록 하세요.
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

