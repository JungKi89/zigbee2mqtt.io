---
title: "Securifi PP-WHT-US control via MQTT"
description: "Integrate your Securifi PP-WHT-US via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Securifi PP-WHT-US

|     |     |
|-----|-----|
| Model | PP-WHT-US  |
| Vendor  | [Securifi](/supported-devices/#v=Securifi)  |
| Description | Peanut Smart Plug |
| Exposes | switch (state), power, current, voltage |
| Picture | ![Securifi PP-WHT-US](https://www.zigbee2mqtt.io/images/devices/PP-WHT-US.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
Peanut Smart Plug은 데이터베이스 항목에 `modelId`를 제공하지 않아 Zigbee2MQTT가 제품을 식별하거나 처리 방법을 파악할 수 없으므로, 추가 단계가 필요합니다.

페어링 버튼(켜기/끄기 버튼 옆의 작은 버튼)을 10초 동안 길게 눌렀다가 버튼을 놓고 기기 플러그를 뽑아 기기를 초기화하고 페어링 모드로 진입합니다.
다시 꽂으면 전면 LED가 빨간색으로 깜박이며 페어링 요청을 받을 준비가 됩니다.
페어링이 완료되면 플러그의 빨간색 LED가 깜박임을 멈춥니다.

페어링 후 Zigbee2MQTT를 중지하고 텍스트 편집기로 Zigbee2MQTT `database.db` 파일을 직접 수정해야 합니다(파일이 root 소유일 수 있습니다).
Peanut Smart Plug이 나열된 각 줄(`ManufName` 필드에서 "SecuriFi Ltd." 검색)을 찾아 기존 필드 사이에 `"modelId":"PP-WHT-US",`를 **추가**합니다.

*예를 들어,* `..."manufId":4098,"manufName":"Securifi Ltd....`를
각 기기 줄에서 `..."manufId":4098,"modelId":"PP-WHT-US","manufName":"Securifi Ltd....`로 변경합니다.

파일을 저장하고 Zigbee2MQTT를 재시작합니다.


### 전력 측정
이 기기는 원래 허브를 통해서만 가능한 최신 펌웨어가 있어야 전력 측정을 지원합니다. 구형 펌웨어의 경우 측정값에서 0만 표시됩니다.
토론: https://github.com/Koenkk/zigbee2mqtt/issues/809
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

