---
sidebar: auto
---

# Home Assistant

## MQTT discovery

Zigbee2MQTT를 Home Assistant와 연동하는 가장 쉬운 방법은
[MQTT discovery](https://www.home-assistant.io/integrations/mqtt#mqtt-discovery)를 사용하는 것입니다.
이를 통해 Zigbee2MQTT가 기기를 Home Assistant에 자동으로 추가할 수 있습니다.

최상의 연동(MQTT discovery 포함)을 위해:

- **Zigbee2MQTT** `configuration.yaml`에 다음을 설정하세요:

    ```yaml
    homeassistant:
        enabled: true
    ```

- Home Assistant에서 [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)을 활성화하세요.

## 기기/그룹 페이지

Home Assistant 2021.11부터 Home Assistant의 기기/그룹 페이지에서 프론트엔드로 직접 연결할 수 있습니다(_기기 방문_ 버튼).
이를 활성화하려면 [frontend](../../configuration/frontend.md) 설정에서 `url`을 설정하세요.

## Home Assistant 기기 레지스트리

Home Assistant MQTT discovery를 사용할 때, Zigbee2MQTT는
[Home Assistant 기기 레지스트리](https://developers.home-assistant.io/docs/en/device_registry_index.html)와 연동됩니다.
이를 통해 Home Assistant를 재시작하지 않고도 Home Assistant 웹 인터페이스에서 `entity_id`와 `friendly_name`을 변경할 수 있습니다.
또한 어떤 엔티티가 어떤 기기에 속하는지 표시할 수 있습니다.

![웹 인터페이스를 통한 이름 및 기기 ID 변경](../../../images/home_assistant_change_name.png)

![기기 레지스트리](../../../images/home_assistant_device_registry.png)

## discovery 사용자 정의

기기별 설정을 통해 discovery 페이로드를 수정할 수 있습니다. 여기서 기기가 discovery되지 않도록 방지할 수도 있습니다. 사용 가능한 옵션은 [기기별 설정](../../configuration/devices-groups.html#specific-device-options)을 참조하세요.

## 버튼 액션에 응답하기

버튼 액션에 응답하려면 다음 Home Assistant 설정 중 하나를 사용할 수 있습니다.

### MQTT 기기 트리거를 통한 방법 (권장)

[MQTT 기기 트리거](https://www.home-assistant.io/integrations/device_trigger.mqtt/)는 Zigbee2MQTT에 의해 **기기에서 이벤트가 최소 한 번 트리거된 후** discovery됩니다.

```yaml
automation:
    - alias: Respond to button click
      triggers:
          - trigger: device
            domain: mqtt
            device_id: ad44cabee4c646f493814306aa6446e1
            type: action
            subtype: arrow_left_click
      actions:
          - action: light.toggle
            target:
                entity_id: light.bedroom
```

### Home Assistant `event` 엔티티를 통한 방법 (실험적)

참고: `event` 엔티티는 **실험적**이며 향후 **변경될 수 있습니다**.

이 방법은 [`event` 엔티티](https://www.home-assistant.io/integrations/event)의 상태 변경에 응답하는 방식으로 작동합니다. 특정 이벤트는 `event_type` 속성을 통해 지정할 수 있습니다. 구현이 확정될 때까지 이벤트 타입 및 추가 속성은 변경될 수 있으며, `homeassistant: {experimental_event_entities: true}`를 설정하여 `event` 엔티티를 명시적으로 활성화해야 합니다(자세한 내용은 [설정](../../configuration/homeassistant.md) 참조).

```yaml
automation:
    - alias: Respond to button click
      triggers:
          - trigger: state
            entity_id: event.my_switch_click
            to: ~
      conditions:
          - condition: template
            value_template: "{{trigger.from_state.state != 'unavailable'}}"
          - condition: template
            value_template: "{{trigger.to_state.attributes.event_type == 'single'}}"
      actions:
          - action: light.toggle
            target:
                entity_id: light.bedroom
```

### Home Assistant 액션 센서를 통한 방법 (deprecated)

이 방법은 센서의 상태 변경 이벤트에 응답하는 방식으로 작동합니다. 이를 위해 `configuration.yaml`에 `homeassistant.legacy_action_sensor: true`를 설정해야 합니다. 자세한 내용은 [문서](../../configuration/homeassistant.md)를 참조하세요.

::: warning
이 기능은 deprecated 상태이며 향후 제거될 예정입니다. 대신 MQTT 기기 트리거를 사용하는 것을 권장합니다.
:::

```yaml
automation:
    - alias: Respond to button action
      trigger:
          platform: state
          entity_id: sensor.my_switch_action
          to: 'single'
      action:
          entity_id: light.my_bulb_light
          service: light.toggle
```

## 그룹(Groups)

그룹 discovery는 조명, 스위치, 잠금장치, 커버 그룹에 대해 지원됩니다. 다른 타입의 경우 Home Assistant `configuration.yaml`에 수동으로 설정을 추가해야 합니다.
그룹 discovery 속성은 Zigbee2MQTT 설정에서 `groups.<id>.homeassistant`를 통해 재정의할 수 있습니다.

## discovery 속성 재정의

모든 Home Assistant MQTT discovery 속성은 기기별로 재정의할 수 있습니다. 아래에 두 가지 예시가 나와 있습니다. discovery 속성의 전체 및 최신 목록은 [Home Assistant MQTT Discovery 연동](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery) 및 Zigbee2MQTT 소스 코드의 [Home Assistant 확장](https://github.com/Koenkk/zigbee2mqtt/blob/03ba647dc6b5f299f8f3ab441712999fcb3a253e/lib/extension/homeassistant.ts)을 참조하세요.

### `supported_color_modes` 변경

이는 전구가 X/Y(기본값)로 값을 보고하는 방식에서 색조/채도(hue/saturation)로 전환할 때 유용합니다(`hue_move` 및 `saturation_move` 명령처럼 색조 또는 채도를 통해 변경할 때 전구가 색상을 보고하는 방식).

이 예시는 [조명의 `supported_color_modes` discovery 속성](https://www.home-assistant.io/integrations/light.mqtt/#supported_color_modes)을 색조/채도 및 색온도로 변경합니다:

```yaml
devices:
    '0x12345678':
        friendly_name: my_light
        homeassistant:
            light:
                supported_color_modes: ['hs', 'color_temp']
```

### 스위치를 조명으로 노출하기

기기가 현재 스위치로 discovery되고 있고 조명으로 discovery하고 싶다면, Zigbee2MQTT `configuration.yaml`에서 다음 설정을 사용할 수 있습니다:

```yaml
devices:
    '0x12345678':
        friendly_name: my_switch
        homeassistant:
            switch:
                type: light
                object_id: light
            light:
                name: null
                value_template: null
                state_value_template: '{{ value_json.state }}'
            # 또는 기기에 여러 엔드포인트가 있는 경우(예: left/right)
            switch_left:
                type: light
                object_id: light_left
            light_left:
                name: my_switch_left
                value_template: null
                state_value_template: '{{ value_json.state_left }}'
            switch_right:
                type: light
                object_id: light_right
            light_right:
                name: my_switch_right
                value_template: null
                state_value_template: '{{ value_json.state_right }}'
```

### 기기 속성 변경

MQTT 속성 재정의가 가능한 고급 예시로, 다음 설정은 `device`의 `suggested_area` 속성을 변경합니다. 이 예시는 `homeassistant` 속성 아래에 주어진 MQTT discovery 계층 구조를 그대로 복사할 수 있음을 보여줍니다(`suggested_area`가 `device` 속성 아래에 있는 경우). 참고로 다른 `device` 속성은 Zigbee2MQTT에 의해 설정될 수 있습니다(예: `manufacturer`).

이 예시는 [조명 기기의 `suggested area` discovery 속성](https://www.home-assistant.io/integrations/light.mqtt/#device)을 "Living Room"으로 변경합니다:

```yaml
devices:
    '0x12345678':
        friendly_name: my_light
        homeassistant:
            device:
                suggested_area: 'Living Room'
```

## 기기 및 엔티티에 사용자 정의 이름 사용하기

Home Assistant에서 기기 및 엔티티에 더 읽기 쉬운 이름을 표시하려면 기기 설정에서 Home Assistant용 특정 이름을 설정할 수 있습니다. 설정된 경우 `friendly_name` 대신 이 이름이 사용됩니다.

```yaml
devices:
    '0x12345678':
        friendly_name: living_room/temperature_sensor
        homeassistant:
            name: Living Room Temperature Sensor
```

## Home Assistant를 통해 Zigbee2MQTT 제어하기

다음 Home Assistant 설정을 통해 Home Assistant에서 Zigbee2MQTT를 제어할 수 있습니다.

`configuration.yaml`의 적절한 섹션에 추가하거나, 패키지 폴더의 `zigbee2mqtt.yaml`에 다음 내용을 추가하여 [Home Assistant Package](https://www.home-assistant.io/docs/configuration/packages/)로 추가할 수 있습니다.

```yaml
# 참가 남은 시간(분)을 위한 input number
input_number:
    zigbee2mqtt_join_minutes:
        name: 'Zigbee2MQTT join minutes'
        initial: 2
        min: 1
        max: 5
        step: 1
        mode: slider

# 스크립트용 Zigbee2MQTT friendly_name 입력을 위한 input text
input_text:
    zigbee2mqtt_new_name:
        name: Zigbee2MQTT New Name
        initial: ''
        icon: 'mdi:moon-new'

# Zigbee2MQTT 기기 선택을 위한 input select
input_select:
    zigbee2mqtt_old_name_select:
        name: Zigbee2MQTT Old Name
        icon: 'mdi:moon-full'
        options:
            - Initial Option
    zigbee2mqtt_remove_select:
        name: Zigbee2MQTT Remove
        icon: 'mdi:trash-can'
        options:
            - Initial Option

# 기기의 강제 제거 플래그 설정을 위한 input boolean
input_boolean:
    zigbee2mqtt_force_remove:
        name: Zigbee2MQTT Force Remove
        initial: false
        icon: mdi:alert-remove

# 기기 이름 변경 및 제거를 위한 스크립트
script:
    zigbee2mqtt_rename:
        alias: Zigbee2MQTT Rename
        icon: 'mdi:pencil'
        sequence:
            - action: mqtt.publish
              data:
                  topic: zigbee2mqtt/bridge/request/device/rename
                  payload: >-
                      {
                        "from": "{{ states('input_select.zigbee2mqtt_old_name_select') }}",
                        "to": "{{ states('input_text.zigbee2mqtt_new_name') }}"
                      }
    zigbee2mqtt_remove:
        alias: Zigbee2MQTT Remove
        icon: 'mdi:trash-can'
        sequence:
            - action: mqtt.publish
              data:
                  topic: zigbee2mqtt/bridge/request/device/remove
                  payload: >-
                      {
                        "id": "{{ states('input_select.zigbee2mqtt_remove_select') }}",
                        "force": {{ 'true' if is_state('input_boolean.zigbee2mqtt_force_remove', 'on') else 'false' }}
                      }

automation:
    - id: 'zigbee2mqtt_create_notification_on_successful_interview'
      alias: Zigbee Device Joined Notification
      trigger:
          platform: mqtt
          topic: 'zigbee2mqtt/bridge/event'
      condition:
          condition: template
          value_template: '{{trigger.payload_json.type == "device_interview" and trigger.payload_json.data.status == "successful" and trigger.payload_json.data.supported}}'
      action:
          - service: persistent_notification.create
            data_template:
                title: Device joined the Zigbee2MQTT network
                message: 'Name: {{trigger.payload_json.data.friendly_name}},
                    Vendor: {{trigger.payload_json.data.definition.vendor}},
                    Model: {{trigger.payload_json.data.definition.model}},
                    Description: {{trigger.payload_json.data.definition.description}}'

    - id: 'zigbee2mqtt_update_devices_list'
      alias: Update Zigbee Devices List
      description: ''
      trigger:
          - platform: mqtt
            topic: zigbee2mqtt/bridge/event
          - platform: mqtt
            topic: zigbee2mqtt/bridge/response/device/rename
          - platform: homeassistant
            event: start
      condition: []
      action:
          - delay:
                hours: 0
                minutes: 0
                seconds: 1
                milliseconds: 0
          - service: input_select.set_options
            metadata: {}
            data:
                options: |
                    {%- set find_integration = 'mqtt' %}
                     {%- set devices = states | map(attribute='entity_id') | map('device_id') | unique | reject('eq',None) | list %}
                     {%- set ns = namespace(entities = []) %}
                     {%- for device in devices if device_attr(device, 'identifiers') %}
                       {%- set ids = device_attr(device, 'identifiers') | list | first %}
                       {%- if ids and ids | length == 2 and ids[0] == find_integration and "zigbee2mqtt" in ids[1] %}
                         {% set names = device_attr(device, 'name').split('\n') | list %}
                         {%- set ns.entities = ns.entities + names %}
                       {%- endif %}
                     {%- endfor %}
                     {{ ns.entities | unique | sort | list}}
            target:
                entity_id:
                    - input_select.zigbee2mqtt_old_name_select
                    - input_select.zigbee2mqtt_remove_select
          - service: input_text.set_value
            metadata: {}
            data:
                value: ''
            target:
                entity_id: input_text.zigbee2mqtt_new_name
      mode: single
```

다음은 lovelace 카드 설정 예시입니다.

```yaml
title: Zigbee2MQTT
type: entities
show_header_toggle: false
entities:
    - entity: binary_sensor.zigbee2mqtt_bridge_connection_state
    - entity: sensor.zigbee2mqtt_bridge_version
    - entity: sensor.zigbee2mqtt_bridge_coordinator_version
    - type: divider
    - entity: switch.zigbee2mqtt_bridge_permit_join
    - entity: input_number.zigbee2mqtt_join_minutes
    - type: divider
    - entity: input_select.zigbee2mqtt_old_name_select
    - entity: input_text.zigbee2mqtt_new_name
    - entity: script.zigbee2mqtt_rename
    - type: divider
    - entity: input_select.zigbee2mqtt_remove_select
    - entity: input_boolean.zigbee2mqtt_force_remove
    - entity: script.zigbee2mqtt_remove
```

## Zigbee 네트워크 맵 (커스텀 카드)

[Zigbee Network Map Home Assistant Custom Card](https://github.com/azuwis/zigbee2mqtt-networkmap/).
