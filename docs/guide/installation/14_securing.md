---
sidebarDepth: 1
next: ../configuration/
redirectFrom:
    - /how_tos/how_to_secure_network.md
    - /advanced/zigbee/03_secure_network.md
---

# 설치 보안

::: warning
이 페이지는 일반적인 설치에서 보안이 어떻게 적용되는지 개요를 제공합니다.
설정마다 약간씩 다를 수 있으므로, 전부 해당되지 않을 수도 있고 추가적인 사항이 있을 수도 있습니다.
:::

Zigbee2MQTT를 보안 관점에서 이해하는 유용한 방법은 네트워크 라우터에서 실행되는 소프트웨어와 비교하는 것입니다: 네트워크의 설정과 제어를 담당합니다.
따라서 기본적으로 로컬에서만 접근 가능합니다.

Zigbee2MQTT는 브리지이므로, 연결된 다양한 소프트웨어 구성 요소(MQTT 브로커, 자동화 소프트웨어 등)도 각각 적절히 보안 설정을 해야 합니다. 각 소프트웨어의 공식 문서를 참고하세요.

이러한 구성 요소를 공개적으로 노출하려면 신중한 보안 계획이 필요합니다.
신뢰할 수 없는 접근은 절대 허용해서는 안 됩니다.

## 호스트 시스템

- **전용 사용자**: 전용의 권한이 없는 사용자 계정(`root` 아님)으로 Zigbee2MQTT를 실행합니다. 이는 프로세스가 침해될 경우 피해 범위를 제한합니다.
- **data 디렉토리 접근 제한**: data 디렉토리에는 전체 설정, 네트워크 상태, 장치 데이터가 포함됩니다. Zigbee2MQTT 사용자만 접근할 수 있어야 합니다.
- **호스트 시스템 최신 상태 유지**: 운영 체제 및 의존성(Node.js, MQTT 브로커 등)의 보안 업데이트를 정기적으로 적용하고 Zigbee2MQTT 자체도 업데이트된 상태를 유지합니다.

## 설정 파일

`configuration.yaml` 파일에는 MQTT 자격 증명 및 Zigbee 네트워크 키와 같은 민감한 정보가 포함되어 있습니다.

- **파일 권한 제한**: Zigbee2MQTT를 실행하는 사용자만 파일을 읽고 쓸 수 있도록 합니다.

    ```bash
    chmod 600 configuration.yaml
    ```

- **secrets 파일 사용**: `configuration.yaml`에 자격 증명을 평문으로 저장하지 않습니다.
  대신 `!secret.yaml` 구문을 사용하여 참조하는 별도의 `secret.yaml` 파일을 사용합니다. [다른 파일에서 지정하기](../configuration/mqtt.md#specifying-mqtt-serveruserpassword-and-network_key-in-a-different-file)를 참고하세요.

    `secret.yaml`에도 동일한 권한 제한을 적용합니다:

    ```bash
    chmod 600 secret.yaml
    ```

## MQTT

MQTT는 Zigbee2MQTT의 주요 입출력 경로입니다.
데이터를 발행하고 Zigbee2MQTT의 모든 측면(설정, 네트워크, 장치 등)을 제어하는 데 사용됩니다.

전체 참조는 [MQTT 설정](../configuration/mqtt.md)을 참고하세요.

:::caution 주의
접근 보안 없이 MQTT 브로커를 공개적으로 노출하지 마세요.
브로커에 대한 사용 가능한 문서와 가이드를 참고하세요.
:::

:::caution 주의
프로덕션 환경에서 `reject_unauthorized: false`를 사용하는 것은 위험합니다. TLS 인증서 검증을 비활성화하여 연결을 취약하게 만듭니다.
:::

## Frontend

Frontend는 MQTT와 동일한 API를 사용하지만, 브라우저 내 접근을 위해 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)으로 래핑됩니다.
Frontend에 접근할 수 있는 사람은 MQTT와 동일하게 Zigbee2MQTT를 완전히 제어할 수 있습니다.

:::caution 주의
접근 보안 없이 frontend를 공개적으로 노출하지 마세요.
:::

### 인증

[`auth_token` 옵션](../configuration/frontend.md#advanced-configuration)을 사용하여 토큰 기반 인증을 활성화합니다.

비밀번호와 동일한 주의를 기울여 사용합니다.
`configuration.yaml`에 직접 저장하지 말고 `secret.yaml`에 저장합니다([설정 파일](#설정-파일) 참고).

### 암호화 (HTTPS / WSS)

[인증서 및 개인 키](../configuration/frontend.md#advanced-configuration)를 제공하여 Zigbee2MQTT 내에서 직접 HTTPS/WSS를 활성화합니다.

또는 frontend 앞에 배치된 리버스 프록시(Nginx, Apache 등)에서 TLS를 종료합니다.
프록시 설정 예시는 [Frontend 설정](../configuration/frontend.md)을 참고하세요.

### 바인드 주소

기본적으로 frontend는 모든 인터페이스(`0.0.0.0`)에서 수신 대기합니다.
원격 접근이 필요하지 않은 경우 localhost로 제한합니다:

```yaml
frontend:
    host: 127.0.0.1
```

또는 Unix 소켓을 사용하여 네트워크 노출을 완전히 피할 수 있습니다:

```yaml
frontend:
    host: '/run/zigbee2mqtt/zigbee2mqtt.sock'
```

:::warning 경고
이와 관련하여 일부 시스템(Docker, Home Assistant 등)의 특정 요구 사항에 주의하세요.
:::

## Zigbee 네트워크

### 네트워크 암호화 키

Zigbee 통신은 128비트 네트워크 키를 사용하여 암호화됩니다.

:::caution 주의
이 키를 변경하면 모든 장치를 재페어링해야 합니다.
:::

:::caution 주의
현재 기존 기본 키 `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]`로 네트워크를 운영 중인 경우, 키를 변경하는 것을 강력히 권장합니다.
:::

다음 시작 시 새로운 랜덤 키를 생성하려면 [온보딩](../getting-started/README.md#onboarding)을 사용하거나 수동으로 업데이트합니다:

```yaml
advanced:
    network_key: GENERATE
```

Zigbee2MQTT는 시작 시 `GENERATE`를 무작위로 생성된 키로 교체합니다.
물론 특정 키를 수동으로 설정할 수도 있습니다.

자세한 내용은 [Zigbee 네트워크 설정](../configuration/zigbee-network.md)을 참고하세요.

### PAN ID 및 Extended PAN ID

PAN ID와 Extended PAN ID는 네트워크를 식별합니다. 이것들은 보안 수단이 아닙니다.

변경은 가능하지만 모든 장치를 재페어링해야 합니다.
주로 근처의 다른 네트워크와의 충돌을 피해야 할 때 사용합니다.

### IEEE 및 네트워크 주소

IEEE 주소와 네트워크 주소는 장치를 식별합니다. 이것들은 보안 수단이 아닙니다.

IEEE 주소는 장치의 Zigbee 칩에 정적으로 할당됩니다(일부 경우에는 변경 가능).
동일한 IEEE 주소를 가진 두 장치는 같은 네트워크에 참여할 수 없습니다.

네트워크 주소는 장치 참여 시 무작위로 할당되며 일반적으로 리셋/재참여까지 동일하게 유지됩니다(장치의 재량에 따라 변경될 수 있음).

### 참여 (permit join)

"permit join" 상태는 새 장치가 네트워크에 참여할 수 있는지 여부를 결정합니다.
참여는 전용 frontend 버튼 또는 MQTT를 통해 일시적으로(기본 254초) 활성화됩니다. 페어링이 완료되면 참여 창을 수동으로 닫을 수도 있습니다.

:::tip TIP
새로 참여한 장치는 특정 기간(최대 254초) 동안 자체적으로 참여를 자동 허용할 수 있습니다.
:::

#### 설치 코드

설치 코드로 참여하면 더 나은 보안을 제공합니다(사용 가능한 경우).
코드는 장치 제조 과정에서 무작위로 할당됩니다.
코드는 Trust Center(coordinator)에서 참여 장치로의 초기 네트워크 키 전송을 암호화합니다.

설치 코드가 있는지 확인하려면 공급업체에 문의하거나 각 장치의 문서를 참조하세요(일반적으로 장치에 인쇄되어 있거나 QR 코드로 표시됩니다).
코드는 frontend를 통해 추가할 수 있습니다.
[MQTT를 통한 설치 코드 추가](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd)도 참고하세요.

### 장치 passlist 및 blocklist

네트워크에 허용되는 장치를 더 엄격하게 제어하려면 passlist 또는 blocklist를 사용합니다.
자세한 내용은 [장치 blocklist / passlist](../configuration/block-pass-list.md)를 참고하세요.

:::tip TIP
허용되지 않은 장치는 시작 시(예: 마지막 실행 이후 설정 변경) 및 참여 시도 시 네트워크에서 제거됩니다.
참고: 제거는 대상 장치에 "떠나달라"는 요청을 전송하는 것이므로, 악의적인 장치는 의도적으로 이를 무시할 수 있습니다.
:::

:::tip TIP
passlist를 사용하는 것이 가장 제한적이고 따라서 가장 안전한 옵션으로, 명시적으로 신뢰할 수 있는 장치만 참여할 수 있습니다.
:::

### Inter-PAN

Inter-PAN 메시지는 1홉 거리의 미참여 장치로 보내거나 받는 **비보안 메시지**입니다.
Touchlink(이전에는 ZLL로 알려진)는 Inter-PAN 메시징을 사용합니다.

Inter-PAN은 일반적으로 매우 특정한 작업(예: Touchlink를 통해 장치를 공장 초기화)에 사용되며, 원하지 않는 메시지는 적극적으로 차단되고 물리적 근접이 필요합니다.
이는 보안 부재의 영향을 제한합니다.

:::warning 경고
특히 접근이 비교적 쉬운 장소에서는 Touchlink가 영구적으로 활성화된 장치를 피하세요. 악의적인 사용자가 네트워크를 방해할 수 있습니다.
:::

### Zigbee 4.0

Zigbee 4.0은 여러 보안 향상 사항을 제공합니다.
CSA의 발표에서 더 자세히 읽을 수 있습니다: [https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/](https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/)

참고: 장치들이 새로운 표준을 따르고 이러한 향상 사항을 모두 지원하기까지는 시간이 걸릴 것입니다.

## 외부 확장 및 컨버터

설계상, 외부 확장 및 컨버터는 Zigbee2MQTT 프로세스 내에서 사용자가 제공한 임의의 JavaScript 코드를 실행합니다.
이는 상당한 커스터마이징 유연성을 제공하지만, 악의적이거나 버그가 있는 코드가 전체 Zigbee2MQTT 인스턴스, 나아가 호스트 시스템을 침해할 수 있음을 의미합니다.

:::caution 주의
신뢰할 수 있고 검토된 출처에서만 외부 확장 및 컨버터를 추가하세요.
시스템에서 실행되는 다른 코드/스크립트와 동일한 수준의 검토를 적용하세요.
:::

## 펌웨어 업데이트 (OTA)

펌웨어 업데이트는 버그 수정, 보안 업데이트 및 기타 유용한 기능을 제공할 수 있습니다.
그러나 Zigbee2MQTT 호환성에 영향을 미치거나 버그가 있거나 심지어 악의적인 기능을 도입하는 방식으로 장치 동작을 변경할 수도 있습니다.
펌웨어 업데이트를 적용하기 전에 릴리즈 노트를 검토하세요.
자세한 내용은 [OTA 업데이트](../usage/ota_updates.md)를 참고하세요.

기본적으로 Zigbee2MQTT는 [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) 저장소에서 OTA 이미지를 매칭하고 가져옵니다.
이 저장소는 수동 및 자동으로 관리되는 제조업체 제공 펌웨어 업데이트의 미러입니다.

:::caution 주의
신뢰할 수 있는 출처의 펌웨어만 사용하세요.
출처를 완전히 신뢰하지 않는 한 사용자 정의 OTA index URL을 사용하지 마세요.
:::
