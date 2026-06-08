---
title: "SONOFF ZBDongle-E control via MQTT"
description: "Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T20:52:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBDongle-E

|     |     |
|-----|-----|
| Model | ZBDongle-E  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware |
| Exposes | light_indicator_level |
| Picture | ![SONOFF ZBDongle-E](https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### SONOFF ZBDongle-E 라우터 만들기
일반 Sonoff Zigbee 3.0 USB 동글 플러스(EFR32MG21 칩이 내장된 "ZBDongle-E" 모델)에 라우터 펌웨어를 플래싱하면 강력한 Zigbee 라우터를 만들 수 있습니다. 기기 플래싱 공식 가이드는 여기에서 확인할 수 있습니다: [SONOFF Zigbee 3.0 USB dongle plus firmware flashing](https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf). 가이드에는 공식 [SONOFF ZBDongle-E용 라우터 펌웨어](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router) 링크도 포함되어 있습니다.
간단한 방법은 Itead 웹 플래셔 https://dongle.sonoff.tech/sonoff-dongle-flasher/ 를 사용하여 최신 Zigbee 라우터를 선택하는 것입니다. 플래싱 완료 후(빨간색과 녹색 표시등이 고정 모드로 켜집니다) Zigbee 코디네이터에 페어링할 수 있습니다!
  
기기를 분해하지 않는 대안으로 브라우저 기반의 [Silabs Firmware Flasher](https://darkxst.github.io/silabs-firmware-builder/)를 사용할 수도 있습니다. 플래싱 전에 라우터 펌웨어를 다운로드하고 동글을 컴퓨터의 USB 포트에 꽂습니다. WebSerial API를 지원하는 브라우저가 필요하며, 확실하지 않다면 **Google Chrome** 또는 **Microsoft Edge**를 사용하세요. 플래싱 완료 후 동글은 즉시 페어링 모드로 재부팅됩니다. Z2M에서 평소처럼 페어링하면 됩니다.
### 추가 참고 사항
SONOFF의 가이드는 세부 내용이 부족합니다. 다음은 추가 참고 사항입니다:
* 첫째, 기기를 분해하고 로직 보드를 하우징에서 꺼내야 합니다. 이를 위해 **J00 십자 드라이버**가 필요합니다.
  ![dongle-e-screws](https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-screws.jpg)
  ![dongle-e-board-in-housing](https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-board-in-housing.jpg)
* 둘째, 기기에 펌웨어 이미지를 전송하려면 **[XMODEM 파일 전송 프로토콜](https://en.wikipedia.org/wiki/XMODEM)을 지원하는 소프트웨어**가 필요합니다. Ubuntu와 같은 Debian Linux에서는 lrzsz를 사용할 수 있습니다.
  * XMODEM 전송 프로토콜 및 터미널 에뮬레이터 Putty 설치:
  
      * debian 기반 OS: `sudo apt install lrzsz putty`
      * arch 기반 OS: `sudo paxman -S lrzsz putty`
  * 시리얼 포트 접근을 위해 사용자가 dialout 그룹에 속해 있어야 합니다.
      
      * debian 기반 OS: `sudo adduser $USER dialout`
      * arch 기반 OS: `sudo usermod -a -G uucp $USER`
  * 그룹 설정이 적용되도록 로그아웃 후 다시 로그인합니다 (`id` 명령으로 확인 가능).
* 셋째, 기기를 꽂습니다. 전원이 연결된 상태에서 노출된 로직 보드를 다루어야 합니다. **USB 연장 케이블**을 사용하면 작업이 훨씬 편리합니다.
* 넷째, 부트로더 모드로 진입하려면:
  * 기기를 꽂습니다.
  * 시리얼 소프트웨어로 기기에 연결합니다 (시리얼 연결 파라미터는 가이드 참조).
      
      `putty -serial -sercfg 115200,8,n,1 /dev/ttyACM0` 

      `PuTTY: unable to load font "server:fixed"` 오류가 발생하면 putty 명령 전에 `export GDK_BACKEND=x11`을 실행합니다.

  * "BOOT" 버튼을 길게 누릅니다 (아래 이미지 참조).
  
      ![dongle-e-buttons](https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-buttons.png)
  * "BOOT" 버튼을 누른 상태에서 "RST" 버튼을 한 번 눌러 기기를 재시작합니다. 아래 출력이 표시되면 "BOOT" 버튼을 놓습니다.
  
      ![putty-bootloader-1](../../docs/images/putty-bootloader-1.png)
* 다섯째, 파일을 업로드하려면:
  * 부트로더 터미널에서 ‘1’을 눌러 업로드를 시작합니다.

      ![putty-bootloader-2](../../docs/images/putty-bootloader-2.png)
  * 호스트 시스템에서 새 터미널을 엽니다. [github.com/darkxst/silabs-firmware-builder](https://github.com/darkxst/silabs-firmware-builder/releases)에서 라우터 펌웨어 *.gbl 파일을 다운로드합니다. 예:

      `wget https://github.com/darkxst/silabs-firmware-builder/releases/download/20250627/zbdonglee_zigbee_ncp_8.0.3.0_sw_flow_115200.gbl`
  * XMODEM을 통해 파일을 전송합니다.

      * debian 기반 OS: `sx zbdonglee_zigbee_ncp_8.0.3.0_sw_flow_115200.gbl < /dev/ttyACM0 > /dev/ttyACM0`
      * arch 기반 OS: `lrzsz-sx -X zbdonglee_zigbee_ncp_8.0.3.0_sw_flow_115200.gbl < /dev/ttyACM0 > /dev/ttyACM0` (-X 없이는 xmodem 프로토콜을 사용하지 않습니다)
  * ‘Serial upload complete’가 표시될 때까지 기다린 후 부트로더 터미널에서 ‘2’를 눌러 동글을 재시작합니다.
* 마지막으로, 동글의 LED가 녹색으로 깜박이면 페어링 모드에 있음을 나타냅니다. Z2M에서 평소처럼 페어링하면 됩니다.
* 참고: USB 3.x 소켓에 꽂으면 페어링이 되지 않을 수 있습니다. 페어링에 실패하면 USB 2 소켓이나 독립형 USB 충전기로 이동해 보세요.
* 동글을 다시 페어링해야 하는데 표시되지 않는 경우 다음 단계별 가이드를 시도해 보세요:
    1. 기기를 분해합니다.
    2. 안테나를 다시 연결합니다 (소손 방지).
    3. 기기에 전원을 공급합니다.
    4. Zigbee2MQTT 코디네이터에서 참가 허용(페어링 허용)을 활성화합니다.
    5. 부트 버튼을 약 5초 동안 누릅니다 (녹색 LED가 깜박이지 않을 수 있습니다).
    6. 기기가 사용 가능해질 때까지 모니터링합니다.
    7. 기기 전원을 끄고 안테나를 제거합니다.
    8. 기기를 재조립하고 안테나를 연결합니다.
    9. 라우터를 설계된 위치에 배치합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Light indicator level (numeric)
Brightness of the indicator light.
Value can be found in the published state on the `light_indicator_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.

