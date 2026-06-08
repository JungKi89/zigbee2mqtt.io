---
title: "Bosch BSEN-C2 control via MQTT"
description: "Integrate your Bosch BSEN-C2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSEN-C2

|     |     |
|-----|-----|
| Model | BSEN-C2  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Door/window contact II |
| Exposes | contact, break_function_enabled, break_function_timeout, break_function_state, battery, battery_low, action |
| Picture | ![Bosch BSEN-C2](https://www.zigbee2mqtt.io/images/devices/BSEN-C2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 실내/실외 사용
이 센서는 방수 등급 IP45를 가지고 있어 실내 및 실외 모두에서 사용할 수 있습니다. (제조사 사양 기준)

### 페어링
이 기기를 페어링하려면 스마트폰으로 기기의 QR 코드 스티커를 스캔하여 얻은 설치 코드를 통해 기기를 설치해야 합니다. 그런 다음 기기를 페어링 모드로 설정하세요. zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.


### 초기화
기기를 초기화하려면 배터리를 제거하세요. 기기의 메인 버튼을 누른 채로 배터리를 다시 넣으세요. 기기 LED가 주황색으로 깜빡이기 시작하면 (약 3초), 메인 버튼을 놓고 기기 LED가 녹색으로 켜질 때까지 다시 길게 누르세요.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Break function (binary)
Activate the break function by pressing the operating button on the door/window contact twice. This means that the device temporarily stops reading the sensors..
Value can be found in the published state on the `break_function_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"break_function_enabled": NEW_VALUE}`.
If value equals `ON` break function is ON, if `OFF` OFF.

### Automatic time limit for breaks (numeric)
Here you can define how long the break function is activated for the door/window contact. Once the time limit has expired, the break ends automatically. The LED on the device will flash orange as long as the break is activated when this setting is being used..
Value can be found in the published state on the `break_function_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"break_function_timeout": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `minutes`.
Besides the numeric values the following values are accepted: `disable`.

### Break function state (enum)
Indicates whether the device is in break mode or not.
Value can be found in the published state on the `break_function_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_state": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `break_active`, `idle`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `long_press`, `single_press`, `none`.

