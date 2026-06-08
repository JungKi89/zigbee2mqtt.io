---
title: "Konke 2AJZ4KPKEY control via MQTT"
description: "Integrate your Konke 2AJZ4KPKEY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Konke 2AJZ4KPKEY

|     |     |
|-----|-----|
| Model | 2AJZ4KPKEY  |
| Vendor  | [Konke](/supported-devices/#v=Konke)  |
| Description | Multi-function button |
| Exposes | battery_low, battery, action |
| Picture | ![Konke 2AJZ4KPKEY](https://www.zigbee2mqtt.io/images/devices/2AJZ4KPKEY.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 더 이상 사용되지 않는 click 이벤트
기본적으로 이 장치는 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 장치에 대해 `legacy: false`로 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### 페어링
장치 측면의 리셋 버튼을 약 5초간 누른 채로 유지합니다(파란색 빛이 깜빡이기 시작할 때까지).
이 작업에는 바늘이나 핀이 필요합니다. 이후 장치가 자동으로 네트워크에 참가합니다.

### 중요
Konke 장치는 Zigbee 채널 15, 20, 25에서만 작동합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

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
The possible values are: `single`, `double`, `hold`.

