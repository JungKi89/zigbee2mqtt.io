---
title: "Gledopto GL-C-009P control via MQTT"
description: "Integrate your Gledopto GL-C-009P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-03-30T20:29:35Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Gledopto GL-C-009P

|     |     |
|-----|-----|
| Model | GL-C-009P  |
| Vendor  | [Gledopto](/supported-devices/#v=Gledopto)  |
| Description | Zigbee LED Controller W (pro) |
| Exposes | light (state, brightness), effect, power_on_behavior, identify |
| Picture | ![Gledopto GL-C-009P](https://www.zigbee2mqtt.io/images/devices/GL-C-009P.png) |
| White-label | Gledopto GL-C-009P_mini |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
1. 기기를 켜세요.
2. 2초 이내에 껐다 켜세요.
3. 켜기/끄기를 4번 반복하세요.
4. 다섯 번째 켜졌을 때 불이 4번 깜빡인 후 계속 켜져 있으면 초기화 완료입니다

## 멀티 모드 5-in-1 기기
Gledopto는 최대 5가지 다른 LED 컨트롤러 유형 중 하나를 선택할 수 있는 기기를 제공하며, 각 모드마다 다른 [표시등] **색상**을 표시합니다.

* `RGB+CCT` [GL-C-008P](./GL-C-008P.md) [흰색]
* `RGBW` [GL-C-007P](./GL-C-007P.md) [노란색]
* `RGB` [GL-C-003P](./GL-C-003P.md) [파란색]
* `CCT` [GL-C-006P](./GL-C-006P.md) [초록색]
* `Dimmer` [GL-C-009P](./GL-C-009P.md) [빨간색]

이 `GL-C-009P` 모드는 다음 모델에서 `modelId`로 사용할 수 있습니다:

* **GL-C-001P** - Zigbee Pro 5 in 1 Smart LED Controller
* **GL-C-002P** - Zigbee Pro 5 in 1 LED Controller Mini Ultra Thin
* **GL-C-011P** - Zigbee Pro 5 in 1 Smart LED Controller DIN Rail
* **GL-C-201P** - Zigbee Pro+ 5 in 1 Smart LED Controller
* **GL-C-301P** - Zigbee Pro+ 5 in 1 Smart LED Controller Ultra-Mini

기기의 `Opt` 버튼을 표시등이 `빨간색`이 될 때까지 짧게 눌러 이 `GL-C-009P` 모드로 전환할 수 있습니다.

Zigbee2MQTT와 페어링하거나 모드를 변경하려면 `Reset` 버튼을 4번 누르세요.

## 듀얼 모드 2-in-1 기기
Gledopto는 최대 2가지 다른 LED 컨트롤러 유형 중 하나를 선택할 수 있는 기기를 제공하며, 각 모드마다 다른 [표시등] **상태**를 표시합니다.

* `CCT` [GL-C-006P](./GL-C-006P.md) [표시등 꺼짐]
* `Dimmer` [GL-C-009P](./GL-C-009P.md) [표시등 켜짐]

이 `GL-C-009P` 모드는 다음 모델에서 `modelId`로 사용할 수 있습니다:
* **GL-C-003P**† - Zigbee Pro 3-wire/2-wire 2 in 1 CCT/DIM LED Controller
* **GL-C-203P** - Zigbee Pro+ 3-wire/2-wire 2 in 1 CCT/DIM LED Controller

표시등이 `켜짐` 상태가 될 때까지 기기의 `Reset` 버튼을 짧게 눌러 이 `GL-C-009P` 모드로 전환할 수 있습니다.

Zigbee2MQTT와 페어링하거나 모드를 변경하려면 `Reset` 버튼을 2초 이상 길게 누르세요.

† 이 **GL-C-003P** 모델은 RGB 컨트롤러가 아니며 `RGB` 컨트롤러로 선택하거나 Zigbee2MQTT로 `GL-C-003P` ModelId를 전송할 수 없습니다. 이를 지원하는 기기는 [GL-C-003P](./GL-C-003P.md)를 참조하세요.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                

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
}
````

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

