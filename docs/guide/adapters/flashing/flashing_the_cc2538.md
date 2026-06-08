---
redirectFrom: /information/flashing_the_cc2538.md
---

# CC2538 모듈에 Firmware Flash하기

CC2538 모듈에는 커스텀 firmware를 Flash해야 합니다. 이 firmware는 JTAG 프로그래머로 Flash할 수 있습니다.
프로그래머는 [Aliexpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=jlink+V8+jtag)에서 찾을 수 있습니다.

## Windows

1. SEGGER [J-Link Software](https://www.segger.com/downloads/jlink/)를 설치합니다
   ![](../../../images/cc2538-jtag-2.jpg)
2. SEGGER J-Link Configurator를 열고 JTAG에 최신 firmware가 있는지 확인합니다 (그렇지 않으면 업그레이드하세요)
   ![](../../../images/cc2538-jtag-3.jpg)
3. 아래 다이어그램을 따라 JTAG 프로그래머를 CC2538 모듈에 연결합니다:
   ![](../../../images/cc2538-jtag-1.jpg)
4. [최신 firmware](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)를 다운로드합니다
5. SEGGER J-Link Flash를 열고 "Create a New Project"를 선택합니다
   ![](../../../images/cc2538-jtag-4.jpg)
6. 올바른 모듈 [TI CC2538SF53]과 [JTAG]를 Target Interface로 선택합니다
   ![](../../../images/cc2538-jtag-5.jpg)
7. "Open Data File..."를 선택하고 올바른 firmware [MODKAMRU_V3_USB.hex]를 선택합니다
   ![](../../../images/cc2538-jtag-6.jpg)
8. 모듈을 성공적으로 프로그래밍하기 위한 마지막 단계로 먼저 [Target/Manual Programming/Erase Chip] (또는 F4 키)을 선택한 다음 [Target/Manual Programming/Program & Verify] (또는 F6 키)를 선택합니다
   ![](../../../images/cc2538-jtag-7.jpg)

# 설치된 Firmware 버전 확인 방법

Zigbee2MQTT는 시작 시 Zigbee2MQTT 로그에 설치된 firmware 버전을 출력합니다:

```
Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
```

위 예시에서 버전은 `20190425`입니다.
