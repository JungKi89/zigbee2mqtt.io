---
title: "Bosch BSEN-C2D control via MQTT"
description: "Integrate your Bosch BSEN-C2D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSEN-C2D

|     |     |
|-----|-----|
| Model | BSEN-C2D  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Door/window contact II [+M] |
| Exposes | contact, break_function_enabled, break_function_timeout, break_function_state, battery, battery_low, action |
| Picture | ![Bosch BSEN-C2D](https://www.zigbee2mqtt.io/images/devices/BSEN-C2D.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 중요: 설치 코드 필요

이 기기는 Zigbee 3.0 보안을 사용하며 표준 "Permit join" 버튼으로는 페어링되지 않습니다. 먼저 Zigbee2MQTT 설정에 특정 설치 코드를 추가해야 합니다.

**QR 코드 관련 참고:** 기기에 인쇄된 QR 코드는 **Matter** 표준용으로 형식이 지정되어 있으며 Zigbee2MQTT와 **호환되지 않습니다**. **QR 코드를 스캔하지 마세요**, 잘못된 데이터가 생성됩니다. 기기 라벨에 인쇄된 텍스트를 사용하여 Zigbee 설치 코드를 수동으로 구성해야 합니다.

**코드 생성 방법:** 4가지 요소를 공백이나 하이픈 없이 하나의 긴 문자열로 조합해야 합니다:

**패턴:** `[Bosch Prefix]` + `[IEEE Address]` + `DLK` + `[라벨의 코드]`

1. Bosch Prefix (고정): 이 정확한 문자열을 복사하세요 (이 시리즈의 모든 기기에서 동일): `RB01SG0D83101826480080000000000000000000`
2. IEEE Address (MAC): 기기 스티커에서 16자리 코드를 찾으세요 (MAC 또는 IEEE로 표시됨). 콜론을 제거하고 연속 문자열로 입력하세요.
3. 마커: 단순히 다음 문자를 입력하세요: `DLK`
4. 설치 코드: QR 코드 옆에 인쇄된 영숫자 문자열을 찾으세요. 하이픈이나 공백을 제거하고 연속 문자열로 입력하세요.

**구성 예시:**

- Prefix: `RB01SG0D83101826480080000000000000000000`
- 나의 MAC: `18FC2600000A1B2C`
- Marker: `DLK`
- 나의 코드: `00112233445566778899AABBCCDDEEFF1234`

최종 붙여넣기 문자열 (예시): `RB01SG0D8310182648008000000000000000000018FC2600000A1B2CDLK00112233445566778899AABBCCDDEEFF1234`

**Zigbee2MQTT에서 적용하는 방법:**

1. Settings -> Tools로 이동하세요.
2. Add install code를 클릭하세요.
3. 참여 허용이 활성화되어 있는지 확인하세요.
4. 위에서 생성한 긴 문자열을 붙여넣고 **OK**를 클릭하세요.
5. 코드를 추가한 후에만 센서를 페어링 모드로 설정하세요 (LED가 주황색으로 깜빡일 때까지 버튼을 약 5초간 길게 누르세요). 이제 기기가 자동으로 페어링되어야 합니다.
<!-- Notes END: Do not edit below this line -->




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
The possible values are: `double_press`, `long_press`, `single_press`, `none`.

