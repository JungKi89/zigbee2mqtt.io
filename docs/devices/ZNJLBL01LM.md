---
title: "Aqara ZNJLBL01LM control via MQTT"
description: "Integrate your Aqara ZNJLBL01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNJLBL01LM

|     |     |
|-----|-----|
| Model | ZNJLBL01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Roller shade driver E1 |
| Exposes | cover (state, position), battery, device_temperature, charging_status, reverse_direction, motor_state, running, motor_speed |
| Picture | ![Aqara ZNJLBL01LM](https://www.zigbee2mqtt.io/images/devices/ZNJLBL01LM.png) |
| White-label | Aqara RSD-M01 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
기기 하단의 리셋 버튼을 5초간 누르고 있습니다.

*기기를 새 브리지에 페어링해도 완전 열림/닫힘 위치는 **초기화되지 않습니다**.*

### 완전 열림 및 완전 닫힘 위치
회전 범위(완전 열림 및 완전 닫힘)는 위쪽과 아래쪽 버튼을 동시에 3초간 눌러 표시등이 파란색으로 바뀔 때까지 누르면 초기화됩니다.

#### 완전 열림 위치
완전 열림 위치는 셰이드를 원하는 위치로 설정한 후 위쪽 버튼을 5번 연속으로 누르면 설정됩니다. 성공하면 표시등이 파란색으로 바뀌며 3번 깜박입니다.

#### 완전 닫힘 위치
완전 닫힘 위치는 셰이드를 원하는 위치로 설정한 후 아래쪽 버튼을 5번 연속으로 누르면 설정됩니다. 성공하면 표시등이 파란색으로 바뀌며 3번 깜박입니다.

### 버튼 방향 변경
위쪽 및 아래쪽 버튼이 블라인드 작동 방향과 반대로 동작하는 경우, 리셋 버튼을 3번 눌러 방향을 바꿀 수 있습니다. 성공하면 표시등이 1초간 파란색으로 고정됩니다.

### 어댑터 펌웨어
이 기기가 (완전히) 작동하려면 어댑터에 최소한 다음 펌웨어가 필요합니다:
- CC2530/CC2531: [`20211115`](https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin)
- CC1352/CC2652: [`20211114`](https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin)
- CC2538: [`20211222`](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- Conbee II: [`0x26720700`]( http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF)

*기기를 이미 페어링한 경우 어댑터 펌웨어 업그레이드 후 다시 페어링해야 합니다.*
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Charging status (binary)
The current charging status..
Value can be found in the published state on the `charging_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"charging_status": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` charging status is ON, if `false` OFF.

### Reverse direction (binary)
Whether the curtain direction is inverted.
Value can be found in the published state on the `reverse_direction` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reverse_direction": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_direction": NEW_VALUE}`.
If value equals `true` reverse direction is ON, if `false` OFF.

### Motor state (enum)
The current state of the motor..
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`, `blocked`.

### Running (binary)
Whether the motor is moving or not.
Value can be found in the published state on the `running` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` running is ON, if `false` OFF.

### Motor speed (enum)
Controls the motor speed.
Value can be found in the published state on the `motor_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_speed": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

