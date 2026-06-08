---
title: "VSmart HS-SW300ZB-VNM control via MQTT"
description: "Integrate your VSmart HS-SW300ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# VSmart HS-SW300ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SW300ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | Wall switch 3 gang |
| Exposes | switch (state), led_indicator_color_on, led_indicator_color_off, vibration_intensity, time_periods, morning_led_intensity, evening_led_intensity, night_led_intensity, led_brightness_levels |
| Picture | ![VSmart HS-SW300ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SW300ZB-VNM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기의 버튼을 5초간 누르고 있으면 LED 표시등이 빠르게 깜박이면서 페어링 모드로 진입합니다.

### 초기화
기기를 초기화하려면 버튼을 10초간 누르고 있으면 LED 표시등이 3번 깜박입니다.

### 설치
- 설치 전에 차단기에서 전원을 차단합니다
- 기존 스위치를 제거하고 배선도에 따라 전선을 연결합니다
- 적절한 접지를 확인합니다
- 채널당 최대 부하: 저항성 10A, 유도성 6A

### 다중 엔드포인트 제어
이 기기는 3개의 독립 스위치를 지원합니다:
- **스위치 1**: 첫 번째 전기 부하를 제어합니다
- **스위치 2**: 두 번째 전기 부하를 제어합니다
- **스위치 3**: 세 번째 전기 부하를 제어합니다
- 각 스위치는 MQTT를 통해 독립적으로 제어할 수 있습니다

### LED 표시등 기능
- **ledIndicatorColorOn**: 스위치가 ON일 때 LED 색상 설정 (16진수 형식: #RRGGBB)
- **ledIndicatorColorOff**: 스위치가 OFF일 때 LED 색상 설정 (16진수 형식: #RRGGBB)
- **morningLedIntensity**: 아침 시간대 LED 밝기 (0~100%)
- **eveningLedIntensity**: 저녁 시간대 LED 밝기 (0~100%)
- **nightLedIntensity**: 야간 시간대 LED 밝기 (0~100%)
- **ledBrightnessLevels**: 낮음/중간/높음 밝기 수준 설정

### 진동 피드백
- **vibrationIntensity**: 버튼 진동 강도 (0~100%)
- 버튼을 누를 때 촉각 피드백을 제공합니다

### 시간대 설정
- **timePeriods**: 아침, 저녁, 야간 시간대 설정
- 아침은 저녁 이전에, 저녁은 야간 이전에 시작해야 합니다
- LED 동작이 시간대에 따라 변경됩니다
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (1 endpoint)
The current state of this switch is in the published state under the `state_1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_1": "ON"}`, `{"state_1": "OFF"}` or `{"state_1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (2 endpoint)
The current state of this switch is in the published state under the `state_2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_2": "ON"}`, `{"state_2": "OFF"}` or `{"state_2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (3 endpoint)
The current state of this switch is in the published state under the `state_3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_3": "ON"}`, `{"state_3": "OFF"}` or `{"state_3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Led indicator color on (text)
LED indicator color when switch is ON (hex format: #RRGGBB, e.g., #ff0000 for red).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator_color_on": NEW_VALUE}`.

### Led indicator color off (text)
LED indicator color when switch is OFF (hex format: #RRGGBB, e.g., #ffffff for white).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator_color_off": NEW_VALUE}`.

### Vibration intensity (numeric)
Button vibration intensity (0-100%).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_intensity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Time periods (composite)
Time period settings for switch behavior. Morning must start before evening, evening must start before night..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_periods": {"morning_start_hour": VALUE, "evening_start_hour": VALUE, "night_start_hour": VALUE}}`
- `morning_start_hour` (numeric): Morning period start hour (0-23) max value is 23, unit is h
- `evening_start_hour` (numeric): Evening period start hour (0-23) max value is 23, unit is h
- `night_start_hour` (numeric): Night period start hour (0-23) max value is 23, unit is h

### Morning led intensity (numeric)
LED intensity for morning period (0-100%).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"morning_led_intensity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Evening led intensity (numeric)
LED intensity for evening period (0-100%).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"evening_led_intensity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Night led intensity (numeric)
LED intensity for night period (0-100%).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_led_intensity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Led brightness levels (composite)
LED brightness levels for different intensity settings. Low must be lower than medium, Medium must be lower than high..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_brightness_levels": {"low_brightness_percent": VALUE, "medium_brightness_percent": VALUE, "high_brightness_percent": VALUE}}`
- `low_brightness_percent` (numeric): Low brightness level percentage (0-100%) max value is 100, unit is %
- `medium_brightness_percent` (numeric): Medium brightness level percentage (0-100%) max value is 100, unit is %
- `high_brightness_percent` (numeric): High brightness level percentage (0-100%) max value is 100, unit is %

