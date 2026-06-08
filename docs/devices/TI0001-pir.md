---
title: "Livolo TI0001-pir control via MQTT"
description: "Integrate your Livolo TI0001-pir via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-06T22:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-pir

|     |     |
|-----|-----|
| Model | TI0001-pir  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee motion Sensor |
| Exposes | occupancy |
| Picture | ![Livolo TI0001-pir](https://www.zigbee2mqtt.io/images/devices/TI0001-pir.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

페어링 후 디바이스는 "TI0001" 디바이스로 표시됩니다. 페어링 직후 Zigbee2MQTT 웹 프론트엔드 또는 [MQTT 메시지](../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestdeviceconfigure)를 사용하여 디바이스 재구성을 수동으로 트리거해야 합니다.
문제가 발생한 경우, 디바이스를 제거한 후 페어링 및 재구성을 다시 시도하는 것이 좋습니다.

### 중요
이 디바이스들은 채널 26에서만 사용할 수 있습니다.
이 디바이스들은 제조사 네트워크 키(ext_pan_id)에 고정되어 있습니다.
설정 파일 [data/configuration.yaml](../guide/configuration/)에 다음 내용이 포함되어 있어야 합니다:

```yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
```

이 디바이스들은 동일 네트워크의 다른 Zigbee 디바이스와 함께 사용하지 못할 수 있습니다.
Livolo 전용 코디네이터를 추가하고 새 네트워크를 생성해야 할 수도 있습니다. Deconz 어댑터는 코디네이터로 작동하지 않을 수 있습니다. Deconz 동글로 페어링하려면 Livolo 허브와 디바이스를 페어링한 직후에 진행해야 하지만, 디바이스의 상태 메시지가 Zigbee2MQTT에 반영되지 않습니다(버튼이 눌렸는지 확인 불가). Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P는 리플래시 후 작동하는 것으로 보입니다. 디바이스 인터뷰를 완료하려면, 디바이스가 페어링 모드를 종료하기 전에(즉, 빠른 깜박임이 끝나기 전에, 디바이스가 Zigbee2MQTT에 처음 나타나자마자) 재페어링을 시작해야 합니다.
새 네트워크를 생성하기로 했다면, 다른 'pan_id'를 지정해야 합니다.

```yaml
advanced:
  pan_id: 6756
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

