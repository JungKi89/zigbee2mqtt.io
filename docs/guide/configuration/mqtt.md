---
sidebarDepth: 1
---

# MQTT

## 서버 연결

Zigbee2MQTT가 동작하려면 MQTT 서버 연결이 필요합니다.

```yaml
# 필수: MQTT 설정
mqtt:
    # 필수: MQTT 서버 URL (SSL/TLS 연결에는 mqtts:// 사용)
    # 예시: 'localhost', Mosquito HA 애드온 사용 시 'core-mosquitto'
    server: 'mqtt://localhost:1883'
    # 선택 사항: Zigbee2MQTT MQTT 메시지의 기본 토픽 (기본값: zigbee2mqtt)
    base_topic: zigbee2mqtt
    # 선택 사항: 서버 및 클라이언트 인증서 서명에 사용된 CA의 SSL/TLS 인증서 절대 경로 (기본값: 없음)
    ca: '/etc/ssl/mqtt-ca.crt'
    # 선택 사항: 클라이언트 인증을 위한 SSL/TLS 키 및 인증서 절대 경로 (기본값: 없음)
    key: '/etc/ssl/mqtt-client.key'
    cert: '/etc/ssl/mqtt-client.crt'
    # 선택 사항: MQTT 서버 인증 사용자 (기본값: 없음)
    user: my_user
    # 선택 사항: MQTT 서버 인증 비밀번호 (기본값: 없음)
    password: my_password
    # 선택 사항: MQTT 클라이언트 ID (기본값: 없음)
    client_id: 'MY_CLIENT_ID'
    # 선택 사항: 자체 서명된 SSL 인증서 거부 비활성화 (기본값: true)
    reject_unauthorized: true
    # 선택 사항: MQTT 메시지에 장치 정보 포함 (기본값: false)
    include_device_information: true
    # 선택 사항: MQTT keepalive 초 단위 (기본값: 60)
    keepalive: 60
    # 선택 사항: MQTT 프로토콜 버전 (기본값: 4), 장치별 'retention' 설정을 사용하는 경우
    # 5로 설정하세요
    version: 4
    # 선택 사항: 전송되는 모든 메시지에 대해 retain을 비활성화합니다. MQTT 브로커가
    # retained 메시지를 지원하지 않는 경우에만 활성화하세요 (예: AWS IoT core, Azure IoT Hub,
    # Google Cloud IoT core, IBM Watson IoT Platform).
    # 활성화하면 Home Assistant 연동이 중단됩니다. (기본값: false)
    force_disable_retain: false
    # 서버가 Zigbee2MQTT로 전송할 수 있는 최대 패킷 길이(바이트)를 지정합니다.
    # 참고: MQTT 브로커에도 동일한 값이 있지만, 클라이언트가 브로커로 전송할 수 있는 길이입니다. (기본값: 1048576)
    maximum_packet_size: 1048576
```

### MQTT 서버/사용자/비밀번호 및 network_key를 다른 파일에 지정하기

MQTT 서버/사용자/비밀번호를 다른 파일(예: `secret.yaml`)에 지정하려면 다음 설정을 사용하세요.

**configuration.yaml**

```yaml
# 중요: 따옴표를 잊지 마세요!
mqtt:
    server: '!secret.yaml server'
    user: '!secret.yaml user'
    password: '!secret.yaml password'
```

**secret.yaml**

```yaml
server: 'mqtt://localhost:1883'
user: mqtt_user
password: mqtt_password
```

## MQTT 동작

```yaml
advanced:
    # 선택 사항: 상태 캐싱, MQTT 메시지 페이로드에 변경된 속성만이 아닌 모든 속성이 포함됩니다.
    # Home Assistant를 통한 연동 시 true여야 합니다 (기본값: true)
    cache_state: true
    # 선택 사항: 캐시된 상태 유지, cache_state: true일 때만 사용됨 (기본값: true)
    cache_state_persistent: true
    # 선택 사항: 시작 시 캐시된 상태 전송, cache_state_persistent: true일 때만 사용됨 (기본값: true)
    cache_state_send_on_startup: true
    # 선택 사항: MQTT 메시지에 last_seen 속성 추가, 마지막 Zigbee 메시지의 날짜/시간 포함
    # 가능한 값: disable (기본값), ISO_8601, ISO_8601_local, epoch (기본값: disable)
    last_seen: 'disable'
    # 선택 사항: MQTT 메시지에 elapsed 속성 추가, 이전 메시지 이후 경과 밀리초 포함 (기본값: false)
    elapsed: false
    # 선택 사항: MQTT 출력 형식: json, attribute 또는 attribute_and_json (기본값: 아래 표시)
    # 장치의 'state'가 게시될 때 예시
    # json: 토픽: 'zigbee2mqtt/my_bulb' 페이로드 '{"state": "ON"}'
    # attribute: 토픽 'zigbee2mqtt/my_bulb/state' 페이로드 'ON"
    # attribute_and_json: json과 attribute 모두 (위 참고)
    output: 'json'
```
