---
redirectFrom: /information/zigbee_network.md
---

# Zigbee 네트워크

## 기기 유형

Zigbee에는 세 가지 유형의 기기가 있습니다: end device, router, coordinator. Zigbee 네트워크에는 항상 **하나**(그 이상은 없음)의 coordinator가 있으며, 여러 개의 router와 end device를 가질 수 있습니다. Zigbee2MQTT의 경우 coordinator는 CC2531 USB stick입니다.

### End Device

End device는 트래픽을 라우팅하지 않습니다. 또한 절전 모드로 들어갈 수 있어, end device는 배터리로 작동하는 기기에 적합합니다. End device는 하나의 부모만 가집니다 - coordinator 또는 router, 일반적으로 페어링 시 가장 가까운 기기입니다. end device와의 모든 통신은 부모를 통해 이루어집니다. 부모 router가 오프라인이 되면 해당 자녀에 대한 모든 트래픽은 end device가 타임아웃되어 새 부모를 찾으려 할 때까지 중단됩니다. 일부 end device 모델, 특히 Xiaomi는 새 부모를 찾으려 하지 않아 네트워크에 다시 페어링할 때까지 고립된 상태로 남아 있습니다.

_예시: WXKG01LM, RTCGQ01LM, MCCGQ11LM_

### Router

Router는 여러 노드 간의 트래픽 라우팅을 담당합니다. Router는 절전 모드로 들어갈 수 없습니다. 따라서 router는 배터리로 작동하는 기기에 적합하지 않습니다. Router는 또한 자녀를 위한 메시지를 수신하고 저장하는 역할도 합니다. 이 외에도 router는 네트워크의 문지기 역할을 합니다. 새 노드가 네트워크에 참여하도록 허용하는 역할을 합니다.

_예시: LED1545G12, 7146060PH, ZNCZ02LM, [router firmware가 Flash된 CC2531 USB sniffer](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin), [SONOFF ZBDongle-E 기반 router](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)_

_참고: Zigbee 네트워크에서 router 기능을 광고하는 일부 기기는 성능이 좋지 않아 Zigbee 네트워크의 안정성을 실질적으로 저하시킬 수 있습니다._

### Coordinator

Coordinator는 특별한 router입니다. 모든 router 기능 외에도 coordinator는 네트워크 구성을 담당합니다. 이를 위해 적절한 채널, PAN ID 및 확장 네트워크 주소를 선택해야 합니다. 또한 네트워크의 보안 모드를 선택하는 역할도 합니다.

_예시: [coordinator firmware가 Flash된 CC2531 USB sniffer](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default)_

### 기기 유형 확인 방법

Zigbee2MQTT는 시작 시 기기의 유형을 로그에 기록합니다. 예:

```
2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug Zigbee (Router)
2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature & humidity sensor (EndDevice)
```

### Green Power 기기

Zigbee Green Power 기기는 매우 에너지 효율적으로 설계된 특별한 end device입니다. Green Power 기기의 메시지는 일반 Zigbee 기기가 "이해"할 수 없으므로, Green Power "proxy"에 의해 먼저 "변환"되어야 합니다. 이는 Green Power 기기가 Green Power proxy 역할을 지원하는 일반 Zigbee 기기의 범위 내에 있어야 함을 의미합니다. 예시로는 Philips Hue 및 (적어도 일부) Ikea Tradfri 전구가 있습니다.

Green Power 기기는 바인딩을 지원하지 않으며 네트워크 스캔에 포함되지 않습니다.

Green Power 기기를 페어링할 때 번역된 메시지가 unicast 또는 broadcast로 재전송되어야 하는지 선택해야 합니다. 이 Green Power 기기에 unicast를 사용하려면 특정 기기에서만 [join 활성화](../../guide/usage/pairing_devices.md)하세요. broadcast를 사용하려면 모든 기기에서 join을 활성화하세요. 각 proxy가 각 Green Power 이벤트마다 고유한 broadcast를 생성하며, 단일 키 누름이 여러 이벤트(예: "키 다운" 후 "키 업")를 생성할 수 있습니다. Green Power 기기와 페어링된 proxy가 여러 개 있는 경우 _매우 많은_ 트래픽이 생성될 수 있습니다.

_Green Power 기기 예시: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM_

_참고: broadcast를 과도하게 사용하면 네트워크 성능에 부정적인 영향을 줄 수 있습니다 ([Broadcasts](./02_improve_network_range_and_stability.md) 참조)._

#### GP Proxy 및 Sink

다음 Zigbee router는 (적어도 일부) ZGP 기능을 지원하는 것으로 이미 확인되었습니다. 다른 기기들도 문제없이 작동할 가능성이 높지만 아직 이 표에 추가되지 않았습니다.

| Zigbee Router                                                                       | GP Proxy | GP Sink | Unicast |
| :---------------------------------------------------------------------------------- | :------: | :-----: | :-----: |
| [Custom devices (DiY) TI Router](../../devices/ti.router.md)                        |    Y     |    N    |    Y    |
| [IKEA E160x/E170x/E190x](../../devices/E160x_E170x_E190x.md)                        |    Y     |    N    |    Y    |
| [IKEA E22x4](../../devices/E22x4.md)                                                |    Y     |    Y    |    Y    |
| [IKEA ICPSHC24-10EU-IL-2](../../devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.md)²  |    Y     |    Y    |    Y    |
| [IKEA L2112](../../devices/L2112.md)                                                |    Y     |    y    |    Y    |
| [IKEA LED2101G4](../../devices/LED2101G4.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2103G5](../../devices/LED2103G5.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2109G6](../../devices/LED2109G6.md)                                        |    Y     |    Y    |    Y    |
| [IKEA LED2107C4](../../devices/LED2107C4.md)                                        |    Y     |    N    |    Y    |
| [IKEA LED2110R3](../../devices/LED2110R3.md)                                        |    Y     |    Y    |    Y    |
| [Innr RB 249 T](../../devices/RB_249_T.md)                                          |    Y     |    N    |    Y    |
| [Innr RB 286 C](../../devices/RB_286_C.md)                                          |    Y     |    N    |    Y    |
| [Philips 1742930P7](../../devices/1742930P7.md)                                     |    Y     |    N    |    Y    |
| [Philips 3216131P5](../../devices/3216131P5.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3261030P7](../../devices/3261030P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3261031P6](../../devices/3261031P6.md)                                     |    Y     |    N    |    Y    |
| [Philips 3261331P7](../../devices/3261331P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 3418931P6](../../devices/3418931P6.md)                                     |    Y     |    N    |    Y    |
| [Philips 4023330P7](../../devices/4023330P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 4034031P7](../../devices/4034031P7.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 4090230P9](../../devices/4090230P9.md)                                     |    Y     |    Y    |   Nⁱ    |
| [Philips 5047130P9](../../devices/5047130P9.md)                                     |    Y     |    N    |    Y    |
| [Philips 5062131P7](../../devices/5062131P7.md)                                     |    Y     |    N    |    Y    |
| [Philips 9290024896](../../devices/9290024896.md)                                   |    Y     |    N    |    Y    |
| [Philips 9290022166](../../devices/9290022166.md)                                   |    Y     |    N    |   Nⁱ    |
| [Philips 9290022169](../../devices/9290022169.md)                                   |    Y     |    N    |    Y    |
| [Philips 929001953301](../../devices/929001953301.md)                               |    Y     |    N    |    Y    |
| [Philips 8718696548738](../../devices/8718696548738.md)                             |    Y     |    Y    |   Nⁱ    |
| [Philips 8719514491106](../../devices/8719514491106.md)                             |    Y     |    N    |    Y    |
| [Silabs series 2 router](../../devices/Silabs_series_2_router.md)                   |    Y     |    N    |    Y    |
| [Sonoff ZBDongle-E](../../devices/ZBDongle-E.md)                                    |    Y     |    N    |    Y    |
| [Sunricher R-ZG9040A-ZG9041A-D](../../devices/SR-ZG9040A_ZG9041A-D.md)              |    Y     |    Y    |    Y    |
| [Sunricher SR-ZG9101SAC-HP-SWITCH-2CH](../../devices/SR-ZG9101SAC-HP-SWITCH-2CH.md) |    Y     |    Y    |    Y    |
| [Ubisys C4](../../devices/C4.md)                                                    |    Y     |    N    |    Y    |
| [Ubisys S2](../../devices/S2.md)                                                    |    Y     |    Y    |    Y    |
| [Vesternet VES-ZB-SWI-015](../../devices/VES-ZB-SWI-015.md)                         |    Y     |    Y    |    Y    |

_ⁱ ZGP 프레임은 coordinator가 unicast를 요청하더라도 항상 broadcast로 재전송됩니다. [firmware 버그](https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085)일 수 있습니다._

_² ICPSHC24-10EU-IL-2 (새 버전)만 ZGP 프레임을 변환할 수 있습니다._

## Zigbee 네트워킹

이 섹션은 Zigbee 프로토콜 스택이 레이어로 어떻게 분리되는지에 대한 개요입니다 ([Wikipedia - IP layers](https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature) 참조). 이 유형의 설명에서 레이어 수는 종종 다양합니다; 이 논의에서는 4가지를 사용합니다:

1. 물리적 및 MAC 레이어
2. 네트워크 및 전송 레이어
3. 애플리케이션 레이어
4. Zigbee2MQTT 레이어

주요 초점은 마지막 두 레이어에 있습니다.

### 물리적 및 MAC 레이어

Zigbee 프로토콜의 물리적 및 MAC 레이어는 [IEEE 802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4)에 의해 정의됩니다. 이는 Zigbee, 6LoWPAN, Thread 및 Z-Wave를 포함한 여러 프로토콜 스택에서 사용되는 공통 표준 집합입니다. IEEE 802.15.4가 사용할 수 있는 몇 가지 다른 주파수 대역이 있습니다. WiFi도 사용하는 동일한 2.4 GHz 대역과 사용이 국가에 따라 다른 800 MhZ 및 900MhZ 대역입니다. 일반적으로 하나의 스택을 사용하는 기기는 이 중 하나를 선택하고 나머지는 피합니다. 예를 들어 Zigbee 기기는 일반적으로 2.4 GHz 대역을 사용하고 Z-Wave 기기는 일반적으로 8/900 MHz 대역을 사용합니다 (국가에 따라 다름).

### 네트워크 및 전송 레이어

네트워크 및 전송 레이어는 Zigbee 네트워크의 다양한 노드 간의 라우팅, 보안 및 전송이 정의되는 곳입니다. 여기에는 네트워크 암호화 모델과 같은 것들이 포함됩니다. Zigbee 네트워크에서 controller, router 및 end-node 간의 차이도 여기서 정의됩니다 - [기기 유형](#device-types)을 참조하세요. 전송 레이어에 놓을 또 다른 Zigbee 개념이 있습니다; Endpoint 개념입니다. TCP/IP의 포트와 유사하게, Endpoint는 각 물리적 기기가 네트워크에서 여러 가상 기기를 가질 수 있게 합니다. 예를 들어 3-gang Zigbee 스위치는 단일 라디오를 가질 수 있으며, 따라서 하나의 MAC 주소와 하나의 Zigbee 네트워크 주소만 가지지만 세 개의 endpoint를 가질 수 있습니다 - 각 스위치에 하나씩. 각 endpoint는 단일 '스위치' 인터페이스를 실행할 수 있습니다.

### 애플리케이션 레이어

Zigbee는 단순한 네트워킹 기술 이상입니다; 네트워크에서 실행되는 여러 표준 애플리케이션을 정의합니다. 이러한 애플리케이션은 [Zigbee Cluster Library specification](https://github.com/Koenkk/zigbee-herdsman/wiki/References#csa-zigbee-alliance-spec)에 정의되어 있습니다. 각 'cluster'는 하나의 유형의 애플리케이션 통신을 정의합니다. 각 cluster 유형에는 고유한 정수 ID가 있으며, client와 server의 두 가지 유형으로 제공됩니다. 저수준 정보 수집을 위한 cluster가 있습니다 - 기기 모델 번호 가져오기, endpoint 목록 및 각 endpoint가 구현하는 cluster 나열 (각 endpoint는 여러 cluster를 구현할 수 있습니다). 기기를 식별하도록 요청하는 Identify cluster와 같은 간단한 네트워크 설정 목적을 위한 cluster가 있습니다. 예를 들어 조명은 식별하도록 요청받으면 맥동을 시작할 수 있습니다. 조명이 on/off server cluster를 구현하고 스위치가 on/off client cluster를 구현할 수 있는 on/off 조명 제어를 위한 cluster가 있습니다. controller가 다양한 방식으로 기기를 구성할 수 있는 구성 cluster가 있습니다.

위에서 언급했듯이, 각 cluster는 client와 server의 두 가지 유형으로 제공됩니다. 일반적으로 server는 더 자주 실행되는 endpoint이고, client는 server에 연결하도록 선택합니다. 많은 경우 cluster 기능을 고려할 때 이것이 명확하지 않으므로 사양이 상당히 임의적으로 결정합니다.

Zigbee controller는 두 endpoint의 cluster를 함께 '바인딩'할 수 있습니다. 이는 cluster의 client 변형을 구현하는 endpoint와 동일한 cluster의 server 변형을 구현하는 다른 endpoint를 연결합니다.

특별한 cluster도 있습니다. 'group' cluster는 'group'의 정의를 허용합니다 - 각각 작은 정수로 정의됩니다. endpoint가 group cluster를 구현하면 일부 그룹의 일부로 구성될 수 있습니다. 기기는 자신이 속한 그룹을 기억합니다. 그룹은 가상 endpoint처럼 처리될 수 있습니다. 특정 그룹 ID로 전송된 메시지는 네트워크를 통해 broadcast되고 해당 그룹의 일부인 모든 기기가 메시지에 응답합니다. 마찬가지로, client는 다른 endpoint 대신 그룹에 바인딩될 수 있으므로, 예를 들어 단일 스위치가 전체 그룹의 조명을 제어할 수 있습니다.

마찬가지로, scene cluster는 해당 기기에 구현된 다른 cluster의 파라미터를 기억하도록 기기를 구성할 수 있습니다. 조명은 밝기를 기억할 수 있습니다. 롤러 블라인드는 설정된 높이를 기억할 수 있습니다. 각 기기는 ID로 식별되는 적은 수의 scene을 기억할 수 있습니다.

Scene과 group은 함께 작동하도록 설계되었습니다. 다양한 기기를 설정하고 모두 그룹에 참여시킨 다음, 그룹에 'remember scene' 명령을 보낼 수 있습니다. 그런 다음 적절한 scene ID와 함께 그룹에 'recall scene' 명령을 보내면 최소한의 네트워크 트래픽으로, 따라서 최소한의 지연으로 여러 기기를 특정 방식으로 구성할 수 있습니다.

### Zigbee2MQTT

Zigbee 스택에는 이미 어느 정도의 홈 자동화 프로토콜이 정의되어 있습니다; 논의된 바와 같이, 기기를 그룹으로 구성하고 scene을 정의하고, 스위치를 해당 그룹에 바인딩할 수 있습니다. 이러한 설정에서 Zigbee controller는 네트워크 구성을 도울 수 있지만, 이후에는 애플리케이션 수준에서 수동적입니다.

"상대 습도가 70% 이상일 때 팬 켜기"와 같이 미리 정의된 Zigbee cluster보다 더 많은 유연성이 필요하다면, 더 스마트한 제어가 필요합니다. 여기서 Zigbee2MQTT가 필요합니다. Zigbee와 MQTT 사이에서 번역합니다.

Zigbee-Herdsman controller로 기기가 네트워크에 추가될 때, controller는 저수준 구성 cluster를 사용하여 기기를 인터뷰하고 기기가 무엇인지, 어떤 endpoint가 있는지, 각 endpoint가 어떤 cluster를 구현하는지 파악합니다. Zigbee-Herdsman-Converters는 각 기기 모델에 대해 controller가 어떤 cluster에 바인딩해야 하는지, MQTT 변환을 어떻게 처리해야 하는지를 기록합니다. Zigbee-Herdsman-Converters의 대부분의 기기는 각 Zigbee cluster에 바인딩하고 해당 cluster에 대한 표준 MQTT 인터페이스를 제공하는 일반 converter를 사용합니다.

이 설정에서 스위치가 활성화되면 Zigbee2MQTT controller에 메시지를 보냅니다. controller는 MQTT 메시지를 보냅니다. MQTT controller(Zigbee controller와 다릅니다. 예: Home Assistant 패키지)는 해당 메시지를 기반으로 무엇을 할지 결정합니다. 예를 들어 특정 조명을 켜기로 결정할 수 있으므로 조명을 켜도록 요청하는 MQTT 메시지를 보낼 것입니다. Zigbee2MQTT는 해당 메시지를 수신하고 적절한 Zigbee cluster를 사용하여 조명의 endpoint로 Zigbee 메시지를 보냅니다.

이 시스템은 기본 Zigbee 시스템보다 훨씬 더 유연합니다. 하지만 더 높은 지연(시스템이 스위치 토글에 반응하는 데 더 오래 걸림)이 있으며 더 많은 실패 지점이 있습니다. 기본 Zigbee 설정에서는 설정이 완료되면 controller조차 관여하지 않습니다. Zigbee2MQTT 설정에서는 두 개의 Zigbee 메시지, 두 개의 MQTT 메시지 및 세 개의 추가 처리 단계(무엇을 할지 결정하는 주 controller와 각 방향의 MQTT 처리)가 있습니다.

Phillips Hue와 같은 일부 상용 Zigbee 시스템에서 Zigbee 네트워크의 controller 노드는 기본 Zigbee 설정 위에 추가적인 스마트를 추가할 수 있는 자동화 controller이기도 합니다. Zigbee2MQTT는 둘 사이에 MQTT를 삽입하여 분리될 수 있게 합니다.
