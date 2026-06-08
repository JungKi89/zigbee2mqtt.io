---
title: "Aqara MCCGQ12LM control via MQTT"
description: "Integrate your Aqara MCCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-17T18:57:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara MCCGQ12LM

|     |     |
|-----|-----|
| Model | MCCGQ12LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Door and window sensor T1 |
| Exposes | contact, battery, voltage |
| Picture | ![Aqara MCCGQ12LM](https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.png) |
| White-label | Aqara DW-S03D, Yandex YNDX-00520 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 페어링
기기의 초기화 버튼을 약 5초간 길게 누릅니다(파란 LED가 깜빡이기 시작할 때까지).
이후 기기가 자동으로 네트워크에 참여하지만, 인터뷰 과정이 완료되지 않을 수 있습니다.
그런 경우, 인터뷰 과정이 성공적으로 완료될 때까지 초기화 버튼을 짧게 눌러 LED가 계속 깜빡이도록 유지하세요.

### 권장 사항
수평 슬라이드 방식으로 접촉이 이루어지는 경우(예: 센서가 미닫이문 상단에 설치된 경우), 센서가 서로 충돌하는 상태의 메시지를 세 개 이상 전송할 수 있습니다. 이 문제를 해결하려면 기기별 설정에서 `debounce` 옵션 사용을 고려해 보세요.

예시 (devices.yaml)


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

