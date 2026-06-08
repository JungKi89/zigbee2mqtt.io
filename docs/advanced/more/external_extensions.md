---
sidebar: auto
redirectFrom: /information/external_extensions.md
---

# External Extension

:::warning 경고
External extension은 버전 2.11.0 이상의 신규 설치에서 기본적으로 비활성화되어 있습니다.
활성화하려면 [`enable_external_js`](../../guide/configuration/all-settings.md#enable-external-js)를 참조하세요.
[자세한 내용](../../guide/installation/14_securing.md#external-extensions-and-converters) 참조
:::

External extension은 Zigbee2MQTT 동작을 확장하는 방법을 제공합니다. 내부 extension과 동일하게 작동합니다.

Extension 프레임워크에 익숙해지려면 [내부 extension의 소스 코드](https://github.com/Koenkk/zigbee2mqtt/tree/master/lib/extension)를 참조하세요.

External extension은 `data/external_extensions` 폴더에 저장되며 `Extension` 기본 클래스를 따르는 JavaScript 클래스를 export해야 합니다 (위 링크 참조).

:::tip 팁
다음 저장소에서 준비된 extension을 찾을 수 있습니다: [https://github.com/Koenkk/zigbee2mqtt-user-extensions/](https://github.com/Koenkk/zigbee2mqtt-user-extensions/)
:::

예시:

파일: `data/external_extensions/my-first-extension.mjs`

```js
import {posix} from 'node:path';

export default class MyExampleExtension {
    constructor(zigbee, mqtt, state, publishEntityState, eventBus, enableDisableExtension, restartCallback, addExtension, settings, logger) {
        this.zigbee = zigbee;
        this.mqtt = mqtt;
        this.state = state;
        this.publishEntityState = publishEntityState;
        this.eventBus = eventBus;
        this.enableDisableExtension = enableDisableExtension;
        this.restartCallback = restartCallback;
        this.addExtension = addExtension;
        this.settings = settings;
        this.logger = logger;

        logger.info('Loaded  MyExampleExtension');
    }

    /**
     * extension이 시작될 때 호출됨 (Zigbee2MQTT 시작 시 또는 런타임에 extension이 저장될 때)
     */
    start() {
        this.mqtt.publish('example/extension', `hello from MyExampleExtension, ${posix.join('just', 'a', 'test')}`);

        // 모든 가능한 이벤트는 여기서 확인: https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts

        // MQTT 메시지 구독
        this.eventBus.onMQTTMessage(this, (data) => {
            console.log(`Received MQTT message on topic '${data.topic}' with message '${data.message}'`);
        });
    }

    /**
     * extension이 중지될 때 호출됨 (Zigbee2MQTT 종료 시 또는 런타임에 extension이 저장/제거될 때)
     */
    stop() {
        this.eventBus.removeListeners(this);
    }
}
```

생성자 매개변수의 타입은 다음과 같습니다:

```typescript
zigbee: Zigbee, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/zigbee.ts 참조
mqtt: MQTT, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/mqtt.ts 참조
state: State, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/state.ts 참조
publishEntityState: PublishEntityState,
eventBus: EventBus, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/eventBus.ts 참조
enableDisableExtension: (enable: boolean, name: string) => Promise<void>,
restartCallback: () => Promise<void>,
addExtension: (extension: Extension) => Promise<void>,
logger: typeof import logger, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/logger.ts 참조
settings: typeof import settings, // https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/settings.ts 참조
```

더 많은 타입 세부 정보는 [https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts](https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/types/types.d.ts)를 참조하세요.

## Extension 목록

Zigbee2MQTT가 시작될 때 파일 시스템에서 로드된 모든 extension을 포함하는 페이로드 `[{"name": "my-first-extension.js": "code": <EXTENSION 소스 코드>}]`와 함께 `zigbee2mqtt/bridge/extensions`를 발행합니다. 동일한 메시지는 런타임에 extension이 변경될 때(아래 동작 중 하나로 인해)도 적절히 업데이트된 페이로드와 함께 발행됩니다.

## Extension 저장

런타임에 extension을 저장하려면 `zigbee2mqtt/bridge/request/extension/save`에 페이로드 `{"name": "my-first-extension.js", "code": <EXTENSION 소스 코드>}`와 함께 메시지를 전송합니다. 코드는 지정된 이름의 파일로 `data/external_extensions/`에 저장됩니다.

## Extension 제거

런타임에 extension을 제거하려면 `zigbee2mqtt/bridge/request/extension/remove`에 페이로드 `{"name": "my-first-extension.js"}`와 함께 메시지를 전송합니다. 파일은 `data/external_extensions/`에서 삭제됩니다.
