# zStack adapters (Texas Instruments)

### 설정

```yaml
serial:
    adapter: zstack
```

기타 지원되는 설정: `disable_led`, `adapter_concurrent`, `transmit_power` ([문서](../configuration/adapter-settings.md)).

### Firmware Flash

adapter를 BSL(bootloader) 모드로 전환하여 flash할 수 있습니다.
방법은 아래 adapter의 "제조사 flash 지침"을 참조하세요.
adapter를 BSL 모드로 성공적으로 전환한 후, 아래 도구 중 하나를 사용하여 flash하세요.

- 브라우저 기반 (가장 쉬움, 권장)
    - [XZG Multi-Tool](https://mt.xyzroe.cc/)
        - 내장 드롭다운 목록에서 firmware를 선택하고 flash합니다.
        - 칩 리비전, 설치된 버전 감지 및 현재 firmware 백업.
        - NVRAM 작업: 읽기 / 쓰기 / 삭제.
        - IEEE 주소 읽기 / 쓰기.
        - 원격 기기: 제공된 `bridge`(실행 파일, Docker, 또는 HA 애드온)를 통해 serial, USB, TCP 기기에 접근.
    - [SMLIGHT firmware updater](https://smlight.tech/flasher/#other_cc)
        - SLZB adapter에 권장되며, 다른 adapter도 flash 가능
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/)
- UI 도구
    - Texas Instruments [FLASH PROGRAMMER 2](https://www.ti.com/tool/FLASH-PROGRAMMER) (Windows 전용) (기기를 찾을 수 없나요? 아래를 읽어보세요!)
- CLI 도구 (다중 플랫폼 Python 기반 명령줄 도구)
    - [CC2538-BSL](https://github.com/JelmerT/cc2538-bsl) ([지침](./flashing/flashing_via_cc2538-bsl.md))
    - [llama-bsl](https://github.com/electrolama/llama-bsl) (기능이 추가된 cc2538-bsl 포크)
- Home Assistant 애드온
    - [XZG Multi-Tool](https://github.com/xyzroe/XZG-MT)
        - 원격 serial, USB, TCP 기기와의 전체 상호작용을 위한 브리지 애드온.
    - [TubesZB TI CC2652 FW Flasher](https://github.com/tube0013/tubeszb_addons)
    - [ZigStar TI CC2652 FW Flasher](https://github.com/mercenaruss/zigstar_addons) (기능이 추가된 TubesZB 포크)
    - [SONOFF Dongle Flasher](https://dongle.sonoff.tech/guide/dongle-lmg21/flash-firmware-via-home-assistant-add-on/)

- 일부 Ethernet adapter는 자체 웹 인터페이스를 통해 Zigbee firmware를 flash하는 것을 지원합니다. 이 경우 외부 소프트웨어나 하드웨어가 필요 없습니다. 웹 인터페이스로 이동하여 "Update Zigbee firmware"를 누르면 됩니다. 이 기능에 대해서는 해당 Zigbee adapter의 매뉴얼을 참조하세요. 예를 들어 모든 CC1352/CC2652 기반 게이트웨이에 맞는 범용 [XZG Firmware](https://github.com/xyzroe/XZG) ([동영상](https://github.com/Koenkk/zigbee2mqtt.io/assets/6440415/c2ca1d4c-166a-4bd9-b642-86595da1dcdb))

<img src="../../images/flashing/web-interface-ota-flashing.jpg" title="SLZB-06 WEB OTA Zigbee Flashing" height=300 />

## 하드웨어

### USB

::: details Electrolama zig-a-zig-ah! (zzh!)

CC2652R 칩 기반 외부 안테나가 있는 USB 연결 adapter

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip)
- [제조사 flash 지침](https://electrolama.com/radio-docs/#step-3-flash-the-firmware-on-your-stick)
- [구매](https://shop.electrolama.com/collections/usb-rf-sticks/products/zzh-multiprotocol-rf-stick)

<img src="../../images/zzh.jpg" width="200" />
:::

::: details Slaesh's CC2652RB stick

CC2652RB 칩 기반 외부 안테나가 있는 USB 연결 adapter

**경고:** 배송이 매우 느리고 소통이 되지 않는다는 [보고](https://github.com/Koenkk/zigbee2mqtt/discussions/6702)가 있습니다.

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652RB_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652RB_router_20250403.zip)
- [제조사 flash 지침](https://slae.sh/projects/cc2652/#flashing)
- [구매](https://slae.sh/projects/cc2652/)

<img src="../../images/slaeshs_cc2652rb_stick.jpg" width="200" />
:::

::: details Tube's CC2652P2 USB Coordinator

외부 안테나 및 USB 확장 케이블이 있는 CC2652P 기반 오픈 소스 하드웨어 USB 연결 adapter

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](https://github.com/tube0013/tube_gateways)
- [구매](https://www.tubeszb.com/)

<img src="../../images/Tubes_USB_Coordinator_CC2652P2_variant.png" width="200" />
:::

::: details Egony Stick V4

강력한 CC2652P Zigbee USB dongle 및 Raspberry Pi GPIO 모듈. Ebyte (왼쪽 사진)와 RFSTAR (오른쪽 사진) 버전으로 제공됩니다.

- Coordinator firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- Router firmware: [Ebyte](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip) [RFSTAR](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Flashing-EN)
- 설명: [Ebyte](https://github.com/egony/cc2652p_E72-2G4M20S1E/wiki/Home-EN) [RFSTAR](https://github.com/egony/cc2652p_cc1352p_RF-STAR/wiki/Home-EN)
- [문의](http://t.me/Egony)

<img src="../../images/Egony_v4_E72.jpg" width="200" /> <img src="../../images/Egony_v4_RFS.jpg" width="200" />

:::

::: details ZigStar Stick v4

CC2652P 기반 외부 안테나가 있는 강력한 오픈 소스 dongle

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://zig-star.com/projects/zigbee-stick-v4/)
- [제조사 flash 지침](https://zig-star.com/radio-docs/flash-cc-bsl/)
- [구매](https://zig-star.com)

<img src="../../images/ZigStar-USB.png" width="200" />
:::

::: details CircuitSetup's CC2652P2 USB Coordinator

Z-Stack이 미리 프로그래밍된 CC2652P 기반 USB 연결 adapter

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)
- [구매](https://circuitsetup.us/product/usb-zigbee-stick-z-stack-coordinator/)

<img src="../../images/circset_cc2652.jpg" width="200" />
:::

::: details SMLIGHT CC2652P Zigbee USB Adapter SLZB-02

외부 6dB 안테나와 전 세계 배송이 가능한 CC2652P 공장 제조 Zigbee USB coordinator

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip)
- [설명](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p)
- [제조사 flash 지침](https://smartlight.me/flashing_slzb-02)
- 구매: [공식 스토어](https://smartlight.me/smart-home-devices/zigbee-devices/zigbee-coordinator-v4-cc2652p), [Tindie](https://www.tindie.com/products/smartlightme/zigbee-cc2652p-coordinator-dongle-stick-adapter/)

<img src="../../images/CC2652P_smartlight_zigbee_coordinator.png" width="200" />
:::

::: details SONOFF Zigbee 3.0 USB Dongle Plus ZBDongle-P

케이스가 포함된 미리 프로그래밍된 CC2652P 기반 USB 연결 adapter.

ITead는 현재 Dongle Plus "ZBDongle-P"(CC2652P 기반)와 Dongle Plus V2 "ZBDongle-E"(EFR32MG21 기반)를 모두 판매하고 있으니 구매 시 주의하세요.

**이 섹션은 "ZBDongle-P"에 관한 것입니다. "ZBDongle-E"는 [EmberZNet](./emberznet.md)을 참조하세요.**

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [웹에서 제조사 flash](https://dongle.sonoff.tech/sonoff-dongle-flasher/) dongle을 연결하고, 웹페이지를 열고, 연결하고, custom을 선택하고, 위의 hex 파일을 업로드하고, flash하세요. 소프트웨어가 필요 없습니다.
- [제조사 flash 지침](https://sonoff.tech/wp-content/uploads/2021/09/Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx) ([PDF 버전](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-firmware_flashing-1-1.pdf) 및 [필요한 python 스크립트](https://github.com/Koenkk/zigbee2mqtt.io/raw/master/docs/guide/adapters/flashing/zigbee-3.0-usb-dongle-plus-uartLog.zip))
- [구매](https://itead.cc/product/sonoff-zigbee-3-0-usb-dongle-plus/)

<img src="../../images/sonoff_plus_dongle.png" width="200" />
:::

::: details Vision CC2652 dongle

CC2652R (VS201) 또는 CC2652P (VS202) 기반 adapter 또는 소형 개발 보드  
Coordinator firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)  
Router firmware: [VS201](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip) [VS202](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)

- [제조사 flash 지침](https://www.aliexpress.com/item/1005002823262979.html?spm=a2g0o.productlist.0.0.1a1640b82yeViq&algo_pvid=e01b1872-ca85-4814-971f-ce9b058855b8&algo_exp_id=e01b1872-ca85-4814-971f-ce9b058855b8-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000022351543786%22%7D)
- 구매: [VS201](https://www.aliexpress.com/item/1005002809329614.html) [VS202](https://www.aliexpress.com/item/1005003393047763.html)

<img src="../../images/cc26x2r1_dongle.jpg" width="200" />
:::

::: details JetHome JetStick Z2/ZB6UX CC2652P1

외부 안테나가 있는 강력한 CC2652P1 공장 제조 Zigbee USB dongle.

- [문서](https://docs.jethome.ru/en/zigbee/sticks/jetstick_z2.html)
- [제조사 flash 지침](https://docs.jethome.ru/en/zigbee/howto/cc_2538_bsl.html#zigbee-howto-2538-bsl)
- [Firmware](https://docs.jethome.ru/en/zigbee/software/ti_cc2652p.html#zigbee-software-ti-cc2652p)
- 구매: [JetStick Z2](https://jethome.ru/z2/)

<img src="../../images/jetstick_z2.png" width="200" />
:::

::: details SMLIGHT SLZB-07p7 Zigbee USB CC2652P7 adapter

Zigbee2MQTT를 위해 개발된 강력하고 소형 현대적 디자인의 Zigbee adapter. 미리 flash되어 사용 준비 완료. Home Assistant 자동 검색 지원. AutoBSL (원격 업데이트) 활성화.  
풍부한 구성품 포함:
| 구성품 | SLZB-07p7 adapter | +3dB 안테나 360° | QR 매뉴얼 |
|:-|:-:|:-:|:-:|
|수량: |1개|1개|1개|1개|  
|이미지| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07x-qr.jpg" width="200" /> |

원격 Zigbee 업데이트, 자동 검색, LED, flash 핀. 가정 및 업무용으로 적합합니다.

- Zigbee firmware:  
  --[Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip).
- [제품 페이지](https://smlight.tech/product/slzb-07p7/).
- 구매: [공식 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-07p7), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005006273914143.html).  
  빠른 로컬 배송: [호주](https://shop.dialedin.com.au/products/smlight-slzb-07p7-usb-zigbee-adapter), [프랑스](https://www.domadoo.fr/fr/interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html), [폴란드](https://pcblab.io/szukaj?controller=search&s=slzb).

|                                                       제품 사진 1                                                       |                                                       제품 사진 2                                                       |                                                       제품 사진 3                                                       |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main1-title.jpg" width="200"> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main2-title.jpg" width="200"> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-07p7/slzb-07p7-main3-title.jpg" width="200"> |

:::

### Network (TCP)

::: details Tube's Zigbee Gateways (CC2652P2 variant)

CC2652P와 ESP32 기반의 오픈 소스 하드웨어 Zigbee to Ethernet Coordinator (왼쪽 사진), POE 버전도 제공됩니다 (오른쪽 사진)

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](https://github.com/tube0013/tube_gateways)
- [구매](https://www.tubeszb.com/)

<img src="../../images/Tubes_Zigbee_Gateways_CC2652P2_variant.jpg" width="200" /> <img src="../../images/Tubes_Zigbee_PoE_Coordinator_CC2652P2_variant.jpg" width="200" />

:::

::: details cyijun OpenZ3Gateway

ESP8266와 CC2652P 모듈로 구동되는 오픈 소스 Zstack3 게이트웨이. 중국에서 60 CNY 미만으로 구입 가능합니다.

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://github.com/cyijun/OpenZ3Gateway)
- [Tindie](https://www.tindie.com/products/cyijun/openz3gateway/)

<img src="../../images/openz3gateway.jpg" width="200" />
:::

::: details XGG 52PZ2MGateway

ESP8266와 CC2652P 모듈로 구동되는 오픈 소스 Zstack3 게이트웨이. 중국에서 60 CNY 미만으로 구입 가능합니다.

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://shop68536829.taobao.com/)
- [구매](https://shop68536829.taobao.com/)

<img src="../../images/CC2652P-Z2M.jpg" width="200" />
:::

::: details SMLIGHT Zigbee LAN Adapter CC2652P Model SLZB-05

미리 flash된 사용 준비 완료 Zigbee LAN CC2652P Adapter. 공장 제조, 금속 케이스, 6dB 안테나, 전 세계 배송. USB를 통해 5단계로 수동으로 Zigbee firmware 업데이트 가능. 고객/기술 지원, 빠른 주문 처리.

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_other_router_20250403.zip)
- [설명](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en)
- 구매: [eBay](https://www.ebay.com/itm/165178757770) [공식 스토어](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-zigbee-lan-adapter-slzb-05en) [Telegram](https://t.me/smartlightme)

<img src="https://smartlight.me/ebay/images/slzb_05/smartlight-zigbee-lan-slzb-05.jpg" width="200" />
:::

### Hybrid (USB + Network)

::: details Gio-dot Z-Bee Duo with CC2652P

외부 안테나와 3D 프린팅 케이스가 있는 4-in-1 Zigbee adapter: USB Stick, WiFi, LAN, PI Zero Hat.

- [설명](https://gio-dot.github.io/Z-Bee-Duo/)
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/router/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_other_router_20250403.zip)
- [제조사 flash 지침](https://gio-dot.github.io/Z-Bee-Duo/Firmware-upgrade)
- [구매](https://www.tindie.com/products/gio_dot/z-bee-duo-modular-cc2652p-zigbee-30-adapter/)

<img src="../../images/Z-Bee_Duo-ico.jpg" width="200" />
:::

::: details ZigStar LAN Coordinator

CC2652P의 외부 안테나가 있는 강력한 오픈 소스 LAN Coordinator

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://zig-star.com/projects/zigbee-gw-lan/)
- [제조사 flash 지침](https://zig-star.com/radio-docs/flash-cc-bsl/)
- [구매](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-lan-gateway/)

<img src="../../images/ZigStar-LAN.png" width="200" />
:::

::: details ZigStar PoE Coordinator

CC2652P의 외부 안테나가 있는 오픈 소스 PoE af Coordinator

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://zig-star.com/projects/zigstar-olizig/)
- [제조사 flash 지침](https://zig-star.com/radio-docs/zigstar-multi-tool/)
- [구매](https://zig-star.com) [Tindie](https://www.tindie.com/products/zigstar/zigstar-olizig-poe/)

<img src="../../images/ZigStar-PoE.png" width="200" />
:::

::: details SMLIGHT SLZB-06 Zigbee+Matter/Thread+Bluetooth Ethernet USB POE WiFi LAN adapter

Zigbee2MQTT를 위해 개발된 강력하고 소형 현대적 디자인의 Zigbee adapter. PoE 지원, 미리 flash되어 사용 준비 완료.  
**Zigbee 3.0**, 실험적 **Matter-over-Thread** 및 **Bluetooth**를 지원합니다. 연결: Ethernet (+PoE), LAN, USB, WiFi. 풍부한 구성품 포함:
| 구성품 | SLZB-06 adapter | +5dB 안테나 360° | 접착 테이프 | 나사 | 드라이버 | MicroUSB-Type-C | 나사 고정 도우미 |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|수량: |1개|1개|2개|2개|1개|1개|1개|  
|이미지| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |

원격 업데이트(Zigbee 및 Core), 현대적 UI firmware. Ethernet용 광전기 절연, 사용자 상호작용을 위한 LED 및 물리 버튼. 가정 및 업무용으로 적합합니다.

- Zigbee firmware:  
  -- 자동 업데이트를 위한 [Zigbee 칩 업데이트 프로세스 OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended).
  -- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_other_coordinator_20250321.zip)
- Core firmware:  
  -- [기능 및 스크린샷](https://smlight.tech/manual/slzb-06/guide/configuration/)  
  -- [동영상 리뷰 1](https://www.youtube.com/watch?v=WwYVRuVpAJI), [동영상 리뷰 2](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [매뉴얼](https://smlight.tech/manual/slzb-06/)
- [제품 페이지](https://smlight.tech/product/slzb-06/)
- 구매: [공식 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/smlight-slzb-06en), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Tindie - 전 세계](https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/).  
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [CH](https://shop.swiss-domotique.ch/de/gateways-antennen/2387-smlight-zigbee-ethernet-poe-usb-wifi-adapter-slzb-06.html), [EE](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [FR](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html), [DE](https://www.hobbyelectronica.nl/product/slzb-06-zigbee-ethernet-poe-usb-adapter/), [LT](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [LV](https://improveit.lt/produktas/smlight-slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapteris/), [PL](https://pcblab.io/slzb-06-adapter-zigbee-cc2652p-ethernet-poe-usb-lan-wifi.html), [TH](https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644), [UK](https://zigbeesmart.co.uk/products/zigbee-lan-poe-coordinator-smlight-slzb-06), [US official](https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/), [US Amazon](https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3).

|                                                  제품 사진                                                   |                                               인터페이스 스크린샷                                               |                                                                             Youtube 리뷰                                                                              |
| :----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-title.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-firmware.jpg" width="200" /> | [<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA) |

:::

::: details ZigStar UZG-01 - Universal Zigbee Gateway

CC2652P의 외부 안테나가 있는 오픈 소스 PoE af Coordinator

- [ESP32 Firmware](https://github.com/mercenaruss/uzg-firmware) 최신 firmware가 있는 저장소
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/)
- 문서가 있는 [공식 사이트](https://uzg.zig-star.com)
- [제조사 flash 지침](https://uzg.zig-star.com/flashing-and-updating/)
- 구매: [공식 스토어](https://uzg.zig-star.com), [Tindie](https://www.tindie.com/stores/zigstar/), [Elecrow](https://www.elecrow.com/zigstar-uzg-01-universal-zigbee-gateway.html)

|                       ZigStar UZG-01                       |                            크기                            |
| :--------------------------------------------------------: | :--------------------------------------------------------: |
| <img src="../../images/Zigstar-UZG01-1.png" width="200" /> | <img src="../../images/Zigstar-UZG01-2.png" width="200" /> |

:::

::: details SMLIGHT SLZB-06p7 Zigbee Ethernet USB POE WiFi LAN adapter

Zigbee2MQTT를 위해 개발된 강력하고 소형 현대적 디자인의 Zigbee adapter. PoE 지원, 미리 flash되어 사용 준비 완료.  
Zigbee 3.0, Ethernet, LAN, USB, WiFi 연결을 지원합니다. 풍부한 구성품 포함:
| 구성품 | SLZB-06p7 adapter | +5dB 안테나 360° | 접착 테이프 | 나사 | 드라이버 | MicroUSB-Type-C | 나사 고정 도우미 |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|수량: |1개|1개|2개|2개|1개|1개|1개|  
|이미지| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-adapter.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-antenna.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-adhesive.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screws.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-screwdriver.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-microusb.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-qr.jpg" width="200" /> |

원격 업데이트(Zigbee 및 Core), 현대적 UI firmware. Ethernet용 광전기 절연, 사용자 상호작용을 위한 LED 및 물리 버튼. 가정 및 업무용으로 적합합니다.

- Zigbee firmware:  
  -- 자동 업데이트를 위한 [Zigbee 칩 업데이트 프로세스 OTA](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-zigbee.html#zigbee-auto-update-over-the-web-interface-recommended).  
  -- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- Core firmware:  
  -- [기능 및 스크린샷](https://smlight.tech/manual/slzb-06/guide/configuration/)  
  -- [동영상 리뷰](https://www.youtube.com/watch?v=q3cWHQ8CdcA)
- [매뉴얼](https://smlight.tech/manual/slzb-06/)
- [제품 페이지](https://smlight.tech/product/slzb-06p7/)
- 구매: [공식 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/coordinator-slzb-06p7), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html).  
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/smlight-slzb-06p7-zigbee-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [BE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [DE](https://www.hobbyelectronica.nl/product/slzb-06p7-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/slzb-06p7-adapter-zigbee-cc2652p7-ethernet-poe-usb-lan-wifi.html).

|                                                   제품 사진                                                    |                                                인터페이스 스크린샷                                                |                                                                          Youtube 동영상 리뷰                                                                          |
| :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-title.jpg" width="200" /> | <img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06p7-main-firmware.jpg" width="200" /> | [<img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06-main-videolink-small.jpg" width="200" />](https://www.youtube.com/watch?v=q3cWHQ8CdcA) |

:::

::: details cod.m Zigbee Coordinator CC2652P7 (CZC-1.0)

cod.m Zigbee Coordinator (CZC) - 선택적 PoE(Power over Ethernet) 또는 USB-C를 사용하는 Network(LAN/Wi-Fi).

특징:

- CC2652P7 Texas Instruments 멀티 프로토콜 2.4GHz 라디오 모듈
- Zigbee 3.x, Z-Stack firmware (Koenkk)
- LAN, WLAN 또는 USB 모드 PoE (802.3af) 또는 USB-C 전원, 소비 전력 1W 미만
- ESP32 오픈 소스 firmware ([cod.m UZG Fork](https://github.com/codm/czc-firmware/releases))
- 네트워크를 통한 Zigbee firmware 업데이트 및 향후 웹 인터페이스를 통한 업데이트
- 웹 인터페이스 또는 USB-C (Auto-BSL)를 통한 ESP32 firmware 업데이트
- [3D 프린팅 케이스 (CC-BY-NC-SA)](https://www.printables.com/de/model/857864-codm-zigbee-coordinator-cases-czc-10)
- 독일 제조, CE, RoHS, WEEE

링크:

- [ESP32 firmware](https://github.com/codm/czc-firmware/releases)
- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [문서](https://docs.codm.de/en/zigbee/coordinator/)
- [구매](https://shop.codm.de/en/automation/zigbee/40/zigbee-coordinator-cc2652p7-PoE)

<img src="../../images/codm-cc2652p7-zigbee-coordinator.jpg" width="200" /> <img src="../../images/codm-cc2652p7-zigbee-coordinator-schematic.png" width="200" />

:::

::: details SMLIGHT SLZB-MR1 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR1은 CC2652P7, EFR32MG21 및 ESP32 칩을 탑재한 소형 멀티 라디오 스마트 홈 adapter로, 서로 다른 SoC에서 Zigbee 3.0과 Matter-over-Thread를 동시에 지원합니다. Ethernet, Wi-Fi 또는 USB로 연결하며, 유연한 원격 배포를 위한 PoE를 지원합니다. 멀티 SoC 아키텍처는 Home Assistant 및 Zigbee2MQTT와의 높은 성능과 완전한 호환성을 보장합니다. OTA firmware 업데이트, VPN, HA 통합, 20개 이상의 언어, IPv6, Ethernet-to-Wi-Fi 브리지 등을 제공하는 SLZB-OS로 구동됩니다.

|                                      제품 사진                                       |                                   인터페이스 스크린샷                                   |                                                        Youtube 동영상 리뷰                                                         |
| :----------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-device.jpg" width="200" /> | <img src="../../images/adapters/SMLIGHT/SLZB-MR1/slzb-mr1-interface.jpg" width="200" /> | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [제품 페이지](https://smlight.tech/product/slzb-mr1/)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr1-multiradio-coordinator), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html).  
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr1-zigbee-and-thread-adapter), [AT](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [CZ](https://www.homebrainz.shop/de/p/smlight-slzb-mr1?srsltid=AfmBOorf9TiY1ZBQD7a7hUwDemKbCFsH_dv8ru9uDCT5yoq19AlyHy6z), [FR+EU](https://www.domadoo.fr/de/smart-home-produkte/7773-smlight-slzb-mr1-usb-ethernet-poe-zigbee-thread-matter-adapter.html), [BE](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [DE](https://mediarath.de/en/products/smlight-slzb-mr1-zigbee-thread-multiradio-cc2652p7-efr32mg21-lan-poe-usb-wifi-adapter), [NL](https://www.hobbyelectronica.nl/product/slzb-mr1-zigbee-ethernet-poe-usb-adapter/), [PL](https://pcblab.io/koordynator-slzb-mr1-multiradio-zigbee-thread.html), [SE](https://www.lohelectronics.se/hemautomation/zigbee/controllers-1473/smlight-slzb-mr1-zigbee-3-0-lan-gateway-med-poe-och-z2m), [CH](https://www.swiss-domotique.ch/en/gateways-antennas/2752-smlight-slzb-06-adaptateur-zigbee-ethernet-poe-usb-wifi-2.html), [FI](https://verkkokauppa.nurkantakaa.fi/tuote/smlight-slzb-mr1/), [UK](https://zigbeesmart.com/de-de/products/zigbee-lan-poe-coordinator-smlight-slzb-mr1-multiradio), [US](https://cloudfree.shop/product/smlight-slzb-mr1-zigbee-thread/),

:::

::: details SMLIGHT SLZB-MR2 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR2는 CC2652P, EFR32MG21 및 ESP32 칩을 탑재한 소형 멀티 라디오 스마트 홈 adapter로, 서로 다른 SoC에서 Zigbee 3.0과 Matter-over-Thread를 동시에 지원합니다. Ethernet, Wi-Fi 또는 USB로 연결하며, 유연한 원격 배포를 위한 PoE를 지원합니다. 멀티 SoC 아키텍처는 Home Assistant 및 Zigbee2MQTT와의 높은 성능과 완전한 호환성을 보장합니다. OTA firmware 업데이트, VPN, HA 통합, 20개 이상의 언어, IPv6, Ethernet-to-Wi-Fi 브리지 등을 제공하는 SLZB-OS로 구동됩니다.

|                                      제품 사진                                       |                                   인터페이스 스크린샷                                   |                                                        Youtube 동영상 리뷰                                                         |
| :----------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-device.jpg" width="200" /> | <img src="../../images/adapters/SMLIGHT/SLZB-MR2/slzb-mr2-interface.jpg" width="200" /> | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [제품 페이지](https://smlight.tech/product/slzb-mr2/)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr2-multiradio-adapter), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr2-zigbee-and-thread-adapter),

:::

::: details SMLIGHT SLZB-MR3 MultiRadio Zigbee+Matter-over-Thread Ethernet USB POE WiFi LAN adapter

SLZB-MR3는 CC2674P10, EFR32MG24 및 ESP32 칩을 탑재한 소형 멀티 라디오 스마트 홈 adapter로, 서로 다른 SoC에서 Zigbee 3.0과 Matter-over-Thread를 동시에 지원합니다. Ethernet, Wi-Fi 또는 USB로 연결하며, 유연한 원격 배포를 위한 PoE를 지원합니다. 멀티 SoC 아키텍처는 Home Assistant 및 Zigbee2MQTT와의 높은 성능과 완전한 호환성을 보장합니다. OTA firmware 업데이트, VPN, HA 통합, 20개 이상의 언어, IPv6, Ethernet-to-Wi-Fi 브리지 등을 제공하는 SLZB-OS로 구동됩니다.

|                                      제품 사진                                       |                                   인터페이스 스크린샷                                   |                                                        Youtube 동영상 리뷰                                                         |
| :----------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-device.jpg" width="200" /> | <img src="../../images/adapters/SMLIGHT/SLZB-MR3/slzb-mr3-interface.jpg" width="200" /> | [<img src="../../images/adapters/SMLIGHT/Common/slzb-mrx-youtube.jpg" width="200" />](https://www.youtube.com/watch?v=_ER3Hnij1l0) |

- [제품 페이지](https://smlight.tech/product/slzb-mr3/)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/slzb-mr3-multiradio-adapter), [Aliexpress - 전 세계](https://www.aliexpress.com/item/1005004942648430.html), [Aliexpress-2 - 전 세계](https://www.aliexpress.com/item/1005008814854495.html).  
  빠른 로컬 배송: [AU](https://shop.dialedin.com.au/products/slzb-mr3-zigbee-and-thread-adapter),

:::

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

### Hub

::: details SMLIGHT SMHUB (Essential/Premium 버전)

SMHUB는 외부 서버 없이 기기에서 직접 Zigbee2MQTT를 실행하는 고급 UI를 갖춘 Linux 기반 멀티 라디오 스마트 홈 허브입니다. Mosquitto MQTT broker, Node-RED, Matterbridge가 미리 설치되어 있어 즉시 완전한 스마트 홈 게이트웨이로 사용할 수 있습니다. SMHUB는 TI SoC (Essential 버전에는 CC2652P, Premium 버전에는 CC2674P10)와 SL SoC (Essential 버전에는 EFR32MG21, Premium 버전에는 EFR32MG24), Ethernet, Wi-Fi, USB 및 선택적 Z-Wave 라디오, PoE, 4G 연결을 통합합니다. 하드웨어 기능으로는 12개의 RGB LED, IR 수신기/송신기, 오디오, SD 카드, eMMC 및 다수의 USB 포트가 포함됩니다. OTA 업데이트, VPN 등을 SMHUB-OS를 통해 제공하여 모든 생태계를 위한 강력하고 미래 지향적인 플랫폼을 제공합니다.

|                                  제품 사진                                  |                            인터페이스 스크린샷                             |                                               Youtube 동영상 리뷰                                               |
| :-------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="../../images/adapters/SMLIGHT/SMHUB/smhub_21.jpg" width=" 200" /> | <img src="../../images/adapters/SMLIGHT/SMHUB/smhub-os.jpg" width="200" /> | [<img src="../../images/adapters/SMLIGHT/SMHUB/smhub-youtube.jpg" width="200" />](https://youtu.be/xQsIt4yYxdw) |

- [제품 페이지](https://smlight.tech/global/smhub)
- [매뉴얼](https://smlight.tech/support/manuals/books/smhub)
- 구매: [공인 스토어 - 전 세계](https://smartlight.me/smart-home-devices/zigbee-devices/smhub-professional), [Aliexpress-1 - 전 세계](https://aliexpress.com/item/1005009942560775.html), [Aliexpress-2 - 전 세계](https://aliexpress.com/item/1005009942491630.html).

:::

::: details JetHome JetHub D1+

외부 안테나가 있는 Zigbee 모듈이 탑재된 컨트롤러.

JetHub D1+는 Ubuntu/Debian OS와 다양한 주변 장치를 갖춘 DIN-rail 홈 자동화 컨트롤러입니다.

TI CC2652P1 기반.

- [문서](https://docs.jethome.ru/en/controllers/linux/din_rail/d1p.html)
- [구매](https://jethome.ru/d1p/)

<img src="../../images/jethub_d1_full.png" width="200" />
:::

### Custom

::: details cod.m Zigbee CC2652P RPi Module

통합 전력 증폭기 (+20dBm)가 있는 CC2652P를 탑재한 Raspberry Pi GPIO 모듈

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](https://github.com/codm/cc2652-raspberry-pi-module#firmware)
- [구매](https://shop.codm.de/automation/zigbee/33/zigbee-cc2652p2-raspberry-pi-module)

<img src="../../images/codm-cc2652p-rpi.jpg" width="200" />
:::

::: details ZigStar ZigiHAT PoE

PoE, RTC가 탑재된 CC2652P 기반 강력한 오픈 소스 Pi HAT

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [설명](https://zig-star.com/projects/zigbee-zigihat/)
- [제조사 flash 지침](https://zig-star.com/projects/zigbee-zigihat/#flashing)
- [구매](https://zig-star.com)

<img src="../../images/ZigiHAT.png" width="200" />
:::

::: details Texas Instruments LAUNCHXL-CC1352P-2

CC1352P 칩 기반 USB 연결 개발 키트  
이 기기에는 2개의 serial 기기가 내장되어 있습니다. 시스템에 Texas Instruments CC 기기가 하나만 연결된 경우, [설정](../configuration/)에서 올바른 serial 기기를 설정하거나 자동 감지를 사용하세요(`configuration.yaml`의 `serial` 섹션을 완전히 제거).  
외부 안테나를 연결하면 범위가 향상될 수 있습니다: [소형 캐패시터를 재납땜해야 함 (C14를 C24로 이동)](http://e2e.ti.com/support/wireless-connectivity/zigbee-and-thread/f/158/t/880219?LAUNCHXL-CC26X2R1-Antenna-CC26X2R1)

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC1352P2_CC2652P_launchpad_router_20250403.zip)
- [제조사 flash 지침](./flashing/flashing_via_uniflash.md)
- [구매](http://www.ti.com/tool/LAUNCHXL-CC1352P)

<img src="../../images/cc1352p2.jpg" width="200" />
:::

::: details Texas Instruments LAUNCHXL-CC26X2R1

CC2652R 칩 기반 USB 연결 개발 키트  
이 기기에는 2개의 serial 기기가 내장되어 있습니다. 시스템에 Texas Instruments CC 기기가 하나만 연결된 경우, [설정](../configuration/)에서 올바른 serial 기기를 설정하거나 자동 감지를 사용하세요(`configuration.yaml`의 `serial` 섹션을 완전히 제거).  
외부 안테나를 연결하면 범위가 향상될 수 있습니다: [소형 캐패시터를 재납땜해야 함](https://github.com/Koenkk/zigbee2mqtt/issues/2162#issuecomment-570286663)

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R_coordinator_20250321.zip)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_router_20250403/CC2652R_router_20250403.zip)
- [제조사 flash 지침](./flashing/flashing_via_uniflash.md)
- [구매](http://www.ti.com/tool/LAUNCHXL-CC26X2R1)

<img src="../../images/cc26x2r1.jpg" width="200" />
:::

::: details Texas Instruments LP-CC2652R7

CC2652R7 칩 기반 USB 연결 개발 키트  
이 기기에는 2개의 serial 기기가 내장되어 있습니다. 시스템에 Texas Instruments CC 기기가 하나만 연결된 경우, [설정](../configuration/)에서 올바른 serial 기기를 설정하거나 자동 감지를 사용하세요(`configuration.yaml`의 `serial` 섹션을 완전히 제거).

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC2652R7_coordinator_20250321.zip)
- [제조사 flash 지침](./flashing/flashing_via_uniflash.md)
- [구매](http://www.ti.com/tool/LP-CC2652R7)

<img src="../../images/CC2652R7.png" width="200" />
:::

::: details Texas Instruments LP-CC1352P7

CC1352P7 칩 기반 USB 연결 개발 키트  
이 기기에는 2개의 serial 기기가 내장되어 있습니다. 시스템에 Texas Instruments CC 기기가 하나만 연결된 경우, [설정](../configuration/)에서 올바른 serial 기기를 설정하거나 자동 감지를 사용하세요(`configuration.yaml`의 `serial` 섹션을 완전히 제거).

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P7_coordinator_20250321.zip)
- [제조사 flash 지침](./flashing/flashing_via_uniflash.md)
- [구매](https://www.ti.com/tool/LP-CC1352P7)

<img src="../../images/LP-CC1352P7.jpg" width="200" />
:::

### 비권장

::: details Texas Instruments CC2531

PCB 안테나가 있는 USB 연결 Zigbee adapter  
**경고 1:** flash하려면 추가 하드웨어가 필요합니다 (CC debugger + 다운로드 케이블)  
**경고 2:** 20개 이상의 기기 네트워크를 처리하기에 충분하지 않을 수 있습니다  
**경고 3:** 이 adapter는 범위가 좋지 않습니다

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)
- [Flash 지침](./flashing/flashing_the_cc2531.md)
- [구매](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)

<img src="../../images/cc2531.jpg" width="200" />
:::

::: details Vision CC2538+CC2592 Dongle(VS203)

CC2538 및 CC2592 칩 기반 adapter 또는 소형 개발 보드

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flash 지침](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)
- [구매](https://www.aliexpress.com/item/1005002809329614.html?spm=a2g0o.store_pc_allProduct.8148356.2.4d7f1012TTc3uX)

<img src="../../images/cc2538_cc2592_dongle.jpg" width="200" />
:::

::: details Texas Instruments CC2530

외부 안테나가 있는 serial 연결 adapter, 선택적으로 CC2591 또는 CC2592 RF 프론트엔드 포함  
**경고 1:** flash하려면 추가 하드웨어가 필요합니다 (CC debugger + 다운로드 케이블)  
**경고 2:** 20개 이상의 기기 네트워크를 처리하기에 충분하지 않을 수 있습니다

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)
- [Router firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin)
- [Flash 지침](../../advanced/zigbee/05_create_a_cc2530_router.md#2-flashing-the-cc2530)
- [연결](./flashing/connecting_cc2530.md)
- 구매: [AliExpress](http://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20181213104041&SearchText=cc2530) [GBAN](http://www.gban.cn/en/product_show.asp?id=43) [Tindie](https://www.tindie.com/products/GiovanniCas/cc2530-cc2592-zigbee-dongle/)

<img src="../../images/cc2530.jpg" width="200" />
:::

::: details Texas Instruments CC2538

CC2592 RF 증폭기가 있는 serial 연결 adapter

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flash 지침](./flashing/flashing_the_cc2538.md)
- 구매: [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2538)

<img src="../../images/cc2538.jpg" width="200" />
:::

::: details XGG gateway

ESP8266와 CC2538+CC2592PA (XGG 38PZ2MGateway) 또는 CC2530 (XGG 30Z2MGateway)으로 구동되는 오픈 소스 Zigbee 게이트웨이  
Coordinator firmware: [XGG 38PZ2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin) [XGG 30Z2MGateway](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin)

- [문의](https://shop68536829.taobao.com/)

<img src="../../images/CC2652P-Z2M.jpg" width="200" />
:::

::: details Texas Instruments CC2538 HAT

CC2538 및 선택적 외부 안테나가 있는 Raspberry Pi 핀아웃 호환 HAT

- [Coordinator firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
- [Flash 지침](./flashing/flashing_the_cc2538.md)
- [구매](https://www.tindie.com/products/GiovanniCas/zigbee-hat-with-cc2538-for-raspberry/)

<img src="../../images/cc2538hat.jpg" width="200" />
:::
