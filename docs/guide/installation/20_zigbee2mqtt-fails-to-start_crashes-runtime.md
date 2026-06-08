---
sidebarDepth: 0
redirectFrom:
    - /guide/installation/20_zigbee2mqtt-fails-to-start.md
    - /information/zigbee2mqtt_fails_to_start.md
---

# Zigbee2MQTT 시작 실패/런타임 충돌

대부분의 경우 Zigbee2MQTT가 Zigbee adapter와 통신하지 못해서 발생합니다.

[[toc]]

## 오류: `USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.`

[여기](../configuration/adapter-settings.md)에 설명된 대로 `serial` 섹션을 설정하세요.

## 오류: zStack의 경우 `SRSP - SYS - ping after 6000ms`, EmberZNet의 경우 `HOST_FATAL_ERROR`

이 오류의 일반적인 원인:

1. 직렬 adapter의 포트가 변경되었습니다.
   adapter의 포트를 찾으려면 [이 문서](../configuration/adapter-settings.md)를 확인하세요.
2. CC2530 또는 CC2531을 사용하는 경우, 구식 하드웨어로 인해 이 adapter가 충돌하는 것은 흔한 문제입니다.
   펌웨어를 다시 플래싱하면 문제가 해결될 수 있습니다. 자주 발생하는 경우 [소스 라우팅 펌웨어](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing) 플래싱을 고려하거나 [더 강력한 adapter](../adapters/README.md)로 업그레이드하세요.
3. adapter에 추가 설정 파라미터가 필요합니다. adapter에 추가 파라미터가 필요한지 확인하려면 [지원 Adapter](../adapters/README.md) 섹션을 확인하세요 (예: ConBee II / RaspBee II).
4. Home Assistant의 "Zigbee Home Automation"(ZHA) 통합이 활성화되어 있습니다. ZHA 통합을 비활성화하고 Zigbee2MQTT 애드온을 재시작해 보세요.
5. 하드웨어 adapter가 coordinator 펌웨어가 아닌 router 펌웨어로 플래싱되어 있습니다.
6. 네트워크 Zigbee adapter가 LAN 네트워크를 통해 접근할 수 없습니다.
7. 머신의 다른 소프트웨어(Home Assistant 통합 포함)가 USB 장치를 방해하고 있습니다 (예: USB 장치를 찾으려는 [HA EDL21 통합](https://www.home-assistant.io/integrations/edl21)).

## 오류: EmberZNet의 경우 `ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT`

일반적인 원인:

- USB 또는 2.4GHz 간섭
    - 간섭을 줄이기 위한 다양한 가이드를 참고하세요
- 부적절하거나 불안정한 전원(USB, POE...)
    - 케이블과 전력 등급을 확인하고 의심스러운 하드웨어를 교체하세요
- Zigbee2MQTT가 실행되는 머신의 리소스 사용량 급증(디스크, CPU 또는 RAM) - 저사양 머신에서 더 두드러짐
    - 필요한 경우 구성 요소를 업그레이드하거나 더 많은 리소스를 할당하세요 (가상화 환경의 경우)
- "core" 칩의 리소스 사용량 급증 (TCP adapter의 경우)
    - 알려진 버그를 수정할 수 있는 새로운 "core" 펌웨어가 있는지 확인하세요
- [스팸 장치](#스팸-장치) (특히 Tuya 및 유사 제품)
    - [darkxst](https://github.com/darkxst/silabs-firmware-builder/releases) 또는 [Nerivec](https://github.com/Nerivec/silabs-firmware-builder/releases)의 coordinator 펌웨어 8.0.2 이상을 사용하거나, [Nabu Casa](https://github.com/NabuCasa/silabs-firmware-builder/releases)의 7.4.4.5 이상을 사용하세요.

## configuration.yaml에 올바른 포트를 입력했는지 확인

올바른 경로를 찾으려면 다음 명령을 실행합니다:

```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

이 예시에서 올바른 `port`는 `/dev/ttyACM0`입니다.

설정을 다시 할 수 있도록 [온보딩](../getting-started/README.md#onboarding)을 강제 실행할 수도 있습니다.

### Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2에서 어떤 포트를 사용해야 하나요? /dev/ttyACM0 아니면 /dev/ttyACM1?

Texas Instruments launchpad에는 내장 디버거가 있습니다. 이 디버거는 장치 데이터 포트 외에 추가 포트를 등록합니다. 물론 반드시 0번과 1번이 아닐 수도 있습니다. 하지만 일반적으로 낮은 번호가 장치 데이터 포트이고 다른 것이 디버거입니다.

올바른 포트를 찾으려면 다음을 실행합니다:

```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 Jan  6 19:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -> ../../ttyACM1
```

id가 *if00*으로 끝나는 장치가 장치 데이터용입니다. 설정에서 이 포트를 사용하세요.

## Zigbee2MQTT를 실행하는 사용자에게 포트 쓰기 권한이 있는지 확인

다음을 실행하여 테스트할 수 있습니다: `test -w [PORT] && echo success || echo failure` (
예: `test -w /dev/ttyACM0 && echo success || echo failure`).

`failure`가 출력되면 사용자가 포트에 접근 권한이 없는 것입니다. 쓰기 권한을 부여하여 테스트하려면 다음을 실행합니다: `sudo chown [USER] [PORT]` (예: `sudo chown pi /dev/ttyACM0`).

`failure`가 출력되면 사용자에게 장치에 대한 영구 권한을 부여해야 합니다.

### 방법 1: 재부팅 시마다 사용자에게 권한 부여.

재부팅 후 사용자에게 권한을 부여하는 'udev' 규칙을 생성할 수 있습니다:

1. `udevadm info -a -n /dev/ttyACM0 | grep 'serial'`
   장치의 시리얼을 가져옵니다 `YOURSERIAL`

2. 다음 명령으로 규칙 파일을 생성합니다:
   `sudo nano /etc/udev/rules.d/99-usb-serial.rules`

3. 다음 줄을 추가합니다:
   `SUBSYSTEM=="tty", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="16a8", ATTRS{serial}=="YOURSERIAL", SYMLINK="ttyUSB.CC2531-01", OWNER="pi"`

4. 새로운 SYMLINK 이름에 맞게 Zigbee2MQTT 설정을 수정합니다:
   `nano /opt/zigbee2mqtt/data/configuration.yaml`

`… serial:
port: /dev/ttyUSB.CC2531-01 …`

재부팅 후 장치는 올바른 권한을 갖게 되고 항상 동일한 이름을 유지합니다.

### 방법 2: 특정 그룹에 사용자 추가

https://github.com/esp8266/source-code-examples/issues/26 에서 언급된 것처럼, Linux 설치에 따라 다양한 그룹이 장치 소유권을 가질 수 있습니다.

사용자를 `uucp`, `tty`, `dialout` 그룹에 추가합니다:

```
sudo usermod -a -G uucp $USER
sudo usermod -a -G tty $USER
sudo usermod -a -G dialout $USER
```

장치를 재부팅하면 사용자가 장치에 접근할 수 있게 됩니다.

## 오류: `Coordinator failed to start, probably the panID is already in use, try a different panID or channel`

- panID를 증가시킨 후에도(설명은 [여기](../configuration/zigbee-network.md#network-config)) 이 오류가 계속 발생하고, 다른 USB 장치(예: SSD)가 연결된 Raspberry Pi를 사용하는 경우, SSD나 adapter를 파워드 USB 허브를 통해 연결해 보세요.
- 처음 시작에 성공하고 장치를 페어링한 후 이 오류가 발생하면 펌웨어가 잘못 플래싱된 것일 수 있습니다. 다른 컴퓨터에서 스틱을 다시 플래싱해 보세요([자세한 정보](https://github.com/Koenkk/zigbee2mqtt/issues/6302)). 이 문제는 주로 Slaesh의 CC2652RB 스틱과 함께 발생합니다.
- 이전 Zigbee 네트워크가 있었고 새 Zigbee adapter로 이런 오류가 발생하면, 이전 Zigbee 네트워크에 연결된 Zigbee router를 끄고 Zigbee2MQTT를 재시작해 보세요.

## 오류: `Resource temporarily unavailable Cannot lock port`

이 오류는 다른 프로그램이 이미 adapter를 사용하고(따라서 잠금) 있을 때 발생합니다. 다음 명령으로 어떤 프로그램인지 확인할 수 있습니다: `ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0` (`/dev/ttyACM0`을 adapter 포트로 교체하세요).

## Raspberry Pi 사용자

## Raspberry Pi OS

최소 Raspberry Pi OS 11을 사용하고 있는지 확인하세요.
실행 중인 버전을 확인하려면 다음을 실행합니다:

```bash
cat /etc/issue.net
```

## 좋은 전원 어댑터 사용

불량 전원 어댑터는 시스템과 USB 장치를 불안정하게 만들 수 있습니다. 좋은 전원 어댑터를 사용하세요.

`dmesg -w` 실행 시 아래와 같은 메시지가 보이면 불량 전원 어댑터를 사용 중인 것입니다.

```
[44870.355590] Under-voltage detected! (0x00050005)
[44874.515618] Voltage normalised (0x00000000)
[44880.755718] Under-voltage detected! (0x00050005)
[44889.075627] Voltage normalised (0x00000000)
```

파워드 USB 허브를 통해 adapter를 연결해 보세요(특히 Pi에 SSD가 연결되어 있는 경우).

## 연장 케이블이 올바르게 작동하는지 확인

불량 연장 케이블은 시스템과 adapter 사이의 연결 문제를 유발할 수 있습니다. 이의 증상은 아래와 같이 `dmesg -w` 로그에서 연결 끊김 메시지로 나타납니다.

```
[44929.156957] usb 1-1.5: USB disconnect, device number 119
[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg
[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09
[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC
[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments
```

## Openhab 사용자: zwave 바인딩 비활성화

Openhab zwave 바인딩은 Zigbee2MQTT와 간섭합니다.
자세한 정보는 [여기](https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245)를 참고하세요.

## CC2530 또는 CC2531 adapter의 경우, CC2540이 없는지 확인

CC2540은 외형이 CC2531과 거의 동일하여 혼동하기 쉽습니다. 그러나 이 장치는 Zigbee가 아닌 블루투스를 지원합니다. 칩을 직접 확인하여 구별할 수 있습니다.

## [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/) 설치 여부

Ubuntu 등에 기본 설치되는 ModemManager는 문제를 일으키는 것으로 알려져 있습니다. `sudo apt-get purge modemmanager` 명령으로 ModemManager를 제거하면 쉽게 해결됩니다.

## 컴퓨터에 충분한 리소스가 있는지 확인

컴퓨터 리소스가 부족하면 직렬 통신이 불안정해질 수 있습니다.
CPU와 메모리가 지속적으로 최대 용량으로 작동하면 리소스 부족을 나타낼 수 있습니다.
예를 들어 Raspberry Pi 3의 Home Assistant에서 Zigbee2MQTT 애드온을 사용하면 리소스 고갈이 발생할 수 있습니다.

## hciuart가 실행 중

hciuart는 다음을 실행하여 비활성화할 수 있습니다: `sudo systemctl disable hciuart`.

## Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1만 해당: 장치의 리셋 버튼 누르기

Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1에서 `Error: SRSP - SYS - version after 6000ms`로 Zigbee2MQTT가 시작에 실패하면, USB 케이블을 연결한 직후 리셋 버튼(USB 커넥터 옆의 버튼)을 잠깐 눌러야 하는 시스템에 장치를 연결한 것입니다. 이 문제는 주로 x86 아키텍처(예: Intel NUC, HPE Microserver, i7 노트북)에서만 관찰되었습니다. [#2162](https://github.com/Koenkk/zigbee2mqtt/issues/2162)도 참고하세요. adapter를 다시 연결할 때마다 이 과정을 반복해야 하며, 이 문제가 완전히 해결될 수 있는지는 아직 불명확합니다. ARM 기반 보드(Raspberry Pi, ODROID XU4)에서는 발생하지 않는 것 같습니다.

USB 케이블을 다시 꽂으면 문제가 해결될 수도 있습니다.

## CC2531 coordinator만 해당: 장치의 리셋 버튼 누르기

CC2531을 컴퓨터에 연결하면 녹색 LED가 켜져야 합니다. CC2531의 리셋 버튼을 누르면 녹색 LED가 꺼져야 합니다. CC2531에는 버튼이 2개 있으며, 리셋 버튼은 USB 포트에 가장 가까운 것입니다.
이제 Zigbee2MQTT를 다시 시작해 보세요.

## Texas Instruments LAUNCHXL-CC26X2R1 coordinator만 해당: 올바른 리비전인지 확인

보드의 리비전은 UniFlash에서 상단의 _more info_ 를 클릭한 후 _Read device info_ 를 누르면 확인할 수 있습니다.

올바른 리비전은 아래와 같이 **E**입니다.

![cc26xr1_revision](../../images/cc26xr1_revision.png)

이전 버전은 지원되지 않습니다(개발 보드입니다). 즉시 판매자에게 반품하세요.

## EmberZNet coordinator만 해당

[EmberZNet 오류](../adapters/emberznet.md#error-level)를 참고하세요.

## 저가 USB-UART 다중 연결

저가 USB-UART 변환기(CH341)를 사용하는 여러 장치가 연결되어 있는 경우, 동일한 idProduct, SerialNumber 등을 가질 수 있어 시스템에서 구별이 불가능하며 동일한 /dev/serial/by-id를 공유할 수 있습니다.
가장 쉬운 해결책은 장치 중 하나를 다른 uart-usb 변환기를 사용하는 것으로 교체하는 것입니다. 두 번째 해결책은 전체 변환기를 교체하거나 시리얼 번호를 추가할 수 없는 칩(CH341 같은)에 외부 EEPROM 메모리를 추가하여 시리얼 번호를 설정하는 것입니다.

## MQTT v5 연결 끊김

MQTT 명세 버전 5의 MQTT 브로커를 사용하는 경우, 오작동 시 연결이 끊길 수 있습니다.
예를 들어 "최대 패킷 크기" 초과(대규모 네트워크)로 발생할 수 있습니다.

이를 해결하려면 브로커를 적절히 설정하고 Zigbee2MQTT에도 조정 가능한 설정이 있는지 확인하세요. [MQTT 설정](../configuration/mqtt.md#server-connection)을 참고하세요.

## 오류: `startup failed - configuration-adapter mismatch - see logs above for more information`

`configuration.yml`에서 `pan_id`, `network_key` 또는 `ext_pan_id` 값 중 하나 이상을 수정하면 발생합니다. 의도적으로 변경한 경우 가장 쉬운 해결 방법은 `data/coordinator-backup.json` 파일을 삭제하고 다시 시작하는 것입니다. 이 작업은 네트워크를 초기화하므로 **모든 장치를 다시 페어링해야 합니다!** 또는 이전 값으로 되돌릴 수 있습니다. 이 경우 로그에서 오류 몇 줄 앞에 다음과 같은 내용을 찾을 수 있습니다:

```
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: Configuration is not consistent with adapter state/backup!
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - PAN ID: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Extended PAN ID: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Network Key: configured=****, adapter=****
[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Channel List: configured=**, adapter=**
```

(이 예시에서 실제 값은 `*`로 대체되었습니다) adapter에 나열된 값을 사용하여 설정 파일에 다시 입력할 수 있습니다. 단, 그대로 붙여 넣을 수 없습니다: 로그에서 키는 16진수 문자열로 출력되지만, 설정 파일에서 `ext_pan_id`와 `network_key`는 배열로 입력해야 합니다. 예를 들어 네트워크 키가 로그에서 `39af4d83h2dcb389`로 표시된다면 설정 파일에 다음과 같이 입력해야 합니다:

```
ext_pan_id: [0x39,0xaf,0x4d,0x83,0xh2,0xdc,0xb3,0x89]
```

## 네트워크 연결 Zigbee adapter: Zigbee2MQTT 서버에서 견고하고 신뢰할 수 있는 네트워크 adapter 사용

WiFi 또는 이더넷으로 연결된 Zigbee adapter를 사용하는 경우, Zigbee2MQTT는 serial-over-IP 프로토콜을 통해 LAN으로 Zigbee adapter와 통신합니다.

Zigbee2MQTT 서버에서 USB-WiFi 또는 USB-이더넷 adapter 사용은 권장하지 않습니다. 사양 면에서 온보드 adapter와 동등해 보이지만, 작은 케이스에 설계되어 있고 환기가 좋지 않아 과열되는 경향이 있습니다.  
이러한 adapter는 높은 부하나 과열 시 정지하거나 작동을 멈추는 것으로 알려져 있으며, 다음과 같은 오류를 유발합니다:

```
[2024-06-24 03:37:22] error: zh:ember:uart:ash: Received ERROR from NCP while connecting, with code=ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT.
[2024-06-24 03:37:22] error: zh:ember:uart:ash: ASH disconnected | NCP status: ASH_NCP_FATAL_ERROR
[2024-06-24 03:37:22] error: zh:ember:uart:ash: Error while parsing received frame, status=ASH_NCP_FATAL_ERROR.
```

이는 serial-over-IP 프로토콜에서 타임아웃이 발생한 경우이거나:

```
[2024-06-24 03:37:24] warning: zh:ember:uart:ash: Frame(s) in progress cancelled in [1ac1020b0a527e]
[2024-06-24 03:37:24] error: zh:ember:uart:ash: Received unexpected reset from NCP, with reason=RESET_SOFTWARE.
[2024-06-24 03:37:24] error: zh:ember:uart:ash: ASH disconnected: ASH_ERROR_NCP_RESET | NCP status: ASH_NCP_FATAL_ERROR
[2024-06-24 03:37:24] error: zh:ember:uart:ash: Error while parsing received frame, status=HOST_FATAL_ERROR.
[2024-06-24 03:37:24] error: zh:ember: !!! NCP FATAL ERROR reason=HOST_FATAL_ERROR. ATTEMPTING RESET... !!!
```

호스트와 NCP 간 통신이 동기화되지 않은 경우이며, 네트워크 문제의 명확한 징후이기도 합니다:

```
[2024-06-24 03:38:05] error: z2m:mqtt: Not connected to MQTT server!
[2024-06-24 03:38:05] error: z2m:mqtt: Cannot send message: topic: 'zigbee2mqtt/bridge/state', payload: '{"state":"offline"}
[2024-06-24 03:38:05] info: z2m:mqtt: Disconnecting from MQTT server
```

이는 Zigbee2MQTT가 LAN을 통해 MQTT 서버에 연결하지 못한 경우입니다.

이 상황에 가장 좋은 설정은 모든 부하 조건에서 통신의 신뢰성을 보장하는 Zigbee2MQTT 서버 마더보드에 내장된 이더넷 포트를 사용하는 것입니다.  
차선책으로 온보드 WiFi adapter를 사용할 수 있으며, 이 역시 신뢰성을 위해 설계되어야 하지만 WiFi 네트워크의 안정성도 고려하세요.  
모든 온보드 adapter가 사용 중이고 추가 네트워크 adapter가 필요하다면, 적절한 냉각 설계를 갖춘 PCIe 버스의 내부 네트워크 카드를 설치하는 것이 가장 좋습니다.

## 오류: 타임아웃 오류 또는 직렬 포트 열린 후 시작 실패로 인한 주기적 충돌

이러한 오류는 Zigbee 동글과 Zigbee2MQTT 간의 직렬 통신이 예기치 않게 작동을 멈출 때 발생할 수 있습니다.

이 오류를 유발할 수 있는 원인:

1. 호스트 컴퓨터와 Zigbee 동글 간의 하드웨어 연결이 불안정합니다.
   다음 예시에서는 연결이 불안정한 저가 USB 케이블과 좋은 USB 케이블을 비교합니다:
   ![good-vs-bad-usb-cable](../../images/good-vs-bad-usb-cable.jpg)
   이런 저가 케이블은 케이블을 건드리는 것만으로도 USB 연결이 끊길 수 있습니다.

2. Zigbee2MQTT가 가상 머신에서 실행 중이고 호스트와 VM 간의 USB 패스스루가 불안정합니다.
   이는 가상화 환경, USB 하드웨어 또는 둘의 조합으로 인해 발생할 수 있습니다.
   이러한 오류가 발생하면 설정의 복잡성을 줄이고 안정성을 개선하며 호스트와 USB 연결을 조사하는 데 도움이 되는 조치를 취할 수 있습니다.
   전체 USB 장치를 VM에 패스스루하는 대신 직렬 장치를 패스스루합니다.
   VM 설정이 다음에서 변경됩니다:
   host-(USB passthrough)->VM->USB-serial->serial(Zigbee2MQTT 설정용)
   에서
   host-(serial passthrough)->VM->serial(Zigbee2MQTT 설정용)
   으로

예를 들어, Proxmox Home Assistant OS 설치에서 직렬 장치를 패스스루하는 과정은 다음과 같습니다:

- Proxmox VM 하드웨어에 serial0(또는 serial1, 2, 3)를 추가합니다.  
  기본적으로 직렬 포트는 Proxmox 하드웨어 VM 설정에서 소켓("serial0: socket")이므로, 실제 직렬 장치를 가리키도록 VM 설정 파일 /etc/pve/quemu-server/{VMID}.conf의 이 파라미터를 변경해야 합니다. 예: "serial0: /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240122184528-if00"
- Home Assistant OS에서 getty로부터 ttyS0 직렬 포트를 해제합니다.  
  VM에서 이 패스스루된 직렬 포트는 ttyS0로 인식되지만, Home Assistant OS의 systemd는 기본적으로 /dev/ttyS0에 agetty를 생성합니다. 실제로 /mnt/boot/cmdline.txt 커널 커맨드라인 파라미터 파일에서 ttyS0가 콘솔로 설정되어 있습니다(내용은 "console=ttyS0 console=tty0").
  systemd가 ttyS0를 그대로 두고 agetty를 생성하지 않도록 VM의 이 cmdline.txt 파일을 변경해야 합니다. ttyS0 부분을 제거하면 cmdline.txt는 "console=tty0"가 됩니다.

이제 Zigbee2MQTT는 VM 내에서 "실제" 직렬 포트인 /dev/ttyS0를 통해 동글에 접근할 수 있습니다.
USB 장치의 문제는 호스트 커널에 기록되며 이 방법을 통해 dmesg로 쉽게 확인할 수 있어 직렬 장치의 문제와 분리할 수 있습니다.

## 스팸 장치

데이터 리포트를 남발하는 장치는 네트워크를 빠르게 혼잡하게 하고 전체 안정성을 저하시킬 수 있습니다. 이런 장치를 여러 개 사용하면 정기적으로 네트워크가 충돌할 수도 있습니다. 이것은 Tuya(및 파생 제품)와 같은 브랜드의 잘 알려진 문제입니다. 일부 mmWave 센서도 이 문제를 가진 것으로 알려져 있습니다(특히 초기 변형).

장치의 리포트 비율을 비활성화하거나 줄일 수 있습니다(모든 또는 특정 상태에 대해). 가능하면 [reporting](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-device-reporting-configure)을 필요에 맞게 설정하고 네트워크가 처리할 수 있는 수준에 맞춥니다.
그러나 위에서 언급한 장치들은 종종 적절한 설정을 허용하지 않으므로, 그 경우 실질적인 해결 방법이 없어 더 나은 것으로 교체하는 수밖에 없습니다.

::: tip TIP
여러 오픈 소스 프로젝트에서 Tuya OTA 업데이트 대체 펌웨어를 제공합니다(사용 전에 관련 문서를 모두 읽으세요). 예시:

- [https://github.com/romasku/tuya-zigbee-switch](https://github.com/romasku/tuya-zigbee-switch)
- [https://github.com/pvvx/ZigbeeTLc](https://github.com/pvvx/ZigbeeTLc)
- [https://github.com/Andrik45719/ZY-M100](https://github.com/Andrik45719/ZY-M100)
- [https://github.com/slacky1965](https://github.com/slacky1965)

:::
