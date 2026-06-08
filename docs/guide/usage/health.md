---
sidebarDepth: 1
---

# 헬스(Health)

헬스 관련 정보는 `zigbee2mqtt/bridge/health` topic에 게시됩니다. 페이로드 예시:

```json
{
    "response_time": 1749991304357, // 이 정보가 생성된 UTC 타임스탬프 (Unix 시간 형식)
    "os": {
        "load_average": [15.8, 13.2, 19.2], // 시스템의 평균 CPU 부하 ([1분, 5분, 15분]), Windows에서는 지원되지 않음 ([0,0,0]으로 표시됨)
        "memory_used_mb": 1098.2, // 시스템에서 사용 중인 메모리 (MB)
        "memory_percent": 8.3 // 시스템에서 사용 중인 메모리 비율 (%)
    },
    "process": {
        "uptime_sec": 192, // Zigbee2MQTT 가동 시간
        "memory_used_mb": 89.2, // Zigbee2MQTT가 사용 중인 메모리 (MB)
        "memory_percent": 1.2 // Zigbee2MQTT가 사용 중인 메모리 비율 (%)
    },
    "mqtt": {
        "connected": true, // Zigbee2MQTT가 MQTT에 연결되어 있는지 여부
        "queued": 0, // MQTT로 전송 대기 중인 메시지 수
        "published": 9, // Zigbee2MQTT 시작 이후 게시된 MQTT 메시지 수 (또는 'reset_on_check: true'인 경우 마지막 확인 이후)
        "received": 2 // Zigbee2MQTT 시작 이후 수신된 MQTT 메시지 수 (또는 'reset_on_check: true'인 경우 마지막 확인 이후)
    },
    "devices": {
        // Zigbee2MQTT 시작 이후 기기별 헬스 정보 (또는 'reset_on_check: true'인 경우 마지막 확인 이후), 키는 기기 IEEE 주소
        "0x12345678": {
            "leave_count": 1, // 기기가 네트워크를 떠난 횟수
            "network_address_changes": 1, // 기기가 네트워크 주소를 변경한 횟수
            "messages": 4, // 기기로부터 수신된 메시지 수
            "messages_per_sec": 0.0033, // 기기로부터 초당 수신된 메시지 수
        },
        ...
    }
}
```

## 설정

```yaml
health:
    # 확인 간격(분) (기본값: 10)
    interval: 10
    # true인 경우, 헬스 체크가 실행될 때마다 통계를 초기화합니다 (초기화 가능한 통계에만 적용됨). (기본값: false)
    reset_on_check: false
```
