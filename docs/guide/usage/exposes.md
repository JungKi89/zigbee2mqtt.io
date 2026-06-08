---
sidebarDepth: 1
redirectFrom: /information/exposes.md
---

# Exposes

Zigbee2MQTT는 [`zigbee2mqtt/bridge/devices`](./mqtt_topics_and_messages.md)의 `exposes` 속성을 통해 기기 기능을 노출합니다. 가능한 `exposes`는 여기에 문서화되어 있습니다.

두 가지 타입의 exposes가 있습니다:

- 제네릭(Generic): `numeric` 및 `binary`와 같은 타입
- 특정(Specific): `light` 또는 `switch`와 같은 기기의 특정 기능을 나타냄

두 타입 모두 항상 `type` 속성을 가집니다.

제네릭 타입(composite 제외)은 항상 `access` 속성과 선택적 `description` 속성을 가집니다.

모든 제네릭 타입은 항상 컨텍스트를 나타내는 `name` 속성과 올바른 형식(언더스코어 구분자 없이)으로 기능 이름을 포함하는 `label` 속성을 가집니다(예: `Device temperature`, `VOC`, `Power outage count`).

모든 제네릭 타입은 항상 값이 노출되는 위치를 나타내는 `property` 타입을 가지며, 일반적으로 이름과 같지만 `endpoint`가 정의된 경우 `name_endpoint`가 됩니다.

특정 타입과 제네릭 composite 타입은 항상 제네릭 exposes 타입을 포함하는 배열인 `features` 속성을 가집니다. 두 타입 모두 선택적으로 `endpoint` 속성을 가질 수 있으며, 기기가 특정 엔드포인트에서 이 기능을 노출함을 나타냅니다.

두 타입 모두 `config` 또는 `diagnostic`으로 설정할 수 있는 선택적 `category` 속성을 가집니다. 설정된 경우, expose가 주로 구성 목적(예: `operation_mode`, `power_on_behaviour`)이나 진단 목적(예: `power_outage_count`, `device_temperature`)임을 나타냅니다. 설정되지 않은 경우 expose가 기기의 일반 사용을 위한 것임을 나타냅니다(예: `switch`, `light`, `power`). 구성 expose는 항상 설정 가능해야 합니다([액세스 권한](#access) 참조). 진단 expose는 읽기 전용이어야 합니다(그렇지 않으면 구성 또는 일반 expose여야 함).

### 액세스(Access)

`access` 속성은 3비트 비트마스크입니다.

- 비트 1: 이 기기의 게시된 상태에서 속성을 찾을 수 있습니다.
- 비트 2: `/set` 명령으로 속성을 설정할 수 있습니다.
- 비트 3: `/get` 명령으로 속성을 가져올 수 있습니다(이 비트가 true이면 비트 1도 true).

예시:

- Xiaomi WSDCGQ01LM 기후 센서는 수치 온도 센서를 노출합니다. 기기가 대부분의 시간 절전 상태이므로 `/get` 명령으로 가져올 수 없습니다. Access는 `1` (이진: `0b001`)입니다.
- Philips 7146060PH Hue Go 조명은 밝기를 노출합니다. `/get`, `/set`이 가능하며 게시된 상태에도 있습니다. Access는 `7` (이진: `0b111`)입니다.
- Philips 7146060PH Hue Go 조명은 효과를 노출합니다(예: 깜빡임 효과 트리거). `/set`만 가능합니다. Access는 `2` (이진: `0b010`)입니다.
- Xiaomi ZNCZ02LM 전원 플러그는 수치 전력 센서를 노출합니다. `/get`이 가능하며 상태에도 게시됩니다. Access는 `5` (이진: `0b101`)입니다.

## 제네릭(Generic)

### Binary

기기가 이진 값을 노출함을 나타냅니다. 항상 값 해석 방법을 나타내는 `value_on`과 `value_off`를 가집니다. 선택적으로 값을 토글하는 데 사용할 수 있는 `value_toggle`을 가질 수 있습니다.

예시:

```json
{
    "type": "binary",
    "name": "occupancy",
    "label": "Occupancy",
    "property": "occupancy",
    "value_on": true,
    "value_off": false,
    "access": 1
}
```

```json
{
    "type": "binary",
    "name": "state",
    "label": "State",
    "property": "state",
    "value_on": "ON",
    "value_off": "OFF",
    "value_toggle": "TOGGLE",
    "access": 7
}
```

### Numeric

기기가 수치 값을 노출함을 나타냅니다. 선택적으로 `value_max`, `value_min`, `value_step`, `unit`, `presets`를 가집니다. `presets`는 특별한 해석을 가진 값을 정의합니다.

예시:

```json
{
    "type": "numeric",
    "name": "brightness",
    "label": "Brightness",
    "property": "brightness",
    "value_min": 0,
    "value_max": 254,
    "access": 7
}
```

```json
{
    "type": "numeric",
    "name": "temperature",
    "label": "Temperature",
    "property": "temperature",
    "unit": "°C",
    "access": 1
}
```

```json
{
    "type": "numeric",
    "name": "color_temp_startup",
    "label": "Color temp startup",
    "property": "color_temp_startup",
    "unit": "mired",
    "access": 7,
    "presets": {
        "name": "previous",
        "value": 65535,
        "description": "Restore previous color_temp on cold power on"
    }
}
```

### Enum

기기가 열거형 값을 노출함을 나타냅니다. 항상 가능한 모든 값을 나타내는 `values`를 가집니다.

예시:

```json
{
    "type": "enum",
    "name": "identify",
    "label": "Identify",
    "property": "identify",
    "values": ["blink", "okay"],
    "access": 2
}
```

### Text

기기가 텍스트 값을 노출함을 나타냅니다.

예시:

```json
{
    "type": "text",
    "name": "inserted",
    "label": "Inserted",
    "property": "inserted",
    "access": 1
}
```

### Composite

Composite는 위의 제네릭 타입을 `features` 배열로 결합합니다.

예시:

```json
{
    "type": "composite",
    "name": "color_xy",
    "label": "Color xy",
    "access": 2,
    "property": "color",
    "features": [
        {
            "type": "numeric",
            "name": "x",
            "label": "X",
            "property": "x",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "y",
            "label": "Y",
            "property": "y",
            "access": 7
        }
    ]
}
```

### List

기기가 값의 목록을 노출함을 나타냅니다. `item_type`은 `property`가 생략된 다른 expose가 될 수 있습니다.
선택적으로 목록의 최소/최대 항목 수를 정의하는 `length_min`과 `length_max` 속성을 추가할 수 있습니다.

예시:

```json
{
    "type": "list",
    "name": "no_occupancy_since",
    "label": "No occupancy since",
    "property": "no_occupancy_since",
    "access": 1,
    "item_type": {
        "access": 3,
        "name": "temperature",
        "label": "Temperature",
        "type": "numeric"
    }
}
```

```json
{
    "type": "list",
    "name": "schedule",
    "label": "Schedule",
    "property": "schedule",
    "access": 3,
    "length_min": 1,
    "length_max": 10,
    "item_type": {
        "type": "composite",
        "name": "day_time",
        "label": "Day time",
        "features": [
            {
                "access": 3,
                "name": "day",
                "label": "Day",
                "property": "day",
                "type": "enum",
                "values": ["monday", "tuesday", "wednesday"]
            },
            {
                "access": 3,
                "name": "hour",
                "label": "Hour",
                "property": "hour",
                "type": "numeric"
            },
            {
                "access": 3,
                "name": "minute",
                "label": "Minute",
                "property": "minute",
                "type": "numeric"
            }
        ]
    }
}
```

## 특정(Specific)

### Light

기기가 조명을 노출함을 나타냅니다. 가능한 features는 `state`, `brightness`, `color_temp`, `color_xy`, `color_hs`, `min_brightness`, `level_config`, `color_temp_startup`입니다.

예시:

```json
{
    "type": "light",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "ON",
            "value_off": "OFF",
            "value_toggle": "TOGGLE",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "brightness",
            "label": "Brightness",
            "property": "brightness",
            "value_min": 0,
            "value_max": 254,
            "access": 7
        },
        {
            "type": "numeric",
            "name": "color_temp",
            "label": "Color temp",
            "property": "color_temp",
            "access": 7
        },
        {
            "type": "composite",
            "name": "color_xy",
            "label": "Color xy",
            "property": "color",
            "features": [
                {
                    "type": "numeric",
                    "name": "x",
                    "label": "X",
                    "property": "x",
                    "access": 7
                },
                {
                    "type": "numeric",
                    "name": "y",
                    "label": "Y",
                    "property": "y",
                    "access": 7
                }
            ]
        },
        {
            "type": "composite",
            "name": "color_hs",
            "label": "Color hs",
            "property": "color",
            "features": [
                {
                    "type": "numeric",
                    "name": "hue",
                    "label": "Hue",
                    "property": "hue",
                    "access": 7
                },
                {
                    "type": "numeric",
                    "name": "saturation",
                    "label": "Saturation",
                    "property": "saturation",
                    "access": 7
                }
            ]
        }
    ]
}
```

일부 전구는 XY 색상을 올바르게 표현하지 못하는 것으로 알려져 있으므로, HS를 통해 색상을 설정하는 것이 좋습니다. 이 경우 `color_hs`가 `features` 목록에서 `color_xy` 앞에 나타납니다.

### Switch

기기가 스위치를 노출함을 나타냅니다.

예시:

```json
{
    "type": "switch",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "ON",
            "value_off": "OFF",
            "value_toggle": "TOGGLE",
            "access": 7
        }
    ]
}
```

### Fan

기기가 팬을 노출함을 나타냅니다. 가능한 features는 `state`와 `mode`입니다.

예시:

```json
{
    "type": "fan",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "fan_state",
            "value_on": "ON",
            "value_off": "OFF",
            "access": 7
        },
        {
            "type": "enum",
            "name": "mode",
            "label": "Mode",
            "property": "fan_mode",
            "values": ["off", "low", "medium", "high", "on", "auto", "smart"],
            "access": 7
        }
    ]
}
```

### Cover

기기가 커버를 노출함을 나타냅니다. 가능한 features는 `state`, `position`, `tilt`입니다.

예시:

```json
{
    "type": "cover",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "OPEN",
            "value_off": "CLOSE",
            "access": 7
        },
        {
            "type": "numeric",
            "name": "position",
            "label": "Position",
            "property": "position",
            "value_min": 0,
            "value_max": 100,
            "access": 7
        },
        {
            "type": "numeric",
            "name": "tilt",
            "label": "Tilt",
            "property": "tilt",
            "value_min": 0,
            "value_max": 100,
            "access": 7
        }
    ]
}
```

### Lock

기기가 잠금장치를 노출함을 나타냅니다. 가능한 features는 `state`와 `lock_state`입니다.

예시:

```json
{
    "type": "lock",
    "features": [
        {
            "type": "binary",
            "name": "state",
            "label": "State",
            "property": "state",
            "value_on": "LOCK",
            "value_off": "UNLOCK",
            "access": 7
        },
        {
            "type": "enum",
            "name": "lock_state",
            "label": "Lock state",
            "property": "lock_state",
            "values": ["not_fully_locked", "locked", "unlocked"],
            "access": 1
        }
    ]
}
```

### Climate

기기가 냉난방 기능을 노출함을 나타냅니다.

- 가능한 features: `occupied_heating_setpoint`, `current_heating_setpoint`, `occupied_cooling_setpoint`, `unoccupied_heating_setpoint`, `unoccupied_cooling_setpoint`, `local_temperature`, `system_mode`, `running_state`, `fan_mode`, `preset`, `local_temperature_calibration`, `pi_heating_demand`, `running_mode`, `ac_louver_position`, `control_sequence_of_operation`, `swing_mode`.
- `occupied_heating_setpoint`와 `current_heating_setpoint`를 동시에 가지지 않습니다.
- `system_mode`의 가능한 값: `off`, `heat`, `cool`, `auto`, `dry`, `fan_only`.
- `running_state`의 가능한 값: `idle`, `heat`, `cool`.

예시:

```json
{
    "type": "climate",
    "features": [
        {
            "type": "numeric",
            "name": "occupied_heating_setpoint",
            "label": "Occupied heating setpoint",
            "property": "occupied_heating_setpoint",
            "value_min": 7,
            "value_max": 30,
            "value_step": 0.5,
            "access": 7,
            "unit": "°C"
        },
        {
            "type": "numeric",
            "name": "occupied_cooling_setpoint",
            "label": "Occupied cooling setpoint",
            "property": "occupied_cooling_setpoint",
            "value_min": 7,
            "value_max": 30,
            "value_step": 0.5,
            "access": 7,
            "unit": "°C"
        },
        {
            "type": "numeric",
            "name": "local_temperature",
            "label": "Local temperature",
            "property": "local_temperature",
            "access": 3,
            "unit": "°C"
        },
        {
            "type": "enum",
            "name": "system_mode",
            "label": "System mode",
            "property": "system_mode",
            "values": ["off", "auto", "heat", "cool"],
            "access": 7
        },
        {
            "type": "enum",
            "name": "preset",
            "label": "Preset",
            "property": "preset",
            "values": ["hold", "program"],
            "access": 7
        },
        {
            "type": "enum",
            "name": "running_state",
            "label": "Running state",
            "property": "running_state",
            "values": ["idle", "heat", "cool"],
            "access": 3
        },
        {
            "type": "enum",
            "name": "mode",
            "label": "Mode",
            "property": "fan_mode",
            "values": ["off", "low", "medium", "high", "on", "auto", "smart"],
            "access": 7
        }
    ]
}
```
