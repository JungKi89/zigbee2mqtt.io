---
title: "Shelly S4SW-002P16EU-COVER control via MQTT"
description: "Integrate your Shelly S4SW-002P16EU-COVER via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4SW-002P16EU-COVER

|     |     |
|-----|-----|
| Model | S4SW-002P16EU-COVER  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | 2PM Gen4 (Cover mode) |
| Exposes | switch_type, cover (state, position, tilt), wifi_status, ip_address, dhcp_enabled, wifi_config, action |
| Picture | ![Shelly S4SW-002P16EU-COVER](https://www.zigbee2mqtt.io/images/devices/S4SW-002P16EU-COVER.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Zigbee / Matter 모드
기기는 기본적으로 Matter 모드로 출고됩니다. Zigbee2MQTT와 함께 사용하려면 Zigbee 모드로 전환해야 합니다. Web UI를 통하거나 기기 뒷면의 버튼을 5번 눌러 전환할 수 있습니다. 이후 기기는 3분 동안 페어링 모드로 진입합니다. 페어링 모드를 다시 시작하려면 버튼을 세 번 다시 누릅니다.

### 사용 시나리오
Shelly 2PM Gen4 기기는 Zigbee2MQTT에서 별도의 기기로 표시되는 두 가지 사용 시나리오를 지원합니다:

- **커버 제어** [(`S4SW-002P16EU-COVER`)](/devices/S4SW-002P16EU-COVER.html) - 이 기기는 전력 모니터링과 함께 리프트 및 틸트 기능을 갖춘 창문 가리개 제어를 지원합니다
- **스위치 제어** [(`S4SW-002P16EU-SWITCH`)](/devices/S4SW-002P16EU-SWITCH.html) - 전력 모니터링과 함께 이중 스위치 기능을 제공합니다

사용 방식은 엔드포인트 설정에 따라 자동으로 감지됩니다. 현재 사용 방식 변경은 Shelly WebUI를 통해서만 가능합니다.

### 커버 모드 기능
커버 모드로 작동 시 이 기기는 다음을 제공합니다:
- 창문 가리개 제어(리프트 및 틸트)
- 위치 피드백
- 상태 보고(OPEN/CLOSE)

제조사 제품 페이지: [Shelly 2PM Gen4](https://kb.shelly.cloud/knowledge-base/shelly-2pm-gen4)

### 유지관리 및 공장 초기화
유지관리를 위해 기기 내장 액세스 포인트와 블루투스를 활성화하려면 기기 뒷면의 버튼을 5초 동안 길게 누릅니다. 10초 동안 누르면 공장 초기화가 실행됩니다.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Switch type (enum, sw1 endpoint)
Switch input type.
Value can be found in the published state on the `switch_type_sw1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_sw1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_sw1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`.

### Switch type (enum, sw2 endpoint)
Switch input type.
Value can be found in the published state on the `switch_type_sw2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_sw2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_sw2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

### Wi-Fi status (text)
Current connection status.
Value can be found in the published state on the `wifi_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_status": ""}`.
It's not possible to write (`/set`) this value.

### IP address (text)
IP address currently assigned to the device.
Value can be found in the published state on the `ip_address` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ip_address": ""}`.
It's not possible to write (`/set`) this value.

### DHCP enabled (binary)
Indicates whether DHCP is used to automatically assign network settings.
Value can be found in the published state on the `dhcp_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dhcp_enabled": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` dHCP enabled is ON, if `false` OFF.

### Wi-Fi Configuration (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi_config": {"enabled": VALUE, "ssid": VALUE, "password": VALUE, "static_ip": VALUE, "net_mask": VALUE, "gateway": VALUE, "name_server": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi_config": ""}`.
- `enabled` (binary): Enable/disable Wi-Fi connectivity allowed values: `true` or `false`
- `ssid` (text): Name (SSID) of the Wi-Fi network to connect to 
- `password` (text): Password for the selected Wi-Fi network 
- `static_ip` (text): Manually assigned IP address (used when DHCP is disabled) 
- `net_mask` (text): Subnet mask for the static IP configuration 
- `gateway` (text): Default gateway address for static IP configuration 
- `name_server` (text): Name server address for static IP configuration 

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `input_1_on`, `input_1_off`, `input_1_toggle`, `input_1_hold`, `input_2_on`, `input_2_off`, `input_2_toggle`, `input_2_hold`.

