---
redirectFrom: /how_tos/how_to_improve_network_range_and_stability.md
---

# 네트워크 범위 및 안정성 향상

네트워크가 불안정하거나 범위가 좋지 않은 경우, 다음과 같은 방법으로 네트워크를 개선할 수 있습니다.

## Adapter

[권장](../../guide/adapters/README.md) adapter를 사용하세요. 특히 CC2530과 CC2531은 성능이 좋지 않은 것으로 알려져 있습니다.

## AwoX 기기 피하기

AwoX 기기는 네트워크 문제를 일으키는 것으로 알려져 있습니다. 문제가 있는 경우, 네트워크에서 제거하세요.
Bluetooth를 통해 "AwoX HomeControl" 앱으로 기기를 OTA 업데이트하면 [도움이 될 수 있습니다](https://github.com/Koenkk/zigbee2mqtt/discussions/18366).

## USB 기반 Adapter

이러한 adapter는 컴퓨터(예: Raspberry Pi)에 직접 연결하는 대신 USB 연장 케이블로 연결하면 범위가 크게 향상될 수 있습니다. 컴퓨터에 직접 연결하면 안테나가 컴퓨터의 라디오 신호 및 전자 부품의 간섭을 받습니다. 또한 adapter를 다른 라디오 송신 기기(예: Wi-Fi router) 또는 SSD 가까이에 두지 않도록 하세요.

50cm의 **USB 연장 케이블**만으로도 간섭을 줄이기에 충분합니다. 가능하면 차폐된 케이블을 사용하세요. 더 좋은 결과를 얻을 수 있습니다 ([출처](https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/)).

**이것을 과소평가하지 마세요!** [이 기사](https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/)에서 보여주듯이, adapter를 USB 또는 HDMI 포트 가까이에 두면 라디오 신호가 완전히 차단될 수 있습니다.

또한, adapter를 USB 3 포트 대신 USB 2 포트에 연결하면 도움이 될 수 있습니다.

### Adapter 방향 시도해 보기

Adapter와 다른 기기 간의 RF 연결은 공간에서의 방향에도 영향을 받습니다. `linkquality` 보고가 매우 낮고 간헐적으로 ping이 실패할 수 있지만, adapter를 조금 회전시키면 coordinator를 멀리 이동시키지 않고도 상황이 크게 개선될 수 있습니다. Adapter 위치와 방향을 실험하면서 보고되는 `linkquality` 값을 모니터링하세요. 다음과 같은 소형 회전 USB 커넥터를 구매하면 유용할 수 있습니다:

![회전 USB 커넥터](https://i.imgur.com/AI41Oxz.png)

## Zigbee 채널 변경으로 Wi-Fi 간섭 줄이기

**Zigbee 채널을 변경하면 일부 기기를 다시 페어링해야 할 수 있습니다. 자세한 내용은 [문서](../../guide/configuration/zigbee-network.md#changing-the-zigbee-channel)를 읽어보세요**

Wi-Fi와 Zigbee 모두 동일한 주파수 대역(2.4 GHz)에서 작동하므로 서로 간섭할 수 있습니다. 올바른 Zigbee 채널을 사용하면 Wi-Fi와의 간섭을 (부분적으로) 피할 수 있습니다. 이에 대해 잘 설명된 기사는 [Zigbee and Wi-Fi Coexistence](https://www.metageek.com/training/resources/zigbee-wifi-coexistence/)입니다.

Zigbee2MQTT에서 사용하는 Zigbee 채널을 변경하려면 [`configuration.yaml`에서 `channel`을 설정](../../guide/configuration/zigbee-network.md)해야 합니다.

## 다른 2.4 GHz 기기로 인한 간섭

Bluetooth나 Logitech "Unifying", "Lightspeed" 또는 Razer "Hyperspeed Wireless" 같은 게임 기기를 포함하여 개방된 2.4 GHz 스펙트럼을 사용하는 모든 기기가 Zigbee에 간섭할 수 있습니다.

여기에는 2.4 GHz임을 인식하지 못할 수 있는 기기도 포함됩니다. 다음과 같은 무선 오디오 송신기를 포함하여 무선 기기를 확인하세요:

- [JL Audio JL Link TRX](https://www.crutchfield.com/S-kjc9jL5lfL6/p_136TRX/JL-Audio-JLINK-TRX-High-Fidelity-Audio-Transmitter-Receiver-Kit.html)
- [SVS Soundpath (gen 1)](https://www.svsound.com/products/soundpath-wireless-audio-adapter)

전력 회사는 "스마트 미터"에 Zigbee를 사용하는 것으로 알려져 있지만 Zigbee라고 광고하지 않을 수 있습니다.
Zigbee 또는 수정된 버전의 Zigbee를 브로드캐스트하는 다른 기기들도 문제를 일으키는 것으로 알려져 있습니다.
예를 들어 Philips Hue Hub를 여전히 사용 중이라면, 전구를 Zigbee2MQTT 네트워크에 추가하거나 다른 채널을 사용하는지 확인하는 것이 좋습니다.

## 네트워크에 Router 추가하기

"Zigbee는 배터리 구동 기기를 대상으로 하는 저전력 무선 메시 네트워크 표준입니다" ([Wikipedia](https://en.wikipedia.org/wiki/Zigbee) 참조). 그러나 낮은 전송 출력이 불안정하거나 신뢰할 수 없는 네트워크의 원인이 될 수 있습니다:

![신호가 너무 약해 메시지가 목표에 도달하지 못할 수 있습니다.](https://www.zigbee2mqtt.io/images/routing1.jpg)

Zigbee2MQTT를 사용하면 일부 coordinator 모델에서 [전송 출력을 높일 수 있습니다](https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html). 그러나 이 간단한 조치는 end device로의 메시지는 목표에 도달하지만, 해당 end device로부터의 응답(또는 메시지)이 coordinator에 안정적으로 도달하지 못하는 경우 이상한 동작의 네트워크를 초래할 수 있습니다:

![송신 측의 전송 출력 증가가 완전한 메시지 왕복에 충분하지 않을 수 있습니다.](https://www.zigbee2mqtt.io/images/routing2.jpg)

Router를 도입하면 ([이에 대해 더 읽기](./01_zigbee_network.md)) 전달 경로와 반환 경로 모두 개선할 수 있습니다:

![Router는 완전한 메시지 왕복을 안정화할 수 있습니다.](https://www.zigbee2mqtt.io/images/routing3.jpg)

네트워크를 안정화하기 위해 전용 router(예: [SONOFF ZBDongle-E 기반 router](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)) 또는 AC 전원 Zigbee 기기(예: [Hue 전구](https://www.zigbee2mqtt.io/devices/8719514301481.html#philips-8719514301481))를 선택할 수 있습니다. 거의 모든 AC 전원 기기는 router 역할을 합니다 (중성선이 필요하지 않은 대부분의 AC 전원 릴레이는 예외).

네트워크와 잘 어울리지 않을 수 있는 품질이 낮은 router가 있다는 점에 유의하세요 (예: [SONOFF Smart Plug S26R2ZB](https://www.zigbee2mqtt.io/devices/S26R2ZB.html)의 일부 버전은 [제한적인 것으로 알려져 있습니다](https://github.com/Koenkk/zigbee2mqtt/issues/10282)). 이로 인해 메시지 라우팅 오류가 발생할 수 있습니다. 이러한 기기가 네트워크에 있는 경우, 더 좋은 품질의 추가 router를 추가하고 해당 router에 기기를 바인딩하여 (새/더 좋은 router로 제한된 "Permit join"으로 기기 재페어링) 전반적인 네트워크 성능을 개선하는 것이 도움이 될 수 있습니다.

라우팅 문제가 있다고 생각되면, 경로를 포함한 Zigbee 네트워크 맵을 얻기 위해 `zigbee2mqtt/bridge/request/networkmap` 주제로 [bridge에 MQTT 요청을 전송](https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request)해 보세요.

Zigbee 라우팅의 더 기술적인 세부 사항은 예를 들어 [TI Z-Stack User Guide의 "5. Routing"](https://software-dl.ti.com/simplelink/esd/plugins/simplelink_zigbee_sdk_plugin/1.60.01.09/exports/docs/zigbee_user_guide/html/zigbee/developing_zigbee_applications/z_stack_developers_guide/z-stack-overview.html#routing)을 참조하세요.

## 하드웨어

Zigbee2MQTT는 많은 리소스가 필요하지 않지만, Zigbee2MQTT를 실행하는 하드웨어가 성능에 영향을 줄 수 있습니다. 이는 특히 Raspberry Pi 3 같은 저전력 하드웨어를 사용할 때 더 두드러집니다. 충분한 리소스(CPU/메모리)가 사용 가능한지 확인하세요. 예를 들어, Raspberry Pi 3에서 Home Assistant + Zigbee2MQTT Home Assistant 애드온을 실행하면 성능이 좋지 않을 수 있습니다.

## Broadcast

Zigbee 트래픽은 _Unicast_ 또는 *Broadcast*로 분류할 수 있습니다:

- *Unicast*는 일반적으로 중간 기기를 통해 Zigbee 기기와 coordinator 사이에 이루어지는 주소 지정 메시지입니다
- *Broadcast*는 네트워크의 **모든** 기기에 도달하도록 설계된 특수 유형의 메시지입니다

기기가 처음으로 broadcast 메시지를 수신하면 최소 한 번 재전송합니다. 기기는 최근에 재전송된 broadcast를 추적하여 메시지가 영원히 반복되지 않도록 합니다. 대규모 네트워크에서 broadcast는 많은 트래픽을 생성할 수 있으며, 메시지가 모든 기기에 전파되는 데 시간이 걸립니다.

Zigbee는 초당 평균 1개의 broadcast만 지원할 수 있으며, 짧은 시간 내에 여러 broadcast가 발생하면 지연이 증가합니다. 자세한 내용은 [Silicon Labs의 이 애플리케이션 노트](https://www.silabs.com/documents/login/application-notes/an1138-zigbee-mesh-network-performance.pdf)를 참조하세요.

Broadcast는 주로 기기로의 경로 찾기 같은 네트워크 관리 작업에 사용되지만, [Zigbee Groups](../../guide/usage/groups.md) 및 [Green Power 기기](./01_zigbee_network.md)에서도 사용됩니다. 일반적으로 broadcast는 최소한으로 사용하는 것이 권장됩니다.
