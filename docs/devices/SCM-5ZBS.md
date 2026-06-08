---
title: "Climax SCM-5ZBS control via MQTT"
description: "Integrate your Climax SCM-5ZBS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax SCM-5ZBS

|     |     |
|-----|-----|
| Model | SCM-5ZBS  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Roller shutter |
| Exposes | cover (state, position) |
| Picture | ![Climax SCM-5ZBS](https://www.zigbee2mqtt.io/images/devices/SCM-5ZBS.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 보정
1. 보정 전에 외부 로컬 스위치를 셔터 컨트롤에 연결해야 합니다.
2. 기능 버튼을 3~10초 동안 누르고 있다가 놓으면 보정 모드로 진입합니다. 셔터 컨트롤러는 보정 모드 진입 시 4분 동안 "열림" 방향으로 이동합니다.
3. 셔터 컨트롤이 "열림" 방향으로 이동을 멈출 때까지 4분 동안 기다린 후, 연결된 외부 로컬 "닫힘" 스위치를 작동하여 셔터를 닫습니다.
4. 셔터가 완전히 닫히는 순간 "열림" 외부 로컬 스위치를 작동합니다. 셔터 컨트롤은 3단계와 4단계 사이의 소요 시간을 새로운 "닫힘 시간"으로 기록합니다.
5. 4단계 이후 셔터 컨트롤이 열림 방향으로 이동합니다.
6. 셔터가 완전히 열리는 순간 "닫힘" 외부 로컬 스위치를 작동합니다. 셔터 컨트롤은 5단계와 6단계 사이의 소요 시간을 새로운 "열림 시간"으로 기록합니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

