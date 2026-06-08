---
title: "SONOFF SNZB-01 control via MQTT"
description: "Integrate your SONOFF SNZB-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-07-10T21:02:58Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01

|     |     |
|-----|-----|
| Model | SNZB-01  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Wireless button |
| Exposes | battery, voltage, action |
| Picture | ![SONOFF SNZB-01](https://www.zigbee2mqtt.io/images/devices/SNZB-01.png) |
| White-label | eWeLink RHK07 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

바인딩 정보는 [스니핑](../advanced/zigbee/04_sniff_zigbee_traffic.md)을 통해 확인되었습니다.

### 배터리
CR2450 배터리 1개를 사용합니다.

**이 디바이스는 사용하지 않을 때 에너지 절약을 위해 *슬립* 상태로 전환됩니다.**  
슬립 중에는 Z2M 명령에 응답하지 않습니다.  
버튼을 눌러 깨어있게 하고 상호작용이 가능하도록 합니다.

### 페어링
LED 표시등이 세 번 깜박일 때까지 **리셋 버튼을 5초간 길게 누릅니다**. 이는 디바이스가 페어링 모드에 진입했음을 의미합니다.  
리셋 버튼은 후면 커버를 제거하면 찾을 수 있습니다.

### 바인딩

**이 버튼은 개별 디바이스 및/또는 그룹을 직접 제어할 수 있습니다.**

- 네트워크 내부에서 `OnOff` 클러스터를 [바인딩](../guide/usage/binding.md)하여 페어링할 수 있습니다.  
- [Touchlink](../guide/usage/touchlink.md)를 통한 네트워크 외부 페어링은 지원되지 **않습니다**.

### 액션 매핑

|                                 실제 동작 | Z2M 액션 | 바인드 액션 |
| ------------------------------------------: | ---------- | ----------- |
| 단일 누름, *누름 + 해제 + 0.6초 대기* | single     | *Toggle*    |
|     이중 누름, *누름 + 해제 + 누름* | double     | *On*        |
|               길게 누름, *2초 누르고 유지* | long       | *Off*       |
<!-- Notes END: Do not edit below this line -->




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
The possible values are: `single`, `double`, `long`.

