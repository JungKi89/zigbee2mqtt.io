---
title: "SONOFF ZBMINI control via MQTT"
description: "Integrate your SONOFF ZBMINI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMINI

|     |     |
|-----|-----|
| Model | ZBMINI  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee two way smart switch |
| Exposes | switch (state) |
| Picture | ![SONOFF ZBMINI](https://www.zigbee2mqtt.io/images/devices/ZBMINI.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 기기 페어링

수동으로 기기를 페어링하려면, Zigbee LED 표시등이 깜박이기 시작할 때까지 페어링 버튼을 약 5초 동안 길게 누른 후 버튼을 놓습니다.

기기는 전원 사이클 후에도 자동으로 페어링 모드로 진입한다는 점에 유의하세요. 따라서 전원이 복원될 때마다 페어링 모드가 활성화되어 있는지 확인하세요.

### 코디네이터 변경 후 기기가 멈추는 경우

Zigbee 코디네이터를 교체할 때, 기기가 오류 상태로 진입할 수 있습니다. 이는 느린 깜박임(약 초당 한 번)으로 확인할 수 있습니다.
이 문제를 해결하려면 기기를 10초 이상 전원을 끄세요. 전원을 다시 켜면 기기가 자동으로 페어링 모드로 진입합니다.

### Hue 디머 리모컨으로 재페어링

ZBMINI에 쉽게 접근할 수 없는 경우(예: 벽 박스 내부에 장착된 경우), Hue 디머 스위치를 사용하여 초기화하거나 재페어링할 수 있습니다. 자세한 내용은 [Hue 디머 초기화 가이드](https://www.zigbee2mqtt.io/devices/324131092621.html#using-the-dimmer-to-reset-other-zigbee-devices)를 참조하세요.
<!-- Notes END: Do not edit below this line -->



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

