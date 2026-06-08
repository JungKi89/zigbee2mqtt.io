---
sidebarDepth: 1
redirectFrom:
    - /information/debug.md
    - /guide/usage/debug.md
---

# 로깅

Zigbee2MQTT는 콘솔, 로그 파일 또는 (원격) Syslog 서버에 로그를 출력할 수 있습니다.

로그 레벨은 런타임에 조정할 수 있습니다. 자세한 내용은 [MQTT 토픽과 메시지](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request)를 참고하세요.

```yaml
advanced:
    # 선택 사항: 로깅 레벨, 옵션: debug, info, warning, error (기본값: info)
    log_level: info
    # 선택 사항: 특정 네임스페이스 계층에 대한 로그 레벨 설정 (기본값: {})
    log_namespaced_levels:
        z2m:mqtt: warning
    # 선택 사항: 로그 타임스탬프 형식 (기본값: 아래 표시)
    # 지원되는 모든 토큰은 https://github.com/taylorhakes/fecha?tab=readme-ov-file#formatting-tokens 참고
    timestamp_format: 'YYYY-MM-DD HH:mm:ss'
    # 선택 사항: 로그 디렉토리 위치 (기본값: 아래 표시)
    log_directory: data/log/%TIMESTAMP%
    # 선택 사항: 가장 오래된 것을 삭제하기 전까지 유지할 로그 디렉토리 수 (기본값: 아래 표시)
    log_directories_to_keep: 10
    # 선택 사항: 로그 파일 이름, 타임스탬프 포함 가능, 예: zigbee2mqtt_%TIMESTAMP%.log (기본값: 아래 표시)
    log_file: log.txt
    # 선택 사항: 3개 파일에 걸쳐 10MB마다 로그 순환 (기본값: true)
    log_rotation: true
    # 선택 사항: 'console' 출력을 색상 평문 대신 구조화된 JSON으로 형식화
    log_console_json: false
    # 선택 사항: 로그 출력 위치 (기본값: 아래 표시), 로깅을 억제하려면 빈 배열 지정 (log_output: [])
    # 가능한 옵션: 'console', 'file', 'syslog'
    log_output:
        - console
        - file
    # 최신 로그 디렉토리를 가리키는 "current"라는 심볼릭 링크를 로그 디렉토리에 생성합니다. (기본값: false)
    log_symlink_current: false
    # 선택 사항: syslog 설정, 기본값을 사용하려면 값 또는 전체를 생략. 'log_output'에 'syslog'가 있을 때만 사용 (위 참고)
    log_syslog:
        host: localhost # syslogd가 실행 중인 호스트, 기본값: localhost
        port: 514 # syslog가 실행 중인 호스트의 포트, 기본값: syslogd 기본 포트
        protocol: udp4 # 로그를 전송할 네트워크 프로토콜 (예: tcp4, udp4, tls4, unix, unix-connect 등)
        path: /dev/log # syslog dgram 소켓 경로 (예: /dev/log 또는 OS X의 경우 /var/run/syslog)
        pid: process.pid # 로그 메시지가 오는 프로세스의 PID (기본값: process.pid)
        facility: local0 # 사용할 Syslog 기능 (기본값: local0)
        localhost: localhost # 로그 메시지가 오는 호스트를 나타내는 값 (기본값: localhost)
        type: '5424' # 사용할 syslog 프로토콜 유형 (기본값: BSD, 유효한 값: 5424)
        app_name: Zigbee2MQTT # 애플리케이션 이름 (기본값: Zigbee2MQTT)
        eol: '\n' # 메시지 끝에 추가할 줄 끝 문자 (기본값: 수정 없이 메시지)
```

## MQTT 트래픽 줄이기

로깅은 MQTT 트래픽에 상당한 영향을 미칠 수 있습니다. 이 때문에 기본적으로 `info` 레벨 이상만 MQTT에 게시됩니다 (이 동작을 변경하려면 아래를 참고). `log_namespaced_levels` 설정으로 불필요한 특정 네임스페이스의 레벨을 높여 트래픽을 더 줄일 수 있습니다. 로깅에서 트래픽의 주요 요인 중 하나는 `z2m:mqtt` 네임스페이스입니다. 나머지는 `info`로 유지하면서 이 레벨만 높이려면 다음을 사용하세요:

```yaml
advanced:
    log_level: info
    log_namespaced_levels:
        z2m:mqtt: warning
```

## 특정 네임스페이스 계층의 레벨 정의

`log_namespaced_levels`에 정의된 로그 레벨은 명시적으로 설정되지 않는 한 해당 네임스페이스 자체와 그 아래의 모든 네임스페이스에 적용됩니다.

```yaml
advanced:
    log_level: warning
    log_namespaced_levels:
        zhc: info
        zhc:legacy:fz: debug
```

- `zhc` 및 그 아래 네임스페이스는 `info`로 로깅됩니다 (예시: `zhc`, `zhc:ota:common`, `zhc:legacy:tz`)
- `zhc:legacy:fz` 및 그 아래 네임스페이스는 `debug`로 로깅됩니다 (예시: `zhc:legacy:fz`, `zhc:legacy:fz:tuya`)
- 지정되지 않은 다른 네임스페이스는 `log_level`인 `warning`을 사용합니다 (예시: `z2m:mqtt`, `zh:zstack`)

## 디버깅

Zigbee2MQTT가 예상대로 작동하지 않는 경우 다음 팁으로 문제를 찾는 데 도움을 받을 수 있습니다.
먼저 `configuration.yaml`에 다음을 추가하여 debug 로깅을 활성화하세요:

```yaml
advanced:
    log_level: debug
```

문제를 디버깅 중이고 Zigbee2MQTT 시작부터의 완전한 로그가 필요하다면 `log_rotation`을 끄고 파일 로깅을 켜기 위해 `configuration.yaml`에 다음을 추가하세요:

```yaml
advanced:
    log_rotation: false
    log_output:
        - file
```

로깅에서 다음 약어를 볼 수 있습니다:

- `z2m`: Zigbee2MQTT
- `zh`: [zigbee-herdsman](https://github.com/koenkk/zigbee-herdsman), Zigbee2MQTT가 사용하는 Zigbee 라이브러리에서 기록된 이벤트
- `zhc`: [zigbee-herdsman-converters](https://github.com/koenkk/zigbee-herdsman-converters), 장치 지원 라이브러리에서 기록된 이벤트

런타임에 로그 레벨을 변경하려면 frontend 또는 [MQTT](../usage/mqtt_topics_and_messages.md)를 사용하세요.

### MQTT 및 frontend에 게시

성능 향상을 위해 `debug` 레벨 로그는 기본적으로 MQTT와 frontend에 더 이상 게시되지 않습니다. 게시하려면 다음 설정을 사용하세요:

```yaml
advanced:
    log_debug_to_mqtt_frontend: true
```

### 특정 네임스페이스의 로깅 방지

네임스페이스를 기반으로 특정 `debug` 라인을 필터링하는 정규 표현식 기반 방법입니다.

예시:

다음으로 시작하는 로그 네임스페이스 필터링:

- `zhc:legacy:fz:tuya`
- 또는 `zhc:legacy:fz:moes`

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)'
```

다음으로 시작하는 로그 네임스페이스 필터링:

- `zhc:legacy:fz:tuya`
- 또는 `zhc:legacy:fz:moes`
- 또는 `zh:ember:uart:` (`uart` 아래의 모든 네임스페이스)
- 또는 `zh:controller` (`controller` 아래의 모든 네임스페이스 및 `controller` 자체)

```yaml
advanced:
    log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller'
```

정규 표현식 작성에 도움이 필요하면 [https://regex101.com/](https://regex101.com/)을 참고하세요. Flavor를 `ECMAScript (JavaScript)`로 설정해야 합니다.
