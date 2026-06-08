---
title: "Insta InstaRemote control via MQTT"
description: "Integrate your Insta InstaRemote via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-08T17:49:06Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Insta InstaRemote

|     |     |
|-----|-----|
| Model | InstaRemote  |
| Vendor  | [Insta](/supported-devices/#v=Insta)  |
| Description | Zigbee Light Link wall/handheld transmitter |
| Exposes | action |
| Picture | ![Insta InstaRemote](https://www.zigbee2mqtt.io/images/devices/InstaRemote.png) |
| White-label | Gira 2430-100, Gira 2435-10, Jung ZLLCD5004M, Jung ZLLLS5004M, Jung ZLLA5004M, Jung ZLLHS4 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Zigbee 3 네트워크에서 송신기 연결 끊김 문제
공장 출하 펌웨어를 사용하는 경우, Zigbee 3 디바이스가 네트워크에 있으면(현재 대부분의 환경에서 표준) 몇 시간 후 송신기가 네트워크 연결을 잃게 됩니다. Jung 벽면 및 핸드헬드 송신기의 경우 이 문제를 해결하는 펌웨어 업데이트가 제공됩니다(아래 [OTA updates](#ota-updates) 참조). 단, 배터리 수명이 몇 달 수준으로 감소합니다.

안타깝게도 Gira는 Zigbee 송신기에 대한 지원을 완전히 중단한 것으로 보이며 펌웨어 업데이트를 전혀 제공하지 않습니다. Gira 핸드헬드 송신기의 경우 Jung 업데이트가 작동하는 것으로 보이지만(문제를 해결함), Gira 벽면 송신기는 그렇지 않습니다(Jung 벽면 송신기의 8개 버튼과 달리 6개 버튼만 있어 다른 펌웨어가 필요함). 이 문제에 대한 실질적인 해결책이 없어 현재 Gira 벽면 송신기는 거의 사용할 수 없는 상태입니다.

### 초기화 (8버튼 디바이스)
* 녹색 LED가 깜박이기 시작할 때까지 버튼 `3`과 `4`를 동시에 약 10초간 길게 누릅니다.
* 버튼 `3`과 `4`를 놓은 후 10초 이내에 버튼 `O`를 짧게 누릅니다.
* LED가 3초간 녹색으로 점등되면 송신기가 초기화된 것입니다.
![Reset](../images/InstaRemote-reset.jpg)

### 네트워크 참가 (8버튼 디바이스)
* 녹색 LED가 깜박이기 시작할 때까지 버튼 `5`와 `I`를 동시에 길게 누릅니다. 그런 다음 버튼을 놓습니다.
* 10초 후 송신기가 참가할 오픈 네트워크를 검색하기 시작합니다.
* 네트워크 참가에 성공하면 LED가 3초간 녹색으로 점등됩니다(실패하면 LED가 3초간 빠르게 빨간색으로 깜박입니다).
![Join Network](../images/InstaRemote-join-network.jpg)

### OTA
디바이스가 OTA 업데이트를 요청하거나 수락하려면 "프로그래밍 모드"에 있어야 합니다(네트워크 참가 모드와 동일, 위 내용 참조).
디바이스가 업데이트를 수락하지 않거나 어떤 이유로 멈춘 것처럼 보이는 경우, 초기화 후 네트워크에 다시 참가하고 OTA 업데이트를 다시 시작하기 전에 프로그래밍 모드에 진입하면 도움이 될 수 있습니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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
The possible values are: `select_0`, `select_1`, `select_2`, `select_3`, `select_4`, `select_5`, `on`, `off`, `down`, `up`, `stop`.

