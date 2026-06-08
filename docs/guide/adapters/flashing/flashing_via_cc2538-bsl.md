---
---

# cc2538-bsl을 통한 Firmware Flash

[TI CC13xx/CC2538/CC26xx Serial Boot Loader](https://github.com/JelmerT/cc2538-bsl)

CC2538-bsl은 [Jelmer Tiete](https://github.com/JelmerT)가 만든 Python 스크립트로, Texas Instruments CC2538, CC26xx 및 CC13xx SoC(System on Chip)의 boot loader와 통신합니다.

여기서는 Sonoff Zigbee 3.0 USB Dongle Plus를 사용하여 케이스를 열어 "Boot" 버튼을 누르지 않고 firmware를 Flash합니다.

## Docker를 사용하는 방법 (Linux 전용)

```bash
docker run --rm \
    --device /dev/ttyUSB0:/dev/ttyUSB0 \
    -e FIRMWARE_URL=https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip \
    ckware/ti-cc-tool -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb
```

Docker 명령에 대한 자세한 내용은 [여기](https://github.com/git-developer/ti-cc-tool)에서 확인할 수 있습니다.

## Docker 없이 사용하는 방법

### 시스템 준비 (Debian 기반)

1. Python 및 python-pip를 설치합니다.

```bash
sudo apt update && sudo apt install python3 python3-pip
```

2. 필요한 Python 패키지를 설치합니다.

```bash
sudo pip3 install pyserial intelhex
```

### cc2538-bsl 다운로드

3. "cc2538-bsl" 디렉토리를 만들고, cc2538-bsl의 최신 master를 tarball로 다운로드하여 같은 폴더에 압축을 풉니다.

```bash
mkdir cc2538-bsl
cd cc2538-bsl
curl -sSL https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/master.tar.gz | tar xz --strip 1
```

Sonoff 기능은 2022년 1월 20일부터 master에 포함되어 있습니다.

### Firmware 다운로드

[지원되는 adapter 페이지](../README.md)에서 adapter의 firmware를 다운로드하고 `cc2538-bsl` 디렉토리에 압축을 풉니다. 필요한 모든 것이 한 폴더에 있도록 합니다.

4. 이 경우 `CC1352P2_CC2652P_launchpad_coordinator_***.zip`을 Flash합니다.

```bash
wget https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20250321/CC1352P2_CC2652P_launchpad_coordinator_20250321.zip
unzip CC1352P2_CC2652P_launchpad_coordinator_20250321.zip

sudo python3 cc2538_bsl/cc2538_bsl.py -ewv -p /dev/ttyUSB0 --bootloader-sonoff-usb ./CC1352P2_CC2652P_launchpad_coordinator_20250321.hex
```

`-ewv`는 대량 **e**rase(지우기), **w**rite(쓰기), **v**erify(검증)를 의미합니다  
`-p`는 기기가 실행 중인 포트이며, 이 경우 `/dev/ttyUSB0`입니다  
`--bootloader-sonoff-usb`는 Sonoff USB dongle에 올바른 패턴으로 RTS 및 DTR을 토글하여 스크립트가 bootloader를 활성화함을 의미합니다 (기기가 Sonoff dongle이 아닌 경우 이를 제거하세요).

Flash 프로세스가 성공적으로 완료되면 다음과 같은 출력이 나타납니다:

```
sonoff
Opening port /dev/ttyUSB0, baud 500000
Reading data from ../CC1352P2_CC2652P_launchpad_coordinator_20250321.hex
Your firmware looks like an Intel Hex file
Connecting to target...
CC1350 PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8
Primary IEEE Address: 00:00:00:00:00:00:00:00
    Performing mass erase
Erasing all main bank flash sectors
    Erase done
Writing 360448 bytes starting at address 0x00000000
Write 104 bytes at 0x00057F988
    Write done
Verifying by comparing CRC32 calculations.
    Verified (match: 0xe0c256fd)
```

### 설치된 Firmware 버전 확인 방법

Zigbee2MQTT는 시작 시 Zigbee2MQTT 로그에 설치된 firmware 버전을 출력합니다:

```
Zigbee2MQTT:info  2022-01-05 22:36:34: Coordinator firmware version: '{"meta":{"maintrel":1,"majorrel":2,"minorrel":7,"product":1,"revision":20250321,"transportrev":2},"type":"zStack3x0"}''
```

위 예시에서 버전은 `20250321`입니다.
