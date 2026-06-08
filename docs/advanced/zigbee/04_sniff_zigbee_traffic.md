---
redirectFrom: /how_tos/how_to_sniff_zigbee_traffic.md
---

# Zigbee 트래픽 스니핑

Zigbee 트래픽을 스니핑하면 유용할 때가 있습니다. 예를 들어 기기에서 사용하는 명령을 분석할 때 활용할 수 있습니다.

## Wireshark 설정

### Linux

Linux를 사용하는 경우 패키지 관리자에서 설치합니다.

APT 기반 배포판의 경우:

```
sudo apt install -y wireshark
```

### Windows

[Wireshark](https://www.wireshark.org/download.html)를 다운로드하여 설치합니다 (동일 페이지에 문서 제공).

[Npcap](https://nmap.org/npcap/)을 다운로드하여 설치하고, 설치 시 "Npcap Loopback Adapter"를 설치하도록 선택하세요. Winpcap 호환 모드를 사용하든 사용하지 않든 상관없습니다.

### 사용법

루프백 트래픽 캡처를 위해 Adapter를 사용합니다. 그런 다음 Zigbee 프로토콜 필터를 설정합니다: `udp.port==17754` (기본 ZEP 포트)를 사용하면 Zigbee 트래픽만 볼 수 있습니다.

스니퍼가 시작되면 Wireshark가 시작되어 Zigbee 메시지를 로그에 기록합니다. 이러한 메시지는 암호화되어 있으므로 2개의 암호화 키를 추가해야 합니다. 첫 번째는 Trust Center link key로 (거의) 모든 Zigbee 네트워크에서 동일합니다. 두 번째는 네트워크 암호화 키(Transport Key)입니다.

::: tip 팁
다른 기기(다른 IP 주소)에서 Wireshark를 사용하는 경우, 설정에 따라 캡처 중에 많은 `ICMP: Destination unreachable (Port unreachable)` 메시지가 나타날 수 있습니다. `udp.port==17754 && !icmp` 필터를 사용하면 이러한 메시지를 제거할 수 있습니다.
:::

::: tip 팁
ZSmart Systems sniffer [PDF - 7페이지](https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf)에서 Wireshark의 다양한 사용자 정의에 대한 세부 정보를 찾을 수 있습니다. **컬러링 규칙은 일치하는 것을 찾을 때까지 순서대로 처리됩니다. Zigbee 규칙이 제대로 적용되려면 `UDP`를 맨 아래로 재정렬해야 할 수 있습니다.**
:::

### Trust Center link key 추가

`Edit > Preferences > Protocols > Zigbee`로 이동하여 Trust Center link key를 추가합니다.

`Security Level`을 `AES-128 Encryption, 32-bit Integrity Protection`으로 설정합니다.

그런 다음 `Pre-configured keys > Edit`를 클릭합니다. *+*를 클릭하고 Byte Order를 `Normal`로 하여 `5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39`를 추가합니다.

_참고: Hue bridge는 [다른 Trust Center link key](https://peeveeone.com/2016/11/breakout-breakthrough/)를 사용합니다_

![Wireshark Trust Center link key](../../images/wireshark_tclink_key.png)

### Network key 추가

다음으로 네트워크 암호화 키(Transport Key)를 확인해야 합니다.

기본적으로 `configuration.yaml`에서 `network_key`를 변경하지 않은 경우 `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`가 됩니다.

`network_key`를 변경한 경우 (`GENERATE` 사용), Wireshark가 허용하는 형식으로 변환해야 합니다. 세 가지 방법이 있습니다:

1. `coordinator_backup.json`에서 `network_key` > `key` 값을 가져와 2자씩 `:`로 구분합니다. 예: `01030507090b0d0f00020406080a0c0d` -> `01:03:05:07:09:0b:0d:0f:00:02:04:06:08:0a:0c:0d`.

2. `configuration.yaml`에서 `network_key` 값을 가져와 각 숫자를 2자리 16진수 값으로 변환하고 `:`로 연결합니다. 예: `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]` -> `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`.

    아래에 `network_key`를 붙여넣어 변환할 수 있습니다. 참고: 변환은 로컬에서 수행되며, 키는 브라우저를 벗어나지 않습니다.
    <NetworkKeyConverter/>

3. 숫자를 변환하고 싶지 않다면, 기기가 네트워크에 참여할 때 네트워크 암호화 키도 노출됩니다. 새 기기를 네트워크에 페어링하거나 기존 기기를 다시 페어링하고 Info가 *Device Announcement....*인 메시지를 찾습니다. 메시지를 열고 _Zigbee Network Layer Data_ -> *Zigbee Security Header*를 펼칩니다.

    ![Wireshark network key](../../images/wireshark_network_key.png)

위와 같이 키 값을 복사하고 `Edit > Preferences > Protocols > Zigbee > Pre-configured keys > Edit`로 이동하여 Byte Order를 `Normal`로 하여 키를 추가합니다.

이제 Wireshark가 메시지를 복호화할 수 있습니다. 예를 들어 조명을 켤 때 다음과 같은 메시지가 표시됩니다:

![Wireshark packet](../../images/wireshark_packet.png)

## CC2531로 스니핑

### 사전 요구사항

- 컴퓨터
    - Ubuntu / Debian 머신 (Ubuntu 18.04 / 18.10 및 Debian 10으로 테스트됨)
    - Windows 머신 (Windows 10으로 테스트됨)
- CC2531 adapter

### 1. CC2531 Adapter Flash

CC2531에 sniffer firmware를 Flash해야 합니다. [CC2531 Flash하기](../../guide/adapters/flashing/flashing_the_cc2531.md)의 지침에 따라 firmware를 Flash합니다.

#### Linux

Firmware는 [PACKET-SNIFFER](http://www.ti.com/tool/PACKET-SNIFFER)(**PACKET-SNIFFER-2!**가 아님)에 포함되어 있습니다. PACKET-SNIFFER를 다운로드합니다. sniffer firmware는 Windows 설치 프로그램에만 제공되므로 hex 파일을 추출해야 합니다. 이를 위해 7zip(배포판에 따라 p7zip-full 또는 p7zip-plugins 패키지)이 필요합니다.

```bash
unzip swrc045z.zip -d PACKET-SNIFFER
7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex
sudo <path-to>/cc-tool -e -w <path-to>/sniffer_fw_cc2531.hex
```

#### Windows (및 Ubuntu)

Windows의 경우 이 firmware는 [ZBOSS](https://dsr-iot.com/downloads)에 포함되어 있습니다. 계정을 등록하고 *Zigbee sniffer package rev. 2.0*을 다운로드합니다. ZIP 파일에는 `zb_sniffer_bin\zb_sniffer_target\CC2531 USB dongle\zboss_sniffer.hex` 하위 폴더에 firmware가 포함되어 있습니다. ZBOSS는 Ubuntu 64-bit에서도 사용할 수 있습니다.

### 2. 필요한 도구 설치

#### Linux

APT 기반 배포판의 경우:

```bash
cd /opt
sudo apt install -y libusb-1.0-0-dev wireshark
curl -L https://github.com/homewsn/whsniff/archive/v1.3.tar.gz | tar zx
cd whsniff-1.3
make
sudo make install
```

#### Windows

Wireshark가 설치되어 있는지 확인하고 ([Wireshark 설정](#configuring-wireshark) 참조) ZBOSS를 다운로드하여 압축을 풀어 놓으세요.

### 3. 트래픽 스니핑

#### Linux

wireshark 시작

```bash
sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -
```

::: tip 팁
배포판 및 설치된 패키지에 따라 일정 시간 후 broken pipe가 발생할 수 있습니다. Wireshark가 캡처를 중지했을 때 상어 지느러미 아이콘을 클릭하여 재개하려고 하면 `end of file on pipe magic during open` 오류가 표시됩니다. 이런 경우 다음과 같이 시작해야 할 수 있습니다:

```bash
wireshark -k -i <( path/to/whsniff -c channel_number )
```

대체 사용 방법은 [whsniff 프로젝트 페이지](https://github.com/homewsn/whsniff#how-to-use-locally)에 자세히 설명되어 있습니다.
:::

나중에 분석하기 위해 스니핑된 데이터를 저장하려면 이 명령을 실행합니다 (gzip으로 압축은 선택 사항):

```bash
sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | ( gzip -c > "zigbee_sniff_$(date +"%FT%H%M%S").pcap".gz & )
```

#### Windows

`gui\zboss_sniffer.exe`에서 ZBOSS 실행 파일을 실행하고, Wireshark 실행 파일 경로를 입력한 다음 `Start` 버튼을 클릭합니다. ZBOSS에서 올바른 Zigbee 채널이 설정되어 있는지 확인하세요. 기본적으로 채널 `0x0C (12)`에서 스니핑하지만 기본 Zigbee2MQTT 채널은 11(`0x0B (11)`)입니다.

#### 문제 해결

- whsniff를 실행할 때 `couldn't run /usr/bin/dumpcap in child process: permission denied`가 나타나면 /usr/bin/dumpcap이 모두에게 실행 가능한지 확인하세요. 또는 `chmod 755 /usr/bin/dumpcap`를 실행하세요.
- `modemmanager`를 제거해야 할 수 있습니다. 이것이 문제를 일으키는 것으로 알려져 있습니다. [방법](../../guide/faq/README.md#modemmanager-is-installed)

## EmberZNet 및 HUSBZB-1 Adapter로 스니핑

### USB Adapter 사전 요구사항

#### Linux

Adapter는 즉시 작동해야 하며 추가 단계가 필요하지 않습니다.

#### Windows

드라이버 설치 (adapter에 맞는 것으로):

- [Silicon Labs CP210x Universal Windows Driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)
    - 폴더에 드라이버 압축 해제
    - 해당 폴더 안에서 `silabser.inf`를 마우스 오른쪽 버튼으로 클릭하고 `Show more options`를 선택한 다음 `Install` 선택
- [WCH CH343SER](https://www.wch-ic.com/downloads/CH343SER_EXE.html)
    - 실행하고 설치 단계를 따릅니다.

### Ember ZLI 사용

#### 사전 요구사항

- 컴퓨터
    - Linux 머신 (Debian 12 64-bit으로 테스트됨)
    - Windows 머신 (Windows 11로 테스트됨)
    - MacOS 머신
- EmberZNet 또는 HUSBZB-1 adapter
- Wireshark (선택 사항, 직접 [PCAP 파일](https://github.com/Nerivec/ember-zli/wiki/Sniff#sending-to-pcap-file)에 쓸 수도 있음)
- NodeJS / npm (npm 기반 설치 방법 사용 시)

#### 1. 필요한 도구 설치

[https://github.com/Nerivec/ember-zli/wiki](https://github.com/Nerivec/ember-zli/wiki)

#### 2. 트래픽 스니핑

[https://github.com/Nerivec/ember-zli/wiki/Sniff](https://github.com/Nerivec/ember-zli/wiki/Sniff)

### ZSmart Systems Sniffer 사용

#### 사전 요구사항

- 컴퓨터
    - Linux 머신 (Ubuntu 18.10으로 테스트됨)
    - Windows 머신 (Windows 10으로 테스트됨)
- EmberZNet 또는 HUSBZB-1 adapter
- Wireshark
- Java

#### 1. 필요한 도구 설치

Windows와 Linux 모두 동일한 스니핑 프로그램을 사용합니다. [ZSmart Systems sniffer releases](https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer/releases)에서 미리 컴파일된 jar 파일을 가져올 수 있습니다.

또한 ZSmart Systems의 PDF 문서는 [여기](https://www.opensmarthouse.org/files/download/ZigBeeWiresharkSniffer.pdf)에서 찾을 수 있습니다.

::: tip 팁
Linux: 일부 EmberZNet adapter는 brltty udev에 등록된 기기와 동일한 USB 식별자를 사용하므로, EmberZNet USB dongle이 인식되지 않으면 idVendor=1a86, idProduct=7523에 대한 brltty 규칙을 비활성화하세요 (EmberZNet adapter에 사용되는 CH340 serial converter와 동일). `/usr/lib/udev/rules.d/85-brltty.rules`를 편집하고 `# ENV{PRODUCT}=="1a86/7523/*", ENV{BRLTTY_BRAILLE_DRIVER}="bm", GOTO="brltty_usb_run"`을 주석 처리합니다. EmberZNet adapter를 뽑았다가 다시 연결합니다.
:::

#### 2. 트래픽 스니핑

터미널 또는 명령줄에서 `java -jar ZigbeeSniffer.jar -baud 115200 -flow {OPTION} -port {PORT} -c {CHANNEL}`을 실행합니다.

Adapter에 따라 `OPTION`은 `none` (Sonoff Dongle-E, SLZB-06m...) 또는 `hardware` (HUSBZB-1, ZBT-1...)로 교체해야 합니다.

##### Windows

장치 관리자(Win+X, M)를 열고 `Ports (COM & LPT)`에서 adapter가 사용하는 COM 포트를 찾습니다. COM3, COM6 같은 형태입니다. `PORT`는 해당 값으로 교체해야 합니다.

##### Linux

`PORT`는 `/dev/ttyUSB0` 또는 HUSBZB-1 기기를 연결한 위치가 됩니다.

## nRF52 Adapter로 스니핑

### 사전 요구사항

- Ubuntu Linux / macOS 10.14+ / Windows 10+
- [nRF52 dongle](https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124) 또는 [development kit](https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/nrf52840-dk/8593726)
- Wireshark v3.0+

### 1. Dongle 프로그래밍 및 필요한 도구 설치

[802.15.4용 nRF Sniffer 설치](https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/installing_sniffer_802154.html)

### 2. 트래픽 스니핑

[nRF Sniffer로 데이터 캡처](https://docs.nordicsemi.com/bundle/ug_sniffer_802154/page/UG/sniffer_802154/capturing_data_sniffer_802154.html)
