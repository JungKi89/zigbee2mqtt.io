---
title: "Livolo TI0001-cover control via MQTT"
description: "Integrate your Livolo TI0001-cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-03-30T20:29:35Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-cover

|     |     |
|-----|-----|
| Model | TI0001-cover  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee roller blind motor |
| Exposes | cover (state, position), options, moving |
| Picture | ![Livolo TI0001-cover](https://www.zigbee2mqtt.io/images/devices/TI0001-cover.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 중요
이 디바이스들은 채널 26에서만 사용할 수 있습니다.
이 디바이스들은 제조사 네트워크 키(ext_pan_id)에 고정되어 있습니다.
설정 파일 [data/configuration.yaml](../guide/configuration/)에 다음 내용이 포함되어 있어야 합니다:

```yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
```

따라서 이 디바이스들은 다른 Zigbee 디바이스와 함께 사용하지 못할 수 있습니다.
Livolo 전용 코디네이터를 추가하고 새 네트워크를 생성해야 할 수도 있습니다.
새 네트워크를 생성하기로 했다면, 다른 'pan_id'를 지정해야 합니다.

```yaml
advanced:
  pan_id: 6756
```

### 페어링
"아래" 버튼과 "설정" 버튼을 동시에 3초간 누르면 페어링 모드에서 빨간색과 파란색으로 깜박입니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Options (composite)
Motor options.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"options": {"motor_speed": VALUE, "motor_direction": VALUE}}`
- `motor_speed` (numeric): Motor speed min value is 20, max value is 40, unit is rpm
- `motor_direction` (enum): Motor direction allowed values: `FORWARD`, `REVERSE`

### Moving (binary)
Motor is moving.
Value can be found in the published state on the `moving` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` moving is ON, if `false` OFF.

