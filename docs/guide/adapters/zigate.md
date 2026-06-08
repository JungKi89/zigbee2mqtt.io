# ZiGate adapters

::: warning 주의
이 adapter의 구현은 **더 이상 유지 관리되지 않습니다**.
대신 권장 adapter 중 하나를 구매하는 것을 고려하세요.
:::

::: warning 주의

이 adapter에 대한 지원은 **실험적**이며, 프로덕션 환경에서의 사용은 아직 권장되지 않습니다.

:::

다양한 ZigGate adapter에 대한 실험적(알파 단계) 지원 개발이 시작되었습니다. 여기에는 현재 ZigGate 3.1d firmware 이상을 사용하는 JN5168 및 JN5169와 같은 NXP Zigbee MCU 칩 기반의 모든 ZiGate 호환 하드웨어 adapter가 포함됩니다.

::: warning 주의
이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 고려하세요.

- [채널 변경](../configuration/zigbee-network.md#changing-the-zigbee-channel): 변경하면 모든 기기를 다시 페어링해야 합니다.
- [설치 코드](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd) 추가: 일부 기기 페어링에 필요합니다.
- [백업](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestbackup)
- Inter-PAN: [touchlink](../../guide/usage/touchlink.md)에 필요합니다.

:::

::: warning 주의
zigbee-herdsman은 ZiGate adapter의 유지 관리자를 찾고 있습니다. [https://github.com/Koenkk/zigbee-herdsman/issues/1037](https://github.com/Koenkk/zigbee-herdsman/issues/1037)을 참조하세요.
:::

### 설정

```yaml
serial:
    adapter: zigate
```

기타 지원되는 설정: `adapter_concurrent` 및 `transmit_power` ([문서](../configuration/adapter-settings.md)).

## 하드웨어

- [Coordinator firmware](https://zigate.fr/tag/firmware/)
- [토론](https://github.com/Koenkk/zigbee-herdsman/issues/242)
- [구매](https://zigate.fr/boutique/?orderby=date_desc)

<img src="../../images/zigate_usb_ttl.png" width="200" />
