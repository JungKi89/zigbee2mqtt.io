---
redirectFrom: /getting_started/pairing_devices.md
---

# 기기 참가 허용

기기가 네트워크에 참가할 수 있도록 하려면 참가를 허용해야 합니다. 이를 위한 방법은 여러 가지가 있습니다:

### 프론트엔드

프론트엔드에서 참가를 활성화하면 네트워크가 254초 동안 열립니다.
참가 버튼은 내비게이션 바 오른쪽 상단에 있으며, 타이머가 끝나기 전에 수동으로 네트워크를 닫는 데도 사용할 수 있습니다.

#### 특정 기기를 통한 페어링

`Permit join (All)` 버튼 오른쪽에 아래를 가리키는 화살표가 있습니다. 이를 통해 기기가 자동으로 선택하는 대신, 코디네이터 또는 특정 라우터를 지정하여 그곳을 통해 참가할 수 있습니다.
이것이 해당 라우터가 선택된다는 보장은 없습니다(또는 장기적으로 유지된다는 보장도 없습니다). 하지만 Aqara처럼 라우터 선택이 까다로운 기기나 스위치를 전구에 연결하고 싶을 때 유용할 수 있습니다.

### MQTT

`zigbee2mqtt/bridge/request/permit_join` MQTT topic을 사용하여 참가를 활성화할 수 있습니다. 자세한 내용은 [MQTT topic과 메시지](./mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-permit-join)를 참조하세요.

## 페어링

먼저 기기 페이지([지원 기기](../../supported-devices/)에서 모델 번호 클릭)에 기기 페어링 방법에 대한 지침이 있는지 확인하세요.

지침이 없는 경우, 기기를 공장 초기화하여 페어링할 수 있을 것입니다.

로그에 아래와 유사한 내용이 나타나면 기기가 페어링된 것입니다.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```

페어링 중 문제가 발생하면 가능한 해결 방법은 [FAQ](../../guide/faq/#why-does-my-device-not-or-fail-to-pair)를 참조하세요.
