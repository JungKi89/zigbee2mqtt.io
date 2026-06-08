---
sidebarDepth: 1
---

# Zigbee 네트워크

## 네트워크 설정

```yaml
advanced:
    # 선택 사항: Zigbee pan ID (기본값: 아래 표시)
    # pan_id: GENERATE 로 설정하면 다음 시작 시 Zigbee2MQTT가 새 panID를 생성합니다
    pan_id: 0x1a62
    # 선택 사항: Zigbee 확장 pan ID, GENERATE로 설정하면 다음 시작 시 새 확장 panID를 생성합니다 (기본값: 아래 표시)
    ext_pan_id: [0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD, 0xDD]
    # 선택 사항: Zigbee 채널, 변경 시 일부 장치의 재페어링이 필요할 수 있습니다 (아래 문서 참고).
    # (참고: 문제를 피하려면 ZLL 채널 사용: 11, 15, 20, 또는 25)
    # (기본값: 11)
    channel: 11
    # 선택 사항: 네트워크 암호화 키
    # GENERATE로 설정하면 다음 시작 시 새 네트워크 키를 생성합니다
    # 참고: 변경 시 모든 장치의 재페어링이 필요합니다 (기본값: 아래 표시)
    network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```

::: tip
`network_key: GENERATE`로 설정하면 처음 시작 시 Zigbee2MQTT가 새로운 무작위 키를 생성합니다. `configuration.yml`이 새 키로 업데이트됩니다. network_key를 변경하면 모든 장치의 재페어링이 필요합니다.
:::

::: tip
[Zigbee 채널 변경으로 Wi-Fi 간섭 줄이기](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wi-fi-interference-by-changing-the-zigbee-channel)
:::

### Configurator

<Configurator />

### Zigbee 채널 변경

기존 Zigbee 네트워크의 채널 변경이 지원됩니다. Zigbee에서는 채널 변경을 알리는 네트워크 업데이트를 브로드캐스트하여 변경합니다. 브로드캐스트 중 절전 상태인 장치(보통 배터리로 동작하는 종단 장치)는 즉시 전환되지 않고, 다음에 깨어날 때 전환됩니다. 따라서 채널 변경 후 해당 장치들을 트리거하는 것을 권장합니다.

::: warning
일부 Zigbee 장치는 채널 변경을 지원하지 않습니다. 변경 후 몇 분이 지나도 장치가 응답하지 않고 트리거/깨우기를 시도해도 반응이 없다면 수동으로 재페어링해야 할 수 있습니다.
:::

::: warning
채널 변경은 `zstack` 및 `ember` adapter에서만 지원됩니다.
:::

설정에서 채널이 변경된 경우 Zigbee2MQTT는 시작 시 이 브로드캐스트를 전송합니다. 다음과 같은 로그가 생성됩니다:

```
[2024-07-12 16:28:27] info: 	z2m: Starting Zigbee2MQTT version 1.39.0 (commit #e3fa0bfb)
...
[2024-07-12 16:28:27] warning: 	zh:controller: Configured channel '18' does not match adapter channel '19', changing channel
[2024-07-12 16:28:27] warning: 	zh:controller: Changing channel from '18' to '19'
[2024-07-12 16:28:37] warning: 	zh:controller: Channel changed to '19'
...
[2024-07-12 16:28:37] info: 	z2m: Zigbee2MQTT started!
```

### network_key를 다른 파일에 지정하기

network_key를 다른 파일(예: `secret.yaml`)에 지정하려면 다음 설정을 사용하세요.

**configuration.yaml**

```yaml
# 중요: 따옴표를 잊지 마세요!
advanced:
    network_key: '!secret.yaml network_key'
```

**secret.yaml**

```yaml
network_key: [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]
```
