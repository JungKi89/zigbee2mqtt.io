---
title: "Smartenit ZBHT-1 control via MQTT"
description: "Integrate your Smartenit ZBHT-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-11T17:09:57Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Smartenit ZBHT-1

|     |     |
|-----|-----|
| Model | ZBHT-1  |
| Vendor  | [Smartenit](/supported-devices/#v=Smartenit)  |
| Description | Temperature & humidity sensor  |
| Exposes | battery, temperature, humidity |
| Picture | ![Smartenit ZBHT-1](https://www.zigbee2mqtt.io/images/devices/ZBHT-1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### 유사 기기
이 기기는 구형 모델로, netvox Z711(및 기타 모델)과 유사한 것으로 보입니다.

### 페어링

#### 기기 초기화/공장 초기값 복원
1. 배터리를 제거하여 기기 전원을 끕니다.
2. 유일한 버튼을 누른 채로 유지합니다.
3. 배터리를 다시 장착하여 기기에 전원을 공급합니다.
4. 버튼을 놓습니다.
 * LED가 빠르게 깜박이면 초기화/복원이 완료된 것입니다.

#### 네트워크 참가
1. 기기에서 배터리를 제거합니다.
2. Zigbee2MQTT에서 참가 허용을 활성화합니다.
3. 기기에 배터리를 다시 장착합니다.
 * 성공 시 LED가 5번 깜박입니다 (깜박이지 않으면 실패입니다).
4. 참가 성공 후, 유일한 버튼을 3초 동안 길게 눌러 바인딩 요청을 브로드캐스트합니다.
5. LED가 한 번 깜박입니다.
6. 바인딩 완료 후 LED가 5번 깜박입니다. 실패 시에는 10번 깜박입니다.

#### 기기 깨우기
기기가 잠든 상태(대부분의 경우)에서 깨울 필요가 있다면, 기기의 유일한 버튼을 탭합니다. LED가 5번 깜박이고 기기는 잠시 동안 깨어있는 상태가 됩니다.

### 기능 상태
1. 온도 모니터링 - 작동 중
2. 습도 모니터링 - 작동 중
3. 배터리 모니터링 - 미테스트.
 * 이론상 전압이 2.4V 이하로 떨어지면 기기 LED가 한 번 깜박입니다.
 * 이론상 전압이 2.4V 이하로 떨어지면 기기가 Zigbee 네트워크에 저전력 보고를 전송합니다 - 그 외 배터리 보고는 없습니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

