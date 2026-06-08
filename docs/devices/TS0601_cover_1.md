---
title: "Tuya TS0601_cover_1 control via MQTT"
description: "Integrate your Tuya TS0601_cover_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_cover_1

|     |     |
|-----|-----|
| Model | TS0601_cover_1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Curtain motor/roller blind motor/window pusher/tubular motor |
| Exposes | cover (state, position), options |
| Picture | ![Tuya TS0601_cover_1](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_1.png) |
| White-label | Yushun YS-MT750, Zemismart ZM79E-DT, Binthen BCM100D, Binthen CV01A, Zemismart M515EGB, Oz Smart Things ZM85EL-1Z, Tuya M515EGZT, Tuya DT82LEMA-1.2N, Tuya ZD82TN, Larkkey ZSTY-SM-1SRZG-EU, Zemismart AM43, Zemismart M2805EGBZTN, Zemismart BCM500DS-TYZ, A-OK AM25, Alutech AM/R-Sm, Quoya AT8510-TY |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

## 페어링

- 2버튼 기기의 경우: 아래 버튼과 설정 버튼을 동시에 누르고 LED가 파란색으로 깜박일 때까지 유지합니다.
- 1버튼 기기의 경우: 5초 이내에 설정 키를 3번 눌러 LED가 파란색으로 깜박이도록 합니다.
- Tuya/Zemismart 비드 커튼 모터의 경우: 설정 버튼을 한 번 짧게 누른 후, LED가 파란색으로 깜박일 때까지 다시 5초 동안 누릅니다.
  - 초기 짧은 누름 없이 시작된 경우, 5초 누르면 기기가 꺼집니다. 이 경우 설정 버튼을 다시 5초 동안 눌러 켭니다.

### 기기 속성 설정
`zigbee2mqtt/FRIENDLY_NAME/set`에 게시하여 다양한 기기 속성을 설정할 수 있습니다:
```json
{
    "options":{
        "reverse_direction": xxx
    }
}
```

- **reverse_direction**: (`true`/`false`, 기본값: `false`). 기기를 반대 방향으로 작동하도록 설정할 수 있습니다.
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

### Options (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"options": {"motor_speed": VALUE, "reverse_direction": VALUE}}`
- `motor_speed` (numeric): Motor speed max value is 255
- `reverse_direction` (binary): Reverse the motor direction allowed values: `true` or `false`

