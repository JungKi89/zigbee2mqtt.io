---
redirectFrom: /information/flashing_the_cc2531.md
---

# CC2531 USB stick Flash하기

Firmware는 여러 기기로 flash할 수 있습니다. 가장 쉽지만 비싼 옵션은 Texas Instruments의 _CC Debugger_ 또는 중국산 클론 *SmartRF04EB*이며, 이 페이지에서 설명합니다. 하지만 _Raspberry Pi_ 또는 4개의 dupont 케이블과 선택적으로 다운로더 케이블을 사용하여 _Arduino Uno_ 또는 저렴한 _ESP8266_/_ESP32_ 같은 MCU를 사용할 수도 있습니다. 대체 flash 방법에 대한 자세한 정보는 여기서 찾을 수 있습니다: [대체 Firmware Flash 방법](./alternative_flashing_methods.md). Arduino/ESP8266/ESP32를 사용할 때는 아래 웹 기반 솔루션 섹션에 설명된 대로 XZG Multi-Tool을 사용한 간단한 브라우저 기반 방법을 사용할 수 있습니다.

**참고 1**: 이미 Zigbee 네트워크를 실행 중인 경우: 다시 Flash해도 모든 기기를 다시 페어링할 필요가 없습니다. [무엇이 모든 기기의 재페어링을 필요로 하고 그렇지 않은 것은?](../../faq/README.md#what-does-and-does-not-require-repairing-of-all-devices)를 참조하세요.

**참고 2**: 이 튜토리얼에서는 기본 firmware를 Flash합니다. 더 큰 네트워크(20개 이상)이거나 안정성 문제가 있을 때는 [source routing firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing)를 권장합니다. 이 firmware는 직접 자녀 5개 제한이 있으므로 네트워크에 충분한 router가 있는지 확인하세요.

**참고 3**: CC2531 USB dongle은 [CC2530 firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default)로도 Flash하여 P0.2/P0.3 serial 핀(IO 확장 포트의 첫 번째 및 두 번째)을 통해 작동시킬 수 있습니다. CC2531을 ESP8266과 함께 사용할 때 ([CC2530](./connecting_cc2530.md#via-an-esp8266)처럼) 주의하세요: 온보드 USB 전원 공급이 과열/고장 없이 추가 ESP8266에 전력을 공급하지 못할 수 있습니다.

## 필요한 하드웨어

CC2531을 Flash하려면 다음 추가 하드웨어가 필요합니다:

| 이름                   | 가격                 | 사진                                                             |
| ---------------------- | -------------------- | ---------------------------------------------------------------- |
| CC Debugger            | AliExpress에서 약 9$ | ![CC Debugger](../../../images/cc_debugger.jpg)                  |
| CC2531 다운로더 케이블 | AliExpress에서 약 2$ | ![Downloader cable CC2531](../../../images/downloader_cable.png) |

또는 XZG Multi-tool을 사용할 때 CC Debugger 대신 거의 모든 Arduino, ESP8266 또는 ESP32 보드를 사용할 수 있습니다.

## 웹 기반 솔루션

### CC Debugger 사용 (모든 데스크탑 OS 및 Android에서 작동)

1. 호스트 기기에 소프트웨어 설치 불필요 (Windows 사용자는 WinUSB 드라이버 필요)
2. 요구사항: WebUSB 호환 브라우저 (Chrome, Edge 또는 Chromium 기반)
3. `CC Debugger --> CC2531 다운로더 케이블 --> CC2531 USB stick` 연결
4. `CC2531 USB stick`과 `CC Debugger` **둘 다** USB를 통해 기기에 연결
5. CC Debugger LED가 빨간색이면 Reset 버튼을 누릅니다. LED가 녹색으로 바뀌어야 합니다
6. Firmware [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip) 다운로드
7. [XZG Multi-tool](https://mt.xyzroe.cc/)을 열고, `Connect Debugger`를 클릭하여 firmware(`.hex` 또는 `.bin` 파일)를 Flash합니다

[**전체 지침 →**](https://github.com/xyzroe/XZG-MT/blob/main/docs/how-to/cc_debuger.md)

### Arduino/ESP8266/ESP32 사용 (모든 데스크탑 OS에서 작동)

1. PC에 소프트웨어 설치 불필요
2. 요구사항: Web Serial API 호환 브라우저 (Chrome, Edge 또는 Chromium 기반)
3. Arduino/ESP8266/ESP32 보드를 CCLoader firmware로 Flash합니다 ([XZG Multi-tool](https://mt.xyzroe.cc/)을 사용하여 수행 가능)
   _CC2530에 보드를 연결하는 방법에 대한 핀아웃 정보는 클라우드 FW 목록에서 firmware를 선택한 후 정보 버튼을 클릭하면 팝업에 필요한 연결이 표시됩니다._
4. `CCLoader (Arduino/ESP) --> CC2531 다운로더 케이블 --> CC2531 USB stick` 연결
5. `CC2531 USB stick`과 `CCLoader 보드` **둘 다** USB를 통해 PC에 연결
6. Firmware [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip) 다운로드
7. [XZG Multi-tool](https://mt.xyzroe.cc/)을 열고, `Connect Loader`를 클릭하여 firmware(`.hex` 또는 `.bin` 파일)를 Flash합니다

[**전체 지침 →**](https://github.com/xyzroe/XZG-MT/blob/main/docs/how-to/cc_loader.md)

## Windows

1. [SmartRF Flash programmer](http://www.ti.com/tool/flash-programmer)를 설치합니다 (**V2가 아닌** 버전). 이 소프트웨어는 무료지만 다운로드하려면 Texas Instruments 계정이 필요합니다.
2. PC에 [CC debugger 드라이버](https://www.ti.com/tool/CC-DEBUGGER)를 설치합니다 (Windows 전용). 계속하기 전에 CC Debugger 드라이버가 올바르게 설치되었는지 확인합니다. [그림 1. Verify Correct Driver Installation @ Chapter 5.1](http://www.ti.com/lit/ug/swru197h/swru197h.pdf)을 참조하세요. CC Debugger가 올바르게 인식되지 않으면 [수동으로 드라이버를 설치](https://www.youtube.com/watch?v=jyKrxxXOvQY)하세요.
3. `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer` 연결.
4. `CC2531 USB sniffer`와 `CC debugger` **둘 다** USB를 사용하여 PC에 연결합니다.
5. CC debugger의 표시등이 빨간색이면 CC debugger의 reset 버튼을 누릅니다. CC debugger의 표시등이 이제 녹색으로 바뀌어야 합니다. 그렇지 않으면 [CC debugger 사용자 가이드](http://www.ti.com/lit/ug/swru197h/swru197h.pdf)를 참조하여 문제를 해결하세요.

    ![연결 방법](../../../images/connected.jpg)

6. Firmware [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip) 다운로드
7. SmartRF Flash Programmer를 시작하고 아래와 같이 설정한 후 `Perform actions`를 누릅니다. `.bin` 파일이 아닌 `.hex` 파일을 선택해야 합니다!

    ![SmartRF Flash Programmer](../../../images/smartrf.png)

## Linux 또는 MacOS

대부분의 지침에 대해 [@Frans-Willem](https://github.com/frans-willem)에게 감사드립니다.

1. 패키지 관리자를 사용하여 [CC-Tool](https://github.com/dashesy/cc-tool)의 필수 구성 요소를 설치합니다 (macOS의 경우 [Homebrew](https://brew.sh/))

- Ubuntu (버전 >= 20.04): `sudo apt install cc-tool`로 cc-tool을 설치하고 3번으로 계속 진행합니다.
- Ubuntu/Debian: libusb-1.0-0-dev, libboost-all-dev, autoconf, libtool
- Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++
- Archlinux: dh-autoreconf, libusb, boost
- macOS: `brew install autoconf automake libusb boost pkgconfig libtool`
- Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev

2. cc-tool 빌드

- Linux:

```bash

git clone https://github.com/dashesy/cc-tool.git
cd cc-tool

CPPFLAGS="-I/usr/local/include" \
LDFLAGS="-I/usr/local/include" \
 ./bootstrap

CPPFLAGS="-I/usr/local/opt/boost@1.76/include" \
CXXFLAGS="-std=c++0x" \
LDFLAGS="-L/usr/local/opt/boost@1.76/lib" \
LIBUSB_CFLAGS="-I/usr/local/include/libusb-1.0" \
 ./configure

make
```

- macOS:

```bash

git clone https://github.com/dashesy/cc-tool.git
cd cc-tool

CPPFLAGS="-I/opt/homebrew/include" \
LDFLAGS="-I/opt/homebrew/include" \
 ./bootstrap

CPPFLAGS="-I/opt/homebrew/include" \
CXXFLAGS="-std=c++0x" \
LDFLAGS="-L/opt/homebrew/lib" \
LIBUSB_CFLAGS="-I/opt/homebrew/include" \
 ./configure

make
```

3. `CC debugger --> Downloader cable CC2531 --> CC2531 USB sniffer` 연결.
4. `CC2531 USB sniffer`와 `CC debugger` **둘 다** USB를 사용하여 PC에 연결합니다.
5. CC debugger의 표시등이 빨간색이면 CC debugger의 Reset 버튼을 누릅니다. CC debugger의 표시등이 이제 녹색으로 바뀌어야 합니다. 그렇지 않으면 재부팅 후 다시 시도하거나 [CC debugger 사용자 가이드](http://www.ti.com/lit/ug/swru197h/swru197h.pdf)를 참조하여 문제를 해결하세요.

    ![연결 방법](../../../images/connected.jpg)

6. Firmware [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)을 다운로드합니다.
7. Firmware를 Flash합니다:

```
sudo ./cc-tool -e -w CC2531ZNP-Prod.hex
```

# 설치된 Firmware 버전 확인 방법

Zigbee2MQTT는 시작 시 Zigbee2MQTT 로그에 설치된 firmware 버전을 출력합니다:

```
Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
```

위 예시에서 버전은 `20190425`입니다.
