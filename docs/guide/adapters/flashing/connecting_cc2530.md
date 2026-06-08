---
redirectFrom: /information/connecting_cc2530.md
---

# CC2530 연결하기

## 핀 배치

CC2530 모듈마다 핀 배치가 다릅니다

| 이름                  | 핀 배치                                                                             | 사진                                                  |
| --------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------- |
| CC2530                | ![CC2530 핀 배치](../../../images/cc2530_pin_layout.png)                            | ![CC2530](../../../images/cc2530.jpg)                 |
| Webee CC2530 + CC2591 | ![Webee CC2530 + CC2591 핀 배치](../../../images/webee_cc2530_cc2591_pinlayout.png) | ![CC2530 + CC2591](../../../images/cc2530_cc2591.jpg) |

## USB to serial adapter 사용

### 작동 확인됨

이 방법은 다음 CC2530 기반 기기에서 작동이 확인되었습니다:

| 기기       | 이미지                                |
| ---------- | ------------------------------------- |
| **CC2530** | ![CC2530](../../../images/cc2530.jpg) |

그리고 다음 USB to serial adapter에서도 확인되었습니다:

| 기기       | 이미지                                |
| ---------- | ------------------------------------- |
| **CP2102** | ![CP2102](../../../images/CP2102.png) |

##### Firmware Flash

필요한 coordinator firmware는 여기서 찾을 수 있습니다: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) 및 [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin).

### 연결

다음 매핑을 사용하여 CC2530을 USB to serial adapter에 연결합니다:

| USB-Serial Adapter | CC2530 |
| :----------------: | :----: |
|        3V3         |  VCC   |
|        GND         |  GND   |
|        TXD         |  P02   |
|        RXD         |  P03   |

이제 USB-to-serial adapter를 USB 포트에 꽂고 Zigbee2MQTT를 시작하세요!

## Raspberry Pi (Zero)에 연결

CC2530은 GPIO 핀을 통해 Raspberry PI (Zero)에 연결할 수 있습니다. USB2FTDI가 필요하지 않습니다.

설치된 Linux에서 UART 사용을 비활성화해야 합니다: [자세한 설명은 여기](https://www.raspberrypi.org/documentation/configuration/uart.md)

커널에서 UART를 활성화하고 BlueTooth의 UART 사용을 비활성화합니다.

`/boot/config.txt`에 다음 줄을 추가합니다:

```
enable_uart=1
dtoverlay=pi3-disable-bt
```

모뎀 시스템 서비스를 비활성화합니다 (명령줄에서):

```
sudo systemctl disable hciuart
```

`/boot/cmdline.txt`에서 다음 항목이 있으면 제거합니다:

```
console=serial0,115200 console=ttyAMA0,115200

```

Raspberry를 재부팅합니다.

### CC2530을 Raspberry에 연결하기

```
CC C2530 -> Raspberry
VCC -> 3,3V (Pin1)
GND -> GND (Pin6)
P02 -> TXD (Pin8 / BCM 14)
P03 -> RXD (Pin10 / BCM 15)
```

![CC2531PI](../../../images/CC2530_PI.jpg)

### Zigbee2MQTT 설정

`data/configuration.yaml` 파일에서 Serial Port를 변경합니다:

```
serial:
  port: /dev/ttyAMA0
```

즐기세요!

## ESP8266을 serial to WiFi 브리지로 사용

이 설정은 CC2530을 ESP8266에 연결할 수 있게 해주며, 집 어디에나 놓을 수 있습니다. serial 소켓을 통해 Zigbee2MQTT가 CC2530에 연결됩니다.

### 배선

다음 방식으로 CC2530을 ESP8266에 연결합니다:

| ESP8266 | CC2530 |
| :-----: | :----: |
|   3v3   |  VCC   |
|   GND   |  GND   |
|   TX    |  P02   |
|   RX    |  P03   |
|   GND   |  P20   |
|   GND   |  P04   |
|   GND   |  P05   |

### 옵션 1 - ESPEasy로 ESP8266 Flash

ESP8266을 ESPEasy로 Flash해야 합니다. ESPEasy에는 시작하는 방법에 대한 충분한 문서가 있습니다:

- [ESP8266을 ESPEasy로 Flash하는 방법](https://www.letscontrolit.com/wiki/index.php?title=Tutorial_ESPEasy_Firmware_Upload)
- ESP8266 firmware: [ESP_Easy_mega-XXXXXXXX_normal_ESP8266_4096.bin](https://github.com/letscontrolit/ESPEasy/releases)
- [ESPEasy에 대한 자세한 정보](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)

### ESPEasy 설정

ESPEasy 웹 인터페이스를 열고 설정을 완료합니다. 그 후 웹 인터페이스를 다시 엽니다.

_Devices_ 첫 번째 태스크의 Edit를 클릭하고 드롭다운 목록에서 *Communication - Serial Server*를 선택합니다.

다음과 같이 양식을 작성합니다:

```
a.    이름: ZIGBEE2MQTT
b.    활성화: 체크됨
c.    TCP Port: 1000에서 9999 사이의 숫자 "1775"
d.    Baud Rate: 115200
e.    Data bits: 8
f.    Parity: No Parity
g.    Stop bits: 1
h.    Reset target after boot: - none –
i.    RX receive timeout: 0
j.    Event processing: Generic
```

Submit을 누르면 설정이 완료됩니다.

### 옵션 2 - Tasmota로 ESP8266 Flash

ESP8266을 Tasmota firmware의 **"zbbridge" 빌드**로 Flash해야 합니다. 다음 가이드에서 flash 지침을 참조하세요:

- [Tasmota github](https://github.com/arendst/Tasmota)
- [시작하기](https://tasmota.github.io/docs/Getting-Started/)
- [Serial to TCP Bridge 문서](https://tasmota.github.io/docs/Serial-to-TCP-Bridge/)

serial to network 기능에는 MQTT가 필요하지 않지만 브리지를 모니터링하는 좋은 옵션입니다.

### Tasmota 설정

Tasmota 웹 인터페이스를 열고 기본 네트워크 설정을 완료합니다. 다음으로 "Configuration"의 "Configure Module"에서 RX 및 TX 핀을 정의합니다. Rx/Tx는 ESP 기기에 상대적입니다. 예를 들어 ESP8266/ESP01의 하드웨어 serial의 경우 GPIO1을 `TCP Tx`로, GPIO3을 `TCP Rx`로 설정합니다.

다음으로 Tasmota 메인 화면에서 "Console"을 엽니다. `TCPBaudRate 115200`을 입력합니다. 사용할 포트 번호를 결정하고 설정합니다. 예를 들어 포트 = 8888의 경우:

```
Rule1 ON System#Boot do TCPStart 8888 endon
Rule1 1
```

### Zigbee2MQTT 설정

이제 Zigbee2MQTT `configuration.yaml`에 다음을 추가합니다:

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
    adapter: zstack
```

IP 주소와 포트를 변경하는 것을 잊지 마세요.
이제 Zigbee2MQTT를 시작할 수 있습니다.
