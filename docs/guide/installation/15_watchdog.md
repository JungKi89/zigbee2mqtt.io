---
sidebarDepth: 0
---

# Watchdog

Zigbee2MQTT는 "소프트 실패"(프로세스 충돌 없이 Zigbee2MQTT가 제대로 처리할 수 있는 실패, 예: "adapter 연결 끊김")에 대한 간단한 watchdog을 지원합니다. 일반적인 동작은 Zigbee2MQTT 프로세스를 재시작하거나 컨테이너를 재설정하는 것입니다(컨테이너 설치의 경우). 이 watchdog을 사용하면 Zigbee2MQTT가 프로세스를 종료하지 않고 내부적으로 재시작을 시도할 수 있습니다. 이는 선택 사항이며, `env` 변수가 설정되고 유효한 경우에만 활성화됩니다.

```bash
Z2M_WATCHDOG=default
```

기본 재시도 지연(1분, 5분, 15분, 30분, 60분)으로 watchdog과 함께 Zigbee2MQTT를 시작합니다.

설정된 지연 횟수가 watchdog의 실질적인 재시도 횟수입니다. 그 이후에는 node 프로세스가 중단됩니다(사용자 주의가 필요한 상황에서 무한 재시도를 방지하기 위해). watchdog은 첫 번째 실패 후 1분, 두 번째 실패 후 5분, 세 번째 실패 후 15분, 네 번째 실패 후 30분, 다섯 번째 실패 후 60분 뒤에 재시도하며, 여섯 번째 시작에 실패하면 종료됩니다. 성공적인 시작은 카운터를 처음으로 리셋합니다.

추가로 다음 동작은 항상 적용됩니다:

- watchdog은 초기(수동) 시작이 성공한 후 실패에만 작동합니다.
- 설정 문제는 watchdog을 무시하고 항상 Z2M을 중지합니다.
- 수동 중지/재시작(`CTRL+C` 등)은 사용자 의도를 존중하여 watchdog을 무시합니다.

::: tip TIP
컨테이너 환경이 아닌 경우, NodeJS 충돌을 처리하려면 운영 체제의 전용 watchdog 프로그램이 필요하여 Zigbee2MQTT 프로세스를 자동으로 재시작할 수 있습니다.
:::

## 사용자 정의 지연

```bash
Z2M_WATCHDOG=minutes_csv
```

원하는 재시도 지연으로 watchdog과 함께 Zigbee2MQTT를 시작합니다.
`minutes_csv`는 분(또는 소수점 `.`을 사용하는 분의 소수)을 나타내는 쉼표로 구분된 숫자 목록이어야 합니다. 다른 값/형식은 Z2M 시작을 방해합니다.

예시:

```bash
Z2M_WATCHDOG=5,10,30
```

watchdog의 재시도 지연을 5분, 10분, 30분으로 설정하여 Zigbee2MQTT를 시작합니다. 3번의 재시도가 이루어집니다.

```bash
Z2M_WATCHDOG=0.5,3,6,15
```

watchdog의 재시도 지연을 30초, 3분, 6분, 15분으로 설정하여 Zigbee2MQTT를 시작합니다. 4번의 재시도가 이루어집니다.

```bash
Z2M_WATCHDOG=1
```

watchdog의 재시도 지연을 1분으로 설정하여 Zigbee2MQTT를 시작합니다. 1번의 재시도가 이루어집니다.
