---
title: "Wirenboard WB-MSW-ZIGBEE v.3 control via MQTT"
description: "Integrate your Wirenboard WB-MSW-ZIGBEE v.3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Wirenboard WB-MSW-ZIGBEE v.3

|     |     |
|-----|-----|
| Model | WB-MSW-ZIGBEE v.3  |
| Vendor  | [Wirenboard](/supported-devices/#v=Wirenboard)  |
| Description | Wall-mounted multi sensor |
| Exposes | temperature, humidity, occupancy, occupancy_level, co2, voc, noise, noise_detected, switch (state), noise_timeout, occupancy_timeout, temperature_offset, occupancy_sensitivity, noise_detect_level, co2_autocalibration, co2_manual_calibration, th_heater, illuminance |
| Picture | ![Wirenboard WB-MSW-ZIGBEE v.3](https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE-v.3.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 설명
Wiren Board WB-MSW v.3 — 움직임, 온도, 습도, 조도, 소음, CO2 및 VOC 레벨의 하이브리드 디지털 센서입니다. IR 블라스터(및 학습용 수신기)가 장착되어 있습니다. 주거 및 사무 공간의 기후 제어를 위해 설계되었습니다.

### 스위치 엔드포인트
기기는 항상 `l1`, `l2`, `l3`이라는 이름의 3개 켜기/끄기 엔드포인트를 제공합니다. 처음 두 개는 조도 + IR 블라스터 애드온이 설치된 경우에만 작동합니다. 기능은 다음과 같습니다:
- `l1` – 빨간 LED 깜빡임 제어
- `l2` – 초록 LED 깜빡임 제어
- `l3` – 버저 제어

주의: 설치된 버저는 매우 큰 소리를 냅니다.

### IR 설정
센서는 IR 명령 저장을 위한 32개의 뱅크를 포함합니다. 학습은 내장 IR 수신기를 통해 이루어집니다.

`zigbee2mqtt/FRIENDLY_NAME/set`에 게시하여 다양한 기기 속성을 설정할 수 있습니다.

#### ROM에 학습 시작
요청:

```json
{
    "learn_start": {
        "rom":0
    }
}
```
* `rom`: 메모리 셀 번호 (0에서 31까지)

#### ROM에 학습 중지
요청:
```json
{
    "learn_stop": {
        "rom":0
    }
}
```
* `rom`: 메모리 셀 번호 (0에서 31까지)

#### ROM에서 재생
요청:
```json
{
    "play_store": {
        "rom":0
    }
}
```
* `rom`: 메모리 셀 번호 (0에서 31까지)

#### 모든 ROM 지우기
요청:

```json
{
    "clear_store": {}
}
```

#### RAM에 학습 시작
요청:

```json
{
    "learn_start": {
        "rom":0
    }
}
```

#### RAM에 학습 중지
요청:
```json
{
    "learn_ram_stop": {}
}
```

#### RAM에서 재생
요청:
```json
{
    "play_ram": {}
}
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voc_calibration`: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

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

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy level (numeric)
The measured occupancy value.
Value can be found in the published state on the `occupancy_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### CO2 (numeric)
The measured CO2 (carbon dioxide) value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### VOC (numeric)
Measured VOC value.
Value can be found in the published state on the `voc` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Noise (numeric)
The measured noise value.
Value can be found in the published state on the `noise` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `dBA`.

### Noise detected (binary)
Indicates whether the device detected noise.
Value can be found in the published state on the `noise_detected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` noise detected is ON, if `false` OFF.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Noise timeout (numeric)
Time in seconds after which noise is cleared after detecting it (default: 60).
Value can be found in the published state on the `noise_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Occupancy timeout (numeric)
Time in seconds after which occupancy is cleared after detecting it (default: 60).
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Temperature offset (numeric)
Self-heating compensation. The compensation value is subtracted from the measured temperature.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Occupancy sensitivity (numeric)
If the sensor is triggered by the slightest movement, reduce the sensitivity, otherwise increase it (default: 50).
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.

### Noise detect level (numeric)
The minimum noise level at which the detector will work (default: 50).
Value can be found in the published state on the `noise_detect_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"noise_detect_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"noise_detect_level": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `150`.
The unit of this value is `dBA`.

### Co2 autocalibration (enum)
Automatic calibration of the CO2 sensor. If ON, the CO2 sensor will automatically calibrate every 7 days. (MH-Z19B sensor).
Value can be found in the published state on the `co2_autocalibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_autocalibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_autocalibration": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Co2 manual calibration (enum)
Ventilate the room for 20 minutes, turn on manual calibration, and turn it off after one second. After about 5 minutes the CO2 sensor will show 400ppm. Calibration completed. (MH-Z19B sensor).
Value can be found in the published state on the `co2_manual_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2_manual_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_manual_calibration": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Th heater (enum)
Turn on when working in conditions of high humidity (more than 70 %, RH) or condensation, if the sensor shows 0 or 100 %..
Value can be found in the published state on the `th_heater` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"th_heater": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"th_heater": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

