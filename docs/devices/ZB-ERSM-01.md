---
title: "Chacon ZB-ERSM-01 control via MQTT"
description: "Integrate your Chacon ZB-ERSM-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Chacon ZB-ERSM-01

|     |     |
|-----|-----|
| Model | ZB-ERSM-01  |
| Vendor  | [Chacon](/supported-devices/#v=Chacon)  |
| Description | Roller shutter module |
| Exposes | cover (state, position), cover_mode, action |
| Picture | ![Chacon ZB-ERSM-01](https://www.zigbee2mqtt.io/images/devices/ZB-ERSM-01.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
페어링 방법은 3가지가 있습니다:
- Chacon/DiO 무선 컨트롤러(리모컨, 스위치 등)를 사용하는 방법
- Bluetooth를 통한 DiO 모바일 앱을 사용하는 방법
- Zigbee를 사용하는 방법

* DiO 컨트롤러와 Zigbee를 동일한 기기에 동시에 페어링할 수 있습니다.
* DiO 컨트롤러와 모바일 앱을 동일한 기기에 동시에 페어링할 수 있습니다.
* 단, 모바일 앱과 Zigbee는 동일한 기기에 동시에 페어링할 수 없습니다.

### 캘리브레이션
1. 롤러 셔터를 완전히 열어줍니다.
2. 캘리브레이션 모드를 활성화합니다.
3. 셔터가 완전히 닫힐 때까지 "닫기" 버튼을 0.5초마다 눌러 셔터를 닫습니다.
4. 캘리브레이션 모드를 종료합니다 (이제 닫힘 시간이 설정됩니다).
5. 캘리브레이션 모드를 다시 활성화합니다.
6. 셔터가 완전히 열릴 때까지 "열기" 버튼을 0.5초마다 눌러 셔터를 엽니다.
7. 캘리브레이션 모드를 종료합니다 (열림 시간이 설정되고 캘리브레이션이 완료됩니다).

**주의**: *캘리브레이션 모드에서는 모든 셔터 이동 명령이 최대 1초 동안 지속됩니다. 연속적인 이동을 위해서는 Zigbee Down/Close 명령을 약 0.5초 간격으로 전송해야 합니다.*
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover mode (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_mode": {"reversed": VALUE, "calibration": VALUE, "maintenance": VALUE, "led": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cover_mode": ""}`.
- `reversed` (binary): Reversal of the motor rotating direction allowed values: `true` or `false`
- `calibration` (binary): Set the cover calibration mode allowed values: `true` or `false`
- `maintenance` (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: `true` or `false`
- `led` (binary): Set the LED allowed values: `true` or `false`

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `close`, `stop`.

