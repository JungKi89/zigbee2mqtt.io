---
redirectFrom: /information/ota_updates.md
---

# OTA 업데이트

이 기능을 사용하면 Zigbee 기기의 펌웨어를 무선으로(over-the-air) 업데이트할 수 있습니다.

::: warning
펌웨어 업데이트는 버그 수정, 보안 업데이트 및 기타 유용한 기능을 제공할 수 있습니다.
하지만 기기 동작을 변경하여 Zigbee2MQTT 호환성에 영향을 줄 수 있으며, 버그가 있거나 심지어 악성 기능이 도입될 수도 있습니다.
**펌웨어 업데이트를 적용하기 전에 릴리즈 노트를 검토하세요.**
:::

기본적으로 Zigbee2MQTT는 [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 저장소에서 OTA 이미지를 검색하고 가져옵니다(인터넷 접속이 가능한 경우).
이 저장소는 제조사가 제공하는 펌웨어 업데이트의 미러로, 수동 및 자동으로 관리됩니다.
[사용자 지정/로컬 소스 사용](#using-custom-firmware-files-or-index)은 페이지 아래에 설명되어 있습니다.

::: tip
이 페이지의 대부분의 작업과 설정은 프론트엔드에서 수행할 수 있습니다.
:::

## 업데이트 상태

업데이트 상태는 `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]`에 게시됩니다. 페이로드 예시: `{"update":{"state":"available"}}`.
가능한 상태는 다음과 같습니다:

- `idle`: 업데이트가 없거나 진행 중이 아님
- `available`: 이 기기에 대한 업데이트가 가능함
- `scheduled`: 기기의 다음 업데이트 확인 요청 시 업데이트가 시작될 수 있음
- `updating`: 업데이트 진행 중
    - 이 동안 진행률(%)과 남은 시간(초)도 페이로드에 추가됩니다(30초마다 보고). 예: `{"update":{"state":"updating","progress":13.37,"remaining":219}}`
    - 첫 번째 진행률 보고(0%)는 OTA 설정을 기반으로 예상 남은 시간을 제공합니다. 실제 남은 시간은 각 진행률 보고 시 현재 상태(네트워크의 영향을 크게 받음)에 따라 조정됩니다.

## 업데이트 확인

### 자동 확인

OTA를 지원하는 Zigbee 기기는 주기적으로 펌웨어 업데이트 확인을 요청할 수 있습니다. 이러한 요청을 수신하면 Zigbee2MQTT가 업데이트를 확인(기본 소스에서)하고 결과를 MQTT에 게시합니다.

일부 기기는 너무 자주 업데이트를 요청합니다. Zigbee2MQTT는 하루 한 번(1440분)으로 확인을 제한합니다. **업데이트 확인 간격**은 설정 가능하지만, 기기의 요청 자체를 막지는 않습니다. Zigbee2MQTT는 해당 간격 내의 메시지를 무시합니다.  
여기서는 `configuration.yaml`에서 최대 2일에 한 번 확인하도록 설정합니다:

```yaml
ota:
    update_check_interval: 2880
```

기기가 시작하는 업데이트 확인을 완전히 **무시**할 수도 있습니다(Zigbee2MQTT가 항상 "사용 가능한 이미지 없음"으로 응답). `configuration.yaml`을 이렇게 수정하면 수동 확인만 진행됩니다:

```yaml
ota:
    disable_automatic_update_check: true
```

이 옵션은 기기별로도 설정 가능합니다. [기기 옵션](../configuration/devices-groups.md)을 참조하세요.

자동 업데이트 확인 비활성화는 [예약된 OTA](#scheduling-update-on-next-device-request)를 방지하지 않습니다.

### 수동 확인

**업데이트**를 수동으로 확인하려면 `zigbee2mqtt/bridge/request/device/ota_update/check`에 페이로드 `{"id":"deviceID"}`를 전송하세요. 여기서 deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다.  
**다운그레이드** 가능 여부를 확인하려면 대신 `zigbee2mqtt/bridge/request/device/ota_update/check/downgrade`에 메시지를 전송하세요.

Zigbee2MQTT는 기기에서 현재 펌웨어 정보(제조사 코드, 이미지 타입, 설치된 버전)를 요청합니다. 수신한 후에만 OTA 인덱스를 조회합니다.
기기가 응답하지 않으면 확인 전에 기기를 깨우거나(예: 버튼 누르기), 자동 확인을 기다리세요.

요청 예시: `{"id":"my_remote"}`, 응답: `{"data":{"id":"my_remote","update_available":false},"status":"ok"}`.

업데이트가 가능한 경우(`"update_available":true`), 응답에는 다음도 포함됩니다:

- `source`: OTA 파일의 URL 또는 파일 경로
- `release_notes`: (제공된 경우) 해당 소스의 릴리즈 노트
- `downgrade`: 가용성이 다운그레이드인 경우 true

## 업데이트 시작

::: warning 주의사항
업데이트 과정은 기기, 설정 및 네트워크 안정성에 따라 10-100분으로 크게 다릅니다. 이 시간 동안 기기는 사용 가능하지만 네트워크에 많은 트래픽이 추가됩니다. 따라서 **네트워크 사용량이 적은 시간에 한 번에 하나의 기기만 업데이트하는 것이 좋습니다.**

OTA 파일 업로드가 완료되면 기기가 새 펌웨어로 재부팅됩니다. **재부팅으로 인해 원하지 않는 인터럽트나 켜짐이 발생할 수 있습니다(예: 밤중에 조명이 켜지는 경우, 전원 켜짐 동작으로 인해)!**

업데이트는 기기 동작을 크게 변경할 수 있으므로, Zigbee2MQTT는 새 기기를 페어링하는 것과 유사하게 처리합니다. 새로운 기능을 감지하기 위해 자동으로 재인터뷰를 수행하며, **정상 작동을 보장하기 위해 재구성합니다(사용자 지정 리포팅 간격이 기본값으로 덮어써질 수 있습니다)**
:::

### 수동 업데이트 요청

**업데이트**가 가능한 경우, `zigbee2mqtt/bridge/request/device/ota_update/update`에 페이로드 `{"id":"deviceID"}`를 전송하여 시작하세요. 여기서 deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다.  
**다운그레이드**가 가능한 경우, 대신 `zigbee2mqtt/bridge/request/device/ota_update/update/downgrade`에 메시지를 전송하세요.

기기가 응답하지 않으면 시작하기 바로 전에 기기를 깨우거나(예: 버튼 누르기) [업데이트를 예약](#scheduling-update-on-next-device-request)하세요.  
진행률은 [위에서](#device-state) 설명한 대로 해당 기기 topic에 게시됩니다.

업데이트가 완료되면 응답이 전송됩니다. 응답 예시: `{"data":{"id":"my_remote","from":{"file_version":5,"software_build_id":1,"date_code":"20190101"},"to":{"file_version":10,"software_build_id":2,"date_code":"20190102"}},"status":"ok"}`.  
`software_build_id`와 `date_code`는 선택적 기기 속성입니다.

### 다음 기기 요청 시 업데이트 예약

기기가 OTA 업데이트 확인을 요청하는 다음 번에 업데이트를 예약할 수 있습니다.

:::tip 팁
이는 일반적으로 트리거 직전에 물리적으로 깨우지 않으면 [수동 업데이트 요청](#manual-update-request)에 응답하지 않는 배터리 구동 기기에 도움이 됩니다. 일부 브랜드/모델은 이 방법으로만 업데이트됩니다(예: 일부 Legrand 기기).
:::

예약하려면 `zigbee2mqtt/bridge/request/device/ota_update/schedule`에 페이로드 `{"id":"deviceID"}`를 전송하세요. 여기서 deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 요청 예시: `{"id":"my_remote"}`.  
다운그레이드도 마찬가지로 topic `zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade`를 사용합니다.

예약을 취소하려면 같은 페이로드를 `zigbee2mqtt/bridge/request/device/ota_update/unschedule` topic에 전송하세요.

예약 상태는 데이터베이스에 저장되며 Zigbee2MQTT 재시작 후에도 복원됩니다.

예약된 업데이트가 실패하면 예약 상태가 유지됩니다(기기가 다음 확인 시 다시 시도합니다).  
기기가 요청할 때 업데이트가 없으면 예약이 제거됩니다.  
[수동 업데이트 요청](#manual-update-request)은 업데이트가 성공한 경우에만 기존 예약을 제거합니다.

## 다운그레이드

펌웨어 다운그레이드도 가능합니다. 위의 업데이트 단계와 동일하게 진행하되, 위에서 설명한 `downgrade` topic을 사용하세요.

기본 소스([Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA))는 일반적으로 최신 및 최신-1 이미지를 저장합니다. 이를 통해 한 버전 다운그레이드가 가능합니다. 그렇지 않으면 오래된 펌웨어는 사용자가 [사용자 지정 소스](#using-custom-firmware-files-or-index)로 제공해야 합니다.

Zigbee 사양이 펌웨어 다운그레이드를 허용하더라도 일부 기기는 이전 펌웨어 버전을 거부할 수 있습니다. 또한 같은 버전의 펌웨어로 업데이트하는 것은 Zigbee 사양에서 지원되지 않습니다. 이는 Zigbee2MQTT에서 강제할 수 없습니다.

현재 설치된 버전을 백업하는 것은 불가능합니다.

## 고급 설정

### 업데이트 파라미터 변경

다음 OTA 설정은 전역적으로(`configuration.yaml` 편집) 또는 요청별로(페이로드에 제공) 조정할 수 있습니다: `image_block_request_timeout`, `image_block_response_delay`, `default_maximum_data_size`.

```yaml
ota:
    image_block_request_timeout: 150000
    image_block_response_delay: 250
    default_maximum_data_size: 50
```

기기가 청크 요청을 받는 속도가 비정상적으로 느린 경우 **청크 요청 수신 타임아웃**을 늘리면 도움이 됩니다. 하지만 기본값은 이미 150000ms로 대부분의 경우에 충분합니다.

더 빠른 OTA 업데이트를 위해 **두 청크 사이의 최소 지연**을 줄일 수 있지만, 문제와 충돌을 방지하기 위해 훨씬 더 안정적인 네트워크가 필요할 수 있습니다. 기본값은 250ms이고 최소값은 50ms입니다.

Zigbee2MQTT가 전송하는 **이미지 청크 크기**는 기본적으로 50바이트로 제한됩니다. 마찬가지로 청크 크기가 클수록 OTA 속도가 빨라지지만 네트워크 안정성이 낮아집니다. 최소는 10B이고 최대는 100B입니다.  
일부 기기는 50/64바이트보다 큰 크기를 거부합니다.  
Zigbee2MQTT는 일부 기기에 대해 사용자 지정 값을 무시하고 해당 기기가 예상하는 올바른 크기를 자동으로 사용합니다.

### 사용자 지정 펌웨어 파일 또는 인덱스 사용

펌웨어 파일을 직접 제공하거나 사용자 지정 인덱스에 나열하여 사용자 지정 소스에서 기기를 업데이트할 수 있습니다.

:::caution 주의
사용자 지정 OTA 인덱스 또는 펌웨어 파일을 잘못 사용하면 기기를 벽돌로 만들 수 있습니다. "사용자 지정 펌웨어"의 특성상 이 모드에서는 일반적인 OTA 제약 조건이 여러 개 우회됩니다. **신뢰할 수 있는 소스를 사용하세요!**
:::

OTA 인덱스 파일은 지정된 위치에서 사용 가능한 펌웨어 이미지 목록입니다. 기본적으로 Zigbee2MQTT는 [zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 저장소의 [업그레이드 인덱스 파일](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json)과 [다운그레이드 인덱스 파일](https://github.com/Koenkk/zigbee-OTA/blob/master/index1.json)을 사용합니다.

사용자 지정 업데이트 인덱스는 전역적으로(`configuration.yaml` 편집) 또는 업데이트 요청별로 제공할 수 있습니다. 허용되는 형식은 로컬 파일 경로(절대 또는 상대)와 웹 URL입니다.

재정의 OTA 인덱스 파일은 [zigbee-OTA 인덱스 파일](https://github.com/Koenkk/zigbee-OTA/blob/master/index.json)과 동일한 구조를 가져야 합니다.
이미지에 추가 메타데이터가 필요한 경우 [저장소 README](https://github.com/Koenkk/zigbee-OTA/tree/master?tab=readme-ov-file#notes-for-maintainers--developers)를 참조하세요.

:::tip 팁
다음 도구를 사용하면 인덱스를 생성하고 더 유용한 작업을 수행할 수 있습니다: [https://nerivec.github.io/zigbee-ota-file-editor/](https://nerivec.github.io/zigbee-ota-file-editor/)
:::

기본 Zigbee2MQTT 인덱스에 접근할 수 없는 경우(예: 에어갭 네트워크), 로컬 OTA 인덱스만 사용됩니다.  
두 인덱스가 모두 사용 가능한 경우, 재정의 인덱스의 레코드가 기본 인덱스의 레코드보다 우선합니다.

#### 전역 인덱스 재정의

이 예시에서 `my_index.json`은 `configuration.yaml`과 동일한 디렉토리에 있습니다:

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
    # 또는
    zigbee_ota_override_index_location: https://example.com/ota/index.json
```

#### 요청별 사용자 지정 인덱스/펌웨어

다음 topic들은 페이로드에 `url`을 제공하여(로컬 경로 및 웹 URL도 허용) 사용자 지정 파일로 업데이트할 수 있습니다.

지정된 위치가 JSON 파일(`*.json`)이면 인덱스로, 그렇지 않으면 펌웨어 파일로 처리됩니다.

- 인덱스만 지원
    - `bridge/request/device/ota_update/check`
    - `bridge/request/device/ota_update/check/downgrade`
- 인덱스, 펌웨어 파일 및 hex 데이터 지원
    - `bridge/request/device/ota_update/update`
    - `bridge/request/device/ota_update/update/downgrade`
    - `bridge/request/device/ota_update/schedule`
    - `bridge/request/device/ota_update/schedule/downgrade`

전체 OTA 파일을 hex 문자열 형태로도 제공할 수 있습니다: `"hex":{"data":"1EF1EEB0...","file_name":"my-file.ota"}`. 펌웨어 파일은 수신 시 `data/ota/`에 저장됩니다. 이는 주로 프론트엔드 사용을 위한 것입니다("파일 업로드" 다이얼로그에서 이 페이로드가 생성됩니다).

## 문제 해결

- `Device didn't respond to OTA request` 또는 `Update failed with reason: 'aborted by device'`: 전원/배터리를 몇 초간 분리하여 기기를 재시작한 후 OTA를 다시 시도하세요. 업데이트 요청 전에 기기의 버튼을 눌러 활성화하세요.
- 배터리 구동 기기의 경우 OTA 업데이트는 전력 소모가 매우 크므로 배터리가 70% 이상인지 확인하세요. 일부 기기는 업데이트 전 최소 배터리 수준을 확인하고 너무 낮으면 업데이트를 거부합니다.
- 로그 수준이 `info`로 설정되어 있는지 확인하세요. `warning` 또는 `error`로 설정되면 프론트엔드에서 현재 OTA 상태를 나타내는 일부 메시지가 표시되지 않습니다.
