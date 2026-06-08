---
sidebarDepth: 1
---

# 설정 업데이트

v2.0.0부터 Zigbee2MQTT에는 자동 설정 마이그레이션 시스템이 포함되어 있습니다. 이 시스템은 이전 설정과 새 Zigbee2MQTT 버전의 요구 사항에 맞게 `configuration.yaml`을 조정합니다. 필요한 경우 `configuration.yaml`이 현재 버전에 맞을 때까지 마이그레이션 프로세스가 반복됩니다.

마이그레이션 시스템은 마이그레이션을 시작하기 전에 현재 `data/configuration.yaml`을 자동으로 백업합니다. 백업 파일은 버전에 따라 이름이 지정됩니다. 예: `data/configuration_backup_v1.yaml`.

:::warning 중요
Home Assistant 애드온 설정 페이지 또는 [환경 변수](./README.md#환경-변수)를 통해 설정된 값은 `configuration.yaml`에 저장되지 않습니다. 따라서 마이그레이션 시스템에서 처리할 수 없으며, 마이그레이션이 필요한 경우 직접 조치가 필요합니다.
:::

:::warning 중요
이 시스템은 Zigbee2MQTT 설정을 자동으로 마이그레이션하지만, 서드파티(Home Assistant 등)에 대한 부작용은 **마이그레이션할 수 없습니다**. [마이그레이션 노트](#마이그레이션-노트)와 링크를 검토하여 해당 부분을 직접 조정하세요.
:::

:::caution 주의
`version` 설정을 수동으로 편집하지 마세요. 그렇게 하면 `configuration.yaml`이 손상될 위험이 있으며, 마이그레이션 시스템이 올바르게 작동하지 않을 수 있습니다.
:::

## 마이그레이션 노트

마이그레이션 시스템은 특정 버전에 필요한 모든 마이그레이션을 고려하여 `configuration.yaml`에서 변경이 필요한 사항과 새 설정에 영향을 미치는 사항을 쉽게 파악할 수 있는 로그를 생성합니다. 파일 이름은 Zigbee2MQTT 버전 변경에 따라 지정됩니다. 예: `data/migration-1-to-2.log`.

### v1에서 v2로의 마이그레이션 노트 예시

```
[REMOVAL] HA discovery_topic was moved from advanced.homeassistant_discovery_topic to homeassistant.discovery_topic.

[TRANSFER] Baudrate was moved from advanced.baudrate to serial.baudrate.

[REMOVAL] RTSCTS was moved from advanced.rtscts to serial.rtscts.

[TRANSFER] ban was renamed to passlist.

[CHANGE] Log level 'warn' has been renamed to 'warning'.

[ADDITION] Migrated settings to version 2

[REMOVAL] The MQTT legacy API has been removed (advanced.legacy_api setting). See link below for affected topics.

[REMOVAL] Retrieve state option ((devices|groups).xyz.retrieve_state setting)

For more details, see https://github.com/Koenkk/zigbee2mqtt/discussions/24198
```

이 시나리오에서:

- `advanced.homeassistant_discovery_topic`과 `homeassistant.discovery_topic` 모두 설정되어 있었으며, 후자가 유지되고 전자는 제거되었습니다.
- `advanced.baudrate`가 설정되어 있었으며, `serial.baudrate`로 이동되었습니다.
- `advanced.rtscts`와 `serial.rtscts` 모두 설정되어 있었으며, 후자가 유지되고 전자는 제거되었습니다.
- `ban`이 설정되어 있었으며, `passlist`로 병합되었습니다.
- `log_level`이 `warn`으로 설정되어 있었으며, `warning`으로 이름이 변경되었습니다.
- `version: 2`가 추가되었습니다 (향후 마이그레이션 시 자동으로 업데이트됩니다).
- `advanced.legacy_api`가 true로 설정되어 있었습니다. 더 이상 지원되지 않으며 설정이 제거되었습니다.
- `devices` 또는 `groups` 아래의 하나 이상의 장치 또는 그룹에 대해 `retrieve_state`가 true로 설정되어 있었습니다. 더 이상 지원되지 않으며 설정이 제거되었습니다.
