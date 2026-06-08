---
title: "Aubess ZXZIR-02 control via MQTT"
description: "Integrate your Aubess ZXZIR-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-05-28T16:23:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aubess ZXZIR-02

|     |     |
|-----|-----|
| Model | ZXZIR-02  |
| Vendor  | [Aubess](/supported-devices/#v=Aubess)  |
| Description | Universal smart IR remote control |
| Exposes | learn_ir_code, learned_ir_code, ir_code_to_send |
| Picture | ![Aubess ZXZIR-02](https://www.zigbee2mqtt.io/images/devices/ZXZIR-02.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


기기가 IR 코드를 학습하고 이미 알고 있는 IR 코드를 전송할 수 있습니다.

### 제어
`zigbee2mqtt/FRIENDLY_NAME/set`에 발행하여 다양한 기기 속성을 제어할 수 있습니다:

#### 학습 모드로 전환

요청:
```json
{
    "learn_ir_code":"ON"
}
```

명령을 실행하면 기기의 주황색 표시등이 켜집니다. 몇 초 내에 소스 IR 리모컨을 기기 가까이 가져다 대고 버튼을 누릅니다. 학습된 IR 코드는 `learned_ir_code`로 노출됩니다.

#### 이미 학습된 IR 코드 전송

요청:
```json
{
    "ir_code_to_send": "<이전에 학습한 IR 코드>"
}
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Learn ir code (binary)
Turn on to learn new IR code.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"learn_ir_code": NEW_VALUE}`.
If value equals `ON` learn ir code is ON, if `OFF` OFF.

### Learned ir code (text)
The IR code learned by device.
Value can be found in the published state on the `learned_ir_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Ir code to send (text)
The IR code to send by device.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ir_code_to_send": NEW_VALUE}`.

