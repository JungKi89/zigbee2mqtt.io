---
sidebarDepth: 1
---

# 장치와 그룹

Zigbee2MQTT는 장치와 그룹의 정의도 `configuration.yml`에 저장합니다.

대부분의 옵션은 선택 사항이며, `key`로서 IEEE 주소(또는 MAC)와 `friendly_name`만 필수입니다.

```yaml
devices:
    # 첫 번째 장치
    '0x00158d0001d82999':
        friendly_name: 'my_occupancy_sensor'
        retain: true
        disabled: false
        qos: 1
        debounce: 0.5
        debounce_ignore:
            - action
            - brightness
        # 이 장치에 대한 디스커버리를 건너뛰려면 `homeassistant: null` 설정
        homeassistant:
            # 모든 검색된 엔티티에 적용됩니다.
            expire_after: 30
            # 검색된 온도 센서에만 적용됩니다.
            temperature:
                icon: mdi:oil-temperature
                # null로 설정하여 값 생략, 예: device_class를 전송하지 않음
                device_class: null
        # 장치 유형별 예시
        occupancy_timeout: 120
        no_occupancy_since: [10, 600]
        # 장치로부터의 업데이트 확인 요청 무시 (Zigbee2MQTT는 항상 "사용 가능한 이미지 없음"으로 응답)
        disable_automatic_update_check: true
    # 다른 장치
    '0x000d6ffffee405eb':
        friendly_name: 'Kitchen bulb'
```

## 일반 장치 옵션

모든 Zigbee 장치는 다음 옵션 목록을 지원합니다.

**`friendly_name`**  
장치의 MQTT 토픽에 사용됩니다. 기본값은 장치 ID입니다 (예: `0x00128d0001d9e1d2`).

::: tip
`friendly_name`에 `/` 구분자를 사용하여 장치를 구조화할 수 있습니다.
예를 들어 `kitchen/floor_light`와 같은 `friendly_name`을 사용하면 MQTT Explorer에서 `kitchen` 폴더 내에 `floor_light`가 있는 MQTT 구조가 생성됩니다.
:::

::: warning
`friendly_name`은 `/`로 끝나거나, `/` + 가능한 [엔드포인트 이름](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/utils.ts#L30) 중 하나 (예: `/left`), 또는 `/` + 숫자 (예: `/4`)로 끝날 수 **없습니다**.
:::

**`description`**  
장치에 대한 설명, 예: `This device is in the kitchen`. frontend에 표시됩니다.

**`retain`**  
이 장치의 MQTT 메시지 retain 여부 (기본값 `false`).

**`disabled`**  
장치를 비활성화합니다. 이 옵션은 장치가 Zigbee 네트워크에서 통신하는 것을 **막지 않습니다**. 예를 들어 이 장치로부터 메시지를 수신하면 Zigbee2MQTT는 여전히 게시합니다. 이 기능은 오랫동안 Zigbee 네트워크에서 연결이 끊길 장치(크리스마스 조명 등)에 유용합니다. 장치를 비활성화하면 다음과 같이 됩니다:

- availability 기능이 핑을 시도하지 않습니다
- Home Assistant에서 항상 `unavailable`로 표시됩니다
- Zigbee2MQTT 시작 시 설정되지 않습니다 (일부 장치가 작동을 시작하는 데 필요)
- 네트워크 스캔(네트워크 맵)에서 제외됩니다
- 낙관적 그룹 상태 업데이트에서 제외됩니다

**`retention`**  
MQTT 메시지 만료 시간(초)을 설정합니다. 예: `retention: 900` = 15분 (기본값: 비활성화). `mqtt` 설정에서 `mqtt.version`을 `5`로 설정해야 합니다 (위 참고)

**`qos`**  
이 장치의 MQTT 메시지 QoS 레벨. [QoS란?](https://www.npmjs.com/package/mqtt#about-qos)

**`homeassistant`**  
Home Assistant 디스커버리 페이로드의 값을 재정의할 수 있습니다. 위 예시를 참고하세요.

**`debounce`**  
이 장치의 메시지를 디바운스합니다. 예를 들어 `debounce: 1`로 설정하고 장치로부터 메시지를 수신하면, Zigbee2MQTT는 즉시 게시하지 않습니다. 대신 서로 최대 1초 간격으로 수신된 다른 메시지들과 결합합니다. 따라서 결합된 메시지가 전송되기 전에 장치로부터 "N초의 침묵"이 필요합니다.

예를 들어 `debounce: 5`는 결합된 메시지가 전송되기 전에 장치로부터 "5초의 침묵"이 필요함을 의미합니다.

이 기능은 예를 들어 습도, 온도, 기압을 동시에 3개의 다른 메시지로 게시하는 `WSDCGQ11LM`에 유용합니다.

센서 업데이트 간격보다 debounce를 높게 설정하지 마세요. 그렇게 하면 모든 메시지가 디바운스되어 메시지가 전혀 전송되지 않을 수 있습니다.

**`debounce_ignore`**  
디바운스 시간 내에 특정 페이로드 속성의 고유한 값이 덮어쓰이지 않도록 보호합니다.
예를 들어 `debounce: 1`과 `debounce_ignore: - action`을 설정하면 고유한 `action` 값을 가진 모든 페이로드가 게시됩니다. 이 기능은 한 번 회전 후 짧은 시간 내에 여러 메시지를 게시하는 `E1744`에 유용합니다. `debounce_ignore` 없이 `debounce` 옵션만 사용하면 `rotate_stop` action이 있는 마지막 페이로드만 게시되지만, `debounce: 1`과 `debounce_ignore: - action`을 함께 사용하면 모든 고유 action 메시지가 최소 두 개(예: `action: rotate_left`와 `action: rotate_stop`) 게시됩니다.

**`throttle`**  
이 장치의 메시지 처리를 제한합니다. 예를 들어 `throttle: 10`으로 설정하면 장치의 첫 번째 메시지는 처리되지만 이후 10초 내의 모든 메시지는 무시됩니다. 일부 속성만 무시할 수 있는 `debounce`와 달리 전체 메시지를 삭제하므로 이 옵션 사용 시 주의하세요.

`debounce` 옵션이 `throttle`보다 우선합니다. 하나의 장치에 둘 다 설정되어 있으면 `debounce`만 효과가 있습니다.

이 옵션을 설정하면 특정 장치에 대해 전송되는 MQTT 메시지 수가 줄어듭니다. 이는 옵션 값에 직접적으로 연관됩니다. 적절한 값으로 오작동하는 장치에 사용하면 이력을 저장하는 외부 데이터베이스(Home Assistant 등)의 크기를 대폭 줄이면서도 해당 이력의 품질에는 거의 영향을 미치지 않을 수 있습니다.

`TS0601_air_quality_sensor`와 같은 일부 주변 환경 센서 및 일부 수위 센서 등이 이 옵션의 혜택을 받는 것으로 알려져 있습니다.

**`filtered_attributes`**  
특정 속성이 게시되지 않도록 방지합니다. 예를 들어 장치가 `{"temperature": 10, "battery": 20}`을 게시하고 `filtered_attributes: ["battery"]`를 설정하면 `{"temperature": 10}`이 게시됩니다.

**`filtered_cache`**  
특정 속성이 캐시에 저장되지 않도록 방지합니다.
이를 통해 값이 변경되지 않아도 속성이 게시되는 것을 방지합니다.

**`optimistic`**  
낙관적 모드는 업데이트가 없을 때 장치 상태를 처리하는 방식에 영향을 미치는 기능입니다. 장치에 대해 낙관적 모드가 활성화되고 마지막으로 보낸 명령이 성공했을 때, 장치 자체의 확인을 받기 전에도 그에 따라 장치 상태를 업데이트합니다 (기본값 `true`).

활성화 시: 예를 들어 조명을 켜는 명령을 보내고 성공하면, Zigbee2MQTT는 조명이 켜져 있음을 반영하도록 내부 상태를 즉시 업데이트합니다. 명령이 실패하면 상태는 업데이트되지 않습니다.

비활성화 시: 명령 성공 여부에 관계없이 장치가 새로운 상태를 보고한 후에만 Zigbee2MQTT가 내부 상태를 업데이트합니다.

**`filtered_optimistic`**  
`filtered_attributes` 옵션과 동일하지만 낙관적으로 게시된 속성에만 적용됩니다. `optimistic: false`로 설정된 경우에는 효과가 없습니다. 예시: `filtered_optimistic: ["color_mode", "color"]`.

**`icon`**  
frontend에 표시되는 장치 아이콘(이미지)을 재정의할 수 있습니다. 다음 중 하나여야 합니다:

- 이미지 경로, 예: `device_icons/my-device.png`. 이미지는 Zigbee2MQTT `configuration.yaml` 옆의 `device_icons` 디렉토리 내에 있어야 합니다. 다른 디렉토리는 허용되지 않습니다.
- 이미지의 전체 URL 링크, 예: `https://SOME.SITE/MODEL123.jpg`.

## 특정 장치 옵션

[RTCGQ11LM](../../devices/RTCGQ11LM.md)과 같은 일부 Zigbee 장치는 특별한 속성을 지원합니다.
장치에 장치 유형별 설정이 있는지 확인하려면 [지원 장치](../../supported-devices/)에서 해당 장치 페이지로 이동하여 모델 번호를 클릭하세요.

위 예시에서 `occupancy_timeout`과 `no_occupancy_since`는 장치별 옵션입니다.

## 기본값

장치 블록에서 명시적으로 값을 설정하지 않은 경우 모든 장치에 적용되는 기본값을 설정할 수 있습니다. 장치별 옵션에 대한 기본값도 설정할 수 있습니다.

```yaml
device_options:
    retain: true
    occupancy_timeout: 120
    no_occupancy_since: [10, 600]
```

## 그룹

그룹은 `configuration.yaml`에 정의할 수 있으며, frontend 또는 [MQTT](../usage/mqtt_topics_and_messages.md#group)를 통해 장치를 그룹에 추가할 수 있습니다.
자세한 내용은 [그룹 가이드](../usage/groups.md)를 참고하세요.

```yaml
groups:
    '1':
        friendly_name: Kitchen lights
        # 선택 사항: 메시지 retain 여부 (true/false) (기본값: false)
        retain: false
        # 선택 사항: 밝기 변경 시 사용할 기본 전환 시간 (초 단위) (기본값: 0)
        transition: 2
        # 선택 사항: 그룹 내 장치 중 하나가 상태를 변경할 때 그룹 상태 변경 여부, 아래 '상태 변경' 참고 (기본값: true)
        optimistic: true
        # 선택 사항: 이 그룹의 Home Assistant 디스커버리 속성 재정의
        homeassistant:
            name: Kitchen Lights
            icon: mdi:lightbulb-group
```

::: warning
그룹 키는 고유해야 하며 따옴표로 감싼 정수여야 합니다.
:::

**`homeassistant`**  
이 그룹의 Home Assistant 디스커버리 페이로드 값을 재정의할 수 있습니다. 모든 Home Assistant MQTT 디스커버리 속성을 재정의할 수 있습니다.

## 설정을 별도 파일로 분리

보통 `devices`와 `groups`는 `configuration.yaml` 내에 객체로 지정하지만, 설정을 별도 파일로 분리할 수도 있습니다.

```yaml
# 설정이 포함된 파일 정의
devices: devices.yaml
groups: groups.yaml
```

```yaml
# devices.yaml
'0x00158d0001d82999':
    friendly_name: 'my_occupancy_sensor'
```

```yaml
# groups.yaml
'1':
    friendly_name: group_1
    devices:
        - 0x00158d0001d82999
```
