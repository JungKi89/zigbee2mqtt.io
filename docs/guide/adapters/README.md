---
sidebarDepth: 1
next: ../installation/
redirectFrom: /information/supported_adapters.md
---

# 지원되는 Adapter

공식적으로 지원되는 모든 adapter는 이 페이지에 나열되어 있습니다. adapter를 Zigbee2MQTT와 함께 사용하기 전에 coordinator firmware로 flash해야 합니다 (일부 adapter는 미리 flash되어 제공됩니다).

## 권장

- [zStack 기반 (Texas Instruments)](./zstack.md)
- [EmberZNet 기반 (Silicon Labs)](./emberznet.md)
- [deCONZ 기반 (Dresden Elektronik)](./deconz.md)

## 비권장

### 유지 관리되지 않음

- [ZiGate 기반](./zigate.md)

### 실험적

- [ZBOSS 기반 (Nordic Semiconductor)](./zboss.md)

::: tip 팁
다른 adapter로 마이그레이션하고 싶으신가요? [여기](../faq/README.md#how-do-i-migrate-from-one-adapter-to-another)를 읽어보세요.
:::

## 참고 사항

adapter를 구매하기 전에 아래 참고 사항을 꼭 읽어보세요!

- 다른 adapter로 마이그레이션하고 싶으신가요? 경우에 따라 모든 기기를 다시 페어링해야 할 수 있습니다. [FAQ](../faq/README.md#what-does-and-does-not-require-repairing-of-all-devices)를 참조하세요.
- WiFi를 통해 연결된 네트워크 adapter는 안정성이 저하될 수 있습니다. serial 프로토콜은 WiFi 연결에서 일반적으로 발생할 수 있는 패킷 손실이나 지연을 처리할 만큼 충분한 내결함성을 갖추고 있지 않기 때문입니다. 로컬로 연결된 USB 또는 UART/GPIO adapter를 사용할 수 없는 경우, 문제를 방지하기 위해 Ethernet(유선)으로 연결된 원격 adapter 사용을 권장합니다.
- 다양한 CC2652/CC1352 칩의 차이점은 무엇인가요?
    - `P`로 끝나는 칩은 전력 증폭기가 있어 `R`/`RB`로 끝나는 adapter의 5dBm에 비해 최대 20dBm을 지원합니다.
    - `CC1352`로 시작하는 칩은 sub-1 GHz 주파수를 지원합니다 (Zigbee는 2.4 GHz를 사용하므로 관련 없음). `CC2652`는 2.4 GHz만 지원합니다. 따라서 Zigbee2MQTT 용도로는 `CC1352`와 `CC2652` 사이에 차이가 없습니다.
    - `RB`로 끝나는 칩은 PCB에 크리스탈이 필요 없으며, 이는 제조 공정에서만 차이를 만듭니다.

### Coordinator 백업

현재 zStack 또는 EmberZNet 기반의 adapter만 coordinator 백업(`coordinator_backup.json`)을 지원합니다.

#### 기존 adapter Flash하기

Flash 도구를 사용하여 기기를 다시 페어링하지 않고도 기존 adapter의 firmware를 업그레이드할 수 있습니다. 기기를 다시 페어링해야 하는 경우와 그렇지 않은 경우에 대한 정보는 [FAQ](https://www.zigbee2mqtt.io/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices)를 참조하세요.

#### OS에서 기기를 인식하지 못하는 경우

Flash Programmer 2 등을 사용할 때 "왜 dongle이나 adapter가 표시되지 않을까요?"라는 질문을 하고 있다면, OS가 VCP(Virtual COM Port) serial 포트를 통해 기기와 통신하지 못하는 것일 수 있습니다. 이 문제를 해결하려면 운영 체제에 맞는 USB-to-UART 브리지/컨버터 VCP 드라이버를 설치하세요. [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers), [FTDI Chip](https://ftdichip.com/drivers/vcp-drivers/), 또는 [WCH (CH34x/CH91xx)](http://www.wch-ic.com/downloads/category/30.html)에서 드라이버를 찾을 수 있습니다.

### Router

coordinator로 사용하는 것 외에도, 일부 adapter는 Zigbee router로도 사용할 수 있습니다 (adapter를 클릭하여 router firmware가 있는지 확인하세요). 초기화/페어링 방법:

- Texas Instruments CC2531: S2 버튼을 5초간 누릅니다.
- Texas Instruments CC2530: 기기를 3번 켜고 끕니다 (전원 켜기, 2초 대기, 전원 끄기, 이 사이클을 3번 반복).
- CC2652/CC1352 기반 adapter: 기기의 버튼 중 하나를 한 번 누릅니다.
- Silicon Labs EmberZNet 기반 adapter:
    - [Sonoff Dongle-E](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)
    - [SMLight SLZB-06M](https://www.zigbee2mqtt.io/devices/SLZB-06M.html)
