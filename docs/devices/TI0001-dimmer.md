---
title: "Livolo TI0001-dimmer control via MQTT"
description: "Integrate your Livolo TI0001-dimmer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-05T19:15:16Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Livolo TI0001-dimmer

|     |     |
|-----|-----|
| Model | TI0001-dimmer  |
| Vendor  | [Livolo](/supported-devices/#v=Livolo)  |
| Description | Zigbee dimmer |
| Exposes | light (state, brightness) |
| Picture | ![Livolo TI0001-dimmer](https://www.zigbee2mqtt.io/images/devices/TI0001-dimmer.png) |



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

따라서 이 디바이스들은 다른 Zigbee 디바이스와 함께 사용하지 못할 수 있습니다.
Livolo 전용 코디네이터를 추가하고 새 네트워크를 생성해야 할 수도 있습니다.
새 네트워크를 생성하기로 했다면, 다른 'pan_id'를 지정해야 합니다.

```yaml
advanced:
  pan_id: 6756
```
<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                

