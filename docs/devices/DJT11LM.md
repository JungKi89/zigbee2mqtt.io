---
title: "Aqara DJT11LM control via MQTT"
description: "Integrate your Aqara DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara DJT11LM

|     |     |
|-----|-----|
| Model | DJT11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Vibration sensor |
| Exposes | battery, device_temperature, vibration, strength, sensitivity, angle_x, angle_y, angle_z, x_axis, y_axis, z_axis, voltage, power_outage_count, action |
| Picture | ![Aqara DJT11LM](https://www.zigbee2mqtt.io/images/devices/DJT11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 배터리
CR2032 배터리를 사용합니다.

### 페어링
리셋 버튼을 약 5초간 누르세요. LED가 3번 켜집니다.
그런 다음 깨어 있는 상태를 유지하기 위해 2초마다 버튼을 누르세요 (최대 20번).

*참고: 기기 페어링에 실패하면 배터리를 교체해 보세요. 이것이 문제를 해결할 수 있습니다.*

### `strength` 값의 의미
진동이 감지된 후 300초마다 보고되는 `strength` 값은 300초 기간 동안 측정된 최대 강도입니다.

### `vibration` 동작 빈도
`vibration` 페이로드를 가진 `/action` 서브토픽과 관련 상태 JSON 블롭은 시작 약 1초 후에 발행되지만, 해당 분 내에서 진동이 연속적이든 간헐적이든 관계없이 분당 1회를 초과하지 않습니다. 이 동작 메시지는 대략 매 시간마다 그리고 아래의 `vibration_timeout` 이후에 발행되는 상태 JSON 블롭 메시지와 구별됩니다.

진동이 계속되면 해당 분 간격이 만료된 후 다른 `vibration` 동작이 발행됩니다. 이 대기 기간의 지속 시간을 변경할 수 있는 명백한 방법은 없습니다.

### 문제 해결: 기기가 메시지 전송 중단/네트워크 연결 끊김
Xiaomi 기기는 Zigbee 표준을 완전히 준수하지 않기 때문에 네트워크에서 연결이 끊기는 경우가 있습니다.
대부분의 경우 다음과 같은 이유로 발생합니다:
- 기기의 신호가 약한 경우, 게시된 메시지에서 `linkquality`로 신호 품질을 확인할 수 있습니다. linkquality < 20이면 약한 것으로 간주됩니다.
- 배터리 전압이 낮은 경우, 배터리가 여전히 충분해 보여도 발생할 수 있습니다. 다른 배터리를 사용해 보세요.
- Xiaomi 기기를 처리할 수 없는 라우터를 통해 연결된 경우. 이는 Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi의 기기에서 발생하는 것으로 알려져 있습니다. 가능한 해결책은 리셋 버튼을 누르면서 코디네이터와 물리적으로 가까운 거리에서 기기를 직접 중앙 코디네이터에 연결하는 것입니다.

이에 대한 자세한 정보는 [여기](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623)에서 확인할 수 있습니다.


### 캘리브레이션
공장 캘리브레이션을 개선하거나 캘리브레이션이 부족한 경우, 2단계 오프셋 캘리브레이션으로 더 나은 결과를 얻을 수 있습니다:
* 기기별 설정에서 x, y, z 오프셋이 0으로 설정되어 있는지 확인하세요.
* 기기를 평평한 표면에 앞면이 위로 향하도록 놓으세요.
  * 기울기 동작 후 몇 초가 지나면 각도와 가속도계 값(``x_axis``, ``y_axis``, ``z_axis``)이 업데이트됩니다.
  * ``x_axis``와 ``y_axis``는 작아야 하고, ``z_axis``는 약 1000 정도여야 합니다.
  * x와 y의 오프셋을 ``x_axis``와 ``y_axis``의 반대 값으로 설정하여 보정하세요.
* 기기를 옆으로 놓으세요.
  * 몇 초 후 값이 업데이트되고, ``z_axis``가 작아야 하며, ``x_axis`` 또는 ``y_axis`` 중 하나도 작아야 하고, 다른 하나는 약 ±1000 정도여야 합니다.
  * z의 오프셋을 ``z_axis``의 반대 값으로 설정하세요.
다른 면을 시도하여 가장 잘 맞는 값을 골라 오프셋 값을 미세 조정할 수 있습니다.
기기는 실제 기울기 이벤트 후 몇 초 후에 가속도계 값을 전송합니다.


**소프트웨어 기반 캘리브레이션에 관한 중요 참고 사항**  
캘리브레이션 오프셋(`x_calibration`, `y_calibration`, `z_calibration`)은 센서가 이미 원시 데이터를 전송한 후 Zigbee2MQTT **내부**에서만 적용됩니다. 즉:

**원시 값**(`x_axis`, `y_axis`, `z_axis`)은 로그, MQTT 메시지 및 Zigbee2MQTT UI에서 하드웨어가 보고하는 것과 동일하게 유지됩니다.  
- 오프셋은 다른 소프트웨어(예: Home Assistant)에서 해당 원시 속성을 직접 읽는 경우 표시되는 값을 *변경하지 않습니다*.  
- 다른 시스템(예: Home Assistant)에서 "수정된" 또는 "캘리브레이션된" 값으로 작업하려면 [템플릿 센서](https://www.home-assistant.io/integrations/template/)를 만들거나 직접 오프셋을 적용해야 합니다.  
- 오프셋을 설정한 후 동일한 원시 숫자가 보이는 것은 캘리브레이션이 작동하지 않는다는 의미가 아닙니다. 단순히 센서 출력 자체가 오프셋에 의해 변경되지 않는 것입니다.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `vibration_timeout`: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`

* `x_calibration`: Calibrates the x value (absolute offset), takes into effect on next report of device. The value must be a number.

* `y_calibration`: Calibrates the y value (absolute offset), takes into effect on next report of device. The value must be a number.

* `z_calibration`: Calibrates the z value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Strength (numeric)
Value can be found in the published state on the `strength` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Sensitivity (numeric)
Sensitivity, 1 = highest, 21 = lowest.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `21`.

### Angle x (numeric)
Value can be found in the published state on the `angle_x` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Angle y (numeric)
Value can be found in the published state on the `angle_y` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Angle z (numeric)
Value can be found in the published state on the `angle_z` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### X axis (numeric)
Accelerometer X value.
Value can be found in the published state on the `x_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Y axis (numeric)
Accelerometer Y value.
Value can be found in the published state on the `y_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Z axis (numeric)
Accelerometer Z value.
Value can be found in the published state on the `z_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `vibration`, `tilt`, `drop`.

