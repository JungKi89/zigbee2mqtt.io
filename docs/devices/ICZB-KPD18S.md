---
title: "iCasa ICZB-KPD18S control via MQTT"
description: "Integrate your iCasa ICZB-KPD18S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# iCasa ICZB-KPD18S

|     |     |
|-----|-----|
| Model | ICZB-KPD18S  |
| Vendor  | [iCasa](/supported-devices/#v=iCasa)  |
| Description | Zigbee 3.0 Keypad Pulse 8S |
| Exposes | battery, action |
| Picture | ![iCasa ICZB-KPD18S](https://www.zigbee2mqtt.io/images/devices/ICZB-KPD18S.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링

iCasa ICZB-KPD18S를 초기화하려면 다음 단계를 따르세요:
1) 리모컨의 LED 표시등이 켜질 때까지 OFF 버튼과 ON 버튼을 동시에 길게 누릅니다.
2) 그런 다음 즉시 OFF 버튼을 5번 클릭합니다. 3) LED 상태 표시등이 3번 깜박이면 초기화 성공을 나타냅니다.

페어링 모드:
1) 리모컨의 상태 LED 표시등이 켜질 때까지 OFF 버튼과 ON 버튼을 동시에 길게 누른 후, 즉시 ON 버튼을 클릭합니다.
2) 리모컨의 상태 LED 표시등이 빠르게 깜박입니다.
3) 페어링에 성공하면 리모컨의 상태 LED 표시등이 6번 깜박입니다.

### 더 이상 사용되지 않는 click 이벤트
이 디바이스는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 디바이스에 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### 레거시 통합
기본적으로 (하위 호환성을 위해) 레거시 통합이 활성화되어 있습니다.
신규 사용자에게는 여러 근본적인 문제가 있으므로 **비활성화**하는 것을 권장합니다.
레거시 통합을 비활성화하려면 `configuration.yaml`에 다음을 추가하세요:


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_stop`, `brightness_move_up`, `brightness_move_down`, `recall_1`, `recall_2`, `recall_3`, `recall_4`, `recall_5`, `recall_6`, `store_1`, `store_2`, `store_3`, `store_4`, `store_5`, `store_6`.

