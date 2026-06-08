---
title: "SONOFF BASICZBR3 control via MQTT"
description: "Integrate your SONOFF BASICZBR3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF BASICZBR3

|     |     |
|-----|-----|
| Model | BASICZBR3  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart switch |
| Exposes | switch (state) |
| Picture | ![SONOFF BASICZBR3](https://www.zigbee2mqtt.io/images/devices/BASICZBR3.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
새 제품의 경우, 전원을 켜면 자동으로 Zigbee2MQTT에 페어링을 시도합니다. 그렇지 않은 경우(또는 이전에 페어링된 적이 있어 재페어링이 필요한 경우) - 상단의 (릴레이) 버튼을 약 5초간 길게 눌러 릴레이가 클릭되고 빨간색 LED가 여러 번 깜빡일 때까지 누르세요. 그러면 기기가 페어링 모드로 진입하고 파란색 LED가 깜빡이기 시작합니다. 연결되면 파란색 LED가 지속적으로 켜집니다. 이후 Zigbee2MQTT에 연결됩니다. 버튼을 누르면 평소처럼 릴레이가 켜지고 꺼지며, 빨간색 LED도 켜지고 꺼집니다.
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

