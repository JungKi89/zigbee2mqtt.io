---
title: "Develco SBTZB-110 control via MQTT"
description: "Integrate your Develco SBTZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:14
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco SBTZB-110

|     |     |
|-----|-----|
| Model | SBTZB-110  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Smart button |
| Exposes | battery, voltage, action |
| Picture | ![Develco SBTZB-110](https://www.zigbee2mqtt.io/images/devices/SBTZB-110.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

페어링:
버튼을 눌러 네트워크 검색을 시작합니다. 스마트 버튼이 참가할 Zigbee 네트워크를 최대 15분 동안 검색합니다.
• 기기가 Zigbee 네트워크를 검색하는 동안 노란색 LED가 깜빡입니다.
• LED가 깜빡임을 멈추면 기기가 Zigbee 네트워크에 성공적으로 연결된 것입니다.
• 검색 시간이 초과된 경우 버튼을 짧게 누르면 다시 시작됩니다.

기기 초기화:
1. 버튼을 10초 동안 눌러 LED가 녹색으로 깜빡일 때 즉시 버튼을 놓습니다. 이후 60초 이내에 기기를 초기화해야 합니다.
2. 버튼을 다시 누르고 계속 누르고 있습니다.
3. 버튼을 누르고 있는 동안 LED가 노란색으로 한 번, 연속으로 두 번, 그리고 마지막으로 여러 번 깜빡입니다.
4. LED가 여러 번 연속으로 깜빡이는 동안 버튼을 놓습니다.
5. 버튼을 놓은 후 LED가 길게 한 번 깜빡이면 초기화가 완료됩니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`.

