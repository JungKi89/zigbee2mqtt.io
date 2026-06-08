---
title: "Aqara RTCGQ11LM control via MQTT"
description: "Integrate your Aqara RTCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara RTCGQ11LM

|     |     |
|-----|-----|
| Model | RTCGQ11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Motion sensor |
| Exposes | battery, occupancy, device_temperature, voltage, illuminance, power_outage_count |
| Picture | ![Aqara RTCGQ11LM](https://www.zigbee2mqtt.io/images/devices/RTCGQ11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR2450 배터리를 사용합니다.

### 페어링
기기의 리셋 버튼을 약 5초 동안 길게 누릅니다(파란 불빛이 깜박이기 시작할 때까지).
이후 기기가 자동으로 연결됩니다. 작동하지 않으면 버튼을 짧게 한 번 눌러보세요.

CC2531 USB 스틱을 사용하는 일부 사용자의 경우(https://github.com/Koenkk/zigbee2mqtt/issues/839 참고) Zigbee2MQTT를 종료하고 USB 스틱을 뽑았다가 다시 꽂은 후 Zigbee2MQTT를 재시작하면 위 방법으로 페어링이 성공한 것으로 확인되었습니다.
[스틱 펌웨어를 업그레이드](https://darkxst.github.io/silabs-firmware-builder/)한 후 ember 어댑터로 전환하면 이 페어링 문제를 해결할 수도 있습니다.


### 문제 해결: 기기가 메시지 전송을 멈추거나 네트워크에서 연결이 끊어지는 경우
Xiaomi 기기는 Zigbee 표준을 완전히 준수하지 않아, 간혹 네트워크에서 연결이 끊어지는 경우가 있습니다.
대부분의 경우 다음과 같은 이유로 발생합니다:
- 신호가 약한 경우 - 게시 메시지의 `linkquality`에서 신호 품질을 확인할 수 있습니다. linkquality < 20은 약한 신호로 간주됩니다.
- 배터리 전압이 낮은 경우 - 배터리가 아직 충분해 보여도 발생할 수 있습니다. 다른 배터리를 시도해 보세요.
- Xiaomi 기기와 호환되지 않는 라우터를 통해 연결된 경우 - Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi 기기에서 이런 문제가 알려져 있습니다. 리셋 버튼을 누르며 중앙 코디네이터 가까이 이동하여 직접 연결하면 해결될 수 있습니다.

더 자세한 내용은 [여기](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623)에서 확인할 수 있습니다.

### `occupancy_timeout` 옵션에 대한 참고
`occupancy_timeout`은 60초 미만으로 설정하지 않는 것을 권장합니다.
이유는 다음과 같습니다: 모션을 감지한 후 센서는 정확히 60초 동안 모든 움직임을 무시합니다. 이 60초 이후에 움직임이 있으면 새 메시지
(`occupancy: true`)가 전송되고 센서는 다시 1분 동안 대기합니다.
따라서 `occupancy: true` 상태를 유지하려면 이 60초 대기 후 지속적인 재실 여부를 판단할 적절한 시간이 필요합니다.
이것은 예상된 동작입니다([#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973) 참고).
이를 해결하려면
[하드웨어 수정](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)이
필요합니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`

* `no_occupancy_since`: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

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

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

