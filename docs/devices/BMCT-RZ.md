---
title: "Bosch BMCT-RZ control via MQTT"
description: "Integrate your Bosch BMCT-RZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-07T12:36:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BMCT-RZ

|     |     |
|-----|-----|
| Model | BMCT-RZ  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Relay (potential free) |
| Exposes | switch (state), actuator_type |
| Picture | ![Bosch BMCT-RZ](https://www.zigbee2mqtt.io/images/devices/BMCT-RZ.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

이 기기는 Zigbee 3.0 지원 코디네이터가 필요합니다 (cc2531 기반 코디네이터에서는 작동하지 않습니다)!

### 페어링
이 기기를 페어링하려면 설치 코드를 통해 기기를 설치해야 합니다. 설치 코드는 스마트폰으로 기기의 QR 코드를 스캔하여 얻을 수 있습니다. 그런 다음 기기를 페어링 모드로 설정하세요. zigbee2mqtt에서 "Settings" --> "Tools"로 이동하여 "Add install code"를 클릭하세요. QR 코드에서 얻은 코드를 붙여넣고 "OK"를 클릭하여 확인한 후, 참여 허용이 활성화되어 있는지 확인하세요. 기기가 연결될 때까지 기다리세요.


### 기타
이 기기는 두 가지 모드로 작동할 수 있습니다. 동작 모드는 초기 페어링 후 설정됩니다. 현재는 모드 1만 작동하며 기본값으로 설정되어 있습니다. 모드 2는 아직 지원되지 않습니다.

모드 1: 켜기/끄기

기기가 로커 스위치와 유사하게 동작합니다. 연결된 스위치(선택 사항)를 사용하여 기기를 능동적으로 켜고 끌 수 있습니다.

모드 2: 펄스

이 모드에서 기기는 버튼처럼 동작합니다. 회로가 잠깐 연결되고 연결된 기기들이 짧은 전류 펄스에 반응합니다. 계단 조명이 좋은 예입니다.
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

### Actuator type (enum)
Select the appropriate actuator type so that the connected device can be controlled correctly..
Value can be found in the published state on the `actuator_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"actuator_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"actuator_type": NEW_VALUE}`.
The possible values are: `normally_closed`, `normally_open`.

