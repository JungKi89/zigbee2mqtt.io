---
sidebarDepth: 1
redirectFrom: /information/scenes.md
---

# 씬(Scenes)

씬(Scene)을 사용하면 기기 또는 그룹에 특정 상태를 빠르게 설정할 수 있습니다.
대부분의 경우 전구 또는 전구 그룹에 사용되며, 단일 명령으로 특정 색상과 밝기를 설정할 수 있습니다.
아래의 모든 작업은 프론트엔드에서도 수행할 수 있습니다.

## 씬 만들기

씬은 두 가지 방법으로 만들 수 있습니다: 현재 상태를 저장하는 방법(`scene_store`)과 씬을 추가하는 방법(`scene_add`). 동일한 `SCENE_ID`를 사용하면 `scene_store`와 `scene_add`가 서로를 덮어씁니다.

### `scene_store`

씬을 만드는 가장 쉬운 방법입니다. 먼저 기기 또는 그룹을 원하는 상태로 설정하세요. 그런 다음 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 페이로드 `{"scene_store": SCENE_ID}`를 전송하여 현재 상태를 씬으로 저장합니다. 여기서 `SCENE_ID`는 숫자입니다(예: `1`).
씬에 이름도 지정하려면(예: 프론트엔드에 표시) `{"scene_store": {"ID": 1, "name": "My scene"}}`과 같이 전송하세요.
그룹의 씬에 단일 조명 상태만 저장하려면, 조명의 topic인 `zigbee2mqtt/[DEVICE_FRIENDLY_NAME]/set`에 예를 들어 `{"scene_store": {"ID": 1, "group_id": 2}}`를 전송하세요. 이를 통해 그룹에 생성된 씬의 다른 조명에 영향을 주지 않고 단일 조명의 상태를 변경할 수 있습니다.

### `scene_add`

`scene_add`는 `scene_store`에 비해 두 가지 장점이 있습니다: 씬에 저장할 속성을 제어할 수 있고(예: 밝기만 저장), 전환 시간을 설정할 수 있습니다. `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 다음 페이로드를 전송하여 `scene_add`를 실행할 수 있습니다:

```js
{
    "scene_add": {
        "ID": 3, // SCENE_ID
        "name": "Chill scene", // 선택사항: 씬 이름, 프론트엔드 등에 표시됨
        "transition": 3, // 선택사항: 씬의 전환 시간(초) (기본값 = 0초)
        // 아래 속성은 모두 선택사항입니다. 'color_temp'와 'color'를 동시에 사용할 수 없습니다.
        // 지정하지 않은 속성은 씬이 불러와질 때 현재 상태를 유지합니다.
        "state": "ON", // 상태, 'ON' 또는 'OFF'
        "brightness": 254, // 밝기 (0 - 254)
        "color_temp": 0, // 색온도 (0 - 500) 또는
        "color": {"hue": 0, "saturation": 100}, // 색조/채도로 표현한 색상 (hue, saturation, x, y 모두 지정하면 x/y 사용) 또는
        "color": {"x": 0.123, "y": 0.123}, // x/y로 표현한 색상 또는
        "color": "#0000FF" // 16진수 표기법으로 표현한 색상 (x/y로 저장됨)
    }
}
```

같은 `SCENE_ID`로 `scene_store`를 호출하면 `transition`을 제외한 모든 값이 덮어써집니다. 이 방식으로 `scene_store`로 만든 씬에 전환 효과를 적용할 수 있습니다.
`scene_store`와 마찬가지로 단일 조명에 대해 `scene_add`를 호출할 때 `group_id`를 제공할 수 있습니다. 이 경우 씬이 그룹에서 불러와질 때 상태가 적용됩니다. 이는 각 조명이 씬에서 서로 다른 상태를 가지고 전환 효과를 지원하는 강력한 기능이며, 씬이 그룹에서 불러와질 때 조명마다 다른 전환 시간을 적용할 수 있습니다.

## 씬 불러오기

씬을 불러오려면 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 페이로드 `{"scene_recall": SCENE_ID}`를 전송하세요. 여기서 `SCENE_ID`는 숫자입니다(예: `1`).

## 씬 제거

씬을 제거하려면 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 페이로드 `{"scene_remove": SCENE_ID}`를 전송하세요. 여기서 `SCENE_ID`는 숫자입니다(예: `1`).

모든 씬을 제거하려면 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 페이로드 `{"scene_remove_all": ""}`를 전송하세요.

## 씬에서 전환 효과 사용하기

씬의 전환 시간은 `scene_add` 명령으로만 설정할 수 있습니다. `scene_store` 명령에 전환 효과를 적용하려면, 먼저 `scene_add` 명령을 사용하여 새 씬을 만드세요:

```
{
    "scene_add": {
        "ID": 0,
        "name": "Scene Name",
        "transition": 5
    }
}
```

이렇게 하면 빈 씬이 생성됩니다. 그런 다음 기기의 값을 설정하고 `scene_add` 명령에서 제공한 동일한 `ID`를 사용하여 `scene_store` 명령을 호출하세요:

```
{
    "scene_store": {
        "ID": 0,
        "name": "Scene Name"
    }
}
```

`scene_store` 명령은 `transition` 값을 _제외한_ 모든 값을 덮어씁니다.

## 씬 이름 변경

기존 씬의 이름을 변경(또는 설정)하려면 `zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set`에 페이로드 `{"scene_rename": {"ID": SCENE_ID, "name": SCENE_NAME}}`를 전송하세요. `SCENE_ID`는 숫자이고 `SCENE_NAME`은 새 이름을 나타내는 문자열입니다. 예: `{"scene_rename": {"ID": 1, "name": "My new scene name"}}`.
