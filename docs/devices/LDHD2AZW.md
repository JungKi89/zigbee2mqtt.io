---
title: "Leedarson LDHD2AZW control via MQTT"
description: "Integrate your Leedarson LDHD2AZW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Leedarson LDHD2AZW

|     |     |
|-----|-----|
| Model | LDHD2AZW  |
| Vendor  | [Leedarson](/supported-devices/#v=Leedarson)  |
| Description | Magnetic door & window contact sensor |
| Exposes | contact, battery_low, tamper, temperature, battery |
| Picture | ![Leedarson LDHD2AZW](https://www.zigbee2mqtt.io/images/devices/LDHD2AZW.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링

1.  상단 커버를 열어 배터리 당김 탭을 노출시키고, 플라스틱 탭을 당겨 센서를 활성화한 후 상단 커버를 닫습니다.
2.  디바이스가 부팅되는 동안 LED 표시등이 2초간 녹색으로 켜집니다.
3.  부팅 완료 후 네트워크 스캔 중에 LED가 5초마다 3번 녹색으로 깜박입니다.
4.  10분 후 네트워크를 찾지 못하면 센서가 절전 모드로 전환됩니다. 페어링 프로세스를 재시작하려면 배터리 커버를 열었다 닫아 센서를 간섭하거나, 자석을 센서 근처에 놓았다가 3인치(약 7.6cm) 이상 멀리 이동하여 구역 이벤트를 생성합니다.
5.  디바이스가 홈 컨트롤러 또는 보안 시스템에 성공적으로 페어링되면 설치 준비가 완료됩니다. 설치 섹션의 단계를 따르세요.

### 작동

1. 정상 작동 중에는 센서의 LED가 꺼진 상태로 유지됩니다.
2. 센서에는 탬퍼 스위치가 장착되어 있습니다. 배터리 커버를 열면 홈 컨트롤러 또는 보안 시스템에 오류가 발생합니다. 커버를 열면 30초간 통신 테스트도 활성화됩니다. 배터리 커버를 닫으면 오류가 해제됩니다.

### 공장 초기화 및 재부팅

센서를 공장 초기화해야 하는 경우:

1. 홈 컨트롤러 또는 보안 시스템에 접속하여 디바이스 메뉴를 통해 초기화가 필요한 센서를 삭제합니다.
1. 배터리 커버를 밀어 배터리와 리셋 해제 버튼을 노출시킵니다.
1. 빨간색 리셋 텍스트가 보일 때까지 배터리 커버를 밀면서 작은 리셋 해제 버튼을 누릅니다. 소형 드라이버나 클립이 필요할 수 있습니다.
1. 배터리를 제거하고 10초간 기다린 후 다시 삽입합니다.
1. 배터리 설치 후 리셋 버튼이 더 이상 노출되지 않지만 커버가 완전히 닫히지 않은 상태로 배터리 커버를 밉니다.
   _(**참고:** 이 작업은 배터리 설치 후 4초 이내에 수행해야 합니다.)_
1. 공장 초기화 프로세스는 약 1분이 소요됩니다. 이 시간 동안 LED가 녹색으로 점등 상태를 유지합니다. LED가 점등 상태를 유지하지 않으면 4초 이내에 리셋을 해제하지 못한 것이므로 1~4단계를 반복해야 합니다.
1. 공장 초기화 완료 후 LED가 5초마다 3번 녹색으로 깜박여 페어링 준비 완료를 나타냅니다.

### 문제 해결

홈 컨트롤러 또는 보안 시스템과의 페어링에 문제가 있으면 다음 단계를 시도하세요:

1. 배터리 커버를 열었다 닫아 탬퍼를 트리거하고 페어링 프로세스를 재시작합니다.
1. 계속해서 페어링에 문제가 있으면 배터리를 10초간 제거한 후 다시 삽입합니다.
1. 계속해서 페어링에 문제가 있으면 “공장 초기화” 절차를 사용하여 다시 페어링을 시도합니다.

디바이스가 홈 컨트롤러 또는 보안 시스템과 통신했지만 더 이상 통신하지 않는 경우 다음 단계를 시도하세요:

1. 디바이스를 수개월 또는 수년간 사용했으며 갑작스러운 문제가 발생한 경우, 컨트롤러에서 디바이스의 배터리 부족 여부를 확인하세요. 배터리 교체 지침을 따르세요.
1. 공장 초기화를 수행하고 위의 단계에 따라 센서를 재페어링합니다.
1. 배터리 커버를 열었다 닫아 탬퍼를 트리거합니다. LED가 빨간색으로 깜박이면 RF 환경 변화로 인해 센서가 더 이상 홈 컨트롤러 또는 보안 시스템과 통신할 수 없음을 나타냅니다. 시스템 범위가 원하는 센서 위치까지 도달할 수 있도록 리피터를 설치하세요.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

