---
redirectFrom: /information/alternative_flashing_methods.md
---

# 대체 Flash 방법

- [Raspberry pi](#raspberry_pi)
- [Arduino/ESP8266 + CCLoader](#arduino_ccloader)
- [Arduino/ESP8266 + CCLib](#arduino_cclib)
- [RP2040로 드래그 앤 드롭](#rp2040_dragndrop)

---

### <a name=raspberry_pi></a> Raspberry Pi 사용 (~3분)

1. 아직 설치하지 않은 경우 [wiringPi](https://github.com/WiringPi/WiringPi/releases)를 설치합니다.

2. [flash_cc2531](https://github.com/jmichault/flash_cc2531)을 설치합니다:

```bash
git clone https://github.com/jmichault/flash_cc2531.git
```

3. debug 포트의 다음 핀을 GPIO 포트에 연결합니다:

- pin 1 (GND) --> pin 39 (GND)
- pin 7 (reset) --> pin 35 (GPIO24, BCM19)
- pin 3 (DC) --> pin 36 (GPIO27, BCM16)
- pin 4 (DD) --> pin 38 (GPIO28, BCM20)

<img src="../../../images/CC2531_wiring_raspi-header.jpg" width="40%"/>

선택 사항으로, Target Voltage Sense를 3.3v 소스(빨간 선)에 연결하면 기기를 USB 포트에 꽂을 필요가 없습니다. 선택적으로 다음을 연결하세요:

- pin 2 (Target Voltage Sense) --> Raspi의 pin 1 또는 pin 17 (3.3v)

CC2531의 핀 배치는 위를 참조하고, Raspberry의 핀은 [https://pinout.xyz/](https://pinout.xyz/)를 참조하세요.

CC2531 다운로더 케이블 ![](../../../images/downloader_cable.png)과 4개의 Dupont Female to Female 선이 이 목적에 적합합니다. 다운로더 케이블을 구매하고 싶지 않다면, debug 핀이 너무 가까이 있어 Dupont 케이블을 직접 연결할 수 없으므로 debug 핀을 바깥쪽으로 구부려야 합니다.

이제 USB dongle을 USB 포트에 삽입합니다:

 <img src="https://raw.githubusercontent.com/jmichault/files/master/Raspberry-CC2531.jpg" width="40%"/>

4. 다음을 실행하여 테스트합니다:

```bash
cd flash_cc2531
./cc_chipid
```

다음과 같은 결과가 반환되어야 합니다:

```
  ID = b524.
```

0000 또는 ffff가 표시되면 문제가 있는 것이며 배선을 확인해야 합니다.

`./cc_chipid: cannot execute: required file not found`가 표시되면 `make` 명령을 실행해야 합니다.

5. 최신 firmware [CC2531_DEFAULT_20211115.zip](https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip)을 다운로드하고 압축을 풉니다.

```bash
cd ~/flash_cc2531       # 홈 디렉토리에 프로그램을 git clone했다고 가정
wget https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip
unzip CC2531_DEFAULT_20211115.zip
```

6. CC2531을 지우고 flash합니다:

```bash
./cc_erase
./cc_write CC2531ZNP-Prod.hex
```

약 3분 소요됩니다.

### <a name=arduino_ccloader></a> Arduino Uno/ESP8266과 CCLoader 사용 (~3분)

**정품 Arduino Uno, Arduino Pro Micro 중국산 클론 및 NodeMCU ESP8266으로 테스트되었으며 CCLib보다 훨씬 빠릅니다**

#### Firmware 준비

1. 올바른 firmware를 다운로드합니다 (이 예제에서는 [CC2531 firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)를 사용합니다)
1. Firmware 압축을 풀고 `objcopy`를 사용하여 hex 파일을 binary로 변환합니다 (포함된 binary 파일을 사용하지 마세요!)

    **_Windows_**: StackOverflow의 [이](https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump) 답변에 따라 `objcopy.exe`를 다운로드합니다.

    ```
    objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin
    ```

    **Linux 또는 Windows의 Ubuntu Bash**: 패키지 관리자를 사용하여 `binutils` 패키지를 설치합니다

    ```bash
    objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary /tmp/CC2531ZNP-Prod.bin
    ```

#### CCLoader 준비

1. [CCLoader](https://github.com/RedBearLab/CCLoader)를 다운로드하고 압축을 풉니다
1. Windows에서는 미리 컴파일된 `CCloader.exe`를 사용할 수 있습니다
1. Linux에서는 `CCLoader`를 직접 컴파일해야 하므로 `CCLoader/SourceCode/Linux` 디렉토리로 이동하고 다음을 실행합니다
    ```bash
    gcc main.c -o CCLoader
    ```

#### Arduino 또는 ESP8266 및 CC2531 기기 Flash

1. Arduino의 경우 'Arduino\CCLoader\CCLoader.ino' (86-90번째 줄)에 기본값으로 설정된 핀을 유지합니다:

```
// 디버그 제어 핀 및 표시 LED
int DD = 6;
int DC = 5;
int RESET = 4;
int LED = 13;
```

ESP8266 (NodeMCU 또는 WeMos D1 Mini)의 경우 'Arduino\CCLoader\CCLoader.ino' (86-90번째 줄)의 핀을 ESP8266에서 사용 가능한 핀으로 편집합니다. 다음이 제게 작동했습니다 (숫자는 NodeMCU의 레이블이 아닌 GPIO 번호입니다):

```
// 디버그 제어 핀 및 표시 LED
int DD = 14; //GPIO14=D5 (NodeMCU/WeMos D1 Mini)
int DC = 4; //GPIO4=D2 (NodeMCU/WeMos D1 Mini)
int RESET = 5; //GPIO5=D1 (NodeMCU/WeMos D1 Mini)
int LED = 2; //GPIO2=D4 및 WeMos D1 Mini와 NodeMCU의 ESP-12E 모듈의 파란 LED, 또는 NodeMCU의 다른 파란 LED에는 GPIO16=D0 사용 가능
```

1. `Arduino\CCLoader\CCLoader.ino`로 Arduino Uno 또는 ESP8266 보드를 Flash합니다 (Windows의 NodeMCU: [Arduino IDE](https://www.arduino.cc/en/main/software)를 설치한 후 환경 설정에서 Additional Boards Manager URL 필드에 http://arduino.esp8266.com/stable/package_esp8266com_index.json를 추가하고, Boards Manager로 이동하여 esp8266 패키지를 설치하고, 보드를 "NodeMCU 1.0 (ESP-12E module)" 또는 WeMos D1 Mini를 사용하는 경우 "LOLIN(WEMOS) D1 R2 & Mini"로 설정하고, 포트를 올바른 COM 포트로 설정한 후 (NodeMCU의 경우 COM3이었습니다), 스케치를 업로드합니다.)
1. COM 포트 번호 또는 기기 이름을 메모합니다 (나중에 사용됩니다)
1. 아래 설명에 따라 Arduino 핀을 CC 기기의 debug 헤더에 연결합니다

    | Arduino | CC Pin | CC Name          |
    | ------- | ------ | ---------------- |
    | GND     | 1      | GND              |
    | D4      | 7      | RESETn           |
    | D5      | 3      | DC (Debug Clock) |
    | D6      | 4      | DD (Debug Data)  |

<img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" width="40%"/> <img src="https://user-images.githubusercontent.com/35885181/67834765-dcab2280-faad-11e9-8755-971f0e456217.jpg" width="20%"/> <img src="https://user-images.githubusercontent.com/35885181/67834764-dc128c00-faad-11e9-8e06-0937e1bb6790.jpg" width="23%"/>

3.3V Arduino를 사용하는 경우 선택적으로 `3.3V -> Target Voltage Sense (Pin 2)`를 연결하면 다음 단계에서 CC2531을 USB에 연결하지 않고도 프로그래밍할 수 있습니다.

아래 설명에 따라 ESP8266 핀을 CC 기기의 debug 헤더에 연결합니다

| ESP8266   | CC Pin | CC Name          |
| --------- | ------ | ---------------- |
| GND       | 1      | GND              |
| D1/GPIO5  | 7      | RESETn           |
| D2/GPIO4  | 3      | DC (Debug Clock) |
| D5/GPIO14 | 4      | DD (Debug Data)  |

1. 먼저 Arduino/ESP8266을 연결한 후 몇 초 이내에 CC2531을 USB 전원에 연결합니다
1. 준비된 `CC2531ZNP-Prod.bin`을 실행 파일 옆에 놓습니다
1. Flash 프로세스를 시작합니다

    **Windows**

    ```
    CCLoader_x86_64.exe [COM 포트 번호] CC2531ZNP-Prod.bin 0
    ```

    _예시:_ Arduino UNO을 COM7에서 사용하는 경우

    ```
    CCLoader_x86_64.exe 7 CC2531ZNP-Prod.bin 0
    ```

    **Linux**

    ```
    ./CCLoader [USB 기기 이름] CC2531ZNP-Prod.bin 0
    ```

    _예시:_ Arduino Uno가 `/dev/ttyACM0`에 있는 경우

    ```
    ./CCLoader /dev/ttyACM0 CC2531ZNP-Prod.bin 0
    ```

몇 분 안에 완료됩니다.

`Request sent already! Waiting for respond...`에서 Flash가 실패하거나 멈추는 경우 다시 시도하고, 배선을 확인하고, 마지막 파라미터를 `0` 대신 `1`로 사용해 보세요. 또는 `sudo`로 명령을 실행해 보세요.

### <a name=arduino_cclib></a> Arduino/ESP8266과 CCLib 사용 (~3시간)

Arduino를 통한 firmware flash는 https://github.com/wavesoft/CCLib 프로젝트를 사용하여 구현됩니다.
**단, 약간의 개선이 포함되어 있습니다!**

[AndrewLinden](https://github.com/AndrewLinden)은 [댓글과 함께](https://github.com/wavesoft/CCLib/issues/19) CCLib를 사용하여 CC2531을 Flash할 수 있었다고 설명했습니다.

Arduino를 통해 firmware를 Flash하기 위한 [약간의 변경 사항이 포함된 CCLib 라이브러리의 포크를 만들었습니다](https://github.com/kirovilya/CCLib):

- 작업 타임아웃
- 포트를 여는 후 (Windows 7에서) Arduino가 재부팅되어 요청에 응답하지 않습니다 - 3초 일시 정지를 추가했습니다 (인터넷 어딘가에서 찾았습니다).
- 다른 속도에서 통신 오류가 발생하여 포트 속도를 9600으로 낮췄습니다:
  `ERROR: Could not read from the serial port!`

Flash 프로세스:

1. https://github.com/kirovilya/CCLib 에서 라이브러리 아카이브를 다운로드하고 압축을 풉니다.

2. Arduino IDE를 통해 Arduino 스케치 Flash
   CCLib\Arduino\CCLib\Examples\CCLib_proxy\CCLib_proxy.ino

**ESP8266(wemos d1 mini)을 통해 Flash하는 경우 연결(5단계)과 Arduino/CCLib/Examples/CCLib_proxy/CCLib_proxy.ino의 핀아웃 설정을 변경해야 합니다:**

```
int CC_RST   = 5;
int CC_DC    = 4;
int CC_DD_I  = 14;
int CC_DD_O  = 12;
```

3. 설치되지 않은 경우 Python 2.7 이상 설치 (python 2.7.13으로 테스트됨)

4. 설치되지 않은 경우 pyserial 3.0.1 설치
   `pip install -r CCLib\Python\requirements.txt`
   또는
   `pip install pyserial==3.0.1`

5. https://github.com/kirovilya/CCLib#1-prepare-your-arduino-board 에 설명된 대로 접점을 연결합니다.
   **하지만 저의 경우에는 저항 없이 완전히 연결하고, CC_DD_I와 CC_DD_O 접점을 합쳐서 DEBUG 커넥터의 DD 핀에 연결했습니다!**

![](https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg)

지정된 3개의 접점과 GND만 연결했습니다. Firmware 업로드 중에 stick과 Arduino가 USB에 연결되어 있어야 합니다.

<img src="../../../images/kirovilya/IMG_20180111_193941.jpg" width="35%"/> <img src="../../../images/kirovilya/IMG_20180111_193923.jpg" width="35%"/> <img src="../../../images/kirovilya/IMG_20180110_234401.jpg" width="15%"/>

6. 그런 다음 칩에 대한 정보를 가져오려고 시도합니다 - 작동하면 연결이 올바른 것입니다 (COM9 포트 예시 - Arduino 포트):

```
C:\Projects\CCLib\Python>python cc_info.py -p COM9
```

::: details 명령 출력

```
INFO: Found a CC2531 chip on COM9

Chip information:
      Chip ID : 0xb524
   Flash size : 256 Kb
    Page size : 2 Kb
    SRAM size : 8 Kb
          USB : Yes

Device information:
 IEEE Address : 00124b0014aa
           PC : 0000

Debug status:
 [ ] CHIP_ERASE_BUSY
 [ ] PCON_IDLE
 [X] CPU_HALTED
 [ ] PM_ACTIVE
 [ ] HALT_STATUS
 [ ] DEBUG_LOCKED
 [X] OSCILLATOR_STABLE
 [ ] STACK_OVERFLOW

Debug config:
 [ ] SOFT_POWER_MODE
 [ ] TIMERS_OFF
 [X] DMA_PAUSE
 [X] TIMER_SUSPEND
```

:::

[MacOS에서의 또 다른 연결 예시](https://github.com/wavesoft/CCLib/issues/22#issuecomment-384452424)

7. 모든 것이 성공적이면 [firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)를 다운로드합니다.
   Firmware를 Flash하기 전에 수정이 필요합니다. `.hex` 파일을 텍스트 편집기로 열고 **마지막에서 두 번째 줄을 제거합니다**. 파일을 저장합니다.

8. Firmware Flash를 시작합니다 (오래 걸립니다, 약 2-3시간):

```
C:\Projects\Zigbee>python cc_write_flash.py -e -p COM9 --in=CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex
```

::: details 명령 출력

```
INFO: Found a CC2531 chip on COM9

Chip information:
      Chip ID : 0xb524
   Flash size : 256 Kb
    Page size : 2 Kb
    SRAM size : 8 Kb
          USB : Yes
Sections in CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex:

 Addr.    Size
-------- -------------
 0x0000   8176 B
 0x1ff6   10 B
 0x3fff0   1 B
 0x2000   239616 B

This is going to ERASE and REPROGRAM the chip. Are you sure? <y/N>:  y

Flashing:
 - Chip erase...
 - Flashing 4 memory blocks...
 -> 0x0000 : 8176 bytes
    Progress 100%... OK
 -> 0x1ff6 : 10 bytes
    Progress 100%... OK
 -> 0x3fff0 : 1 bytes
    Progress 100%... OK
 -> 0x2000 : 239616 bytes
    Progress 100%... OK

Completed
```

:::

### <a name=rp2040_dragndrop></a> [pico_cc_flasher](https://github.com/stolen/pico_cc_flasher)로 RP2040 보드 사용 (~3분)

이 방법은 전문적인 프로그래머 소프트웨어가 필요 없습니다. USB 드라이브로 드래그 앤 드롭만큼 간단하게 Flash할 수 있습니다.

#### Firmware 준비

1. 올바른 firmware를 다운로드합니다 (이 예제에서는 [CC2531 firmware](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/)를 사용합니다)
1. Firmware 압축을 풀고 `objcopy`를 사용하여 hex 파일을 binary로 변환합니다 (포함된 binary 파일을 사용하지 마세요!)

    **_Windows_**: StackOverflow의 [이](https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump) 답변에 따라 `objcopy.exe`를 다운로드합니다.

    ```
    objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin
    ```

    **Linux 또는 Windows의 Ubuntu Bash**: 패키지 관리자를 사용하여 `binutils` 패키지를 설치합니다

    ```bash
    objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary /tmp/CC2531ZNP-Prod.bin
    ```

#### RP2040 Flash

저는 Waveshare의 RP2040-Zero를 사용하지만, 다른 보드에서는 시각적 표시가 없을 수 있습니다.

- 자동 설치
    - `git clone https://github.com/stolen/pico_cc_flasher.git && cd pico_cc_flasher` 저장소를 클론합니다
    - RP2040 보드를 bootloader 모드로 PC에 연결합니다
    - `make install`을 실행합니다
- 수동 설치
    - [CircuitPython](https://circuitpython.org/downloads)을 설치합니다
    - [최신 릴리스 zip](https://github.com/stolen/pico_cc_flasher/releases/latest/download/pico_cc_flasher.zip)을 CircuitPython USB 드라이브에 압축 해제합니다

#### RP2040을 CC2531 dongle에 연결

<img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/overview.jpg" width="20%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/closeup.jpg" width="30%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/stick_pinout.png" width="35%"/>
CC2531 stick에 일부 핀을 연결합니다

- `GND   ->    GND`
- `GP27  ->    DD`
- `GP28  ->    DC`
- `GP29  ->   nRST`

#### RP2040을 PC에, dongle을 전원에 연결

pico_cc_flasher가 칩을 감지하면 칩 firmware를 읽습니다. 약 1분이 걸릴 수 있습니다.  
그런 다음 재시작되고 `cc25xx` 디렉토리를 탐색할 수 있습니다:

- `data.read.bin`은 flash 덤프입니다
- 이 디렉토리에 `*.bin` 파일(`data.read.bin` 제외)을 드롭하면 Flash됩니다
- `control.skip_flash_read` 파일을 제거하면 flash를 다시 읽습니다

<img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/shell_demo.png" width="40%"/> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/filemanager.jpg" width="40%"/>
