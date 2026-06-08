---
title: "Lutron Z3-1BRL control via MQTT"
description: "Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lutron Z3-1BRL

|     |     |
|-----|-----|
| Model | Z3-1BRL  |
| Vendor  | [Lutron](/supported-devices/#v=Lutron)  |
| Description | Aurora smart bulb dimmer |
| Exposes | brightness, battery, action |
| Picture | ![Lutron Z3-1BRL](https://www.zigbee2mqtt.io/images/devices/Z3-1BRL.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링 모드 진입

신규 기기의 경우:
* 디머 버튼을 빠르게 두 번 탭합니다.

이전에 페어링된 기기의 경우:
1. 디머 버튼을 빠르게 4번 탭합니다.
2. 네 번째 탭에서 LED가 깜박이기 시작할 때까지 누르고 있습니다.
3. 즉시 디머 버튼을 3번 더 빠르게 탭합니다.

자세한 내용은 이 [설정 가이드](https://www.lutron.com/TechnicalDocumentLibrary/0301916_Aurora_Advanced_Install_Guide.pdf#page=7)를 참조하세요.

빨간 불이 깜박이면 배터리가 부족한 것이므로 페어링 전에 교체해야 합니다.

### 기기 바인딩

이 기기를 다른 기기에 바인딩하면, 디머가 그룹을 생성하고 대상 기기를 해당 그룹과 연결합니다. 이 디머는 그룹을 지원하지 않는 기기를 직접 제어할 수 없습니다. 또한 내부적으로 그룹을 사용하더라도 Zigbee2MQTT의 바인딩 탭을 통해 그룹에 바인딩할 수 없습니다.

다이얼은 `0x2fed` / `12269` ID로 그룹을 생성하는 것이 관찰되었습니다. 충돌하는 그룹이 실수로 생성되지 않도록 Zigbee2MQTT에서 해당 그룹을 먼저 만들어두는 것을 고려하세요. 바인딩 절차에 어려움이 있는 기기의 경우, 이 그룹을 기기의 직접 제어를 가능하게 하는 해결책으로 사용할 수도 있습니다.

다이얼이 다른 그룹 ID를 사용하고 있다고 의심된다면 다음 단계를 따라 확인할 수 있습니다:

1. 디버그 로깅을 활성화하고 Zigbee2MQTT를 재시작합니다.
2. 디머에 바인딩된 기기의 Zigbee2MQTT 웹 인터페이스에서 `Clusters` 탭을 엽니다.
3. `genGroups` 클러스터가 포함된 엔드포인트 번호를 찾습니다.
4. 개발자 콘솔 탭을 열고 `Execute Command` 아래에 3단계의 번호를 입력합니다.
5. 명령(command)에 `2`를 입력합니다 (`Get Group Membership`에 해당).
6. `Payload`에 `{"groupcount": 0, "grouplist": []}`를 입력하고 `Execute`를 클릭합니다.
7. 디버그 로그에서 `commandGetMembershipRsp`가 포함된 줄과 그룹 ID 배열(`grouplist`)이 10진수 형식으로 표시됩니다.
8. 이제 디버그 로깅을 끄고 Zigbee2MQTT를 재시작할 수 있습니다.
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

### Brightness (numeric)
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) or write (`/set`) this value.

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
The possible values are: `brightness`.

