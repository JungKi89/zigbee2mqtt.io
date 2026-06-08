---
title: "BSEED BSEED_TS0601_cover control via MQTT"
description: "Integrate your BSEED BSEED_TS0601_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-6-20T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# BSEED BSEED_TS0601_cover

|     |     |
|-----|-----|
| Model | BSEED_TS0601_cover  |
| Vendor  | [BSEED](/supported-devices/#v=BSEED)  |
| Description | Zigbee curtain switch |
| Exposes | cover (state, position) |
| Picture | ![BSEED BSEED_TS0601_cover](https://www.zigbee2mqtt.io/images/devices/BSEED_TS0601_cover.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
LED가 빨간색으로 깜빡일 때까지 down과 set 버튼을 동시에 누르세요.
 
### 캘리브레이션
캘리브레이션은 일시정지 버튼을 깜빡이기 시작할 때까지 누른 다음, open 버튼을 누르고 필요한 시간을 기다린 후 다시 open 버튼을 눌러 수동으로 수행할 수 있습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

