---
sidebar: auto
redirectFrom: /information/external_converters.md
---

# External Converter

:::warning 경고
External converter는 버전 2.11.0 이상의 신규 설치에서 기본적으로 비활성화되어 있습니다.
활성화하려면 [`enable_external_js`](../../guide/configuration/all-settings.md#enable-external-js)를 참조하세요.
[자세한 내용](../../guide/installation/14_securing.md#external-extensions-and-converters) 참조
:::

Zigbee2MQTT는 기기로부터 및 기기로의 메시지를 파싱하기 위해 [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters)를 사용합니다.

External converter는 새 기기 지원을 테스트하는 방법을 제공합니다. 내부 converter와 동일하게 작동합니다.

External converter는 `external_converters` 폴더(Zigbee2MQTT configuration.yaml 파일과 파일 시스템의 동일한 레벨)에 저장됩니다. [`DefinitionWithExtend`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/types.ts) 유형에 맞는 JavaScript Object 또는 Object 배열을 export해야 합니다. 프레임워크에 익숙해지려면 [기존 converter](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)를 참조하세요.

:::tip 팁
Converter가 준비되면 모든 사람이 사용할 수 있도록 Zigbee2MQTT에 통합될 수 있게 [pull request](https://github.com/Koenkk/zigbee-herdsman-converters/pulls)를 열어주세요. 새 Zigbee2MQTT 버전이 릴리스되면 external converter를 삭제할 수 있습니다.
:::

:::tip 팁
개발하는 가장 쉬운 방법은 [external converter 개발 환경](https://github.com/Nerivec/z2m-external-converter-dev?tab=readme-ov-file#how-to-use)을 사용하는 것입니다.
:::

예시:

파일: `external_converters/my-first-converter.mjs`

```js
import {temperature, humidity, battery} from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    extend: [temperature(), humidity(), battery()],
};
```

### 더 많은 예시

- [Modern extends를 사용한 센서](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor_me.mjs) (위와 동일)
- [Non modern extends를 사용한 센서](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor.mjs)
- [전구 (light)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.mjs)
- [플러그 (switch)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.mjs)
- [고급 예시](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs)
- 이미 지원되는 기기의 정의는 [여기](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)에서 찾을 수 있습니다. 동일한 제조사 또는 유형의 기기를 참조하면 도움이 될 수 있습니다.

### Modern extends 사용

전체 API는 [여기](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/modernExtend.ts)에서 찾을 수 있습니다.

### Non modern extends 사용

가장 일반적인 API 엔드포인트는 다음 import를 통해 접근할 수 있습니다:

```js
import * as m from 'zigbee-herdsman-converters/lib/modernExtend';
import * as fz from 'zigbee-herdsman-converters/converters/fromZigbee';
import * as tz from 'zigbee-herdsman-converters/converters/toZigbee';
import * as exposes from 'zigbee-herdsman-converters/lib/exposes';
import * as reporting from 'zigbee-herdsman-converters/lib/reporting';
import * as ota from 'zigbee-herdsman-converters/lib/ota';
import * as utils from 'zigbee-herdsman-converters/lib/utils';
import * as globalStore from 'zigbee-herdsman-converters/lib/store';

// exposes.presets
// exposes.access
```

import를 최적화하려면 필요한 항목만 import할 수 있습니다. 예시:

```js
import {onOff} from 'zigbee-herdsman-converters/lib/modernExtend';
import {presets, access} from 'zigbee-herdsman-converters/lib/exposes';
```

## Converter 목록

Zigbee2MQTT가 시작될 때 파일 시스템에서 로드된 모든 converter를 포함하는 페이로드 `[{"name": "my-first-converter.js": "code": <CONVERTER 코드>}]`와 함께 `zigbee2mqtt/bridge/converters`를 발행합니다. 동일한 메시지는 런타임에 converter가 변경될 때(아래 동작 중 하나로 인해)도 적절히 업데이트된 페이로드와 함께 발행됩니다.

:::tip 팁
Home Assistant의 Zigbee2MQTT 프론트엔드를 통해 Settings > Dev console > External converters에서 external converter를 추가하거나 업데이트할 수 있습니다.
:::

## Converter 저장

런타임에 converter를 저장하려면 `zigbee2mqtt/bridge/request/converter/save`에 페이로드 `{"name": "my-first-converter.js", "code": <CONVERTER 코드>}`와 함께 메시지를 전송합니다. 코드는 지정된 이름의 파일로 `external_converters`에 저장됩니다.

## Converter 제거

런타임에 converter를 제거하려면 `zigbee2mqtt/bridge/request/converter/remove`에 페이로드 `{"name": "my-first-converter.js"}`와 함께 메시지를 전송합니다. 파일은 `external_converters`에서 삭제됩니다.
