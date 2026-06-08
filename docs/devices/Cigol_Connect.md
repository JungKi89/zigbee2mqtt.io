---
title: "Cigol Electronics Cigol Connect control via MQTT"
description: "Integrate your Cigol Electronics Cigol Connect via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Cigol Electronics Cigol Connect

|     |     |
|-----|-----|
| Model | Cigol Connect  |
| Vendor  | [Cigol Electronics](/supported-devices/#v=Cigol%20Electronics)  |
| Description | Zigbee interface module for LK IHC installations |
| Exposes | state |
| Picture | ![Cigol Electronics Cigol Connect](https://www.zigbee2mqtt.io/images/devices/Cigol-Connect.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 개요
Cigol Connect는 LK IHC 설치를 Zigbee 네트워크에 통합하기 위해 설계된 Zigbee 인터페이스 모듈입니다.

이 디바이스는 IHC 버스를 통해 Zigbee와 연결된 IHC 입출력 모듈 사이의 브리지 역할을 합니다.

---

### 엔드포인트 구조

디바이스는 연결된 IHC 모듈의 번호에 직접 대응하는 여러 엔드포인트를 노출합니다.

입력:
- 버스 A: 엔드포인트 1~8 및 11~18
- 버스 B: 엔드포인트 31~38 및 41~48

출력:
- 버스 A: 엔드포인트 21~28
- 버스 B: 엔드포인트 51~58

각 엔드포인트는 연결된 IHC 모듈의 물리적 입력 또는 출력을 나타냅니다.

---

### 입력 동작 (Multistate Input 클러스터)

입력 이벤트는 **Multistate Input 클러스터** (`genMultistateInput`)를 통해 보고됩니다.

각 입력은 다음 상태를 보고할 수 있습니다:

- Off (끄기)
- Single (단일)
- Double (이중)
- Hold (유지)

이 값들은 사용자 상호작용 패턴(예: 짧게 누르기, 두 번 누르기, 길게 누르기)을 나타내며 Zigbee2MQTT 또는 외부 시스템의 자동화 로직에 사용할 수 있습니다.

---

### 직접 Zigbee 바인딩 (권장)

입력은 코디네이터를 거치지 않고 **Zigbee 바인딩**을 통해 직접 사용할 수도 있습니다.

각 입력 엔드포인트는 다른 Zigbee 디바이스에 명령을 전송하는 것을 지원합니다:

- **On/Off 클러스터 (`genOnOff`)**
  - 부하를 켜거나 끌 때 사용합니다.

- **레벨 제어 클러스터 (`genLevelCtrl`)**
  - 디밍 제어에 사용합니다(예: 밝기 올리기/내리기).

이를 통해 Zigbee 코디네이터에 의존하지 않고 최소 지연으로 디바이스 간 직접 제어가 가능합니다.

---

### 출력 제어

출력은 **On/Off 클러스터 (`genOnOff`)**를 통해 제어됩니다.

각 출력 엔드포인트는 표준 Zigbee on/off 디바이스처럼 동작하며 다음으로 제어할 수 있습니다:

- Zigbee2MQTT
- 다른 Zigbee 디바이스의 바인딩
- 내부 입력 로직(아래 참고)

---

### 스위치 액션 구성 (On/Off Switch Configuration 클러스터)

각 입력은 **On/Off Switch Configuration 클러스터** (`genOnOffSwitchCfg`)를 사용하여 구성할 수 있습니다.

이는 활성화될 때 입력이 어떻게 동작할지를 결정합니다.

지원되는 모드:

- `on` → 항상 ON 명령 전송
- `off` → 항상 OFF 명령 전송
- `toggle` → ON과 OFF 사이를 교대로 전환

이 구성은 입력이 다음을 제어할 때 적용됩니다:

- On/Off 클러스터 디바이스
- 레벨 제어 클러스터 디바이스(디밍 동작과 함께)

---

### 입력 모드와 바인딩 간의 상호작용

입력을 사용하는 두 가지 주요 방법이 있습니다:

1. **이벤트 기반 제어 (Multistate Input 클러스터를 통해)**
   - 보고된 액션(Single, Double, Hold)을 자동화에 사용합니다.

2. **직접 바인딩**
   - 입력이 On/Off 또는 레벨 제어 클러스터를 사용하여 다른 Zigbee 디바이스를 직접 제어합니다.

시스템 설계에 따라 두 가지 접근 방식을 독립적으로 사용할 수 있습니다.

---

### 바인딩 고려 사항

Zigbee 바인딩을 구성할 때:

- 항상 올바른 **엔드포인트**를 선택하세요
- 대상 디바이스가 관련 클러스터를 지원하는지 확인하세요:
  - 스위칭의 경우 `genOnOff`
  - 디밍의 경우 `genLevelCtrl`

디바이스의 다중 엔드포인트 구조로 인해 올바른 엔드포인트 선택이 매우 중요합니다.

---

### 중요 사항

- 엔드포인트 번호는 연결된 IHC 모듈의 물리적 레이아웃을 직접 반영합니다(네트워크에 참가하지 않은 상태에서 시작 시 감지됨).
- 버스 A와 버스 B는 엔드포인트 번호에서 분리됩니다.
- 디바이스는 Zigbee 바인딩과 자동화 로직을 모두 사용하는 유연한 통합을 위해 설계되었습니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### State (binary)
Output state.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

