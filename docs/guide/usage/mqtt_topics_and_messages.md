---
sidebarDepth: 1
redirectFrom: /information/mqtt_topics_and_message_structure.md
---

# MQTT Topics와 메시지

이 페이지에서는 Zigbee2MQTT가 사용하는 MQTT topic을 설명합니다. 기본 topic(기본값: `zigbee2mqtt`)은 [Zigbee2MQTT `configuration.yaml`](../../guide/configuration/)에서 설정 가능합니다. Zigbee2MQTT 1.17.0에서 새로운 API가 도입되었으며, 레거시 API 문서는 [여기](https://github.com/Koenkk/zigbee2mqtt.io/blob/ead922ee141546ccce079430a7acce67c982c99b/docs/information/mqtt_topics_and_messages.md)에서 확인할 수 있습니다.

## zigbee2mqtt/FRIENDLY_NAME

`FRIENDLY_NAME`은 기기 또는 그룹의 IEEE 주소 또는 정의된 경우 `friendly_name`입니다.

::: tip
`friendly_name`에 `/` 구분자를 사용하여 기기와 그룹을 구조화할 수 있습니다.
예를 들어 `kitchen/floor_light`와 같은 `friendly_name`을 사용하면 MQTT Explorer에서 `kitchen`을 폴더로 하고 그 안에 `floor_light`가 있는 MQTT 구조가 생성됩니다.
:::

게시된 메시지는 **항상** JSON 형식입니다. 각 기기는 서로 다른 JSON 메시지를 생성합니다. 기기가 게시하는 내용을 확인하려면 ["지원 기기"](../../supported-devices/)를 통해 접근할 수 있는 기기 페이지의 "Exposes" 섹션을 확인하세요. 몇 가지 예시:

**Xiaomi MiJia 온도 및 습도 센서 (WSDCGQ01LM)**

```json
{
    "temperature": 27.34,
    "humidity": 44.72
}
```

**Xiaomi MiJia 무선 스위치 (WXKG01LM)**

```json
{
    "action": "single"
}
```

**Xiaomi MiJia 인체 움직임 센서 (RTCGQ01LM)**

```json
{
    "occupancy": true
}
```

**IKEA TRADFRI LED bulb E27 980 lumen, 조광 가능, 백색 스펙트럼, 유백색 (LED1545G12)**

```json
{
    "state": "ON",
    "brightness": 215,
    "color_temp": 325
}
```

## zigbee2mqtt/FRIENDLY_NAME/availability

["기기 가용성"](../configuration/device-availability.md)이 설정된 경우 온라인/오프라인 상태가 변경될 때 게시됩니다.

## zigbee2mqtt/FRIENDLY_NAME/set

이 topic에 메시지를 게시하면 MQTT를 통해 Zigbee 기기 또는 그룹을 제어할 수 있습니다. JSON 메시지만 허용됩니다. Philips Hue Go(7146060PH)를 제어하는 예시입니다. 특정 기기를 제어하는 방법은 ["지원 기기"](../../supported-devices/)를 통해 접근할 수 있는 기기 페이지의 _Exposes_ 섹션에서 확인할 수 있습니다.

```js
{
  "state": "ON", // 또는 "OFF", "TOGGLE"
  "brightness": 255, // 0에서 255 사이의 값
  "color": {"x": 0.123, "y": 0.123} // XY 색상
}
```

FRIENDLY_NAME이 그룹을 가리키는 경우, 해당 그룹의 모든 기기에 대한 상태를 설정합니다.

### JSON 없이 사용

JSON을 사용하지 않으려면 `zigbee2mqtt/[FRIENDLY_NAME]/set/state`에 페이로드 `ON`을 게시하는 것은 `zigbee2mqtt/[FRIENDLY_NAME]/set`에 페이로드 `{"state": "ON"}`을 게시하는 것과 같습니다.

### 메시지 게시

메시지 게시는 사용하는 MQTT 클라이언트에 따라 다릅니다. 예를 들어 mosquitto를 사용하여 명령줄에서 메시지를 게시하려면 다음 명령을 사용하세요.

```bash
 mosquitto_pub -t 'zigbee2mqtt/0x0fffffffffffffff/set' -m '{ "state": "ON" }'
```

#### ZCL 속성 직접 읽기/쓰기

개발/디버그 목적으로 이 엔드포인트를 통해 기기에 직접 속성 읽기/쓰기 요청을 전송할 수 있습니다.
클러스터와 속성은 이름 또는 ID로 참조할 수 있습니다.
Zigbee2MQTT 내의 모든 사용 가능한 이름은 [cluster.ts](https://github.com/Koenkk/zigbee-herdsman/blob/master/src/zspec/zcl/definition/cluster.ts)를 참조하세요.

##### 읽기 요청:

```js
{
  "read": {
    "cluster": genBasic, // 클러스터의 이름(표준에 정의된 경우) 또는 ID 사용 가능
    "attributes": [1]    // 속성의 이름(표준에 정의된 경우) 또는 ID 사용 가능
  }
}
```

##### 쓰기 요청:

하나 또는 여러 속성 쓰기는 여러 방법으로 수행할 수 있습니다:

```js
{
  "write": {
    "cluster": "genBasic" // 이름 또는 ID 모두 사용 가능
    "payload" {
      // 속성 ID가 미리 정의된 타입 중 하나인 경우 key:value로 직접 쓸 수 있습니다
      "manufacturerName": "Best Manufacturer"
      // 속성 ID가 미리 정의된 것이 아닌 경우(ZCL 사양 외부)
      // 다음 구문으로 쓸 수 있습니다
      "0": // ID
      {
          "value": "Best Manufacturer",
          "type": 66 // ZCL 사양에 정의된 타입 열거형. `read` 명령 또는 사양에서 확인 가능
      }
    }
  }
}
```

## zigbee2mqtt/FRIENDLY_NAME/get

`set` 명령의 반대 역할을 합니다. 기기에서 값을 읽을 수 있습니다. 예를 들어 기기의 상태를 읽으려면 페이로드 `{"state": ""}`를 전송하세요. `/get`으로 조회할 수 있는 것은 기기 페이지의 _Exposes_ 섹션에 명시되어 있습니다.

## zigbee2mqtt/bridge/info

브리지의 정보를 포함합니다.
페이로드의 속성 중 하나가 변경될 때마다 다시 게시됩니다.
페이로드 예시:

```json
{
    "version":"1.13.0-dev",
    "commit":"772f6c0",
    "coordinator":{
        "ieee_address": "0x12345678",
        "type":"zStack30x",
        "meta":{"revision":20190425, "transportrev":2, "product":2, "majorrel":2, "minorrel":7, "maintrel":2}
    },
    "zigbee_herdsman_converters":{"version":"15.98.0"},
    "zigbee_herdsman":{"version":"0.20.0"},
    "network":{"channel":15,"pan_id":5674,"extended_pan_id":[0,11,22]},
    "log_level":"debug",
    "permit_join":true,
    "permit_join_end": 1733666394, // permit join이 종료되는 에포크 시간. permit join이 비활성화된 경우 `undefined`
    "config": {...}, // network_key를 제외한 완전한 Zigbee2MQTT 설정 포함
    "config_schema": {...}, // 설정의 JSON 스키마 포함
    "restart_required": false, // zigbee2mqtt/request/bridge/options를 통해 설정된 옵션을 적용하려면 Zigbee2MQTT 재시작이 필요한지 여부
    "os": {
        "version": "Linux - 0.0.1 - x64", // OS 버전
        "node_version": "v1.2.3", // Node.js 버전
        "cpus": "Intel Core i7-9999 (x1)", // CPU 타입 + 코어
        "memory_mb": 10, // 시스템 메모리 총량(MB)
    },
    "mqtt": {
        "server": "mqtt://localhost:1883", // MQTT 서버
        "version": 5, // MQTT 프로토콜 버전
    }
}
```

## zigbee2mqtt/bridge/health

[Health](./health.md)를 참조하세요.

## zigbee2mqtt/bridge/state

브리지의 상태를 포함하며, 이 메시지는 retained로 게시됩니다. 페이로드:

- `{"state":"online"}`: 브리지가 실행 중일 때 게시됨(시작 시)
- `{"state":"offline"}`: 브리지가 중지되기 직전에 게시됨

## zigbee2mqtt/bridge/logging

`debug` 수준을 제외한 모든 Zigbee2MQTT 로그는 `{"level": LEVEL, "message": MESSAGE, "namespace": NAMESPACE}` 형식으로 이 topic에 게시됩니다. 예: `{"level": "info", "message": "Zigbee: allowing new devices to join.", "namespace": "z2m"}`.

## zigbee2mqtt/bridge/devices

브리지에 연결된 기기를 포함하며, 이 메시지는 retained로 게시됩니다.
기기가 참가하거나 떠날 때마다 다시 게시됩니다.
`supported`가 `false`인 경우 `definition`은 `null`입니다.
페이로드 예시:

```json
[
    {
        "ieee_address":"0x00158d00018255df",
        "type":"Router",
        "network_address":29159,
        "supported":true,
        "disabled": false,
        "friendly_name":"my_plug",
        "description":"this plug is in the kitchen",
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":["genOnOff","genBasic"],"output":[],"scenes":[]}}},
        "definition":{
            "source":"native", // native, generated 또는 external
            "model":"ZNCZ02LM",
            "vendor":"Xiaomi",
            "description":"Mi power plug Zigbee",
            "options": [...], // 아래 exposes/options 참조
            "exposes": [...]  // 아래 exposes/options 참조
        },
        "power_source":"Mains (single phase)",
        "date_code":"02-28-2017",
        "model_id":"lumi.plug",
        // PENDING, IN_PROGRESS, SUCCESSFUL 또는 FAILED 가능
        "interview_state": "SUCCESSFUL",
        // `interviewing`과 `interview_completed`는 deprecated. `interview_state`를 사용하세요.
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x90fd9ffffe6494fc",
        "type":"Router",
        "network_address":57440,
        "supported":true,
        "disabled": false,
        "friendly_name":"my_bulb",
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":["genOnOff","genBasic","genLevelCtrl"],"output":["genOta"],"scenes": []}}},
        "definition":{
            "source":"native",
            "model":"LED1624G9",
            "vendor":"IKEA",
            "description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white",
            "options": [...], // 아래 exposes/options 참조
            "exposes": [...]  // 아래 exposes/options 참조
        },
        "power_source":"Mains (single phase)",
        "software_build_id":"1.3.009",
        "model_id":"TRADFRI bulb E27 CWS opal 600lm",
        "date_code":"20180410",
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x00169a00022256da",
        "type":"Router",
        "endpoints":{
          "1":{
            "bindings":[
              {"cluster":"genOnOff","target":{"type":"endpoint","endpoint":1,"ieee_address":"0x000b57fffec6a5b3"}},
              {"cluster":"genOnOff","target":{"type":"group","id":1}},
            ],
            "configured_reportings":[
              {"cluster":"genOnOff","attribute":"onOff","maximum_report_interval":10,"minimum_report_interval":1,"reportable_change":1}
            ],
            "clusters":{"input":["genBasic","msIlluminanceMeasurement"],"output":["genOnOff"]},
            "scenes": [{"id": 3, "name": "Chill scene"}],
            "name": "left"
          }
        },
        "network_address":22160,
        "supported":false,
        "disabled": false,
        "friendly_name":"my_sensor",
        "definition":null,
        "power_source":"Battery",
        "date_code":"04-28-2019",
        "model_id":null,
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
    {
        "ieee_address":"0x00124b00120144ae",
        "type":"Coordinator",
        "network_address":0,
        "supported":false,
        "disabled": false,
        "endpoints":{"1":{"bindings":[],"configured_reportings":[],"clusters":{"input":[],"output":[]},"scenes": []}},
        "friendly_name":"Coordinator",
        "definition":null,
        "power_source":null,
        "date_code":null,
        "model_id":null,
        "interview_state": "SUCCESSFUL",
        "interviewing":false,
        "interview_completed":true
    },
]
```

### Exposes/options

기기 definition에는 항상 `exposes`와 `options` 속성이 있으며, 이는 expose 객체를 포함하는 목록입니다. expose 형식은 [Exposes](./exposes.md)에 문서화되어 있습니다.

- `exposes`: 모든 기기 기능(예: switch, light, occupancy)을 포함합니다.
- `options`: 모든 기기 옵션(예: `temperature_precision`)을 포함하며, `zigbee2mqtt/bridge/request/device/options`를 통해 설정할 수 있습니다.

## zigbee2mqtt/bridge/definitions

기기의 Zigbee 클러스터 정의를 포함하며, 이 메시지는 retained로 게시되고 두 부분으로 구성됩니다:

- `clusters`: 클러스터 이름별로 구성된 `zigbee-herdsman` 패키지의 공식 클러스터 정의 포함
- `custom_clusters`: 현재 사용 중인 기기의 `zigbee-herdsman-converts` 패키지에서 가져온 사용자 지정 클러스터 정의 포함

페이로드 예시:

```json
{
  "clusters": {
    "genBasic": {ID: 0, ...},
    "genPowerCfg" : {ID: 1, ...},
  },
  "custom_clusters": {
    "0x12345678": {
       "myManuspecificCluster": {"ID": 0xFC01, ...},
    }
  }
}
```

이 메시지는 시작 시와 기기가 참가/떠나기/재구성될 때 업데이트됩니다.

## zigbee2mqtt/bridge/groups

그룹을 포함하며, 이 메시지는 retained로 게시됩니다.
그룹이 추가/제거되거나 기기가 그룹에 추가/제거될 때마다 다시 게시됩니다.
페이로드 예시:

```json
[
    {
        "id": 1,
        "friendly_name": "my_group",
        "scenes": [{"id": 1, "name": "Scene 1"}],
        "members": [
            {
                "ieee_address": "0x90fd9ffffe6494fc",
                "endpoint": 1
            }
        ]
    }
]
```

## zigbee2mqtt/bridge/event

이벤트가 이 topic에 게시됩니다. 가능한 타입은 `device_joined`, `device_interview`, `device_leave`, `device_announce`입니다. 페이로드 예시:

- `{"type":"device_joined","data":{"friendly_name":"0x90fd9ffffe6494fc","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_announce","data":{"friendly_name":"0x90fd9ffffe6494fc","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"started","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"successful","ieee_address":"0x90fd9ffffe6494fc","supported":true,"definition":{"model":"LED1624G9","vendor":"IKEA","description":"TRADFRI LED bulb E14/E26/E27 600 lumen, dimmable, color, opal white"}}}`
- `{"type":"device_interview","data":{"friendly_name":"0x90fd9ffffe6494fc","status":"failed","ieee_address":"0x90fd9ffffe6494fc"}}`
- `{"type":"device_leave","data":{"ieee_address":"0x90fd9ffffe6494fc","friendly_name":"my_bulb"}}`

## zigbee2mqtt/bridge/extensions

[외부 확장](../../advanced/more/external_extensions.md)을 참조하세요.

## zigbee2mqtt/bridge/converters

[외부 컨버터](../../advanced/more/external_converters.md)를 참조하세요.

## zigbee2mqtt/bridge/request/+

새 기기의 참가 허용과 같은 특정 설정을 구성하는 데 사용할 수 있습니다. Zigbee2MQTT는 항상 `zigbee2mqtt/bridge/response/+`에 같은 topic으로 응답합니다. 응답 페이로드에는 최소한 `status`와 `data` 속성이 포함되며, `status`는 `ok` 또는 `error`입니다. `status`가 `error`이면 오류 설명을 포함하는 `error` 속성도 포함됩니다.

예시: `{"time": 254}` 페이로드와 함께 `zigbee2mqtt/bridge/request/permit_join`을 게시하면 Zigbee2MQTT가 `zigbee2mqtt/bridge/response/permit_join`에 페이로드 `{"data":{"time":254},"status":"ok"}`로 응답합니다. 요청이 실패한 경우 응답은 `{"data":{}, "error": "Invalid payload","status":"error"}`가 됩니다.

선택적으로 요청에 `transaction` 속성을 포함할 수 있습니다. 이를 통해 요청과 응답을 쉽게 매칭할 수 있습니다. `transaction` 속성이 포함되면 Zigbee2MQTT가 응답에도 이를 포함합니다. 예시: `{"time": 254, "transaction":23}` 페이로드와 함께 `zigbee2mqtt/bridge/request/permit_join`을 전송하면 `zigbee2mqtt/bridge/response/permit_join`에 `{"data":{"time":254},"status":"ok","transaction":23}` 페이로드로 응답합니다.

기기가 관련된 요청의 경우 `ENDPOINT_ID`가 엔드포인트 번호(예: `1`, `2`) 또는 엔드포인트 이름(예: `left`, `l1`)인 `/ENDPOINT_ID`를 추가하여 특정 엔드포인트를 선택할 수 있습니다. 기본적으로 첫 번째 엔드포인트가 사용됩니다. `zigbee2mqtt/bridge/request/device/bind` 페이로드 예시: `{"from": "my_remote/left", "to": "my_bulb"}`.

### 가능한 요청들

### 일반

#### zigbee2mqtt/bridge/request/permit_join

새 기기의 참가를 지정된 시간(초) 동안 허용하거나 거부합니다.

허용되는 페이로드:

> 최대 시간 동안 활성화:
>
> ```json
> {"time": 254}
> ```
>
> 비활성화:
>
> ```json
> {"time": 0}
> ```
>
> 지정된 `friendly_name`의 기기에 대해서만 활성화:
>
> ```json
> {"time": 60, "device": "bulb"}
> ```
>
> 코디네이터에 대해서만 활성화:
>
> ```json
> {"time": 60, "device": "coordinator"}
> ```

#### zigbee2mqtt/bridge/request/health_check

Zigbee2MQTT가 정상인지 확인할 수 있습니다. 페이로드는 비어 있어야 합니다. 응답 예시: `{"data":{"healthy":true},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/coordinator_check

코디네이터 검사를 실행할 수 있습니다. 페이로드는 비어 있어야 합니다. 응답 예시: `{"data":{"missing_routers":[{"friendly_name":"bulb","ieee_address":"0x000b57fffec6a5b2"}]},"status":"ok"}`.

이 검사는 Texas Instruments 기반 어댑터(예: CC2652/CC1352)에서만 지원됩니다. 코디네이터 메모리에서 누락된 라우터가 있는지 확인합니다. 라우터가 누락된 경우 다음 문제 중 하나가 발생할 수 있습니다:

- 네트워크에 기기를 페어링할 수 없으며, 이 누락된 라우터를 통해 참가하려는 모든 기기의 페어링이 실패할 수 있습니다.
- 기기가 네트워크에서 떨어져 나갑니다. 네트워크에 있는 기기가 다시 참가하려 할 때 이 누락된 라우터를 통해 시도하면 재참가에 실패합니다.

해결책은 누락된 라우터를 다시 페어링하는 것입니다. 라우터가 누락되는 알려진 두 가지 원인이 있습니다:

- 기기를 다시 페어링하지 않고 Zigbee 1.2 코디네이터에서 3.0으로 마이그레이션(예: CC2530/CC2531 -> CC2652/CC1352). Zigbee 1.2는 보안 요구 사항이 덜 엄격하기 때문입니다.
- 펌웨어 업그레이드 시 발생. Texas Instruments SDK의 버그로 인한 것으로 보입니다.

#### zigbee2mqtt/bridge/request/restart

Zigbee2MQTT를 재시작합니다. 페이로드는 비어 있어야 합니다. 응답 예시: `{"data":{},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/networkmap

**경고: networkmap 스캔 중에는 네트워크가 응답하지 않거나 응답이 느려집니다. 네트워크 크기에 따라 10초에서 2분이 소요될 수 있습니다. 따라서 수동으로만 스캔하는 것이 권장됩니다!**

Zigbee 네트워크의 맵을 가져올 수 있습니다. 페이로드 형식은 `{"type": TYPE, "routes": BOOL}` 또는 `TYPE`입니다. 예: `graphviz`, 응답 `{"data":{"value": "NETWORKMAP","type":"graphviz","routes":false},"status":"ok"}`. 가능한 타입은 `raw`, `graphviz`, `plantuml`입니다. 경로를 포함하려면 `routes`를 `true`로 설정하세요. `routes`는 선택사항이며 기본값은 `false`입니다.

[webgraphviz.com](http://www.webgraphviz.com/)(`graphviz`용), [planttext.com](https://www.planttext.com/)(`plantuml`용) 또는 다른 도구를 사용하여 네트워크 그래프를 생성하세요.

graphviz 맵에서 기기는 다음과 같이 표시됩니다:

- **코디네이터:** 굵은 테두리의 직사각형
- **라우터:** 둥근 모서리의 직사각형
- **End device:** 둥근 모서리와 점선 테두리의 직사각형

링크에는 링크 품질(0..255)과 활성 경로(짧은 16비트 목적지 주소로 나열)가 표시됩니다. 화살표는 메시지 방향을 나타냅니다. 코디네이터와 라우터는 일반적으로 양방향 메시지 경로를 보여주는 두 개의 선이 있습니다. 선 스타일:

- **end device**로: 일반 선
- **코디네이터**와 **라우터** 사이 및 연결: 활성 경로는 굵은 선, 활성 경로 없음은 가는 선

#### zigbee2mqtt/bridge/request/extension/save

[외부 확장](../../advanced/more/external_extensions.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/extension/remove

[외부 확장](../../advanced/more/external_extensions.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/converter/save

[외부 컨버터](../../advanced/more/external_converters.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/converter/remove

[외부 컨버터](../../advanced/more/external_converters.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/backup

`data` 폴더의 백업을 만듭니다(`data/log` 디렉토리 제외). 페이로드는 비어 있어야 합니다. 응답 예시: `{"data":{"zip":"WklHQkVFMk1RVFQuUk9DS1M="},"status":"ok"}`. `zip` 속성은 Base64로 인코딩된 zip 파일을 나타냅니다. 모든 어댑터가 백업(`coordinator_backup.json`)을 지원하지는 않습니다. 자세한 내용은 [어댑터](../adapters/README.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/install_code/add

코디네이터에 설치 코드를 추가할 수 있습니다. 설치 코드로만 페어링할 수 있는 Zigbee 3.0 기기를 페어링하려는 경우 사용하세요. 이러한 기기에는 일반적으로 QR 코드가 있습니다. 이 QR 코드를 스캔하면 예를 들어 `ZB10SG0D831018234800400000000000000000009035EAFFFE424793DLKAE3B287281CF11F550733A0CFC38AA31E802`와 같은 코드를 얻을 수 있습니다. 이 코드를 `zigbee2mqtt/bridge/request/install_code/add`에 페이로드 `{"value":"THE_CODE"}`로 게시하세요. 응답 예시: `{"data":{"value":"THE_CODE"},"status":"ok"}`.

::: tip 팁
WindFront 프론트엔드는 설치 코드를 추가한 후 자동으로 참가 허용을 활성화하지 않습니다. 일반 기기와 동일하게 원하는 기기 또는 "all"에 대해 참가 허용을 활성화할 수 있습니다.
:::

### 기기

#### zigbee2mqtt/bridge/request/device/remove

네트워크에서 기기를 제거합니다. 허용되는 페이로드는 `{"id": "deviceID"}` 또는 `deviceID`이며, deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 예: 요청 `{"id": "my_bulb"}` 또는 `my_bulb`, 응답: `{"data":{"id": "my_bulb","block":false,"force":false},"status":"ok"}`.

Zigbee에서 코디네이터는 기기에게 네트워크에서 제거되도록 **요청**만 할 수 있습니다.
즉, 기기가 이 요청에 응답하지 않으면 네트워크에서 제거되지 않습니다.
이는 절전 상태이고 요청을 수신하지 못하는 배터리 구동 기기의 경우 발생할 수 있습니다.
제거에 실패하면 응답은 예를 들어 `{"data":{"id": "my_bulb","block":false,"force":false},"status":"error","error":"Failed to remove dimmer (Error: AREQ - ZDO - mgmtLeaveRsp after 10000ms)"}`가 됩니다.

기기를 제거하는 다른 방법은 공장 초기화입니다. 모든 기기에서 작동하지 않을 수 있으며 기기 자체에 따라 다릅니다.
기기가 네트워크에서 제거되면 `zigbee2mqtt/bridge/event`에서 `device_leave` 이벤트를 받게 됩니다.

위의 모든 방법이 실패한 경우 기기를 강제로 제거할 수 있습니다. 강제 제거는 **데이터베이스에서만** 기기를 제거합니다. 이 기기가 공장 초기화될 때까지 네트워크 암호화 키를 보유하므로 네트워크를 통해 통신할 수 있습니다!
기기를 강제로 제거하려면 선택적 `force` 속성(기본값 `false`)을 페이로드에 추가하세요. 예: `{"id":"my_bulb","force":true}`.

기기를 차단하려면 선택적 `block` 속성(기본값 `false`)을 추가할 수 있습니다. 예: `{"id":"my_bulb","block":true}`. Zigbee에는 차단 기능이 없으므로, 기기가 차단되면 참가할 때 Zigbee2MQTT가 즉시 기기에 네트워크에서 제거되도록 요청합니다.

#### zigbee2mqtt/bridge/request/device/ota_update/check

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/update

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/check/downgrade

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/update/downgrade

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/schedule

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/schedule/downgrade

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/ota_update/unschedule

[OTA 업데이트](./ota_updates.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/device/configure

기기의 재구성을 수동으로 트리거할 수 있습니다. 기기가 예상대로 작동하지 않을 때(예: 특정 값을 보고하지 않을 때)만 사용해야 합니다. 모든 기기를 구성할 수 있는 것은 아닙니다(정의에 `configure`가 있는 경우만, [정의](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices) 참조). 허용되는 페이로드는 `{"id": "deviceID"}` 또는 `deviceID`이며, deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 예: 요청 `{"id": "my_remote"}` 또는 `my_remote`, 응답: `{"data":{"id": "my_remote"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/device/interview

지정된 기기에 대한 인터뷰를 수동으로 트리거하여 zigbee2mqtt가 엔드포인트, 클러스터, 기본 속성을 읽도록 합니다. 기기 인터뷰는 일반적으로 초기 페어링 후에만 발생하지만, 펌웨어 업그레이드로 새 기능이 추가된 후 인터뷰를 수행하는 것이 유용할 때가 있습니다. 페이로드 형식은 `{"id": "deviceID"}`이며, deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 예: `{"id": "my_bulb"}`, 응답: `{"data":{"id": "my_bulb"},"status":"ok"}`.

#### zigbee2mqtt/bridge/request/device/options

기기 옵션을 즉시 변경할 수 있습니다. 기존 옵션을 변경하거나 새 옵션을 추가할 수 있습니다. 페이로드 형식은 `{"id": deviceID,"options": OPTIONS}`이며, deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 예: `{"id": "my_bulb", "options":{"transition":1}}`. 응답은 `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"id":"my_bulb","restart_required":false},"status":"ok"}`가 됩니다. 일부 옵션은 Zigbee2MQTT 재시작이 필요할 수 있으며, 이 경우 `restart_required`가 `true`로 설정됩니다. `restart_required`는 `zigbee2mqtt/bridge/info`에도 게시됩니다. Zigbee2MQTT를 재시작하려면 `zigbee2mqtt/bridge/request/restart`를 사용하세요.

#### zigbee2mqtt/bridge/request/device/rename

기기의 `friendly_name`을 즉시 변경할 수 있습니다. 페이로드 형식은 `{"from": deviceID, "to": deviceID}`이며, deviceID는 기기의 `ieee_address` 또는 `friendly_name`입니다. 예: `{"from": "my_bulb", "to": "my_bulb_new_name"}`. 응답은 `{"data":{"from":"my_bulb","to":"my_bulb_new_name","homeassistant_rename":false},"status":"ok"}`가 됩니다.

Home Assistant discovery를 사용하고 새 이름에 따라 엔티티 ID도 업데이트하려면, 예를 들어 `{"from": "my_bulb", "to": "my_bulb_new_name","homeassistant_rename":true}`를 전송하세요.

마지막으로 참가한 기기의 이름을 변경하려면 `from` 속성을 생략하고 `last`를 `true`로 설정하세요. 예: `{"last": true, "to": "my_bulb_new_name"}`.

#### zigbee2mqtt/bridge/request/device/bind

[Binding](./binding.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/device/unbind

[Binding](./binding.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/device/binds/clear

[Binding](./binding.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/device/reporting/configure

_별칭: `zigbee2mqtt/bridge/request/device/configure_reporting` (deprecated)_

기기에 Zigbee 리포팅 설정 명령을 전송할 수 있습니다. Zigbee 기기에는 온도, 습도, 배터리 잔량 등의 상태 변화를 보고할 수 있는 속성이 있습니다. 속성 리포팅을 통해 이러한 기기가 속성값 변화 시 자동으로 업데이트를 전송합니다.
예를 들어 Zigbee2MQTT 대신 리모컨으로 전구 밝기를 변경하면 상태가 동기화되지 않습니다.
전구에 리포팅을 설정하면 밝기 변경에 대한 알림을 Zigbee2MQTT에 전송하고 Zigbee2MQTT에서 상태를 업데이트할 수 있습니다.

관련 정보와 함께 최신 상태를 유지하는 것과 에너지를 절약하는 것, 특히 배터리 구동 기기의 경우 균형을 유지하는 것이 좋습니다.

자세한 내용은 [Zigbee Cluster Library](https://github.com/Koenkk/zigbee-herdsman/wiki/References#csa-zigbee-alliance-spec)의 Configure Reporting Command를 참조하세요. 페이로드 예시: `{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":10,"reportable_change":10}`. 이 경우 응답은 `{"data":{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":"10","reportable_change":10},"status":"ok"}`가 됩니다.

파라미터

**최소 리포팅 간격** (minimum_report_interval)
즉, 기기에서 속성이 변경된 후 업데이트를 전송하기까지의 최소 대기 시간.
0 값은 속성(예: 온도)이 변경되는 즉시 업데이트를 전송함을 의미합니다.

**최대 리포팅 간격** (maximum_report_interval)
즉, 속성에 변화가 없을 때 기기가 얼마나 자주 보고해야 하는지.
60 값은 전구가 30분 동안 꺼져 있어도 속성 변화가 없더라도 30개의 업데이트(매 60초마다)를 전송함을 의미합니다.

**최소 리포팅 변화** (reportable_change)
최소 리포팅 변화는 기기에게 중요한 변화가 있을 때만 알리도록 하는 것입니다.
온도 센서의 최소 리포팅 변화를 1도로 설정하면 온도가 최소 1도 변하지 않으면 업데이트를 전송하지 않습니다.
환경의 사소한 변동을 필터링하고 중요한 변화에만 집중하는 방법입니다.

::: tip 참고
`reportable_change` 지원 여부는 속성 타입에 따라 다릅니다. 예를 들어 `measure` 타입 속성은 지원할 가능성이 높지만, `enum` 타입 속성은 지원하지 않을 수 있습니다. 제공되었지만 지원되지 않으면 무시됩니다.
:::

리포팅을 비활성화하려면 `maximum_report_interval`을 `65535`로 설정하세요.

참고:

- 모든 기기가 Zigbee 리포팅 설정 명령을 지원하지는 않습니다(예: Xiaomi WSDCGQ11LM 온도/습도 센서는 지원하지 않음)
- 배터리 구동 기기의 리포팅 설정이 실패하면 명령을 전송하기 바로 전에 기기를 깨워야 합니다.
- `reportable_change` 값은 속성 단위에 따라 다릅니다. 예를 들어 온도의 경우 100은 일반적으로 1°C 변화를 의미합니다.
- 옵션을 지정하려면, 예를 들어 manufacturerCode를 사용하려면 `{"id":"my_bulb","cluster":"genLevelCtrl","attribute":"currentLevel","minimum_report_interval":5,"maximum_report_interval":10,"reportable_change":10,"options":{"manufacturerCode":1234}}`를 사용하세요.

#### zigbee2mqtt/bridge/request/device/reporting/read

기기에 등록된 리포팅 설정을 읽을 수 있습니다.
속성이 보고 가능해야 하며, 보고 가능하지 않은 요청의 모든 속성에 대해 오류 상태가 반환됩니다.

페이로드 예시:

- 하나의 속성: `{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"}]}`
- 여러 속성: `{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"},{"attribute":"currentFrequency"}]}`
- 제조사 특정 속성: `{"id":"my_bulb","endpoint":1,"cluster":"genLevelCtrl","configs":[{"attribute":"currentLevel"}], "manufacturer_code": 0x1234}`

::: tip
리포팅 설정 읽기는 요청/응답에 따라 Zigbee2MQTT가 내부적으로 사용하는 캐시 데이터를 자동으로 업데이트합니다. 이 요청이 성공적으로 실행된 후 Zigbee2MQTT의 리포팅 설정은 기기의 실제 리포팅 설정을 반영해야 합니다.
:::

### 그룹

#### zigbee2mqtt/bridge/request/group/remove

그룹을 제거합니다. 허용되는 페이로드는 `{"id": "groupID"}` 또는 `groupID`이며, groupID는 그룹의 `groupID` 또는 `friendly_name`입니다. 예: 요청 `{"id": "my_group"}` 또는 `my_group`, 응답: `{"data":{"id": "my_group", "force": false},"status":"ok"}`.

기기 중 하나가 그룹에서 제거되지 못하면(예: 오프라인 상태) 그룹 제거가 실패할 수 있습니다. 이 경우 선택적 `force` 속성을 `true`로 설정하여 강제로 그룹을 제거할 수 있습니다. 예: `{"id": "my_group", "force": true}`. 이 경우 기기가 여전히 그룹 안에 있으며, groupID가 나중에 재사용되면 기기가 해당 그룹의 일부가 됩니다.

#### zigbee2mqtt/bridge/request/group/add

그룹을 추가합니다. 허용되는 페이로드는 `{"friendly_name": NAME, "id": NUMBER}` 또는 `NAME`입니다. 예: 요청 `{"id": 9, "friendly_name": "new_group"}` 또는 `new_group`, 응답: `{"data":{"id": 9,"friendly_name":"new_group"},"status":"ok"}`. `id` 속성은 선택사항입니다.

#### zigbee2mqtt/bridge/request/group/rename

그룹의 `friendly_name`을 즉시 변경할 수 있습니다. 페이로드 형식은 `{"from": groupID, "to": groupID}`이며, groupID는 그룹의 `groupID` 또는 `friendly_name`입니다. 예: `{"from": "my_group", "to": "my_group_new_name"}`. 응답은 `{"data":{"from":"my_group","to":"my_group_new_name"},"status":"ok"}`가 됩니다.

Home Assistant discovery를 사용하고 새 이름에 따라 엔티티 ID도 업데이트하려면, 예를 들어 `{"from": "my_group", "to": "my_group_new_name","homeassistant_rename":true}`를 전송하세요.

#### zigbee2mqtt/bridge/request/group/options

그룹 옵션을 즉시 변경할 수 있습니다. 기존 옵션을 변경하거나 새 옵션을 추가할 수 있습니다. 페이로드 형식은 `{"id": groupID,"options": OPTIONS}`이며, groupID는 그룹의 `group_ID` 또는 `friendly_name`입니다. 예: `{"id": "my_group", "options":{"transition":1}}`. 응답은 `{"data":{"from":{"retain":false},"to":{"retain":false,"transition":1},"id":"my_group","restart_required":false},"status":"ok"}`가 됩니다. 일부 옵션은 Zigbee2MQTT 재시작이 필요할 수 있으며, 이 경우 `restart_required`가 `true`로 설정됩니다. `restart_required`는 `zigbee2mqtt/bridge/info`에도 게시됩니다. Zigbee2MQTT를 재시작하려면 `zigbee2mqtt/bridge/request/restart`를 사용하세요.

#### zigbee2mqtt/bridge/request/group/members/add

[그룹(Groups)](./groups.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/group/members/remove

[그룹(Groups)](./groups.md)을 참조하세요.

#### zigbee2mqtt/bridge/request/group/members/remove_all

[그룹(Groups)](./groups.md)을 참조하세요.

### 설정

#### zigbee2mqtt/bridge/request/options

모든 옵션을 설정할 수 있습니다. JSON 스키마는 [여기](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/settings.schema.json)에서 확인할 수 있습니다(`zigbee2mqtt/bridge/info`의 `config_schema` 속성에도 게시됨). `log_level` 설정 예시: `zigbee2mqtt/bridge/request/options`에 페이로드 `{"options": {"advanced": { "log_level": "debug" }}}`를 전송하면 응답: `{"data":{"restart_required": false},"status":"ok"}`. 일부 옵션은 Zigbee2MQTT 재시작이 필요할 수 있으며, 이 경우 `restart_required`가 `true`로 설정됩니다. `restart_required`는 `zigbee2mqtt/bridge/info`에도 게시됩니다. Zigbee2MQTT를 재시작하려면 `zigbee2mqtt/bridge/request/restart`를 사용하세요.

### Touchlink

#### zigbee2mqtt/bridge/request/touchlink/factory_reset

[Touchlink](./touchlink.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/touchlink/scan

[Touchlink](./touchlink.md)를 참조하세요.

#### zigbee2mqtt/bridge/request/touchlink/identify

[Touchlink](./touchlink.md)를 참조하세요.

### Action

#### zigbee2mqtt/bridge/request/action

특정 사전 정의된 액션(일반적으로 제조사 특정)을 호출할 수 있습니다.
모든 액션 이름은 `actions` 아래의 `zigbee2mqtt/bridge/definitions`에 게시됩니다.

이 topic의 페이로드는 다음 형식을 따릅니다(특정 액션 문서에서 `params`에 포함해야 할 내용 참조):

`{"action":"<action_name>","params":{/* 액션별 파라미터 */}}`

예:

`{"action":"just_an_example","params":{"abcd": 1, "zyx": "my_device"}}`

::: tip
최신 액션/파라미터는 소스 코드에서 직접 확인할 수 있습니다: [https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/actions.ts](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/actions.ts)
:::

##### 액션: `raw`

::: warning
이를 통해 네트워크에 부정적인 영향을 주거나 심지어 손상시킬 수 있는 요청을 전송할 수 있습니다. 주의하여 사용하세요!
:::

완전히 사용자 정의 페이로드를 전송할 수 있는 특별 액션입니다. 주어진 페이로드를 분석하여 적절한 전송 방법(ZCL, ZDO 등)을 선택합니다.
파라미터 세부 내용은 위 링크를 참조하세요(이 문서의 범위를 벗어납니다).
