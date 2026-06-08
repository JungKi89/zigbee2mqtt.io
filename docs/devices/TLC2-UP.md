---
title: "YOKIS TLC2-UP control via MQTT"
description: "Integrate your YOKIS TLC2-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-12-29T16:26:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS TLC2-UP

|     |     |
|-----|-----|
| Model | TLC2-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Keyring Design series 2-button remote control |
| Exposes | identify, action |
| Picture | ![YOKIS TLC2-UP](https://www.zigbee2mqtt.io/images/devices/TLC2-UP.png) |



<!-- Notes BEGIN: You can edit here. Add “## Notes” headline if not already present. -->
## 페어링
송신기의 버튼을 5번 빠르게 누릅니다.

## Notes
- [CSA 제품 페이지](https://csa-iot.org/csa_product/tlc2-up/)
- “직접 모드”에서는 신호가 페어링된 디바이스에만 전송되며 zigbee2mqtt에 표시되지 않습니다. 원하는 버튼을 “라디오 버스” 모드로 설정하려면 아래 구성 옵션을 참조하세요.
- “조명 모드”는 버스에서 조명 또는 조명과 롤러 셔터를 동시에 전환합니다. 라디오 버스 모드에서 신호를 보내면 Zigbee 네트워크의 모든 조명에 신호가 전달됩니다. 단, open/close에 응답하는 다른 디바이스는 없습니다. 원하는 버튼을 “롤러 셔터” 모드로 설정하려면 아래 구성 옵션을 참조하세요.

## 구성 옵션
송신기를 구성하려면 먼저 구성 메뉴에 진입해야 합니다.
이를 위해 송신기의 임의 버튼을 10번 빠르게 누르면: 송신기의 LED가 빠르게 깜박이기 시작합니다.
LED가 깜박이는 동안, 구성하려는 버튼을 필요한 횟수만큼 누릅니다.

| 누름 횟수 | 가능한 설정 |
|-----|-----|
|  | *버튼 기능* | 
| 1 | 켜기/끄기 또는 열기/정지/닫기 시작 |
| 2 | 메모리 켜기 또는 중간 위치 |
| 3 | 켜기 또는 열기/정지 시작 |
| 4 | 끄기 또는 닫기/정지 |
| | *라디오 모드* |
| 5 | 직접 모드 |
| 6 | “라디오 버스” 모드 |
|  | *라디오 버스에서 영향받는 제품* |
| 10 | 조명 (공장 초기 설정) |
| 11 | 롤러 셔터 |
|  | *버튼 또는 전체 송신기 연결 복사/삭제* |
| 15 | 버튼 공장 구성 복원 |
| 24 | 액세스 포인트 복원. 라디오 버스의 모든 액세스 포인트 삭제 |
| 25 | 리모컨 공장 초기화 복원 |
<!-- Notes END: Do not edit below this line -->



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
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`, `open`, `close`, `stop`.

