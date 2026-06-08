---
redirectFrom: /how_tos/how_to_connect_to_a_remote_sonoff_zbbridge.md
---

# 원격 Sonoff ZBBridge에 연결하기

이 가이드는 상용 Sonoff ZBBridge Gateway로 Zigbee2MQTT를 실행하는 방법을 설명합니다.
TCP를 통해 직렬 포트에 연결하기 위해 커스텀 firmware가 적용된 Sonoff ZBBridge Gateway를 사용합니다.
이렇게 하면 간단한 기성품 Hub/Gateway를 커스텀 firmware로 Flash하여 coordinator로 사용할 수 있습니다.

::: warning
EZSP 지원은 현재 **실험적**임을 유의하세요.
:::

::: warning
WiFi 기반 Serial-to-IP bridge는 **권장하지 않습니다**. 직렬 프로토콜이 WiFi 연결에서 일반적으로 발생할 수 있는 패킷 손실이나 지연을 처리할 만큼 충분한 장애 허용성을 갖추고 있지 않습니다.
:::

## 1. Tasmota ZBBridge Flash

Gateway를 사용하기 위해 클라우드에서 벗어나기 위해 커스텀 firmware([tasmota-zbbridge](https://tasmota.github.io/docs/Zigbee/))로 Flash합니다.
Flash 절차는 [DigiBlur의 가이드](https://www.digiblur.com/2020/07/how-to-use-sonoff-zigbee-bridge-with.html) 6단계까지 따르세요.

## 2. 설정

이제 Zigbee2MQTT `configuration.yaml`을 적절하게 편집합니다. `192.168.2.13`을 adapter가 연결된 시스템의 IP 또는 hostname으로 교체합니다. 또한 `20108`을 Gateway Flash 시 설정한 포트(이전 단계의 6번에서)로 교체합니다.

EZSP 지원은 현재 **실험적**임을 유의하세요.

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
    adapter: ezsp
```

완료! 이제 Zigbee2MQTT를 시작할 수 있습니다.
