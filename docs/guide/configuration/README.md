---
next: adapter-settings.md
redirectFrom: /information/configuration.md
---

# 설정

::: warning 주의
ChatGPT와 같은 LLM이 생성한 설정만을 그대로 사용하지 마세요! 생성된 설정은 반드시 관련 문서와 대조하여 검증하세요. 그렇지 않으면 설정이 망가질 수 있습니다.
:::

Zigbee2MQTT는 [YAML](https://en.wikipedia.org/wiki/YAML) 기반의 `configuration.yaml` 파일로 설정됩니다.
이 파일은 설치 디렉토리 내의 `data` 폴더에 위치해야 합니다. `data` 디렉토리와 `configuration.yaml`은 Zigbee2MQTT 프로세스가 쓰기 가능해야 합니다. 예를 들어 frontend에서 설정을 변경하면 파일이 업데이트될 수 있습니다. `ZIGBEE2MQTT_DATA` 환경 변수를 설정하여 커스텀 data 디렉토리를 지정할 수 있습니다.

::: tip 규칙
`mqtt.server`와 같이 점 표기법(dot-notation)으로 표현된 설정 키는 `mqtt` 섹션 내의 `server` 속성을 의미합니다. 모든 점 표기법 참조는 절대 경로입니다.
:::

## 최소 설정 생성

<Configurator />

## 환경 변수

`configuration.yaml`의 값을 환경 변수로 재정의할 수 있습니다. 환경 변수 이름은 `ZIGBEE2MQTT_CONFIG_`로 시작하고, 그 뒤에 설정하려는 속성의 경로를 대문자로 `_`로 구분하여 작성합니다.

예를 들어 다음 설정을 재정의하려면:

```yaml
mqtt:
    base_topic: zigbee2mqtt
```

`ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC`을 원하는 값으로 설정하면 됩니다.

## 런타임 설정 변경

설정 옵션은 `zigbee2mqtt/bridge/request/options` 토픽으로 적절한 MQTT 페이로드를 게시하여 런타임에 변경할 수 있습니다.
자세한 내용은 [MQTT 토픽과 메시지](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request)를 참고하세요.

::: tip 참고
일부 옵션은 적용되기 전에 재시작이 필요합니다.
:::
