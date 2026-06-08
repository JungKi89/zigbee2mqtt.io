---
title: "Bosch BSD-2 control via MQTT"
description: "Integrate your Bosch BSD-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-03-30T17:14:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSD-2

|     |     |
|-----|-----|
| Model | BSD-2  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Smoke alarm II |
| Exposes | smoke, smoke_alarm_silenced, button_pushed, manual_smoke_alarm, manual_burglar_alarm, broadcast_alarms, test_mode, test_mode_timeout, battery, battery_low |
| Picture | ![Bosch BSD-2](https://www.zigbee2mqtt.io/images/devices/BSD-2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### 페어링
이 기기는 설치 코드를 사용하여 페어링해야 합니다. 설치 코드는 스마트폰으로 기기의 QR 코드를 스캔하여 얻을 수 있습니다 (주의: 기기에 일반 텍스트로 인쇄된 설치 코드는 충분하지 않습니다!). zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.

### 초기화
기기를 초기화하려면 배터리를 제거하고 20초 기다리거나 기기의 메인 버튼을 잠깐 누르세요. 기기의 메인 버튼을 누른 채로 배터리를 다시 넣으세요. 전면의 기기 LED가 빨간색으로 깜빡이기 시작하면 메인 버튼을 놓고 기기에서 비프음이 날 때까지 다시 길게 누르세요. 기기가 재부팅되며 최대 1분이 소요될 수 있습니다. [유튜브에서 보기](https://www.youtube.com/watch?v=PRAIsw4PoqE)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Smoke alarm silenced (binary)
Indicates whether an smoke alarm was silenced on the device itself for 10 minutes. Please keep in mind that the smoke detection is being disabled during that time period as well..
Value can be found in the published state on the `smoke_alarm_silenced` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke alarm silenced is ON, if `false` OFF.

### Button pushed (binary)
Indicates whether the button on the device is being pushed for at least 3 seconds (e.g., to trigger a test alarm or silence a smoke alarm).
Value can be found in the published state on the `button_pushed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` button pushed is ON, if `false` OFF.

### Manual smoke alarm (binary)
Indicates whether the smoke alarm siren is being manually activated on the device.
Value can be found in the published state on the `manual_smoke_alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_smoke_alarm": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_smoke_alarm": NEW_VALUE}`.
If value equals `ON` manual smoke alarm is ON, if `OFF` OFF.

### Manual burglar alarm (binary)
Indicates whether the burglar alarm siren is being manually activated on the device.
Value can be found in the published state on the `manual_burglar_alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_burglar_alarm": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_burglar_alarm": NEW_VALUE}`.
If value equals `ON` manual burglar alarm is ON, if `OFF` OFF.

### Broadcast alarms (binary)
Broadcast manual alarm state changes to all BSD-2 devices on the network. Please keep in mind that a detected smoke alarm is not being transmitted automatically to other devices. To achieve that, you must set up an automation, e.g., in Home Assistant..
Value can be found in the published state on the `broadcast_alarms` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"broadcast_alarms": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"broadcast_alarms": NEW_VALUE}`.
If value equals `ON` broadcast alarms is ON, if `OFF` OFF.

### Test mode (binary)
Check the function of the smoke alarm. Pay attention to the alarm sound and the flashing of the alarm LED. Please keep in mind that it can take up to 10 seconds for the test mode to be activated..
Value can be found in the published state on the `test_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"test_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"test_mode": NEW_VALUE}`.
If value equals `ON` test mode is ON, if `OFF` OFF.

### Test mode timeout (numeric)
Determines how long the test mode should be activated. The default length is 5 seconds..
Value can be found in the published state on the `test_mode_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"test_mode_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"test_mode_timeout": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.
The unit of this value is `seconds`.

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

