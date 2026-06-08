---
title: "Hive SLR2 control via MQTT"
description: "Integrate your Hive SLR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLR2

|     |     |
|-----|-----|
| Model | SLR2  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Dual channel heating and hot water receiver |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration |
| Picture | ![Hive SLR2](https://www.zigbee2mqtt.io/images/devices/SLR2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링

리시버를 Zigbee2MQTT에 페어링하려면 다음 단계를 따르세요:

1. 리시버에 연결된 컨트롤러의 배터리를 제거하여 일시적으로 연결을 끊습니다.
2. 리시버와 보일러를 껐다가 다시 켜서 컨트롤러에 연결을 시도하지 않는 상태로 만듭니다.
3. 리시버와 보일러가 켜지면, 디바이스의 중앙 난방(Central heating) 버튼을 중앙 난방 표시등이 흰색/분홍색으로 바뀔 때까지 누른 후 버튼을 놓습니다. 이렇게 하면 리시버가 독립 실행 모드로 전환됩니다.
4. 중앙 난방 버튼을 다시 눌러 중앙 난방 표시등이 황색으로 깜박이기 시작할 때까지 기다립니다. 이제 디바이스가 페어링 모드에 진입하여 Zigbee2MQTT에서 검색됩니다.
5. 이제 1단계에서 분리한 컨트롤러에 배터리를 다시 삽입하고 리시버(및 선택적으로 Zigbee2MQTT)에 페어링할 수 있습니다. 컨트롤러 페어링 방법은 [Hive SLT3B](./SLT3.md) 페어링 안내를 참조하세요. 컨트롤러가 리시버에 페어링될 때까지 중앙 난방 표시등은 황색으로 유지되지만, 리시버는 정상적으로 작동합니다.


### 이중 채널 리시버에서 페이로드 전송
리시버는 `water`와 `heat` 두 개의 엔드포인트를 사용하므로 페이로드를 전송하는 방법이 두 가지이며 모두 동일하게 유효합니다. 예를 들어 `heat` 엔드포인트의 경우:

Topic `zigbee2mqtt/FRIENDLY_NAME/set`
```js
{
    "system_mode_heat":"heat"
}
```

Topic `zigbee2mqtt/FRIENDLY_NAME/heat/set`
```json
{
    "system_mode":"heat"
}
```

`heat`는 토픽이나 속성 중 하나에 반드시 포함되어야 합니다. 이 점을 고려하여 선호하는 스타일에 맞게 문서의 명령을 조정하세요.

### 네이티브 부스트 시작/편집 방법 (heat 엔드포인트)
리시버는 네이티브 Boost를 지원하며, 호환되는 리모컨에 남은 시간을 표시할 수 있습니다.

부스트를 시작하거나 이미 활성화된 부스트를 수정하려면 `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:

```js
{
   "system_mode_heat":"emergency_heating",
   "temperature_setpoint_hold_duration_heat":30,  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_heat":1,
   "occupied_heating_setpoint_heat":18  // Replace with desired temperature. Between 5 and 32 C
}
```
참고: 디바이스 타이밍 문제로 인해 페이로드를 하나의 단일 명령으로 전송해야 합니다. 개별 명령 전송이나 Frontend에서 속성을 수동으로 설정하는 방식은 작동하지 않습니다.

네이티브 부스트는 난방을 일시 중지하는 방법으로도 사용할 수 있습니다. 이 경우 온도를 낮은 값으로 설정하세요.

### 난방 모드를 ON으로 설정 (heat 엔드포인트)
`zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:
```js
{
   "system_mode_heat":"heat",
   "temperature_setpoint_hold_heat":1,
   "occupied_heating_setpoint_heat":20 // Replace with desired temperature. Between 5 and 32 C
}
```
참고: `temperature_setpoint_hold_duration_heat`이 자동으로 `65535`로 변경되는데, 이는 `undefined`(무기한)를 의미합니다.

이 명령은 현재 활성화된 모든 네이티브 부스트도 중지합니다.


### 난방 모드를 OFF로 설정 (heat 엔드포인트)
`zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:
```js
{
   "system_mode_heat":"off",
   "temperature_setpoint_hold_heat":0
}
```
참고: `temperature_setpoint_hold_duration_heat`이 자동으로 `0`으로 변경되는데, 이는 `설정 안 됨`을 의미합니다. `occupied_heating_setpoint_heat`는 자동으로 1°C로 변경됩니다.

이 명령은 현재 활성화된 모든 네이티브 부스트도 중지합니다.

### 네이티브 부스트 시작/편집 방법 (water 엔드포인트)
리시버는 네이티브 Boost를 지원하며, 호환되는 리모컨에 남은 시간을 표시할 수 있습니다.

부스트를 시작하거나 이미 활성화된 부스트를 수정하려면 `zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:

```js
{
   "system_mode_water":"emergency_heating",
   "temperature_setpoint_hold_duration_water":30,  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_water":1
}
```
참고: 디바이스 타이밍 문제로 인해 페이로드를 하나의 단일 명령으로 전송해야 합니다. 개별 명령 전송이나 Frontend에서 속성을 수동으로 설정하는 방식은 작동하지 않습니다.

### 난방 모드를 ON으로 설정 (water 엔드포인트)
`zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:
```js
{
   "system_mode_water":"heat",
   "temperature_setpoint_hold_water":1
}
```
참고: `temperature_setpoint_hold_duration_heat`이 자동으로 `65535`로 변경되는데, 이는 `undefined`(무기한)를 의미합니다.

이 명령은 현재 활성화된 모든 네이티브 부스트도 중지합니다.


### 난방 모드를 OFF로 설정 (water 엔드포인트)
`zigbee2mqtt/FRIENDLY_NAME/set` 토픽으로 다음 페이로드를 전송하세요:
```js
{
   "system_mode_water":"off",
   "temperature_setpoint_hold_water":0
}
```
참고: `temperature_setpoint_hold_duration_heat`이 자동으로 `0`으로 변경되는데, 이는 `설정 안 됨`을 의미합니다.

이 명령은 현재 활성화된 모든 네이티브 부스트도 중지합니다.

### 로컬 및 점유 온도 (water 엔드포인트)
water 엔드포인트는 `system_mode_water`를 기반으로 한 ON/OFF 스위치처럼 작동합니다. 따라서 디바이스는 고정된 온도 값을 사용합니다. `local_temperature_water`는 항상 21이고 `occupied_heating_setpoint_water`는 항상 22입니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate (heat endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_heat": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_heat": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_heat": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_heat": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_heat": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_heat": ""}`.

### Temperature setpoint hold (binary, heat endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_heat": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, heat endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_heat": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Climate (water endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_water": VALUE}` where `VALUE` is the °C between `22` and `22`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_water": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_water": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_water": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`, `emergency_heating`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_water": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_water": ""}`.

### Temperature setpoint hold (binary, water endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_water": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, water endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_water": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

