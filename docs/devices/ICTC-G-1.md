---
title: "IKEA ICTC-G-1 control via MQTT"
description: "Integrate your IKEA ICTC-G-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# IKEA ICTC-G-1

|     |     |
|-----|-----|
| Model | ICTC-G-1  |
| Vendor  | [IKEA](/supported-devices/#v=IKEA)  |
| Description | TRADFRI wireless dimmer |
| Exposes | identify, battery, action |
| Picture | ![IKEA ICTC-G-1](https://www.zigbee2mqtt.io/images/devices/ICTC-G-1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
TRADFRI 무선 디머(ICTC-G-1)를 공장 초기화하려면 버튼을 4번 누릅니다(빨간색 LED가 깜박이기 시작할 때까지).
깜박임 후에는 조명을 제어하듯이 디머를 회전시키는 것이 좋습니다. 이렇게 하면 기기가 슬립 모드로 전환되지 않아 페어링이 성공적으로 이루어집니다. 디머는 인식되었지만 동작이 감지되지 않는 경우, Zigbee2MQTT를 재시작해 보세요.
[IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620)을 참조하세요.


### 레거시 통합
기본적으로 (하위 호환성을 위해) 레거시 통합이 활성화되어 있습니다.
여러 근본적인 문제가 있으므로 새 사용자는 이를 **비활성화**하는 것을 권장합니다.
레거시 통합을 비활성화하려면 `configuration.yaml`에 다음을 추가하세요:


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
```



아래 정보는 레거시 통합에만 해당됩니다.

### 권장 사항
이 기기는 짧은 시간 안에 동일한 페이로드로 여러 메시지를 보냅니다. 고유한 action 페이로드를 잃지 않으면서 처리량을 제한하기 위해 `debounce_ignore: - action`과 함께 `debounce` 옵션을 설정하는 것이 좋습니다.

예시 (devices.yaml)


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.5
    debounce_ignore:
    - action
```


최적의 "부드러움"을 찾으려면 debounce 시간을 조정하거나, 모든 고유한 회전 단계가 필요한 경우 `debounce_ignore` 옵션에 `brightness`를 추가하는 것을 고려하세요.


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.1
    debounce_ignore:
    - action
    - brightness
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Identify (enum)
Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `brightness_move_to_level`.

