---
title: "Sengled E1E-G7F control via MQTT"
description: "Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-29T19:41:16Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sengled E1E-G7F

|     |     |
|-----|-----|
| Model | E1E-G7F  |
| Vendor  | [Sengled](/supported-devices/#v=Sengled)  |
| Description | Smart switch |
| Exposes | action |
| Picture | ![Sengled E1E-G7F](https://www.zigbee2mqtt.io/images/devices/E1E-G7F.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
on 버튼과 off 버튼을 동시에 3초 이상 누르고 있어 스위치를 공장 초기화하세요. 인디케이터가 깜빡이기 시작하면 성공적으로 초기화된 것입니다. 기기는 1분 동안 페어링 모드로 진입합니다. 1분 내에 연결되지 않으면 페어링 프로세스를 다시 시작해야 합니다.

기기가 페어링 모드로 진입하지 않으면 새 배터리를 교체해 보세요.

### 길게 누르기 동작
기기가 때때로 길게 누르기와 함께 단일 누르기를 출력할 수 있습니다. 기기 디바운스 설정을 사용하여 이를 완화할 수 있습니다. *[기기 유형별 설정 사용 방법](../guide/configuration/devices-groups.md#specific-device-options)*을 참조하세요.

`up` 및 `down` 버튼의 경우, 먼저 동작을 출력한 다음 버튼을 놓을 때까지 약 1초마다 `{action}_long`을 반복해서 출력합니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `up`, `down`, `off`, `on_double`, `on_long`, `off_double`, `off_long`.

