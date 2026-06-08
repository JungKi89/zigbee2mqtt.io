---
title: "Aqara ZNCLDJ11LM control via MQTT"
description: "Integrate your Aqara ZNCLDJ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNCLDJ11LM

|     |     |
|-----|-----|
| Model | ZNCLDJ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Curtain controller |
| Exposes | cover (state, position), running, motor_state |
| Picture | ![Aqara ZNCLDJ11LM](https://www.zigbee2mqtt.io/images/devices/ZNCLDJ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
파란 불빛이 켜질 때까지 약 5초간 버튼을 누르고 있습니다.

먼저 디바이스를 초기화해야 하는 경우, 빨간 불빛이 켜질 때까지 더 오래 버튼을 누르고 있습니다.

### 디바이스 속성 설정
`zigbee2mqtt/FRIENDLY_NAME/set`에 게시하면 다양한 디바이스 속성을 설정할 수 있습니다:
```json
{
    "options":{
        "reverse_direction": xxx,
        "hand_open": xxx,
        "reset_limits": xxx
    }
}
```

- **reverse_direction**: (`true`/`false`, 기본값: `false`). 디바이스가 반대 방향으로 작동하도록 설정할 수 있습니다.
- **hand_open**: (`true`/`false`, 기본값: `true`). 기본적으로 손으로 커튼을 당기면 모터가 회전하기 시작합니다. 이 동작을 비활성화할 수 있습니다.
- **reset_limits**: (`true`/`false`, 기본값: `false`). 모터를 초기화합니다. 경로에서 장애물이 제거된 경우 사용합니다.

옵션의 일부만 전송할 수 있으며, 지정되지 않은 모든 옵션은 기본값으로 돌아갑니다.

`reverse_direction`을 변경한 후에는 모터가 끝점을 재감지할 수 있도록 커튼을 완전히 열고 닫아야 합니다. `reverse_direction`은 이 재캘리브레이션 후에만 새 상태가 적용됩니다.

### 장기 정전 시 설정 손실
모터를 배터리 없이 사용하는 경우 장기 정전 후 설정이 손실될 수 있습니다. 이 경우 `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 명령 순서를 게시하여 끝점 캘리브레이션을 다시 수행해야 합니다:
1. `{ "options": { "reset_limits": true } }`
2. `{ "state": "close" }`
3. 커튼이 닫힐 때까지 기다립니다.
4. `{ "state": "open" }`

Home Assistant 자동화 예시:
```yaml
- id: "<Automation_ID>"
  alias: Calibrate curtain
  description: "Calibrate curtain"
  triggers:
    - trigger: homeassistant
      event: start
  conditions: []
  actions:
    - action: mqtt.publish
      metadata: {}
      data:
        topic: zigbee2mqtt/<FRIENDLY_NAME>/set
        payload: >-
          {{ {'options': {'reset_limits': true}} | tojson }}
    - action: cover.close_cover
      metadata: {}
      data: {}
      target:
        device_id: <COVER_ID>
    - delay:
        hours: 0
        minutes: 0
        seconds: 13
        milliseconds: 0
    - action: cover.open_cover
      metadata: {}
      data: {}
      target:
        device_id: <COVER_ID>
```

모터는 커튼의 열림 및 닫힘 위치 한계점에 도달하면 자동으로 캘리브레이션 모드를 종료합니다. 올바른 위치 보고 및 중간 위치 설정 기능을 위해 캘리브레이션은 필수입니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Running (binary)
Whether the motor is moving or not.
Value can be found in the published state on the `running` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` running is ON, if `false` OFF.

### Motor state (enum)
Motor state.
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `stopped`, `opening`, `closing`.

