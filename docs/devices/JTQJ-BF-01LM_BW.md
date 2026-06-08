---
title: "Xiaomi JTQJ-BF-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi JTQJ-BF-01LM/BW

|     |     |
|-----|-----|
| Model | JTQJ-BF-01LM/BW  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mijia Honeywell gas leak detector |
| Exposes | gas, tamper, sensitivity, gas_density, selftest |
| Picture | ![Xiaomi JTQJ-BF-01LM/BW](https://www.zigbee2mqtt.io/images/devices/JTQJ-BF-01LM-BW.png) |
| White-label | Xiaomi YTC4019RT |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
디바이스를 전원에 연결하고 자가 진단을 수행하는 동안 약 5분간 기다립니다.
자가 진단 성공은 몇 번의 비프음과 녹색 LED 점등으로 표시됩니다.
이제 디바이스가 페어링 준비가 완료됩니다. 페어링을 시작하려면 버튼을 빠르게 연속으로 세 번 누릅니다.


### 감도
감도는 `zigbee2mqtt/FRIENDLY_NAME/set`에
`{"sensitivity": "SENSITIVITY"}`를 게시하여 변경할 수 있습니다. `SENSITIVITY`는 다음 값 중 하나입니다:
`low`, `medium`, `high`.

### 자가 진단
자가 진단은 `zigbee2mqtt/FRIENDLY_NAME/set`에
`{"selftest": ""}`를 게시하여 트리거할 수 있습니다.
자가 진단이 성공적으로 실행되면 30초 후 디바이스에서 비프음이 들립니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Gas density (numeric)
Value can be found in the published state on the `gas_density` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Selftest (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"selftest": NEW_VALUE}`.
The possible values are: ``.

