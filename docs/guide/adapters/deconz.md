# deCONZ (Dresden Elektronik)

::: warning 주의
이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 고려하세요.

- Inter-PAN: [touchlink](../../guide/usage/touchlink.md)에 필요합니다
- [송신 전력](../../guide/configuration/adapter-settings.md) 낮추기
- ConBee II (및 RaspBee II도 가능성 있음)는 [네트워크 연결 문제(MacNoAck)를 나타낼 수 있습니다](https://github.com/Koenkk/zigbee2mqtt/issues/28041)
- [설치 코드](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd) 지원에는 최신 coordinator firmware가 필요합니다. 일부 기기 페어링에 필요합니다.

:::

### 설정

```yaml
serial:
    adapter: deconz
```

기타 지원되는 설정: `baudrate` ([문서](../configuration/adapter-settings.md)).

## 하드웨어

ConBee / ConBee II / ConBee III / RaspBee / RaspBee II

USB 연결 adapter (ConBee / ConBee II / ConBee III)와 Raspberry Pi GPIO 모듈 (RaspBee 및 RaspBee II).

`configuration.yaml`의 serial 섹션에 올바른 baudrate를 추가하세요.

- ConBee2의 경우: baudrate를 지정할 필요가 없습니다
- Conbee 및 RaspBee2의 경우: 38400
- ConBee3의 경우: 115200

최신 안정 firmware 버전이 권장되며, [firmware 변경 로그](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Firmware-Changelog)에 나열되어 있습니다.

- [Coordinator firmware](https://deconz.dresden-elektronik.de/deconz-firmware/)
- [Flash](https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually)
- [구매](https://phoscon.de/conbee2#buy) (ConBee II)
- [구매](https://phoscon.de/conbee3#buy) (ConBee III)
- [구매](https://phoscon.de/raspbee2#buy) (RaspBee II)

<img src="../../images/conbee.jpg" width="200" />
