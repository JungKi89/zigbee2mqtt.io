---
---

# Adapter의 IEEE 주소 복사하기

한 stick에서 다른 stick으로 마이그레이션할 때는 새 stick이 이전 stick과 동일한 IEEE 주소를 사용하는 것이 중요합니다. 일부 기기는 IEEE 주소로 coordinator를 조회하므로, coordinator의 IEEE 주소가 변경되면 동작하지 않습니다. 이 작업을 수행할 수 있는 다양한 도구가 있습니다.

먼저 이전 stick의 IEEE 주소를 확인해야 합니다. 두 가지 방법이 있습니다:

1. 프런트엔드를 열고 "Settings" -> "About" -> "Coordinator IEEE Address"로 이동합니다
1. `data/database.db`를 열면 첫 번째 줄에 coordinator IEEE 주소가 있습니다:

```json
{"id":1,"type":"Coordinator","ieeeAddr":"0x00124b000e89686d","nwkAddr":0...
```

_기본_ IEEE 주소는 동일하게 유지되며, 이 지침은 _보조_ IEEE 주소만 변경합니다. 아래 도구들은 일반적으로 기본 IEEE 주소만 표시하므로 변경이 적용되지 않는 것처럼 보일 수 있습니다. 아래 지침에 따라 보조 IEEE 주소를 설정하면 위에서 언급한 문제를 방지하기에 충분합니다.

## XZG Multi-Tool

지원: CC2652, CC1352, CC2538, EFR32 기반 coordinator

1. [XZG Multi-tool](https://mt.xyzroe.cc/)을 열고, coordinator의 칩 패밀리를 선택하고 `Choose Serial`을 클릭합니다
2. 연결에 성공하면 bootloader 및 firmware 버전이 표시됩니다. TI adapter의 경우 `Device Info` 섹션에 기본(고정) IEEE 주소도 표시됩니다
3. IEEE 섹션으로 스크롤하여 `Read`를 클릭하면 coordinator의 현재 IEEE 주소를 가져옵니다 (TI의 경우 보조, EFR32 기반 adapter의 경우 기본)
4. 해당 필드에 새 IEEE 주소를 입력하고 `Write`를 클릭합니다

::: warning
EFR32 기반 adapter를 사용하고 새 IEEE 주소를 쓰려고 할 때 오류가 발생하면, 이는 기기의 firmware가 NV3 토큰을 지원하지 않음을 나타냅니다. MFG_CUSTOM_EUI_64 필드에 새 IEEE 주소를 쓸 수 있지만, 이는 **한 번만** 쓸 수 있으며 나중에 변경할 수 없습니다! 진행하려면 `Force` 체크박스를 선택하고 `Write`를 다시 클릭하세요.

**`Force` 옵션은 되돌릴 수 없는 한 번 쓰기 작업입니다!**
:::

## ZigStar Multi Tool

지원: CC2652, CC1352, CC2538

1. 도구를 [다운로드](https://github.com/xyzroe/ZigStarGW-MT/releases)하고 실행합니다
1. adapter를 연결하고 BSL 모드로 전환합니다. BSL 모드로 전환하는 방법은 adapter 매뉴얼을 참조하세요
1. 새로 고침 아이콘을 클릭하고 adapter를 선택합니다
1. "IEEE" 아래에 이전 coordinator의 IEEE 주소를 입력합니다 (앞의 `0x`는 생략 가능)
1. "Write IEEE"를 체크하고 "Write IEEE"를 클릭합니다
1. stick의 firmware를 다시 Flash합니다 (이 단계가 중요합니다. 그렇지 않으면 coordinator가 새 IEEE 주소를 사용하지 않습니다)

## cc2538-bsl

지원: CC2652, CC1352, CC2538

1. 도구를 [다운로드](https://github.com/JelmerT/cc2538-bsl)합니다
1. adapter를 연결하고 BSL 모드로 전환합니다. BSL 모드로 전환하는 방법은 adapter 매뉴얼을 참조하세요 (필요한 경우, 일부 adapter에는 autobootloader가 있습니다, 예: [이것](https://slae.sh/projects/cc2652/#flash-it))
1. `./cc2538-bsl.py -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee -p /dev/tty.usbserial-10 ./fw.hex`를 실행합니다. 다음을 교체하세요:
    - `00:12:4b:aa:bb:cc:dd:ee`를 coordinator IEEE 주소로 (앞의 `0x`는 생략 가능)
    - `/dev/tty.usbserial-10`을 adapter 경로로 (Sonoff Zigbee USB Dongle Plus의 경우 `--bootloader-sonoff-usb`도 필요합니다)
    - `./fw.hex`를 adapter firmware 경로로

## FLASH-PROGRAMMER-2

지원: CC2652, CC1352, CC2538

1. 도구를 [다운로드](https://www.ti.com/tool/FLASH-PROGRAMMER)합니다
1. adapter를 연결하고 BSL 모드로 전환합니다. BSL 모드로 전환하는 방법은 adapter 매뉴얼을 참조하세요
1. adapter를 선택하고 "MAC address"로 이동합니다
1. "Secondary Address" -> "IEEE 802.15.4 MAC address"에 이전 coordinator IEEE 주소를 입력합니다 (앞의 `0x`는 생략 가능)
1. "Write"를 누릅니다
1. stick의 firmware를 다시 Flash합니다 - 오른쪽 하단의 Secondary MAC 아래에서 "Retain secondary IEEE"를 체크합니다 (이 단계가 중요합니다. 그렇지 않으면 coordinator가 새 IEEE 주소를 사용하지 않습니다)

## Universal Silicon Labs Flasher

지원: EFR32 기반 coordinator

1. 도구를 [설치](https://github.com/NabuCasa/universal-silabs-flasher)합니다
2. adapter를 연결합니다
3. `universal-silabs-flasher --device /dev/ttyACM0 write-ieee --ieee 0011223344556677`을 실행합니다
    - `/dev/ttyACM0`을 새 adapter 경로로 교체합니다
    - `0011223344556677`을 coordinator의 IEEE 주소로 교체합니다. hex 접두사(0x)가 없습니다.
