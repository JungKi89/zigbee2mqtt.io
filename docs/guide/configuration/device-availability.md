---
sidebarDepth: 1
redirectFrom: /information/availability.md
---

# 장치 가용성

가용성 기능은 장치가 온라인 상태인지 확인합니다. 장치의 가용성 상태는 `{"state":"online"}` 또는 `{"state":"offline"}` 페이로드와 함께 `zigbee2mqtt/[FRIENDLY_NAME]/availability` 토픽으로 게시됩니다 (이 메시지는 retained MQTT 메시지입니다).

```yaml
# 선택 사항: 가용성 기능
availability:
    # 기능 활성화 (기본값: false)
    enabled: true
```

가용성 기능은 능동적 장치와 수동적 장치에서 다르게 작동합니다. 수동적 장치는 핑을 보낼 수 없기 때문입니다.

- 능동적 장치(_배터리를 사용하지 않는_): 기본적으로 10분마다 체크인\*\*해야 합니다.
  그렇지 않으면 핑을 보내고, 실패하면 장치는 `offline`으로 표시됩니다.
- 수동적 장치(_배터리로 동작하는_): 기본적으로 25시간마다 체크인\*\*해야 합니다.
  그렇지 않으면 `offline`으로 표시됩니다.

이 타임아웃은 Zigbee2MQTT 재시작 간에 유지됩니다. 예를 들어 10분 이상 Zigbee2MQTT를 중지하면, 모든 능동적 장치는 다시 체크인\*\*할 때까지 초기에 `offline`으로 표시됩니다.

\*\* 체크인은 장치에서 Zigbee2MQTT에 도달하는 모든 종류의 Zigbee 메시지입니다 (표시/보고되지 않는 내부 업데이트 포함).

## 고급 설정

```yaml
# 참고: 모든 옵션은 선택 사항입니다
availability:
    enabled: true
    active:
        # 능동적 장치가 offline으로 표시되기까지의 시간 (분 단위) (기본값: 10분)
        timeout: 10
        # 타임아웃 허용 최대 지터 (밀리초) - 가용성 핑이 같은 시간에 트리거되는 것을 방지 (기본값: 30000, 최솟값: 1000)
        max_jitter: 30000
        # 가용성 핑 실패 시 타임아웃 백오프 활성화 (기본값: true)
        # 사용 패턴: x1.5, x3, x6, x12... (기본 타임아웃 10분 기준: 10, 15, 30, 60, 120...)
        backoff: true
        # 백오프가 이 한도를 초과하면 장치에서 새 Zigbee 메시지를 받을 때까지 가용성 핑을 일시 중지합니다. (기본값: 0, 최솟값: 0)
        # 0은 일시 중지 비활성화, 그 외에는 위 `backoff` 패턴 참고
        pause_on_backoff_gt: 0
    passive:
        # 수동적 장치가 offline으로 표시되기까지의 시간 (분 단위) (기본값: 1500분 = 25시간)
        timeout: 1500

devices:
    '0x12345678':
        friendly_name: 'my_bulb'
        # 특정 장치의 가용성 기능 비활성화: availability: false 설정
        availability: false
    '0x87654321':
        friendly_name: 'my_switch'
        # 이 장치에만 가용성 타임아웃을 3분으로 변경
        availability:
            timeout: 3
            # 능동적 장치는 `max_jitter`, `backoff`, `pause_on_backoff_gt`도 지정 가능 (위 참고)
```

특정 장치에만 가용성 기능을 활성화하려면 `configuration.yaml`에 `availability: enabled: true`를 추가하지 말고 해당 장치에만 지정하세요. 예:

```yaml
devices:
    '0x87654321':
        friendly_name: 'my_switch'
        # 'my_switch'에만 가용성 활성화
        availability: true
```

## 상태 조회

가용성 기능이 활성화되어 있고 장치가 재연결되거나 네트워크에 자신을 알릴 때, Zigbee2MQTT는 장치의 상태를 조회합니다. 예를 들어 전원에 재연결된 후 조명이 스스로 켜지는 경우에 유용합니다. 다음 속성이 읽힙니다: `state`, `brightness`, `color_temp`, `color`.

## 성능 고려사항

- 핑은 coordinator에 부하를 줄 수 있으며, 특히 CC2530 또는 CC2531 adapter를 사용하는 경우에 더욱 그렇습니다.
- 능동적 장치의 `timeout`이 높을수록 핑이 적어져 coordinator에 대한 부하가 줄어듭니다.

## 그룹

장치 가용성을 활성화하면 그룹에도 가용성이 활성화됩니다. 그룹 내 장치 중 하나 이상이 가용한 경우 그룹은 가용한 것으로 표시됩니다.
