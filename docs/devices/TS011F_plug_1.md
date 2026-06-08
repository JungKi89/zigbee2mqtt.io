---
title: "Tuya TS011F_plug_1 control via MQTT"
description: "Integrate your Tuya TS011F_plug_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS011F_plug_1

|     |     |
|-----|-----|
| Model | TS011F_plug_1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart plug (with power monitoring) |
| Exposes | switch (state), countdown, power_outage_memory, switch_type_button, indicator_mode, power, current, voltage, energy, child_lock, identify |
| Picture | ![Tuya TS011F_plug_1](https://www.zigbee2mqtt.io/images/devices/TS011F_plug_1.png) |
| White-label | LELLKI TS011F_plug, BlitzWolf BW-SHP15, BlitzWolf BW-SHP13, MatSee Plus PJ-ZSW01, MODEMIX MOD037, MODEMIX MOD048, Coswall CS-AJ-DE2U-ZG-11, Aubess TS011F_plug_1, NEO Coolcam PLUG-001SPB2, Haozee HT-SP-ZB-01 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 디바이스 꺼짐 문제
[여러 사람이 이 플러그가 무작위로 꺼진다고 보고했습니다](https://github.com/Koenkk/zigbee2mqtt/issues/11648).  
이 문제가 발생한다면 [OTA 업데이트 설치](../guide/usage/ota_updates.md)로 해결할 수 있는지 시도해 보세요.

### 속성 리포팅 기능 오류

2021년 4분기 이후에 생산된 플러그에 기본 탑재된 펌웨어 버전 1.0.5부터 이 플러그의 핵심 기능이 손상되었습니다. TuYa가 전력, 전압 및 전류 값의 자동 리포팅을 비활성화하여 대신 폴링이 필요합니다. 폴링 주기는 `measurement_poll_interval` 옵션으로 제어할 수 있습니다.

플러그가 영향을 받는 경우, `TS011F_plug_1` 대신 [TS011F_plug_3](TS011F_plug_3.md)으로 감지됩니다.

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/9057 -->

### BW-SHP13으로 판매되는 디바이스의 속성 리포팅 기능 오류

2022년에 BlitzWolf는 ```_TZ3000_amdymr7l```로 식별되는 BW-SHP13을 판매하기 시작했습니다. 해당 디바이스는 전력, 전류 및 전압을 불안정하게 보고합니다: 해당 지표의 변경이 보고되기까지 몇 분이 걸리기도 하고, 지속적인 부하가 몇 분간 0으로 보고되다가 다시 예상 값으로 돌아오기도 합니다. 이 동작에 대한 알려진 해결 방법이 없습니다.

<!-- cfr: https://github.com/Koenkk/zigbee2mqtt/issues/11800 -->

### 에너지 초기화

`소비 에너지 합계`를 초기화하려면 Dev 콘솔을 사용하여 다음을 실행합니다:
`Endpoint`: `1`
`Cluster`: `0x00` (`genBasic`)
`Command`: `0` (`resetFactDefault`)
`Payload`: (변경하지 마세요)

다음에 플러그가 폴링될 때 `소비 에너지 합계`가 다시 0부터 시작됩니다.

### 잠금 초기화

Z2M 없이 `Child Lock`을 초기화하려면 물리적 버튼을 빠르게 4번 누릅니다

### 페어링
전원 켜기/끄기 버튼을 길게 누릅니다(5초). 버튼이 파란색으로 깜박여 페어링 모드임을 나타냅니다. 파란색 깜박임이 멈추면 페어링되어 LED가 빨간색으로 표시됩니다. LED가 파란색이면 디바이스가 페어링되지 않았거나 페어링에 실패한 것입니다.

### 대체 펌웨어
[가이드](../guide/usage/ota_updates.md#local-ota-index-and-firmware-files)에 설명된 대로 custom my_index.json 파일을 만들고 zigbee_ota_override_index_location을 설정하여 대체 펌웨어 버전을 설치할 수 있습니다. 플러그가 무작위로 꺼지거나 이후 버전의 과전압 보호 기능이 필요하지 않은 경우 이 펌웨어를 사용할 수 있습니다. v1.0.13을 사용하려면 다음 json 파일을 사용하세요:

```
[
    {
        "fileVersion": 77,
        "fileSize": 307682,
        "manufacturerCode": 4417,
        "imageType": 54179,
        "sha512": "97ea8413e8ab662f2bebf3b013b3030754cbc2c0744b91b14741fff17a2d8d99e7088aa22a3b6e43b3595ccd65433f96d32516fc057fddcc13a816c921af8c97",
        "url": "https://github.com/Koenkk/zigbee-OTA/raw/master/not-in-manifest-images/Telink/1654157434-oem_zg_tl8258_plug_OTA_1.0.13.bin"
    }
]
```
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Countdown (numeric)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power outage memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Switch type button (enum)
Determines when the button actuates.
Value can be found in the published state on the `switch_type_button` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button": NEW_VALUE}`.
The possible values are: `release`, `press`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on/off`, `on`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

