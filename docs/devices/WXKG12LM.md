---
title: "Aqara WXKG12LM control via MQTT"
description: "Integrate your Aqara WXKG12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG12LM

|     |     |
|-----|-----|
| Model | WXKG12LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless mini switch (with gyroscope) |
| Exposes | battery, voltage, action |
| Picture | ![Aqara WXKG12LM](https://www.zigbee2mqtt.io/images/devices/WXKG12LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 더 이상 사용되지 않는 클릭 이벤트
이 기기는 기본적으로 더 이상 사용되지 않는 `click` 이벤트를 노출합니다. 대신 `action` 이벤트를 사용하는 것을 권장합니다.

`click` 이벤트를 비활성화하려면 `configuration.yaml`에서 이 기기에 `legacy: false`를 설정하세요. 예시:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```


### 페어링
기기의 리셋 버튼을 약 5초 동안 누르고 있습니다 (파란 불이 깜박이기 시작할 때까지).
그 후 기기가 자동으로 네트워크에 참여합니다. 작동하지 않으면 버튼을 한 번 짧게 눌러보세요.


### 문제 해결: 기기가 메시지 전송을 중단하거나 네트워크에서 연결이 끊어지는 경우
Xiaomi 기기는 Zigbee 표준을 완전히 준수하지 않기 때문에, 네트워크에서 연결이 끊어지는 경우가 있습니다.
대부분의 경우 다음 이유로 발생합니다:
- 신호가 약한 경우, 게시된 메시지에서 `linkquality`로 신호 품질을 확인할 수 있습니다. linkquality < 20은 약한 신호로 간주됩니다.
- 배터리 전압이 낮은 경우, 배터리가 아직 가득 차 있는 것처럼 보여도 발생할 수 있습니다. 다른 배터리를 사용해 보세요.
- Xiaomi 기기를 처리하지 못하는 라우터를 통해 연결된 경우. Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi 기기에서 이 문제가 발생하는 것으로 알려져 있습니다. 기기를 물리적으로 가까이에서 리셋 버튼을 눌러 코디네이터에 직접 연결하는 것이 해결책이 될 수 있습니다.

이에 대한 자세한 내용은 [여기](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623)에서 확인할 수 있습니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `hold`, `release`, `shake`.

