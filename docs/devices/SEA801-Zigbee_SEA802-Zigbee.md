---
title: "Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT"
description: "Integrate your Saswell SEA801-Zigbee/SEA802-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-30T11:31:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Saswell SEA801-Zigbee/SEA802-Zigbee

|     |     |
|-----|-----|
| Model | SEA801-Zigbee/SEA802-Zigbee  |
| Vendor  | [Saswell](/supported-devices/#v=Saswell)  |
| Description | Thermostatic radiator valve |
| Exposes | battery_low, anti_scaling, switch (state), child_lock, heating, climate (current_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration) |
| Picture | ![Saswell SEA801-Zigbee/SEA802-Zigbee](https://www.zigbee2mqtt.io/images/devices/SEA801-Zigbee-SEA802-Zigbee.png) |
| White-label | HiHome WZB-TRVL, Hama 00176592, Maginon WT-1, RTX ZB-RT1, SETTI+ TRV001, Royal Thermo RTE 77.001B |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링

* SEA801-Zigbee (전면 LCD 디스플레이, 여러 버튼): LCD 화면에 "----"가 표시될 때까지 "AUTO/MANU" 버튼과 "+" 버튼을 길게 누릅니다.
* SEA802-Z01 (측면 흰색 LED 디스플레이, 회전 플레이트): LED 점들이 "OF"를 표시할 때까지 회전 플레이트를 돌려 온도를 낮춘 후, 화면이 "--"로 변경될 때까지 길게 누릅니다.

### 주간 스케줄

이 값은 읽기(`/get`)가 불가능합니다.
다음 페이로드로 `zigbee2mqtt/FRIENDLY_NAME/set` 토픽에 메시지를 발행하여 제어합니다.

`dayofweek` 1-7, 1=일요일
`transitionTime` 자정 이후 분 단위
`numoftrans` 최대 전환 횟수는 4인 것으로 보입니다. 

``` json
{
  "weekly_schedule": {
    "1": {
      "dayofweek": 1,
      "numoftrans": 2,
      "mode": 1,
      "transitions": [
        {
          "transitionTime": 360,
          "heatSetpoint": 23
        },
        {
          "transitionTime": 570,
          "heatSetpoint": 2200
        }
      ]
    }
  }
}
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Anti scaling (binary)
Enables/disables bi-weekly anti-scaling feature.
Value can be found in the published state on the `anti_scaling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"anti_scaling": NEW_VALUE}`.
If value equals `ON` anti scaling is ON, if `OFF` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Away mode (switch)
The current state of this switch is in the published state under the `away_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": "ON"}`, `{"away_mode": "OFF"}` or `{"away_mode": "undefined"}`.
It's not possible to read (`/get`) this value.

### Heating (binary)
Device valve is open or closed (heating or not).
Value can be found in the published state on the `heating` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` heating is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-6` and the maximum value is `6` with a step size of `1`.

