---
title: "Tuya TS0601_smart_scene_knob control via MQTT"
description: "Integrate your Tuya TS0601_smart_scene_knob via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_smart_scene_knob

|     |     |
|-----|-----|
| Model | TS0601_smart_scene_knob  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart scene knob controller with 4 buttons |
| Exposes | brightness, color_temp, curtain_position, assignment_status, base_group_id, action_button, action_group, bind_all_scene, bind_all_light, bind_all_curtain, assign_button_1, set_base_group_id, action |
| Picture | ![Tuya TS0601_smart_scene_knob](https://www.zigbee2mqtt.io/images/devices/TS0601_smart_scene_knob.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 기기 개요
4개의 물리적 버튼과 회전 노브가 있는 스마트 장면 노브 컨트롤러입니다. 각 버튼은 세 가지 모드 중 하나로 설정할 수 있습니다:

| 모드 | LED 색상 | 기능 |
|------|-----------|----------|
| Scene | 빨간색 | 장면 동작 실행 (DP 1-4) |
| Light | 초록색 | 밝기 및 색온도 제어 |
| Curtain | 파란색 | 커튼 위치 제어 |

### 모드 전환
버튼 2(왼쪽) 또는 4(오른쪽)를 3초 동안 눌러 바인딩된 모드를 순환합니다. 바인딩된 모드만 사용 가능합니다.

### 초기 설정 (Light/Curtain 모드)
Light 및 Curtain 모드는 처음 사용 시 감지되어야 하는 그룹 ID 브로드캐스팅을 사용합니다:

1. 기기 설정에서 `bind_all_light` 또는 `bind_all_curtain`을 클릭합니다.
2. 상태가 `waiting_button_1`로 변경됩니다.
3. 실제 기기에서 **버튼 1**을 누릅니다.
4. 기본 그룹 ID가 자동 감지되고 상태가 `ready`로 변경됩니다.

재할당하려면 `assign_button_1`을 사용하거나 `set_base_group_id`로 수동 설정합니다.

### 그룹 ID 패턴
그룹 ID는 다음 패턴을 따릅니다: `기본값 + (버튼 - 1) × 20`

| 버튼 | 오프셋 | 예시 (기본값=11220) |
|--------|--------|----------------------|
| 1 | +0 | 11220 |
| 2 | +20 | 11240 |
| 3 | +40 | 11260 |
| 4 | +60 | 11280 |

### 동작

**Scene 모드:**
- 단일 누름: `scene_1` / `scene_2` / `scene_3` / `scene_4`

**Light 모드:**
- 단일 누름: `light_X_on` / `light_X_off`
- 노브 회전: `light_X_brightness_up` / `light_X_brightness_down`
- 더블 프레스 (LED 깜박임) + 노브 회전: `light_X_colortemp_up` / `light_X_colortemp_down`

**Curtain 모드:**
- 단일 누름: `curtain_X_start` / `curtain_X_stop`
- 노브 회전: `curtain_X_position_open` / `curtain_X_position_close`

### 알려진 제한 사항
- 배터리 상태는 노출되지 않습니다 (Tuya 앱에서도 사용 불가).
- Light/Curtain 모드에서는 노브를 돌리기 전에 먼저 버튼을 눌러 제어할 버튼/기기를 선택해야 합니다. 즉, 노브 회전 전에 항상 버튼 누름 동작이 전송되어 의도치 않은 명령이 실행될 수 있습니다.
- Light 모드에서 노브 회전(밝기/색온도)은 `light_X_on` 이후에만 작동합니다. 조명이 꺼진 상태에서는 노브가 작동하지 않습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Brightness (numeric)
Brightness level from light mode (1-254).
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `254`.

### Color temp (numeric)
Color temperature from light mode (mired).
Value can be found in the published state on the `color_temp` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `153` and the maximum value is `523`.

### Curtain position (numeric)
Curtain position from curtain mode (0-100%).
Value can be found in the published state on the `curtain_position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Assignment status (enum)
Button assignment status.
Value can be found in the published state on the `assignment_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `unassigned`, `waiting_button_1`, `ready`.

### Base group id (numeric)
Base Group ID for button 1 (buttons 2-4 are +20, +40, +60).
Value can be found in the published state on the `base_group_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action button (numeric)
Button number from last action.
Value can be found in the published state on the `action_button` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `4`.

### Action group (numeric)
Group ID from last action.
Value can be found in the published state on the `action_group` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Bind all scene (enum)
Bind all buttons to Scene mode (red LED).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_all_scene": NEW_VALUE}`.
The possible values are: `bind`.

### Bind all light (enum)
Bind all buttons to Light mode (green LED).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_all_light": NEW_VALUE}`.
The possible values are: `bind`.

### Bind all curtain (enum)
Bind all buttons to Curtain mode (blue LED).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bind_all_curtain": NEW_VALUE}`.
The possible values are: `bind`.

### Assign button 1 (enum)
Start assignment: press button 1 after clicking.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"assign_button_1": NEW_VALUE}`.
The possible values are: `assign`.

### Set base group id (numeric)
Manually set base Group ID (advanced).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_base_group_id": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `65000`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`, `light_1_on`, `light_1_off`, `light_1_brightness_up`, `light_1_brightness_down`, `light_1_colortemp_up`, `light_1_colortemp_down`, `light_2_on`, `light_2_off`, `light_2_brightness_up`, `light_2_brightness_down`, `light_2_colortemp_up`, `light_2_colortemp_down`, `light_3_on`, `light_3_off`, `light_3_brightness_up`, `light_3_brightness_down`, `light_3_colortemp_up`, `light_3_colortemp_down`, `light_4_on`, `light_4_off`, `light_4_brightness_up`, `light_4_brightness_down`, `light_4_colortemp_up`, `light_4_colortemp_down`, `curtain_1_start`, `curtain_1_stop`, `curtain_1_position_open`, `curtain_1_position_close`, `curtain_2_start`, `curtain_2_stop`, `curtain_2_position_open`, `curtain_2_position_close`, `curtain_3_start`, `curtain_3_stop`, `curtain_3_position_open`, `curtain_3_position_close`, `curtain_4_start`, `curtain_4_stop`, `curtain_4_position_open`, `curtain_4_position_close`.

