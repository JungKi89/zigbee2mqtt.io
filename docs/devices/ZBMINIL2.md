---
title: "SONOFF ZBMINIL2 control via MQTT"
description: "Integrate your SONOFF ZBMINIL2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-12-01T15:07:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMINIL2

|     |     |
|-----|-----|
| Model | ZBMINIL2  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart switch (no neutral) |
| Exposes | switch (state), power_on_behavior |
| Picture | ![SONOFF ZBMINIL2](https://www.zigbee2mqtt.io/images/devices/ZBMINIL2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### 라우터 기능
기기 유형은 '엔드 디바이스'이며 Zigbee 라우터로 기능할 수 없습니다.

### 페어링
기기를 초기화하고 페어링 모드로 진입하는 두 가지 방법이 있습니다:

* 버튼: 기기의 버튼을 5초 동안 길게 누릅니다.
* 스위치: 연결된 외부 스위치를 10번 연속으로 켰다 껐다 합니다. 버튼에 직접 물리적으로 접근하기 어려울 때 특히 유용합니다.

페어링 모드에서는 기기가 "state": "OFF" 상태를 유지하며 스위칭할 수 없습니다. 페어링에 성공하지 못하면 180초 후에 페어링 모드를 종료합니다.

## 스위치 유형 변경
기기는 기본적으로 로커 스위치를 지원합니다. 스위치 유형을 변경하려면 버튼을 3번 누르고 녹색 LED 표시등이 3번 빠르게 깜박이는지 확인하면 스위치 유형이 변경된 것입니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

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

