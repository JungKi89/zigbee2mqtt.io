---
title: "Sunricher SR-ZG2836D5-Pro control via MQTT"
description: "Integrate your Sunricher SR-ZG2836D5-Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG2836D5-Pro

|     |     |
|-----|-----|
| Model | SR-ZG2836D5-Pro  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee smart remote |
| Exposes | battery, action |
| Picture | ![Sunricher SR-ZG2836D5-Pro](https://www.zigbee2mqtt.io/images/devices/SR-ZG2836D5-Pro.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Home Assistant

Home Assistant와 쉽게 연동하려면 블루프린트를 사용할 수 있습니다. 이 블루프린트는 다음을 도와줍니다:

- 기기의 다양한 버튼에서 발생하는 버튼 누름 이벤트를 식별하고 응답
- 자동화에서 버튼을 쉽게 구분
- 자동화 설정 과정을 간소화

[https://github.com/maginawin/sr_ha_blueprints](https://github.com/maginawin/sr_ha_blueprints)

위 링크에서 적절한 배지를 찾아 블루프린트를 Home Assistant 인스턴스에 가져오세요.
<!-- Notes END: Do not edit below this line -->




## Exposes

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
The possible values are: `short_press`, `double_press`, `hold`, `hold_released`, `clockwise_rotation`, `anti_clockwise_rotation`, `stop_rotation`.

