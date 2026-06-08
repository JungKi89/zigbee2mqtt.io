---
redirectFrom: /how_tos/how_to_create_a_cc2530_router.md
---

# CC2530 Router 만들기

CC2530은 router로 사용하기에 매우 적합합니다. 외부 안테나를 갖추고 있어 Zigbee 네트워크 범위를 크게 향상시킵니다. 이 튜토리얼은 일반 콘센트로 전원을 공급받을 수 있는 멋진 케이스에 넣은 CC2530 router를 만드는 방법을 설명합니다.

**주의사항:** CC2530 router는 AC 전원을 사용하므로 올바르게 설치하지 않으면 감전 위험이 있습니다. 설치 방법을 모른다면 전기 기사에게 연락하세요!

![케이스에 넣은 CC2530](../../images/cc2530_router_enclosure.jpg)

## 필요한 것은?

| 이름                                                                                        | 가격                                                     | 사진                                                           |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| CC2530 <br/> **또는** <br/> CC2530 + CC2591 <br/> _CC2530 + CC2591은 더 강력하지만 더 비쌈_ | AliExpress에서 약 7.50$ <br/><br/> AliExpress에서 약 15$ | ![CC2530](../../images/cc2530.jpg)                             |
| HLK-PM03                                                                                    | AliExpress에서 약 2.20$                                  | ![HLK-PM03](../../images/HLK-PM03.jpg)                         |
| 케이스 (사용된 케이스의 크기: 100x68x40mm)                                                  | 약 2$                                                    | ![케이스](../../images/enclosure.jpg)                          |
| 전원 케이블                                                                                 | 약 2$                                                    | ![전원 케이블](../../images/power_cable.png)                   |
| CC debugger                                                                                 | -                                                        | ![CC debugger](../../images/cc_debugger.jpg)                   |
| 암-암 점퍼 와이어 8개                                                                       | -                                                        | ![점퍼 와이어](../../images/female_to_female_jumper_wires.jpg) |

## CC2530 Flash

CC2530에는 router firmware를 Flash해야 합니다. 이는 6개의 암-암 점퍼 와이어를 사용하여 CC debugger로 수행해야 합니다. 핀은 다음과 같이 연결해야 합니다:

### CC debugger 핀 레이아웃

![CC-Debugger 핀](../../images/ccdebugger_pins.png)

| CC debugger | CC2530 |
| ----------- | ------ |
| 1           | GND    |
| 2           | VCC    |
| 3           | P2.2   |
| 4           | P2.1   |
| 7           | RST    |
| 9           | VCC    |

### 다양한 CC2530 모듈 핀 레이아웃

| 이름                  | 핀 레이아웃                                                                          | 사진                                               |
| --------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| CC2530                | ![CC2530 핀 레이아웃](../../images/cc2530_pin_layout.png)                            | ![CC2530](../../images/cc2530.jpg)                 |
| Webee CC2530 + CC2591 | ![Webee CC2530 + CC2591 핀 레이아웃](../../images/webee_cc2530_cc2591_pinlayout.png) | ![CC2530 + CC2591](../../images/cc2530_cc2591.jpg) |

### Flash 방법

이제 [CC2531 Flash하기](../../guide/adapters/flashing/flashing_the_cc2531.md)와 동일한 지침을 사용하여 CC2530을 Flash할 수 있습니다. Router firmware는 [여기](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router)에서 찾을 수 있습니다.

![CC2530에 연결된 CC debugger](../../images/ccdebugger_cc2530.jpg)

## 케이스에 넣기

다음 단계를 따르세요:

- 케이스에 구멍 2개 뚫기: 안테나용 1개, 전원 케이블용 1개
- 전원 케이블에 매듭 묶기 (이것이 장력 완화 역할을 함)
- HLK-PM03의 AC 핀에 전원 케이블 납땜
- 암-암 점퍼 와이어 2개를 사용하여 HLK-PM03의 VC+ 핀을 CC2530의 VCC 핀에 연결하고 HLK-PM03의 VC- 핀을 CC2530의 GND 핀에 연결
- 양면 테이프를 사용하여 CC2530과 HLK-PM03을 케이스에 고정

### 결과

![1](../../images/router_1.jpg)

![2](../../images/router_2.jpg)

![3](../../images/router_3.jpg)

![4](../../images/router_4.jpg)

![케이스에 넣은 CC2530](../../images/cc2530_router_enclosure.jpg)

## 완료!

이제 CC2530을 콘센트에 연결하면 자동으로 Zigbee 네트워크에 참여합니다 (새 기기 참여 활성화를 잊지 마세요). 확장된 Zigbee 네트워크 범위를 즐기세요! :smile:
