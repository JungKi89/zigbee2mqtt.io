---
title: "Tuya TS0601_dimmer_knob control via MQTT"
description: "Integrate your Tuya TS0601_dimmer_knob via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-01-01T08:59:10
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_dimmer_knob

|     |     |
|-----|-----|
| Model | TS0601_dimmer_knob  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Zigbee smart knob dimmer |
| Exposes | light (state, brightness, min_brightness), light_type, indicator_mode |
| Picture | ![Tuya TS0601_dimmer_knob](https://www.zigbee2mqtt.io/images/devices/TS0601_dimmer_knob.png) |
| White-label | Moes WS-SY-EURD, Moes WS-SY-EURD-WH-MS |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 최소/최대 밝기
'min_brightness'만 제공되며 'max_brightness'는 제공되지 않습니다.

### 페어링
기기를 페어링하려면 노브를 5초 동안 눌러야 합니다. 경우에 따라 조명이 켜진 상태에서만 페어링 모드가 작동합니다. 또한 이 기기는 라우터가 아닌 코디네이터에 직접 페어링해야 하는 것으로 보입니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `min_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                

### Light type (enum)
Type of light attached to the device.
Value can be found in the published state on the `light_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_type": NEW_VALUE}`.
The possible values are: `led`, `incandescent`, `halogen`.

### Indicator mode (enum)
Mode of the indicator light.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

