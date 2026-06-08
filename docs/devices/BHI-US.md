---
title: "Bosch BHI-US control via MQTT"
description: "Integrate your Bosch BHI-US via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-26T18:35:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BHI-US

|     |     |
|-----|-----|
| Model | BHI-US  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Universal Switch II |
| Exposes | battery_low, voltage, config_led_top_left_press, config_led_top_right_press, config_led_bottom_left_press, config_led_bottom_right_press, config_led_top_left_longpress, config_led_top_right_longpress, config_led_bottom_left_longpress, config_led_bottom_right_longpress, action |
| Picture | ![Bosch BHI-US](https://www.zigbee2mqtt.io/images/devices/BHI-US.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
이 기기를 페어링하려면 설치 코드를 통해 기기를 설치해야 합니다. 설치 코드는 스마트폰으로 배터리 커버 안쪽의 QR 코드를 스캔하여 얻을 수 있습니다. 그런 다음 기기를 페어링 모드로 설정하세요. zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.


### 초기화
기기를 초기 설정으로 초기화하려면 배터리 중 하나를 제거하세요. 기기의 왼쪽 하단 버튼을 누른 채로 배터리를 삽입하세요. 기기 LED가 주황색으로 깜빡이기 시작하면 메인 버튼을 놓고 LED가 녹색으로 켜질 때까지 다시 길게 누르세요. 그러면 기기가 재시작되고 접속할 Zigbee 네트워크를 검색합니다.

### LED 설정
기기 LED의 깜빡임 패턴과 색상은 각 버튼의 짧게/길게 누름과 확인 표시에 대해 개별적으로 설정할 수 있습니다.

설정은 다음과 같은 9바이트 16진수 문자열입니다:

* RGB 색상 (3바이트), 예: `22bbff` (밝은 파란색)
* 위치 (1바이트), `01` = 상단 절반, `02` = 하단 절반, `00` = 전체
* 발광 패턴 (페이드인 지속시간, 발광 지속시간, 페이드아웃 지속시간, 발광 꺼짐 지속시간; 각 1바이트, 예: `010f0102` - 빠른 페이드인/아웃(`01`), 긴 발광 지속시간 `0f`, 짧은 중간 멈춤 `02`
* 반복 횟수, 예: `01`은 1번 실행, `05`는 5번 깜빡임

예시:
* 위의 전체 문자열: `22bbff01010f010205`
* 흰색 3번 깜빡임: `ffffff000001000103`
* 짧게 눌렀을 때 기본 호박색: `ff4200000104010001`
* 길게 눌렀을 때 기본 호박색: `ff4200000502050001`
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `led_response`: Specifies LED color (rgb) and pattern of the confirmation response as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: 30ff00000102010001. The value must be textual.


## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### LED config (top left short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_top_left_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_left_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_left_press": NEW_VALUE}`.

### LED config (top right short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_top_right_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_right_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_right_press": NEW_VALUE}`.

### LED config (bottom left short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_bottom_left_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_left_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_left_press": NEW_VALUE}`.

### LED config (bottom right short press) (text)
Specifies LED color (rgb) and pattern on short press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff1493000104010001.
Value can be found in the published state on the `config_led_bottom_right_press` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_right_press": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_right_press": NEW_VALUE}`.

### LED config (top left long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_top_left_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_left_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_left_longpress": NEW_VALUE}`.

### LED config (top right long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_top_right_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_top_right_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_top_right_longpress": NEW_VALUE}`.

### LED config (bottom left long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_bottom_left_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_left_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_left_longpress": NEW_VALUE}`.

### LED config (bottom right long press) (text)
Specifies LED color (rgb) and pattern on long press as hex string.
0-2: RGB value (e.g. ffffff = white)
3: Light position (01=top, 02=bottom, 00=full)
4-7: Durations for sequence fade-in -> on -> fade-out -> off (e.g. 01020102)
8: Number of Repetitions (01=1 to ff=255)
Example: ff4200000502050001.
Value can be found in the published state on the `config_led_bottom_right_longpress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"config_led_bottom_right_longpress": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_led_bottom_right_longpress": NEW_VALUE}`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_top_left_release`, `button_top_right_release`, `button_bottom_left_release`, `button_bottom_right_release`, `button_top_left_longpress`, `button_top_right_longpress`, `button_bottom_left_longpress`, `button_bottom_right_longpress`, `button_top_left_longpress_release`, `button_top_right_longpress_release`, `button_bottom_left_longpress_release`, `button_bottom_right_longpress_release`.

