# ZBOSS adapters

::: warning 주의

이 adapter에 대한 지원은 **실험적**이며, 프로덕션 환경에서의 사용은 아직 권장되지 않습니다.

:::

ZBOSS 프로토콜용 adapter는 nRF5340, nRF52840, nRF52833, nRF21540 등 Nordic Semiconductor 칩을 위한 ZBOSS NCP Host [Zigbee NCP (Network Co-Processor)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html) 예제를 기반으로 합니다.

또한 특수 firmware https://github.com/andryblack/esp-coordinator 덕분에 ZBOSS 프로토콜을 사용하여 Espressif ESP32-C6/H2 칩과 상호작용할 수 있습니다.

칩과 호스트 간의 상호작용은 [ZBOSS NCP Serial Protocol](https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm)에 따라 이루어집니다.

adapter 코드는 [zigpy-zboss 라이브러리](https://github.com/kardia-as/zigpy-zboss)를 기반으로 합니다.

::: warning 주의
현재 이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 사용하는 것을 고려하세요.

- [채널 변경](../configuration/zigbee-network.md#changing-the-zigbee-channel): 변경하면 모든 기기를 다시 페어링해야 합니다.
- [설치 코드](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd) 추가: 일부 기기 페어링에 필요합니다.
- [백업](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestbackup)
- Inter-PAN: [touchlink](../../guide/usage/touchlink.md)에 필요합니다.

:::

### 설정

```yaml
serial:
    adapter: zboss
```

기타 지원되는 설정: `adapter_concurrent` 및 `transmit_power` ([문서](../configuration/adapter-settings.md)).

## 하드웨어

현재 nRF52840 Dongle, Nice!Nano v2 (nRF52840) 및 ESP32-C6/H2 개발 보드에서 테스트되었습니다.

- [nRF52840 SoC가 있는 Nordic Semiconductor용 미리 빌드된 coordinator firmware](https://github.com/kardia-as/nrf-zboss-ncp)

<img src="https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg" width="500" />

- [nRF52840 SoC가 있는 Nice!Nano v2용 미리 빌드된 coordinator firmware](https://github.com/captainlettuce/zboss_adapter_nice_nano_v2)

<img alt="Nice!Nano v2" src="https://github.com/user-attachments/assets/db2f3041-e36c-4921-b078-7cf0236eeae3" width="75" />

- [실험적 ESP32-C6 firmware](https://github.com/andryblack/esp-coordinator)

    안정성 수정이 포함된 더 최신 빌드 [업데이트된 ESP32-C6 firmware](https://github.com/diepeterpan/esp-coordinator)

<img src="https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/_images/esp32-c6-devkitc-1-isometric_v1.2.png" width="200" />
