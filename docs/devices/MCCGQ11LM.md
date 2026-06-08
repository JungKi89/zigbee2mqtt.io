---
title: "Aqara MCCGQ11LM control via MQTT"
description: "Integrate your Aqara MCCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara MCCGQ11LM

|     |     |
|-----|-----|
| Model | MCCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Door and window sensor |
| Exposes | battery, contact, device_temperature, voltage, power_outage_count, trigger_count |
| Picture | ![Aqara MCCGQ11LM](https://www.zigbee2mqtt.io/images/devices/MCCGQ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR1632 배터리를 사용합니다.

### 페어링
기기의 초기화 버튼을 약 5초간 길게 누릅니다(파란 LED가 깜빡이기 시작할 때까지).
이후 기기가 자동으로 네트워크에 참여합니다.
이 방법이 작동하지 않으면, 길게 눌러 페어링 프로세스를 시작한 후 인터뷰 과정이 완료될 때까지 약 1초에 한 번씩 버튼을 짧게 눌러주세요.

CC2531 USB 스틱을 사용하는 경우(https://github.com/Koenkk/zigbee2mqtt/issues/839 참고), Zigbee2MQTT를 종료한 뒤 USB 스틱을 뽑았다가 다시 꽂고 Zigbee2MQTT를 재시작하면 위 방법으로 페어링이 성공한 사례가 있습니다.
[스틱 펌웨어 업그레이드](https://darkxst.github.io/silabs-firmware-builder/) 후 ember 어댑터로 전환하면 이 페어링 문제가 해결될 수 있습니다.


### 문제 해결: 기기가 메시지 전송을 중단하거나 네트워크에서 연결이 끊어지는 경우
Xiaomi 기기는 Zigbee 표준을 완전히 준수하지 않기 때문에 때때로 네트워크에서 연결이 끊어지는 경우가 있습니다.
대부분의 경우 다음과 같은 이유로 발생합니다:
- 기기의 신호가 약한 경우. 발행된 메시지에서 `linkquality` 값으로 신호 품질을 확인할 수 있습니다. `linkquality` < 20은 약한 신호로 간주됩니다.
- 배터리 전압이 낮은 경우. 배터리가 충분해 보여도 발생할 수 있습니다. 다른 배터리로 교체해 보세요.
- Xiaomi 기기와 호환되지 않는 라우터를 통해 연결된 경우. Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi 등의 기기에서 이러한 문제가 발생하는 것으로 알려져 있습니다. 해결 방법으로는 기기를 중앙 코디네이터 가까이에서 초기화 버튼을 눌러 코디네이터에 직접 연결하는 것을 시도해볼 수 있습니다.

더 자세한 정보는 [여기](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623)에서 확인할 수 있습니다.

### 권장 사항
수평 슬라이드 방식으로 접촉이 이루어지는 경우(예: 센서가 미닫이문 상단에 설치된 경우), 센서가 서로 충돌하는 상태의 메시지를 세 개 이상 전송할 수 있습니다. 이 문제를 해결하려면 기기별 설정에서 `debounce` 옵션 사용을 고려해 보세요.

예시 (devices.yaml)


```yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Trigger count (numeric)
Indicates how many times the sensor was triggered (since last scheduled report).
Value can be found in the published state on the `trigger_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

