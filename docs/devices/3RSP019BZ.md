---
title: "Third Reality 3RSP019BZ control via MQTT"
description: "Integrate your Third Reality 3RSP019BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-20T23:20:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Third Reality 3RSP019BZ

|     |     |
|-----|-----|
| Model | 3RSP019BZ  |
| Vendor  | [Third Reality](/supported-devices/#v=Third%20Reality)  |
| Description | Zigbee / BLE smart plug |
| Exposes | switch (state), power_on_behavior |
| Picture | ![Third Reality 3RSP019BZ](https://www.zigbee2mqtt.io/images/devices/3RSP019BZ.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### BLE와 Zigbee 모드 전환

스마트 플러그는 기본적으로 BLE 모드(녹색 LED)로 출고됩니다. zigbee2mqtt와 사용하려면 Zigbee 모드(빨간색 LED)로 변경해야 합니다:
#### BLE → Zigbee
1. 버튼을 누른 채로 스마트 플러그를 콘센트에 꽂아 녹색 LED가
켜질 때까지 기다립니다.
2. 버튼을 놓은 후 즉시 다시 버튼을 누릅니다. LED 빛이 빨간색으로 깜빡이며
스마트 플러그가 Zigbee 모드로 전환되었음을 알립니다.

대부분의 Echo 기기와 함께 사용하기 위해 BLE로 복원하려면: 
#### Zigbee → BLE
1. 버튼을 누른 채로 스마트 플러그를 콘센트에 꽂아 빨간색 LED가
켜질 때까지 기다립니다.
2. 버튼을 놓은 후 즉시 다시 버튼을 누릅니다. LED 빛이 녹색과 빨간색으로 번갈아 깜빡이며
스마트 플러그가 BLE 모드로 전환되었음을 알립니다.

### 공장 초기화
스마트 플러그 전원이 켜진 상태에서 버튼을 10초 이상 길게 누르면
LED 빛이 깜빡이며 스마트 플러그가 페어링 모드로 진입합니다. (공장 초기화 중에는
모드가 변경되지 않습니다.)
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

