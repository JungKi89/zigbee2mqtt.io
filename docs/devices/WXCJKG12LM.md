---
title: "Aqara WXCJKG12LM control via MQTT"
description: "Integrate your Aqara WXCJKG12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-12-15T17:27:48Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXCJKG12LM

|     |     |
|-----|-----|
| Model | WXCJKG12LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Opple wireless switch (double band) |
| Exposes | battery, voltage, operation_mode, action |
| Picture | ![Aqara WXCJKG12LM](https://www.zigbee2mqtt.io/images/devices/WXCJKG12LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링 방법
기기 뒷면의 버튼을 파란 불이 깜빡이기 시작할 때까지 길게 누릅니다. 손을 떼면 페어링이 시작됩니다.

### 바인딩
기본적으로 기기는 코디네이터에 바인딩되어 있지만, 네트워크의 다른 조명이나 스위치를 직접 제어하는 데도 사용할 수 있습니다 ([바인딩 가이드](https://www.zigbee2mqtt.io/guide/usage/binding.html) 참조).

이 기기는 한 번에 하나의 기기 또는 그룹에만 바인딩할 수 있습니다.

올바른 명령을 위해서는 기기의 작동 모드를 변경해야 합니다. 기본적으로 `event` 모드이지만 바인딩 시 `command` 모드로 변경해야 합니다.
변경하려면 `{"operation_mode": "command"}` 페이로드를 `zigbee2mqtt/FRIENDLY_NAME/set`에 전송합니다 (또는 GUI의 `operation_mode` 매개변수 사용). 변경 전에 기기를 깨워 두세요.

기기가 기본적으로 절전 모드이므로, 바인딩/언바인딩 명령을 전송한 후 리셋 버튼을 한 번 눌러 기기를 깨워야 합니다.

엔드포인트 `1`이 조명 또는 조명 그룹에 바인딩되면 동작은 다음과 같습니다 (더블 밴드 모델):
| 버튼 | 클릭 | 동작 | 설명 |
|-----|-----|-----|-----|
| 상단, 왼쪽 | 단일/더블/길게 | 끄기 | `commandOff` 명령 사용 |
| 상단, 오른쪽 | 단일/더블/길게 | 켜기 | `commandOn` 명령 사용 |
| 하단, 왼쪽 | 단일 클릭 | 밝기 감소 | 85포인트(33%) 단위로, `step` 명령 사용 |
| 하단, 오른쪽 | 단일 클릭 | 밝기 증가 | 85포인트(33%) 단위로, `step` 명령 사용 |
| 하단, 왼쪽 | 더블 클릭 | 색온도 감소 | 69 mired 단위로 `stepColorTemp` 명령 사용 (더 따뜻하게) |
| 하단, 오른쪽 | 더블 클릭 | 색온도 증가 | 69 mired 단위로 `stepColorTemp` 명령 사용 (더 차갑게) |

### 배터리 교체
Opple 라인의 모든 기기는 동일한 내부 설계를 공유합니다. 먼저 무선 스위치 부분을 거치대에서 분리해야 합니다.
긴 얇은 물체(플라스틱이 부드러우므로 플라스틱 스퍼저가 좋음)를 사용하여 아래에서 도달하여 조심스럽게 들어 올려 전면 버튼을 프레임에서 분리합니다.
트리플 밴드 모델의 경우 사이드 버튼을 먼저 제거하면 가운데 버튼 제거에 도움이 됩니다. 버튼을 제거한 후 작은 십자 드라이버로 검은 프레임의 나사를 풀고 기기 케이스 측면에서 분리합니다.
로직 보드가 보이면 제거하여 뒤집으면 **CR2032** 배터리 1개가 있습니다. 로직 보드를 제거할 때 반대편에 작은 페어링 버튼이 고정되어 있으니 주의하세요.
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

### Operation mode (enum)
Operation mode, select "command" to enable bindings (wake up the device before changing modes!).
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_hold`, `button_1_release`, `button_1_single`, `button_1_double`, `button_1_triple`, `button_2_hold`, `button_2_release`, `button_2_single`, `button_2_double`, `button_2_triple`, `button_3_hold`, `button_3_release`, `button_3_single`, `button_3_double`, `button_3_triple`, `button_4_hold`, `button_4_release`, `button_4_single`, `button_4_double`, `button_4_triple`.

