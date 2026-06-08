---
redirectFrom: /information/groups.md
---

# 그룹(Groups)

Zigbee2MQTT는 Zigbee 그룹을 지원합니다. Zigbee 그룹을 사용하면 하나의 명령으로 여러 기기를 동시에 제어할 수 있습니다.

::: tip
그룹은 여러 기기를 개별적으로 제어하는 것보다 훨씬 효율적입니다. 여러 기기를 동시에 제어할 때 네트워크 부하를 크게 줄여줍니다.
:::

## 그룹 만들기

그룹은 프론트엔드(가장 쉬운 방법), [MQTT](./mqtt_topics_and_messages.md#zigbee2mqttbridgerequestgroupadd) 또는 아래와 같이 `configuration.yaml`에 추가하는 방법으로 만들 수 있습니다.

## 설정

`configuration.yaml`에 다음을 추가하세요.

```yaml
groups:
    # ID, 각 그룹은 서로 다른 숫자 ID를 가져야 합니다
    '1':
        # 필수: 그룹을 제어하는 데 사용할 이름
        friendly_name: group_1
        # 필수: 메시지 유지 여부 (true/false) (기본값: false)
        retain: false
        # 선택사항: 예를 들어 밝기를 변경할 때 사용할 기본 전환 시간(초) (기본값: 0)
        transition: 2
        # 선택사항: 그룹 내 기기 중 하나가 상태를 변경할 때 그룹 상태 업데이트 여부. 아래 '상태 변경' 참조 (기본값: true)
        optimistic: true
        # 선택사항: 그룹에 대해 OFF 상태가 게시되는 시점 제어. 아래 "상태 변경" 참조 (기본값: all_members_off)
        off_state: 'all_members_off'
```

그룹 ID(위 예시에서 `'1'`)는 숫자 문자열이어야 합니다. 16진수 그룹 ID(예: `0xe24c`)를 사용하려면 먼저 숫자 문자열(예: `57932`)로 변환해야 합니다.

Home Assistant 애드온을 사용하는 경우, 위와 같이 `configuration.yaml`을 수정한 후 재시작하세요.

## MQTT 명령어

그룹을 추가, 제거, 이름 변경 및 옵션 변경하려면 [MQTT Topics and Messages 그룹 섹션](./mqtt_topics_and_messages.md#group)을 참조하세요.

기기는 MQTT를 통해 그룹에 추가/제거할 수도 있으며, 가능한 topic은 다음과 같습니다:

- `zigbee2mqtt/bridge/request/group/members/add`: 그룹에 기기 추가
- `zigbee2mqtt/bridge/request/group/members/remove`: 그룹에서 기기 제거
- `zigbee2mqtt/bridge/request/group/members/remove_all`: 모든 그룹에서 기기 제거

페이로드는 `{"group": GROUP, "device": DEVICE}`이어야 하며, `GROUP`은 추가/제거할 그룹의 `friendly_name`, `DEVICE`는 그룹에 추가/제거할 기기의 `friendly_name`입니다. 페이로드 예시: `{"group":"my_group","device":"my_bulb"}`, 응답 예시: `{"data":{"device":"my_bulb","endpoint":"default","group":"my_group"},"status":"ok"}`. `remove_all`을 실행하는 경우 요청에서 `group` 속성을 생략할 수 있습니다.

그룹에서 기기를 제거할 때 해당 그룹에 binding된 기기가 있는 경우, 해당 멤버의 리포팅이 비활성화됩니다. 이를 건너뛰려면 `skip_disable_reporting`을 사용하세요(예: `{"group":"my_group","device":"my_bulb", "skip_disable_reporting": true}`).

## 제어

그룹 제어는 단일 기기 제어와 유사합니다. 예를 들어 그룹에 속한 모든 기기를 켜려면 `zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set`에 다음 페이로드를 담아 MQTT 메시지를 전송하세요:

```json
{
    "state": "ON"
}
```

## 상태 변경

기본적으로 그룹 내 기기 중 하나가 상태를 변경하면 그룹 상태가 변경을 반영하여 업데이트됩니다. `state` 속성의 동작은 `off_state` 옵션을 통해 제어할 수 있습니다. 두 가지 옵션이 있습니다:

- `all_members_off` (기본값): 그룹 멤버 중 최소 하나라도 `state`가 `ON`이면 그룹 `state`는 `ON`을 유지합니다.
- `last_member_state`: 그룹 `state`는 마지막으로 상태를 변경한 멤버의 `state`와 같아집니다.

명령에 의해 그룹 상태가 변경되면(그룹 내 기기의 상태 변경을 통한 것이 아닌), 그룹 내 모든 기기도 상태를 변경합니다. 이 동작은 그룹에 `optimistic: false`를 설정하여 비활성화할 수 있습니다.

## 그룹은 어떻게 작동하나요?

위의 `add` 명령을 사용하면 기기가 그룹에 추가됩니다. 기기 자체가 속한 그룹을 저장합니다. 코디네이터 등 다른 기기는 어떤 기기가 어느 그룹에 속하는지 알 수 없습니다.

`set` 명령을 사용하여 예를 들어 그룹의 모든 기기를 켤 때, 브로드캐스트 요청이 네트워크의 **모든** 기기에 전송됩니다. 기기 자체가 해당 그룹에 속하는지 확인하고 명령을 실행해야 하는지 결정합니다.

## 특정 엔드포인트 추가하기

예를 들어 버튼 2개가 있는 QBKG03LM처럼 여러 엔드포인트가 있는 기기를 그룹에 추가하려면, 요청 페이로드 `{"group": GROUP, "device": DEVICE, "endpoint": ENDPOINT}`로 지정할 수 있습니다. 여기서 `ENDPOINT`는 원하는 엔드포인트 이름 또는 ID입니다. 요청 페이로드 예시: `{"group":"my_group","device":"my_switch","endpoint":"right"}`.
