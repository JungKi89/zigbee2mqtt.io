---
title: "Aqara WXKG03LM_rev1 control via MQTT"
description: "Integrate your Aqara WXKG03LM_rev1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-30T11:31:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG03LM_rev1

|     |     |
|-----|-----|
| Model | WXKG03LM_rev1  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless remote switch (single rocker), 2016 model |
| Exposes | battery, voltage, action |
| Picture | ![Aqara WXKG03LM_rev1](https://www.zigbee2mqtt.io/images/devices/WXKG03LM_rev1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 더 이상 사용되지 않는 클릭 이벤트
이 기기는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### 페어링
기기의 버튼을 약 10초 동안 누르고 있습니다
(파란 불이 깜박이기 시작했다가 멈출 때까지), 손을 떼고 기다립니다.

페어링 과정이 시작되기 전에 기존 코디네이터에서 스위치를 언페어링해야 할 수 있습니다.
그렇게 할 수 없다면 배터리를 제거하고 (있는 경우), 버튼을 눌러 기기를 완전히 방전시킨 후, 배터리를 다시 넣고 페어링을 재시도해 보세요.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`.

