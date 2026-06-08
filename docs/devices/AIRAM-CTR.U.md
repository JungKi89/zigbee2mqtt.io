---
title: "Airam AIRAM-CTR.U control via MQTT"
description: "Integrate your Airam AIRAM-CTR.U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Airam AIRAM-CTR.U

|     |     |
|-----|-----|
| Model | AIRAM-CTR.U  |
| Vendor  | [Airam](/supported-devices/#v=Airam)  |
| Description | CTR.U remote |
| Exposes | action |
| Picture | ![Airam AIRAM-CTR.U](https://www.zigbee2mqtt.io/images/devices/AIRAM-CTR.U.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 더 이상 사용되지 않는 click 이벤트
이 기기는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 해당 기기에 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### 페어링
리모컨 뒷면 배터리 커버 아래에 있는 작은 리셋 버튼을 4초간 누르면 기기가 초기화되고 네트워크 접속을 시도합니다.
페어링 중에는 기기가 깨어 있도록 앞면의 버튼을 계속 클릭하세요.
페어링이 완료될 때까지 2초마다 클릭해야 합니다.

이미 네트워크에 연결된 Airam 전구에 직접 페어링하는 방법으로도 네트워크에 접속되는 것으로 보입니다
(https://www.zigbee2mqtt.io/devices/4713407.html). ON과 DIM 버튼을 누른 채로 리모컨을 Airam 전구에서
5센티미터 이내로 가까이 대면 됩니다.
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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_down_click`, `brightness_up_click`, `brightness_down_hold`, `brightness_up_hold`, `brightness_down_release`, `brightness_up_release`.

