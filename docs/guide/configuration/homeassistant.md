---
sidebarDepth: 1
---

# Home Assistant 연동

참고: [Home Assistant 연동 가이드](../usage/integrations/home_assistant.md).

```yaml
# 선택 사항: Home Assistant 연동 (MQTT 디스커버리)
homeassistant:
    # 연동 활성화 (기본값: false)
    enabled: true
```

## 고급 설정

```yaml
homeassistant:
    enabled: true
    # 선택 사항: Home Assistant 디스커버리 토픽 (기본값: 아래 표시)
    # 참고: HA 소프트웨어 오류를 방지하기 위해 [MQTT 기본 토픽](../mqtt.md)과 다르게 설정해야 합니다
    discovery_topic: 'homeassistant'
    # 선택 사항: Home Assistant 상태 토픽 (기본값: 아래 표시)
    status_topic: 'homeassistant/status'
    # 선택 사항: Home Assistant 이벤트 엔티티의 실험적 지원, 향후 변경될 수 있음 (기본값: 아래 표시) 활성화 시:
    # - 각 'action'에 대해 `event` 엔티티가 검색됩니다.
    # - `event_type` 속성에는 action 자체가 포함되고, `button`과 같은 추가 속성에는 더 많은 정보가 있습니다.
    experimental_event_entities: false
    # 선택 사항: Home Assistant 레거시 action 센서 (기본값: `false`), 활성화 시:
    # - Zigbee2MQTT는 action을 전송한 후 빈 'action'을 전송합니다
    # - 'sensor_action'이 검색됩니다
    legacy_action_sensor: false
```
