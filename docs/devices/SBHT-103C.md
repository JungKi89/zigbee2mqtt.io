---
title: "Shelly SBHT-103C control via MQTT"
description: "Integrate your Shelly SBHT-103C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:12:45
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly SBHT-103C

|     |     |
|-----|-----|
| Model | SBHT-103C  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | BLU H&T display Zigbee |
| Exposes | battery, temperature, humidity, light_level, dark_threshold, bright_threshold |
| Picture | ![Shelly SBHT-103C](https://www.zigbee2mqtt.io/images/devices/SBHT-103C.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Shelly BLU H&T Display ZB Black - SBHT-103C
https://www.shelly.com/blogs/documentation/shelly-blu-h-t-display-zb

## 기기 설정

ZigBee를 통한 시계 동기화는 지원되지 않습니다.

펌웨어 업데이트 및 시계 동기화:
1. `Shelly BLE Debug` 모바일 앱으로 기기를 스캔합니다.
1. 앱에서 `Read`를 클릭합니다.
1. 기기 뒷면의 버튼을 누릅니다.
1. 펌웨어를 업데이트하려면 `OTA`를 클릭하고 안내에 따릅니다.
1. 시계를 업데이트하려면 기기에서 설정 모드로 진입합니다 (한 번 클릭, 화면에 "set"가 표시되어야 함).
1. 뒷면 버튼을 빠르게 두 번 누릅니다 (기기 왼쪽 상단에 "sync"가 표시되어야 함).
1. 시계가 GMT+0 시간대로 동기화됩니다.
1. `Shelly BLE Debug` 앱을 엽니다.
1. `Read`로 기기에 연결합니다.
1. `UTC (0 min)`을 클릭하여 시간대를 설정합니다 (오프셋은 분 단위).

단일 버튼

    1회 누름: 3분 동안 설정 모드 진입.

        1회 누름: 설정 모드 종료.

        빠르게 2회 누름: Bluetooth 게이트웨이로 설정된 Shelly 기기를 통해 강제 시계 동기화.

        빠르게 4회 누름: Bluetooth 페어링 모드 진입.

        빠르게 5회 누름: Zigbee 페어링 모드 진입.

        5초 동안 길게 누름: Bluetooth 켜기/끄기 전환.

        10초 동안 길게 누름: Zigbee 켜기/끄기 전환.

        30초 동안 길게 누름: 기기를 공장 초기화.

    빠르게 2회 누름: 시계 표시를 시간 또는 날짜 표시로 전환.

    빠르게 3회 누름: 온도 단위를 섭씨와 화씨 사이에서 전환. 섭씨를 선택하면 날짜 형식은 DD.MM이고, 화씨를 선택하면 날짜 형식은 MM.DD입니다.

    빠르게 4회 누름: 화면 색상 반전.

    빠르게 5회 누름: 시계 형식을 24시간제와 12시간제 사이에서 전환.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Light level (enum)
Coarse light level.
Value can be found in the published state on the `light_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_level": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `dark`, `twilight`, `bright`.

### Dark threshold (numeric)
Lux threshold below which light level is dark.
Value can be found in the published state on the `dark_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dark_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dark_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `lx`.

### Bright threshold (numeric)
Lux threshold above which light level is bright.
Value can be found in the published state on the `bright_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"bright_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bright_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `lx`.

