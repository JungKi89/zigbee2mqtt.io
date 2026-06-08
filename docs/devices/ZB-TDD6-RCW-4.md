---
title: "Moes ZB-TDD6-RCW-4 control via MQTT"
description: "Integrate your Moes ZB-TDD6-RCW-4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZB-TDD6-RCW-4

|     |     |
|-----|-----|
| Model | ZB-TDD6-RCW-4  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | RGB+CCT 6W Smart Downlight |
| Exposes | light (state, brightness, color_temp, color_xy), effect, do_not_disturb, color_power_on_behavior |
| Picture | ![Moes ZB-TDD6-RCW-4](https://www.zigbee2mqtt.io/images/devices/ZB-TDD6-RCW-4.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
전원을 세 번 껐다 켭니다: 켜기-끄기, 켜기-끄기, 켜기-끄기, 켜기 >> [최대 5초] >>> 깜박임 시작.
전원이 완전히 방전되도록 끄기와 켜기 사이에 3초 이상 간격을 두어야 합니다.

### 알려진 문제

페어링 시퀀스가 너무 쉽게 트리거됩니다. 예를 들어 내부 또는 외부의 불안정한 전원 공급으로 인해 **기기가 간혹 스스로 "초기화"될 수 있으며**, 단 한 번의 전원 사이클로도 발생할 수 있습니다.

기기는 새로운 네트워크 키로 덮어써지기 전까지 기존 키를 유지합니다. 따라서 "초기화"가 발생하더라도 기기는 네트워크를 떠난 적이 없는 것처럼 동작합니다. 그러나 Zigbee2MQTT와 라우터는 해당 기기를 테이블에서 제거했을 것입니다.

[외부 확장 기능](https://github.com/Koenkk/zigbee2mqtt-user-extensions/tree/main/stable/ignore_device_leave)을 사용하면 Zigbee2MQTT 데이터베이스에 기기를 유지할 수 있습니다. 하지만 건강하고 안전한 네트워크를 유지하려면 문제 있는 기기의 사용을 피하는 것이 좋습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
                
- `color_xy`: To control the XY color (CIE 1931 color space) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"x": X_VALUE, "y": Y_VALUE}}` (e.g. `{"color":{"x":0.123,"y":0.123}}`). To read the XY color send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"x":"","y":""}}`. Alternatively it is possible to set the XY color via RGB:
                
  - `{"color": {"r": R, "g": G, "b": B}}` e.g. `{"color":{"r":46,"g":102,"b":150}}`
  - `{"color": {"rgb": "R,G,B"}}` e.g. `{"color":{"rgb":"46,102,150"}}`
  - `{"color": {"hex": HEX}}` e.g. `{"color":{"hex":"#547CFF"}}`

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depends on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`

**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use `brightness_move_onoff`/`brightness_step_onoff`
```js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
  "color_temp_move": 60, // Starts moving color temperature up at 60 units per second
  "color_temp_move": -40, // Starts moving color temperature down at 40 units per second
  "color_temp_move": "stop", // Stop moving color temperature
  "color_temp_move": "release", // Stop moving color temperature
  "color_temp_move": 0, // Stop moving color temperature
  "color_temp_move": "up", // Move to warmer color temperature at default rate
  "color_temp_move": 1, // Move to warmer color temperature at default rate
  "color_temp_move": "down", // Move to cooler color temperature at default rate
  "color_temp_move": {"rate": 30, "minimum": 150, "maximum": 500}, // Move with custom rate and constraints
  "color_temp_step": 99, // Increase color temperature by 99
}
````

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`, `colorloop`, `stop_colorloop`.

### Do not disturb (binary)
Controls state after power outage: false = on, true = restore previous state.
Value can be found in the published state on the `do_not_disturb` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"do_not_disturb": NEW_VALUE}`.
If value equals `true` do not disturb is ON, if `false` OFF.

### Color power on behavior (enum)
Power on behavior state.
Value can be found in the published state on the `color_power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_power_on_behavior": NEW_VALUE}`.
The possible values are: `initial`, `previous`, `customized`.

