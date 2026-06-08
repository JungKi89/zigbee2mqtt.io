---
title: "Tuya TS0601_switch_2_gang control via MQTT"
description: "Integrate your Tuya TS0601_switch_2_gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_switch_2_gang

|     |     |
|-----|-----|
| Model | TS0601_switch_2_gang  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 2 gang switch |
| Exposes | switch (state) |
| Picture | ![Tuya TS0601_switch_2_gang](https://www.zigbee2mqtt.io/images/devices/TS0601_switch_2_gang.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
아무 버튼이나 5번 누르고 6번째에는 삐 소리가 날 때까지 누르고 있다가, 버튼을 놓고 페어링 과정이 완료될 때까지 기다립니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

