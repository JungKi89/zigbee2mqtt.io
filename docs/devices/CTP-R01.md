---
title: "Aqara CTP-R01 control via MQTT"
description: "Integrate your Aqara CTP-R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:22
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara CTP-R01

|     |     |
|-----|-----|
| Model | CTP-R01  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Cube T1 Pro |
| Exposes | battery, voltage, power_outage_count, operation_mode, side, action_from_side, action_angle, action |
| Picture | ![Aqara CTP-R01](https://www.zigbee2mqtt.io/images/devices/CTP-R01.png) |
| White-label | Aqara MFCZQ12LM |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes 

### 배터리
CR2450 배터리 사용

### 페어링
동봉된 도구나 쐐기를 사용하여 뒷판을 분리합니다.
디바이스 내부의 LINK 버튼을 약 5초간 누르고 있습니다(파란색 LED가 3번 깜박일 때까지).
이후 디바이스가 자동으로 네트워크에 참가하지만, 인터뷰 과정이 완료되지 않을 수 있습니다.
그 경우 인터뷰 과정이 성공적으로 완료될 때까지 LINK 버튼을 짧게 눌러 LED가 계속 깜박이도록 유지합니다.

### 모드 전환 
씬 모드와 액션 모드 간 전환 방법은 두 가지가 있습니다: 
1. 하드 스위치: 

    덮개를 열고 LINK를 연속으로 5번 클릭합니다. 

2. 소프트 스위치 (Zigbee2MQTT 프론트엔드 사용): 

    Zigbee2MQTT 프론트엔드의 디바이스 Exposes 탭에서 `operation_mode`를 토글합니다. 
    변경이 즉시 적용되지 않으며, 디바이스는 1시간에 한 번 모드 전환에 응답합니다. 
    던지기 동작(후방 움직임 없이 힘차게 흔들기)을 수행하면 디바이스가 강제로 응답하게 할 수 있습니다. 
    그렇지 않으면 덮개를 열고 LINK 버튼을 클릭하여 즉시 응답하도록 할 수 있습니다. 

### 지원되는 액션

- 씬 모드: 

  | 액션             | 페이로드의 추가 속성 |
  | ---------------- | -------------------- |
  | rotate_left      | action_angle         |
  | rotate_right     | action_angle         |
  | shake            | -                    |
  | throw            | -                    |
  | hold             | -                    |
  | side_up          | side                 |
  | flip_to_side     | side                 |
  | 1_min_inactivity | -                    |

- 액션 모드: 

  | 액션             | 페이로드의 추가 속성   |
  | ---------------- | ---------------------- |
  | rotate_left      | action_angle           |
  | rotate_right     | action_angle           |
  | shake            | -                      |
  | throw            | -                      |
  | slide            | side                   |
  | tap              | side                   |
  | flip90           | side, action_from_side |
  | flip180          | side, action_from_side |
  | 1_min_inactivity | -                      |
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Operation mode (enum)
[Soft Switch]: There is a configuration window, opens once an hour on itself, only during which the cube will respond to mode switch. Mode switch will be scheduled to take effect when the window becomes available. You can also give it a throw action (no backward motion) to force a respond! Otherwise, you may open lid and click LINK once to make the cube respond immediately. [Hard Switch]: Open lid and click LINK button 5 times..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `action_mode`, `scene_mode`.

### Side (numeric)
Side of the cube.
Value can be found in the published state on the `side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action from side (numeric)
Side of the cube.
Value can be found in the published state on the `action_from_side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action angle (numeric)
Value can be found in the published state on the `action_angle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-360` and the maximum value is `360`.
The unit of this value is `°`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `shake`, `throw`, `tap`, `slide`, `flip180`, `flip90`, `hold`, `side_up`, `rotate_left`, `rotate_right`, `1_min_inactivity`, `flip_to_side`.

