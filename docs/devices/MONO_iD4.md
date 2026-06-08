---
title: "Bubendorff MONO iD4 control via MQTT"
description: "Integrate your Bubendorff MONO iD4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:27:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bubendorff MONO iD4

|     |     |
|-----|-----|
| Model | MONO iD4  |
| Vendor  | [Bubendorff](/supported-devices/#v=Bubendorff)  |
| Description | Rroller shutter |
| Exposes | cover (state, position, tilt) |
| Picture | ![Bubendorff MONO iD4](https://www.zigbee2mqtt.io/images/devices/MONO-iD4.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 연결 해제 절차

#### 1단계

셔터를 완전히 엽니다.

#### 2단계

- 리모컨의 `↑`, `↓`, `BUBENDORFF` 버튼을 동시에 4초 이상 누른 후 LED가 빠르게 깜빡이기를 기다립니다. 셔터가 확인 신호로 약간 움직입니다.
- 그런 다음 리모컨의 `↓` 버튼을 2초 이상 누릅니다. 셔터가 확인 신호로 약간 움직입니다.


### 페어링 절차

> ⚠️ 기기를 다시 페어링하는 경우에는 먼저 연결 해제 절차를 수행해야 합니다.

#### 1단계

셔터를 완전히 엽니다.

#### 2단계

이 롤러 셔터는 프로그래밍 창이 활성화된 후 40분 동안만 페어링할 수 있습니다. 새 프로그래밍 창을 시작하는 단계는 다음과 같습니다:
- 셔터 전원을 최소 7초간 차단한 후 다시 공급합니다.
- 리모컨의 `↓` 버튼을 4초 이상 누릅니다. 작업 확인 신호로 셔터가 3초간 내려갑니다.

#### 3단계

Z2M 인터페이스를 사용하여 코디네이터에서 참여 허용(permit join)을 활성화합니다.

#### 4단계

다음 절차를 통해 셔터를 프로그래밍 모드로 진입합니다:
- 리모컨의 `↑`, `↓`, `BUBENDORFF` 버튼을 동시에 4초 이상 누른 후 LED가 빠르게 깜빡이기를 기다립니다. 셔터가 확인 신호로 약간 움직입니다.
- 그런 다음 리모컨의 `↑` 버튼을 2초 이상 누릅니다. 셔터가 확인 신호로 3초간 움직입니다.

#### 5단계

Z2M 기기 목록에 셔터가 나타나면, 다음 절차를 통해 프로그래밍 모드를 종료합니다:
- 리모컨의 `↓` 버튼을 0.5초 미만으로 짧게 누릅니다. 셔터가 확인 신호로 움직입니다.
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
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

