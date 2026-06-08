---
title: "Climax PRL-1ZBS-12/24V control via MQTT"
description: "Integrate your Climax PRL-1ZBS-12/24V via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax PRL-1ZBS-12/24V

|     |     |
|-----|-----|
| Model | PRL-1ZBS-12/24V  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Zigbee 12-24V relay controller |
| Exposes | identify, switch (state), power_on_behavior |
| Picture | ![Climax PRL-1ZBS-12/24V](https://www.zigbee2mqtt.io/images/devices/PRL-1ZBS-12-24V.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 보정
1. 보정 전에 외부 로컬 스위치를 셔터 컨트롤에 연결해야 합니다.
2. 기능 버튼을 3~10초 동안 길게 눌렀다가 놓으면 보정 모드로 진입합니다. 셔터 컨트롤러는 보정 모드 진입 후 4분 동안 "열기" 방향으로 작동합니다.
3. 셔터 컨트롤이 "열기" 방향 작동을 멈출 때까지 4분 기다린 후, 연결된 외부 로컬 "닫기" 스위치를 작동하여 셔터를 닫습니다.
4. 셔터가 완전히 닫히는 순간 "열기" 외부 로컬 스위치를 작동합니다. 셔터 컨트롤은 3단계와 4단계 사이의 소요 시간을 새로운 "닫힘 시간"으로 기록합니다.
5. 4단계 이후 셔터 컨트롤은 열기 방향으로 작동합니다.
6. 셔터가 완전히 열리는 순간 "닫기" 외부 로컬 스위치를 작동합니다. 셔터 컨트롤은 5단계와 6단계 사이의 소요 시간을 새로운 "열림 시간"으로 기록합니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

