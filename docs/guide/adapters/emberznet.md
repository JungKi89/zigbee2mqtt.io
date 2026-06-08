# EmberZNet adapters (Silicon Labs)

현재 지원되는 firmware 버전: 7.4.x, 8.0.x, 8.1.x, 8.2.x

Firmware 릴리스 노트: [https://www.silabs.com/developers/zigbee-emberznet?tab=documentation](https://www.silabs.com/developers/zigbee-emberznet?tab=documentation)

_멀티 프로토콜 firmware는 지원되지 않습니다. 여러 네트워크를 구성하는 권장 대안은 프로토콜당 하나의 adapter를 사용하는 것입니다._

### 설정

```yaml
serial:
    adapter: ember
```

기타 지원되는 설정: `adapter_concurrent` 및 `transmit_power` ([문서](../configuration/adapter-settings.md)).

::: tip 팁
`adapter: ezsp` 사용은 이제 deprecated입니다. [https://github.com/Koenkk/zigbee2mqtt/discussions/21462](https://github.com/Koenkk/zigbee2mqtt/discussions/21462)를 참조하세요.
:::

### Firmware Flash

- Firmware 저장소:
    - [@darkxst](https://github.com/darkxst/)의 다중 기기: [https://github.com/darkxst/silabs-firmware-builder/releases](https://github.com/darkxst/silabs-firmware-builder/releases)
    - [@NabuCasa](https://github.com/NabuCasa) / Home Assistant 기기: [https://github.com/NabuCasa/silabs-firmware-builder/releases](https://github.com/NabuCasa/silabs-firmware-builder/releases)
    - [@TubesZB](https://github.com/tube0013) 기기: [https://github.com/tube0013/tube_gateways/](https://github.com/tube0013/tube_gateways/)
    - [@Nerivec](https://github.com/Nerivec/)의 다중 기기: [https://github.com/Nerivec/silabs-firmware-builder/releases](https://github.com/Nerivec/silabs-firmware-builder/releases)
        - Router firmware도 제공됩니다
- 웹 기반
    - 다중 기기: [XZG Multi-tool](https://mt.xyzroe.cc/)
    - [@darkxst](https://github.com/darkxst/)의 다중 기기: [Silabs Firmware Flasher](https://darkxst.github.io/silabs-firmware-builder/)
    - [@NabuCasa](https://github.com/NabuCasa)의 ZBT-1/ZBT-2: [ZBT Flasher](https://toolbox.openhomefoundation.org/)
    - SMLight: [Flasher](https://smlight.tech/flasher/)
    - SONOFF Dongle: [SONOFF Dongle Flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- 명령줄 기반:
    - [@NabuCasa](https://github.com/NabuCasa)의 Python을 사용하는 다중 기기: [Universal Silicon Labs Flasher](https://github.com/NabuCasa/universal-silabs-flasher) ([Home Assistant 애드온](https://github.com/home-assistant/addons/tree/master/silabs_flasher)으로도 제공)
    - [@Nerivec](https://github.com/Nerivec/)의 NodeJS를 사용하는 다중 기기: [Ember ZLI](https://github.com/Nerivec/ember-zli)
- Home Assistant 애드온
    - [XZG Multi-Tool](https://github.com/xyzroe/XZG-MT)
        - 원격 serial, USB, TCP 기기와의 전체 상호작용을 위한 브리지 애드온.
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/guide/dongle-lmg21/flash-firmware-via-home-assistant-add-on/)
- 기타:
    - 독립 실행형 J-Link Flash 도구 ([Simplicity Studio](https://www.silabs.com/developers/simplicity-studio)에도 포함됨): [Simplicity Commander](https://www.silabs.com/developers/simplicity-studio/simplicity-commander)
- 일부 Ethernet adapter는 자체 웹 인터페이스를 통해 Zigbee firmware를 flash하는 것을 지원합니다. 이 경우 외부 소프트웨어나 하드웨어가 필요 없습니다. 웹 인터페이스로 이동하여 "Update Zigbee firmware"를 누르면 됩니다. 이 기능에 대해서는 해당 Zigbee adapter의 매뉴얼을 참조하세요.

## 하드웨어

각 카테고리는 칩별로 정렬되어 있으며, 최신 시리즈가 먼저 나옵니다.

### USB

::: details Home Assistant Connect ZBT-2

칩: [EFR32MG24A420F1536IM40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.EFR32MG24A420F1536IM40?tab=specs)

외부 안테나 및 하드웨어 flow control 지원. baudrate를 460800으로 설정해야 합니다.

```yaml
serial:
    baudrate: 460800
    rtscts: true
```

- [제품 페이지](https://www.home-assistant.io/connect/zbt-2)
- [Coordinator firmware](https://github.com/NabuCasa/silabs-firmware-builder/releases)
- [Flash](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-2)
- [구매](https://www.home-assistant.io/connect/zbt-2)

<img src="../../images/zbt2.jpg" width="200" />

:::

::: details SONOFF Dongle-PMG24

칩: [efr32mg24a420f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a420f1536im48?tab=specs)

외부 안테나 (+3 dBi). 소프트웨어 flow control만 지원합니다(`rtscts: true`를 설정하지 마세요).

- [제품 페이지](https://sonoff.tech/products/sonoff-zigbee-thread-usb-dongle-dongle-plus-mg24)
- [Flash](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- [하드웨어 사양](https://dongle.sonoff.tech/guide/dongle-pmg24/hardware-specification-dongle-pmg24/)
- [구매](https://sonoff.tech/products/sonoff-zigbee-thread-usb-dongle-dongle-plus-mg24)

<img src="../../images/dongle-pmg24-device.jpg" width="200" />

:::

::: details SMLIGHT SLZB-07mg24

칩: [efr32mg24a020f1024im40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a020f1024im40?tab=specs)

외부 안테나 및 하드웨어 flow control 지원.

```yaml
serial:
    rtscts: true
```

- [제품 페이지](https://smlight.tech/product/slzb-07mg24/) (아직 출시되지 않아 링크가 작동하지 않을 수 있습니다)

<img src="../../images/smlight-slzb-07mg24.jpg" width="200" />

:::

::: details Aeotec Zi-Stick (ZGA008)

칩: [efr32mg21a020f1024im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f1024im32?tab=specs)

온보드 안테나 및 하드웨어 flow control 지원.

```yaml
serial:
    rtscts: true
```

- [제품 페이지](https://aeotec.com/products/aeotec-z-stick-zigbee/)
- [구매](https://store.aeotec.com/products/zi-stick-zigbee-zga008)

<img src="../../images/aeotec-zi-stick-zga008.jpg" width="200" />

:::

::: details Sonoff ZBDongle-E (V2 모델)

칩: [efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

외부 안테나. 소프트웨어 flow control만 지원합니다(`rtscts: true`를 설정하지 마세요).

**이 섹션은 "ZBDongle-E"에 관한 것입니다. "ZBDongle-P"는 [zStack](./zstack.md)을 참조하세요.**

- [제품 페이지](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/)
- [Coordinator firmware](https://sonoff.tech/product-review/how-to-use-sonoff-dongle-plus-on-home-assistant-how-to-flash-firmware/)
- [Flash](https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf)
    - **참고**: PDF는 이전 firmware로 연결됩니다. 모든 [NCP_X.Y.Z](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E) 버전을 확인하고 [7.4.4](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/NCP_7.4.4) 또는 그 이상을 선택하세요.
- [구매](https://itead.cc/product/zigbee-3-0-usb-dongle/)

<img src="../../images/dongle-e.jpg" width="200" />
:::

::: details SMLIGHT SLZB-07

칩: [efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

외부 안테나 및 하드웨어 flow control 지원.

```yaml
serial:
    rtscts: true
```

- [제품 페이지](https://smlight.tech/product/slzb-07/)
- 구매: [공식 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-07-zigbee-usb-adapter-en), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005006273914143.html).  
  빠른 로컬 배송: [호주](https://shop.dialedin.com.au/products/smlight-slzb-07-usb-zigbee-adapter), [오스트리아, 벨기에, 독일, 네덜란드](https://www.hobbyelectronica.nl/product/slzb-07-zigbee-coordinator-usb/), [프랑스](https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html), [폴란드](https://pcblab.io/szukaj?controller=search&s=slzb), [미국 Amazon](https://www.amazon.com/LOAMLIN-SMLIGHT-SLZB-07-Zigbee-Coordinator/dp/B0CNVBCCR3)

<img src="../../images/smlight-slzb-07.jpg" width="200" />

:::

::: details Home Assistant Connect ZBT-1

칩: [efr32mg21a020f512im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f512im32?tab=specs)

온보드 안테나 및 하드웨어 flow control 지원.

```yaml
serial:
    rtscts: true
```

- [제품 페이지](https://www.home-assistant.io/connectzbt1)
- [Coordinator firmware](https://github.com/NabuCasa/silabs-firmware-builder/releases)
- [Flash](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-1)
- [구매](https://www.home-assistant.io/connectzbt1)

<img src="../../images/skyconnect_isometric.jpg" width="200" />

:::

::: details Z-WAVE>ME Z-Station (EFR32MG21P)

외부 안테나.

Z-Station firmware 2024.04.22 이상이 필요합니다.

```yaml
serial:
    rtscts: false
```

- [제품 페이지](https://z-wave.me/products/z-station/)
- [Firmware](https://z-wave.me/support/tools-for-zigbee-openthread-ble/)
- 구매: [공식 스토어 - 전 세계](https://smartsd.ch/z-station-usb-adaptor-for-z-wave-zigbee-thread-ble/)

<img src="../../images/z-station.jpg" width="200" />

:::

### Network (TCP)

::: details TubeZB EFR32 MGM24 POE

칩: [mgm240pa32vnn](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-modules/device.mgm240pa32vnn?tab=specs)

외부 안테나.

참고: USB(특수 케이스 사용)와 단순 Ethernet 케이블로도 전원을 공급할 수 있습니다(USB와 POE를 동시에 사용하지 마세요!).

- [제품 페이지](https://tubeszb.com/product/efr32-mgm24-poe-coordinator/)
- [구매](https://tubeszb.com/product/efr32-mgm24-poe-coordinator/)

<img src="../../images/tubezb-mgm24-poe.jpg" width="200" />

:::

::: details Zbgw_pro EFR32 LAN

칩: [efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

```yaml
serial:
    port: tcp://zbgw_efr32_pro.local:6638
    adapter: ember
```

참고: `zbgw_efr32_pro.local:6638` 또는 `<gateway-ip>:6638` 중 하나로 TCP를 사용할 수도 있습니다.

- [제품 페이지](https://shop68536829.taobao.com)
- [구매](https://shop68536829.taobao.com)

<img src="../../images/zbgw_pro.jpg" width="200" />

:::

### Hybrid (USB + Network)

::: details SMLIGHT SLZB-Ultima - Zigbee, Thread, Z-Wave, 4G/LTE, IR, Ethernet/Wi-Fi, Voice를 위한 멀티 라디오 게이트웨이

**SLZB-Ultima 시리즈**는 고급 Zigbee2MQTT 및 멀티 프로토콜 배포를 위해 설계된 멀티 라디오 스마트 홈 게이트웨이입니다.

**주요 기능**:

- **이중 IEEE 802.15.4 라디오 (Zigbee + Thread):**
-   - **CC2674P10** - 병렬 **Zigbee coordinator/router** 또는 **Thread Border Router** 작동 지원
-   - **EFR32MG24** - 병렬 **Zigbee coordinator/router** 또는 **Thread Border Router** 작동 지원
- **Z-Wave** _(선택 애드온)_ - Z-Wave 네트워크 지원 추가 (Ethernet을 통한 Z-Wave JS).
- **4G/LTE** _(선택 애드온)_ - 유선 Ethernet이나 Wi-Fi가 없는 장소 또는 백업 WAN으로 모바일 인터넷 연결 제공.
- **연결성:** Ethernet + Wi-Fi + USB (Type-C)
- **Ethernet을 통한 USB 패스스루:** USB 기기(일부 제한 사항 있음)를 SLZB-Ultima에 연결하고 네트워크를 통해 해당 USB 기기를 사용
- **전원:** USB-C (기본값), **PoE** _(선택 애드온)_ - 단일 케이블로 깔끔하고 전문적인 설치를 위한 Ethernet을 통한 기기 전원 공급.
- **IR 수신기 + IR 송신기:** TV, 에어컨, AV 장비와 같은 적외선 기기를 학습하고 제어.
- **로컬 피드백 및 상호 작용:** 버저, **12× WS2812B RGB LED**, 버튼, 서비스 LED
- **디지털 마이크** _(선택 애드온)_ - ESPHome 기반 firmware 실행 시 오디오 입력 활성화.

Home Assistant 및 Zigbee2MQTT와 함께 **로컬, 클라우드 독립적** 운영을 위해 설계되었습니다.

|                                           제품 기능                                            |                                      제품 사진                                      |                                  인터페이스 스크린샷                                   |
| :--------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-functions.png" width=" 200" /> | <img src="../../images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima.jpg" width="200" /> | <img src="../../images/adapters/SMLIGHT/SLZB-Ultima/slzb-ultima-fw.jpg" width="200" /> |

- [제품 페이지](https://smlight.tech/global/slzb-ultima)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-ultima), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005010752270531.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005010752555288.html).

:::

::: details SMLIGHT SLZB-MR 시리즈 (MR1/MR2/MR3/MR4) MultiRadio Zigbee + Matter-over-Thread Ethernet USB POE Wi-Fi BLE LAN adapter

SLZB-MRx 시리즈는 MR4/MR3/MR2/MR1에 각각 Silicon Labs **EFR32MG26**/EFR32MG24/EFR32MG21 및 Texas Instruments CC2674P10/CC2652P7/CC2652P를 탑재한 소형 멀티 라디오 스마트 홈 adapter로, 서로 다른 SoC에서 Zigbee 3.0과 Matter-over-Thread를 동시에 지원하며 Ethernet, Wi-Fi 또는 USB를 통해 연결됩니다. PoE를 지원하여 유연한 원격 배포가 가능합니다. 멀티 SoC 아키텍처는 Home Assistant 및 Zigbee2MQTT와의 높은 성능과 완전한 호환성을 보장합니다. OTA firmware 업데이트, VPN, DDNS, WireGuard VPN, HA 통합, 20개 이상의 언어, IPv6, Ethernet-to-Wi-Fi 브리지 등을 제공하는 SLZB-OS로 구동됩니다.

| 파라미터                       |                                                                 **SLZB-MR4**                                                                  |                                                             **SLZB-MR3**                                                             |                                                                   **SLZB-MR2**                                                                    |                                                            **SLZB-MR1**                                                            |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| **Zigbee/Thread 라디오 1 SoC** |                                                                   EFR32MG26                                                                   |                                                              EFR32MG24                                                               |                                                                     EFR32MG21                                                                     |                                                             EFR32MG21                                                              |
| **Zigbee/Thread 라디오 2 SoC** |                                                                   CC2674P10                                                                   |                                                              CC2674P10                                                               |                                                                      CC2652P                                                                      |                                                              CC2652P7                                                              |
| **최대 지원 Zigbee 기기 수**   |                                                                     ≈ 800                                                                     |                                                                ≈ 750                                                                 |                                                                       ≈ 400                                                                       |                                                               ≈ 500                                                                |
| **제품 이미지**                |                             <img src="../../images/adapters/SMLIGHT/SLZB-MR4/slzb-mr4-device.jpg" width="150" />                              |                         <img src="../../images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-device.jpg" width="150" />                         |                               <img src="../../images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-device.jpg" width="150" />                                |                        <img src="../../images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-device.jpg" width="150" />                        |
| **웹 인터페이스**              |                                                                                                                                               |                       <img src="../../images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-interface.jpg" width="150" />                        |                              <img src="../../images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-interface.jpg" width="150" />                              |                      <img src="../../images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-interface.jpg" width="150" />                       |
| **Youtube 리뷰**               | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-smarthomeaustralia.jpg" width="150" />](https://www.youtube.com/watch?v=2fYrW38R0Jc) | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-mrtimtech.jpg" width="150" />](https://www.youtube.com/watch?v=Oc0PkPVUseE) | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-simonsayshomeassistant.jpg" width="150" />](https://www.youtube.com/watch?v=hQnM7l5iwsw) | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="150" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |
| **제품 페이지**                |                                                [SLZB-MR4](https://smlight.tech/global/slzbmr4)                                                |                                           [SLZB-MR3](https://smlight.tech/global/slzbmr3)                                            |                                                  [SLZB-MR2](https://smlight.tech/global/slzbmr2)                                                  |                                          [SLZB-MR1](https://smlight.tech/global/slzbmr2)                                           |

**SLZB-MR4 구매**: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).  
빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter), [CH](https://www.swiss-domotique.ch/en/actuators-modules/smlight-usb-ethernet-poe-adapter-zigbee-and-thread-cc2674p10-efr32mg26), [FR](https://www.domadoo.fr/fr/produits-de-domotique/8369-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-slzb-mr4.html), [PL](https://pcblab.io/adapter-slzbmr4-zigbee-thread-cc2674p10-efr32mg26-poe-usb-wifi-esp32-lan.html), [UK](https://zigbeesmart.com/de-de/products/smlight-slzb-mr4-dual-radio-zigbee-thread-ethernet-coordinator?_pos=6&_sid=04f161c3b&_ss=r)

**SLZB-MR3 구매**: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).  
 빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter), [CH](https://www.swiss-domotique.ch/en/actuators-modules/smlight-zigbee-poe-ethernet-usb-adapter), [CZ](https://www.homebrainz.shop/p/smlight-slzb-mr3), [DE](https://mediarath.de/en/products/smlight-slzb-mr3-zigbee-thread-multiradio-cc2652p10-efr32mg24-lan-poe-usb-wifi-adapter), [FR](https://www.domadoo.fr/fr/produits-de-domotique/8031-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg24-slzb-mr3.html), [PL](https://pcblab.io/multi-adapter-slzb-mr3-zigbee-thread-matter-esp32-cc2674p10-mg24-poe-wifi.html), [UK](https://zigbeesmart.com/de-de/products/smlight-slzb-mr3-multiradio-coordinator)

**SLZB-MR2 구매**: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr2-multiradio-adapter), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).  
빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr2-zigbee-and-thread-adapter), [CZ](https://www.homebrainz.shop/p/smlight-slzb-mr2), [DE](https://mediarath.de/en/products/smlight-slzb-mr2-zigbee-thread-multiradio-cc2652p-efr32mg21-lan-poe-usb-wifi-adapter), [FR](https://www.domadoo.fr/fr/produits-de-domotique/8030-smlight-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2652p-efr32mg21-slzb-mr2.html), [PL](https://pcblab.io/adapter-slzb-mr2-zigbee-thread-matter-esp32-cc2652p-efr32mg21-poe-wifi-lan.html), [UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr2-multiradio?_pos=13&_sid=04f161c3b&_ss=r)

**SLZB-MR1 구매**: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr1-multiradio-coordinator), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005004942648430.html).  
 빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr1-zigbee-and-thread-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [CZ](https://www.homebrainz.shop/de/p/smlight-slzb-mr1?srsltid=AfmBOorf9TiY1ZBQD7a7hUwDemKbCFsH_dv8ru9uDCT5yoq19AlyHy6z), [FR+EU](https://www.domadoo.fr/de/smart-home-produkte/7773-smlight-slzb-mr1-usb-ethernet-poe-zigbee-thread-matter-adapter.html), [BE](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [DE](https://mediarath.de/en/products/smlight-slzb-mr1-zigbee-thread-multiradio-cc2652p7-efr32mg21-lan-poe-usb-wifi-adapter), [NL](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/koordynator-slzb-mr1-multiradio-zigbee-thread.html), [SE](https://www.lohelectronics.se/hemautomation/zigbee/controllers-1473/smlight-slzb-mr1-zigbee-3-0-lan-gateway-med-poe-och-z2m), [CH](https://www.swiss-domotique.ch/en/gateways-antennas/2752-smlight-slzb-06-adaptateur-zigbee-ethernet-poe-usb-wifi-2.html), [FI](https://verkkokauppa.nurkantakaa.fi/tuote/smlight-slzb-mr1/), [UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr1-multiradio), [US](https://cloudfree.shop/product/smlight-slzb-mr1-zigbee-thread/).

:::

::: details SONOFF Dongle-M

칩: [efr32mg24a420f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a420f1536im48?tab=specs)

Dongle-M에는 ESP32-D0WD-R2와 EFR32MG24 두 칩이 포함되어 있습니다. 두 개의 외부 안테나를 지원하며, PoE 전원을 지원하고, 내장 웹 콘솔(http://Dongle-M.local)을 갖추고 있으며, Ethernet/Wi-Fi/USB를 통해 Zigbee2MQTT에 연결할 수 있습니다.

- [제품 페이지](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m)
- [Flash](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- [하드웨어 사양](https://dongle.sonoff.tech/guide/dongle-m/hardware-specification-dongle-m/)
- [구매](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m)

<img src="../../images/Dongle-M_600_600.jpg" width="200" />

:::

::: details SMLIGHT SLZB-06Mg26

칩: [efr32mg26b420f3200im48](https://www.silabs.com/wireless/zigbee/efr32mg26-series-2-socs/device.efr32mg26b420f3200im48?tab=specs)

외부 안테나.

- [제품 페이지](https://smlight.tech/global/slzb06mg26)

<img src="../../images/adapters/SMLIGHT/SLZB-06MG26/slzb-06mg26-device.jpg" width="200" />

**SLZB-06Mg26 구매**:

- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06mg26-enadapter), [Aliexpress-1 - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).

:::

::: details SMLIGHT SLZB-06Mg24

칩: [efr32mg24a020f1024im40](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24a020f1024im40?tab=specs)

외부 안테나.

- [제품 페이지](https://smlight.tech/global/slzb06mg24)

<img src="../../images/smlight-slzb-06mg24.jpg" width="200" />

:::

::: details SMLIGHT SLZB-06M

칩: [efr32mg21a020f768im32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs)

외부 안테나.

**최적의 성능을 위해 firmware가 최소 20240510 버전(Core firmware 버전 2.2.0 이상 필요)인지 확인하세요.
WiFi 또는 기타 고지연 연결에는 적합하지 않습니다.**

- [제품 페이지](https://smlight.tech/product/slzb-06m/)
- 구매: [공식 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06m-zigbee-adapter), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Tindie - 전 세계](https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/).  
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06m-efr32mg21-lan-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/), [CH](https://shop.swiss-domotique.ch/en/gateways-antennas/2390-smlight-slzb-06m-adaptateur-zigbee-ethernet-poe-usb-wifi.html), [EE](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/), [FR](https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html), [DE](https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/), [LT](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/), [LV](https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/), [PL](https://pcblab.io/slzb-06m-adapter-zigbee-efr32mg21-ethernet-poe-usb-lan-wifi.html), [TH](https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644), [US official](https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/), [US Amazon](https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3).

<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06m-main-title.jpg" width="200" />

:::

### Hub

::: details SMLIGHT SMHUB Nano Mg24

SMHUB Nano Mg24는 외부 서버 없이 기기에서 직접 Zigbee2MQTT를 실행하는 고급 UI를 갖춘 Linux 기반 멀티 라디오 스마트 홈 허브입니다. Mosquitto MQTT broker, Node-RED, Matterbridge가 미리 설치되어 있어 즉시 완전한 스마트 홈 게이트웨이로 사용할 수 있습니다. SMHUB는 SL SoC EFR32MG24 SoC, Ethernet+POE, Wi-Fi, Bluetooth 및 USB 연결을 통합합니다. 하드웨어 기능으로는 SD 카드, eMMC, 버튼 및 4개의 서비스 LED가 포함됩니다. OTA 업데이트, VPN 등을 SMHUB-OS를 통해 제공하여 모든 생태계를 위한 강력하고 미래 지향적인 플랫폼을 제공합니다.

|                                               제품 사진                                               |                                        인터페이스 스크린샷 1                                         |                                        인터페이스 스크린샷 2                                         |
| :---------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_2.jpg" width=" 200" /> | <img src="../../images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_4.jpg" width="200" /> | <img src="../../images/adapters/SMLIGHT/SMHUB-Nano/SMHHUB-Nano-Mg24/SMHUB-Nano_3.jpg" width="200" /> |

- [제품 페이지](https://smlight.tech/global/smhub-nano-mg24)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-nano), [Aliexpress-1 - 전 세계](https://a.aliexpress.com/_EwWCdYC), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005010395706341.html).

:::

::: details SMLIGHT SMHUB (Essential/Premium 버전)

SMHUB는 외부 서버 없이 기기에서 직접 Zigbee2MQTT를 실행하는 고급 UI를 갖춘 Linux 기반 멀티 라디오 스마트 홈 허브입니다. Mosquitto MQTT broker, Node-RED, Matterbridge가 미리 설치되어 있어 즉시 완전한 스마트 홈 게이트웨이로 사용할 수 있습니다. SMHUB는 TI SoC (Essential 버전에는 CC2652P, Premium 버전에는 CC2674P10)와 SL SoC (Essential 버전에는 EFR32MG21, Premium 버전에는 EFR32MG24), Ethernet, Wi-Fi, USB 및 선택적 Z-Wave 라디오, PoE, 4G 연결을 통합합니다. 하드웨어 기능으로는 12개의 RGB LED, IR 수신기/송신기, 오디오, SD 카드, eMMC 및 다수의 USB 포트가 포함됩니다. OTA 업데이트, VPN 등을 SMHUB-OS를 통해 제공하여 모든 생태계를 위한 강력하고 미래 지향적인 플랫폼을 제공합니다.

|                                  제품 사진                                  |                            인터페이스 스크린샷                             |                                               Youtube 동영상 리뷰                                               |
| :-------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SMHUB/smhub_21.jpg" width=" 200" /> | <img src="../../images/adapters/SMLIGHT/SMHUB/smhub-os.jpg" width="200" /> | [<img src="../../images/adapters/SMLIGHT/SMHUB/smhub-youtube.jpg" width="200" />](https://youtu.be/xQsIt4yYxdw) |

- [제품 페이지](https://smlight.tech/global/smhub)
- [매뉴얼](https://smlight.tech/support/manuals/books/smhub)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-professional), [Aliexpress-1 - 전 세계](https://aliexpress.com/item/1005009942560775.html), [Aliexpress-2 - 전 세계](https://aliexpress.com/item/1005009942491630.html).

:::

::: details Nabu Casa Home Assistant Yellow

칩: [mgm210pa32jia](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-modules/device.mgm210pa32jia?tab=specs)

온보드 안테나 및 하드웨어 flow control 지원.

```yaml
serial:
    rtscts: true
```

- [제품 페이지](https://www.home-assistant.io/yellow)
- [Coordinator firmware](https://github.com/NabuCasa/silabs-firmware)
- [Flash](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-1)
- [구매](https://www.home-assistant.io/yellow)

<img src="../../images/yellow.jpg" width="200" />
:::

### Custom

::: details Seeed Studio XIAO MG24

칩: [efr32mg24b220f1536im48](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs/device.efr32mg24b220f1536im48?tab=specs)

- [제품 페이지](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [제품 페이지 - Sense 버전](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [시작하기](https://wiki.seeedstudio.com/xiao_mg24_getting_started/)

<img src="../../images/seeed-studio-xiao-mg24.jpg" width="200" />
:::

### 비권장

::: details Easyiot ZB-GW04 (v1.1, v1.2)

저사양 하드웨어.

:::

::: details 모든 Series 0/1 기반 기기

구형 하드웨어로, 최신 firmware 버전(>= 8.0.0)에서 Silabs의 지원이 종료되었습니다.

[Silicon Labs 공지](https://www.silabs.com/documents/public/release-notes/emberznet-release-notes-7.4.3.0.pdf)를 참조하세요.

:::

## 이 스택 전용 로깅

### `info` 수준

시작 및 중지 시퀀스는 `ember`로 Zigbee2MQTT를 실행하기 위해 수행되는 단계를 자세히 설명합니다. 이는 잠재적인 시작 및 중지 문제를 파악하는 데 도움이 됩니다.

스택/네트워크 상태 변경 (업/다운, 채널 변경, Permit Join에서 열기/닫기 등).

_Network/Route error_: 이 오류는 대상 노드와의 메시지 송수신에 문제가 있었음을 나타냅니다(자세한 내용은 아래 참조). 시간이 지나면서 가끔 발생하는 것은 정상입니다(또는 Zigbee2MQTT 시작 시). 너무 자주 너무 많이 발생하는 경우 네트워크 문제가 있을 수 있습니다.

### `warning` 수준

_Node descriptor reports device is only compliant to revision_: 기기가 이전 Zigbee 리비전을 가진 것으로 식별됩니다. 특히 `pre-21`인 경우 문제의 원인이 될 수 있습니다.

_[EzspConfigId] Failed to SET_: 일반적으로 coordinator의 메모리가 다른 것보다 낮을 때 발생합니다. firmware 내 기본값이 대신 사용됩니다.

_An ID conflict was detected_: 두 기기가 동일한 네트워크에서 같은 ID를 가질 수 없습니다. 관련 기기들이 네트워크에서 제거된 후 재연결을 시도합니다(재연결이 안 되면 다시 페어링해야 할 수 있습니다).

_NOT READY - Signaling NCP_: `ember` 드라이버가 일시적으로 과부하 상태입니다. coordinator가 알림을 받고 처리가 짧은 시간 동안 지연됩니다.

### `error` 수준

_NCP EZSP protocol version of XX does not match Host version 13_: `ember`는 현재 EZSP v13(EmberZNet firmware 7.4.x)을 가진 firmware가 필요합니다. adapter의 firmware를 업그레이드해야 합니다. [여기서 처음 두 게시물을 확인하세요](https://github.com/Koenkk/zigbee2mqtt/discussions/21462).

_[BACKUP] Current backup file is from an unsupported EZSP version_: `ember`는 현재 EZSP v12 이상의 백업만 지원합니다(`coordinator_backup.json` 파일을 열어 확인 가능). 파일이 자동으로 이름 변경됩니다. `ember`가 성공적으로 시작되면 새 파일이 생성됩니다.

메시지 전달 실패. 대상 기기에 도달할 수 없습니다. 여러 원인이 있을 수 있으며, 나머지 로그가 어떤 원인인지 파악하는 데 도움이 됩니다.

요청 실패. 메시지는 자명하며, 실패 이유를 나타내는 `status`를 제공합니다.

NCP 치명적 오류. coordinator가 실패했습니다(메시지에 이유가 표시됩니다). Zigbee2MQTT가 재설정 후 통신 재개를 시도합니다. 실패하면 Zigbee2MQTT가 완전히 중지되고 시스템의 watchdog(있는 경우)이 재시작을 시도합니다.

## 도구

### Ember ZLI

[https://github.com/Nerivec/ember-zli/](https://github.com/Nerivec/ember-zli/)

[zigbee-herdsman](https://github.com/Koenkk/zigbee-herdsman/)을 사용하여 firmware flash, adapter 스택과의 상호작용, 스니핑 등을 허용하는 NodeJS 명령줄 도구. 자세한 내용은 [Wiki](https://github.com/Nerivec/ember-zli/wiki)를 참조하세요.

### Bellows CLI

[https://github.com/zigpy/bellows](https://github.com/zigpy/bellows)

adapter 스택과의 상호작용을 허용하는 Python 명령줄 도구.

### Zigbee2MQTT Ember Helper

[https://nerivec.github.io/z2m-ember-helper/](https://nerivec.github.io/z2m-ember-helper/)

브라우저에서 로그 파일을 분석하고 네트워크에 대한 자동화된 검토를 받을 수 있습니다.

## [전문가용] 스택 설정 사용자 정의

::: warning 주의
이 기능은 adapter와 네트워크의 동작을 수정합니다. 네트워크에 적합하지 않은 값을 사용하면 네트워크가 완전히 중단될 수 있습니다. 네트워크에 이러한 값이 도움이 된다고 확신하는 경우에만 값을 수정하세요. 대부분의 네트워크는 기본값으로 잘 작동합니다.
:::

::: warning 주의
기본 설정에서 문제가 발생한다는 것을 확인하기 전에 Zigbee2MQTT에 새 이슈를 열지 마세요.
:::

`coordinator_backup.json`과 같은 폴더에 `stack_config.json` 파일을 생성하여 EmberZNet 기본 스택 설정을 수정할 수 있습니다. 이 설정은 수동으로만 할 수 있습니다.

형식, 사용 가능한 값 및 기본값은 아래와 같습니다:

```json
{
    "CONCENTRATOR_RAM_TYPE": "high",
    "CONCENTRATOR_MIN_TIME": 5,
    "CONCENTRATOR_MAX_TIME": 60,
    "CONCENTRATOR_ROUTE_ERROR_THRESHOLD": 3,
    "CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD": 1,
    "CONCENTRATOR_MAX_HOPS": 0,
    "MAX_END_DEVICE_CHILDREN": 32,
    "TRANSIENT_DEVICE_TIMEOUT": 10000,
    "END_DEVICE_POLL_TIMEOUT": 8,
    "TRANSIENT_KEY_TIMEOUT_S": 300,
    "CCA_MODE": null
}
```

JSON 파일에서 생략되거나, 유효하지 않거나, 범위를 벗어난 값은 기본값을 사용합니다.

이 값들과 동작에 대한 문서는 [SiLabs UG100 - 2.3.1 PDF](https://www.silabs.com/documents/public/user-guides/ug100-ezsp-reference-guide.pdf) 및 [concentrator 문서](https://community.silabs.com/s/article/how-does-the-concentrator-plugin-work-x?language=en_US)에서 찾을 수 있습니다.

드라이버는 아래와 같이 값을 추가로 제한합니다:

- CONCENTRATOR_RAM_TYPE: "high" 또는 "low"
- CONCENTRATOR_MIN_TIME: 최소 1, 최대 60
- CONCENTRATOR_MAX_TIME: 최소 30, 최대 300
- CONCENTRATOR_ROUTE_ERROR_THRESHOLD: 최소 1, 최대 100
- CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD: 최소 1, 최대 100
- CONCENTRATOR_MAX_HOPS: 최소 0, 최대 30
- MAX_END_DEVICE_CHILDREN: 최소 6, 최대 64
- TRANSIENT_DEVICE_TIMEOUT: 최소 0, 최대 65535
- END_DEVICE_POLL_TIMEOUT: 최소 0, 최대 14
- TRANSIENT_KEY_TIMEOUT_S: 최소 0, 최대 65535
- CCA_MODE: 기본값은 undefined (즉, firmware 기본값에 맡김), 가능한 값:
    - "RSSI": RSSI 기반 CCA. CCA는 -75 이상의 에너지가 감지되면 바쁜 매체를 보고합니다(기본값).
    - "SIGNAL": 신호 식별자 기반 CCA. CCA는 현재 사용 중인 PHY의 동일한 변조 및 확산 특성을 가진 이 표준을 준수하는 신호가 감지될 때만 바쁜 매체를 보고합니다.
    - "SIGNAL_OR_RSSI": RSSI 또는 신호 식별자 기반 CCA. CCA는 -75 이상의 에너지 감지 또는 현재 사용 중인 PHY의 동일한 변조 및 확산 특성을 가진 이 표준을 준수하는 신호 감지 시 바쁜 매체를 보고합니다.
    - "SIGNAL_AND_RSSI": RSSI 및 신호 식별자 기반 CCA. CCA는 현재 사용 중인 PHY의 동일한 변조 및 확산 특성을 가진 이 표준을 준수하는 신호의 -75 이상 에너지가 감지될 때만 바쁜 매체를 보고합니다.
    - "ALWAYS_TRANSMIT": ALOHA. 항상 CCA=1로 전송. CCA는 항상 유휴 매체를 보고합니다.

**일부 값은 이러한 범위에 의해서만 제한되는 것이 아니라 adapter에서 사용 가능한 메모리에 의해서도 제한됩니다. 값(또는 조합)이 adapter가 처리하기에 너무 큰 경우, 대신 firmware 기본값이 사용됩니다.**
