---
title: "Heiman HS1SA-E control via MQTT"
description: "Integrate your Heiman HS1SA-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:27:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS1SA-E

|     |     |
|-----|-----|
| Model | HS1SA-E  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smoke detector |
| Exposes | smoke, battery_low, battery, test |
| Picture | ![Heiman HS1SA-E](https://www.zigbee2mqtt.io/images/devices/HS1SA-E.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링

기기 측면 버튼을 클립으로 2초 이상 누릅니다. 메인 버튼 LED가 빠르게 깜박이기 시작합니다. 페어링 중에는 기기가 깨어 있는 상태인지 확인해야 합니다. 그렇지 않으면 설정이 실패할 수 있습니다. Zigbee2MQTT 로그에서 설정이 완료될 때까지 2초마다 측면 버튼을 눌러 기기를 깨우세요.

### 초기화

페어링에 문제가 있는 경우, 클립으로 측면 버튼을 5초간 눌러 기기를 초기화할 수 있습니다. LED가 (페어링 모드보다 느리게) 6번 깜박이면 확인된 것입니다. 이후 일반 페어링 절차를 다시 시도하세요.

### 중요
이 기기에는 3가지 버전이 있습니다: 독립형, Zigbee, Z-wave. 외관이 동일하므로 Zigbee2MQTT와 호환되는 올바른 버전을 구매하세요:

지원:
- **HS1SA-M : Zigbee**
- **HS1SA-N : Zigbee**
- **HS1SA-E : Zigbee 3.0**

미지원:
- HS1SA : 독립형
- HS1SA-Z : Z-wave

Zigbee 버전의 제품 코드는 *-M*으로 끝나야 합니다. 배터리 칸 안쪽 라벨에도 Zigbee 로고가 표시되어 있어야 합니다.

### 정기적인 (오경보) 알람 알림 문제

스모크 디텍터가 Zigbee를 통해 정기적으로 (1~2일마다) 실제 알람 소리 없이 알람 신호를 보내는 경우, 펌웨어 버그에 영향을 받은 것일 수 있습니다. 다음과 같이 해결할 수 있습니다:

1. Z2M 웹 인터페이스에서 기기를 엽니다
2. Dev 콘솔로 이동합니다
3. 드롭다운 목록에서 클러스터 `ssIasZone`을 선택합니다
4. 속성 `zoneState`, `zoneType`, `zoneStatus`, `zoneId`를 선택합니다
5. *Read* 버튼을 클릭합니다
5. *Read* 버튼을 누른 직후 메인 버튼(테스트 알람 버튼)을 눌러 기기를 깨웁니다.

타이밍이 중요하므로 몇 번 시도해야 할 수 있습니다. 이 속성들을 성공적으로 읽으면 오경보 메시지가 사라집니다. ([출처](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/5824#issuecomment-1092089211))
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

