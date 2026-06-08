---
redirectFrom: /how_tos/how_to_support_new_devices.md
---

# 새 기기 지원 추가

이 페이지는 임시 [external converter](../../advanced/more/external_converters.md)를 통해 새 기기 지원을 추가하는 과정을 안내합니다.

도움이 필요하면 자유롭게 [discussion](https://github.com/Koenkk/zigbee2mqtt/discussions)을 열어주세요.

시작하기 **전에**, 먼저 Zigbee2MQTT dev 브랜치에서 기기가 아직 지원되지 않는지 확인하세요! dev 브랜치의 [changelog](https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices)를 확인하면 됩니다. 또한 더 쉬운 디버깅을 위해 Zigbee2MQTT `log_level`을 `debug`로 설정하세요.

## 지침

### 1. Zigbee2MQTT와 기기 페어링

첫 번째 단계는 Zigbee2MQTT와 기기를 페어링하는 것입니다. Zigbee2MQTT는 모든 Zigbee 기기와 페어링할 수 있으므로 지원되지 않는 기기를 즉시 페어링할 수 있습니다. 기기를 페어링 모드로 전환하는 방법을 찾아야 하며, 대부분의 경우 공장 초기화를 통해 가능합니다.

기기를 성공적으로 페어링하면 로그에 다음과 같은 내용이 표시됩니다:

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
Zigbee2MQTT:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'some_name' is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html
```

::: tip
참여가 활성화되어 있는지 확인하세요. 그렇지 않으면 새 기기가 네트워크에 참여할 수 없습니다.
:::

### 2. 외부 정의 생성

지원되지 않는 기기를 Zigbee2MQTT와 페어링하면 이 기기에서 지원하는 기능을 자동으로 검색하려고 시도합니다. 이미 발견된 것을 확인하려면 프론트엔드에서 기기의 `Exposes` 탭으로 이동합니다. 값이 보고되고 있는지 그리고/또는 상태를 제어할 수 있는지 확인하여 노출된 기능이 작동하는지 확인합니다 (예: 조명의 경우).
기능 검색은 아직 개발 중이며, 모든 기능이 발견되지 않을 수 있고, 기기의 비표준 구현으로 인해 일부는 전혀 발견되지 않을 수 있습니다 (Tuya 기기의 경우 일반적으로 해당).

다음으로 기기의 `Dev console` 탭으로 이동하여 `Generate external definition`을 누르면 외부 정의가 생성됩니다.

<img src="../../images/generate_external_definition.gif" height="300"/>

기본적으로 외부 정의는 Zigbee ZCL 스펙에 따라 노출된 Zigbee cluster를 기능에 매핑합니다. 물론 기기가 스펙을 준수하지 않는 경우 제대로 작동하지 않거나 전혀 작동하지 않을 수 있습니다.
모든 기능이 작동하고 예상되는 모든 기능이 있으면 운이 좋은 것이며 3단계로 건너뛸 수 있습니다.
그렇지 않다면 외부 정의를 확장해야 합니다.

::: tip
기기에 따라 다른 modern extends를 사용하여 정의를 확장할 수 있습니다.
이것이 일반적으로 더 쉬우므로 권장되는 프로세스입니다.
:::

### 3. 생성된 외부 정의 확장

생성된 외부 정의를 확장하려면 코드를 파일에 수동으로 저장하고 Zigbee2MQTT를 재시작하거나, MQTT API를 사용하여 런타임에 converter를 로드할 수 있습니다. 자세한 내용은 [external converters](../../advanced/more/external_converters.md)를 참조하세요.

기기에 적합한 modern extends를 추가 및/또는 설정합니다 (이전 링크 참조).

::: tip
프론트엔드의 기기 `Clusters` 탭에는 추가 분석을 위한 지원되는 cluster가 나열됩니다.
:::

완료되면 기기에서 동작을 트리거합니다.

기기가 아무것도 보고하지 않는 경우, 이 기기에 추가 설정이 필요할 수 있습니다. `configure:` 섹션을 추가하여 수행할 수 있습니다. _유사한 [기기](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices)를 살펴보면 도움이 될 수 있습니다._

::: tip
기기가 Tuya 호환으로 광고되거나 `manuSpecificTuya`와 함께 무언가를 보고하는 경우, 기기 추가에 대한 추가 지침은 [여기](./02_support_new_tuya_devices.md)에서 찾을 수 있습니다.
:::

적절한 modern extends를 모두 추가하고 설정한 후에도 아래와 같은 메시지가 계속 표시되면, modern extends가 제공하지 않는 특정 converter를 추가해야 할 수 있습니다. 기존 converter를 재사용할 수 있으며 [여기](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts)에서 찾을 수 있습니다.

```
Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

위의 메시지의 경우 이미 존재하는 `fz.temperature` converter를 사용합니다:

```js
    fromZigbee: [fz.temperature],
```

_참고: 이 converter는 실제로 적절한 modern extend(`temperature()`)로 처리됩니다. 예시로만 제공됩니다. [더 많은 예시](../../advanced/more/external_converters.md#more-examples)를 참조하세요._

기기가 더 이상 `No converter available for 'WSDCGQ01LM' with cluster...`와 같은 로그 메시지를 생성하지 않을 때까지 마지막 단계를 반복합니다.

기존 converter가 맞지 않으면 커스텀 converter를 추가할 수 있습니다. 예시는 [여기](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs)에서 찾을 수 있습니다.

### 4. Pull Request 생성

다음 릴리스에서 즉시 지원되도록 새 기기 정의를 Zigbee2MQTT에 기여하려면 다음 단계를 따르세요:

1. zigbee-herdsman-converters 저장소에서 기기가 속하는 올바른 [devices 파일](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices)을 찾습니다 (일반적으로 브랜드 또는 제조사별로).
1. 파일을 클릭하고 편집(연필) 아이콘을 사용하여 GitHub에서 직접 편집할 수 있게 엽니다.
1. 유사한 기기에 사용된 구조와 패턴을 따라 파일에 기기 정의를 추가합니다.
1. **Commit changes** -> **Propose changes** -> **Create pull request**를 누릅니다.
1. PR 템플릿을 작성하고 **Create pull request**를 누릅니다.

### 5. zigbee2mqtt.io 문서에 기기 이미지 추가

지원 기기 페이지 및 프론트엔드에서 이 기기에 대한 이미지를 사용할 수 있도록 합니다.

먼저 기기에 제공할 사진을 만드세요. 다음을 확인합니다:

- 파일 형식: `PNG`
- 해상도: `512x512`
- 배경: `투명`
  _필요한 경우 [Adobe Express Remove Background 도구](https://new.express.adobe.com/tools/remove-background)를 사용하여 배경을 투명하게 만드세요._
- 파일명: 고유한 파일명 (예: `ZY-M100-24GV3.png`)

기기 이미지를 제공하는 가장 쉬운 방법은 GitHub 웹 편집기를 사용하여 업로드하는 것입니다:

1. 브라우저에서 [zigbee2mqtt.io 저장소](https://github.com/Koenkk/zigbee2mqtt.io)로 이동합니다.
2. 코드 저장소의 fork를 생성합니다. 또는 **Sync fork**를 선택하여 기존 fork를 업데이트합니다.

  <img width="268" height="58" alt="fork repository" src="https://github.com/user-attachments/assets/b66e3826-9344-41d3-a406-528b2420705c" />

3. fork에서 `public/images/devices` 폴더로 이동합니다.

  <img width="370" height="52" alt="public/images/devices" src="https://github.com/user-attachments/assets/128d5431-db17-4154-99b8-c1d423443c93" />

4. **Add file** 버튼과 **Upload file**을 사용하여 이미지를 업로드합니다.

  <img width="289" height="122" alt="upload file" src="https://github.com/user-attachments/assets/941ce038-1855-4175-9352-1adf56239367" />

5. 파일을 업로드하고 새 브랜치를 생성하도록 선택합니다.

  <img width="685" height="332" alt="new branch" src="https://github.com/user-attachments/assets/0fa3b04e-76a8-432c-a95a-289ca2287f51" />

6. 다음 화면에서 상단 메뉴에서 **Pull requests**를 선택하여 로컬 Pull Request 생성을 건너뜁니다.

  <img width="248" height="63" alt="Pull Requests" src="https://github.com/user-attachments/assets/6c10900d-00be-4c09-afac-a238e34e934d" />

7. **New pull request**를 선택합니다.

  <img width="746" height="109" alt="New pull request" src="https://github.com/user-attachments/assets/2c8379a5-c45c-4c17-975e-797d9a7218cf" />

8. [zigbee2mqtt.io GitHub 저장소](https://github.com/Koenkk/zigbee2mqtt.io)에 제공할 변경 사항이 있는 feature 브랜치를 선택합니다.

    이후 **Create pull request** 버튼이 나타납니다.

      <img width="943" height="264" alt="image" src="https://github.com/user-attachments/assets/e2cd762f-1e85-491b-bd92-9d2f2b82ce64" />

9. PR에 대한 정보를 제공하고 **Create pull request** 버튼을 선택합니다.

  <img width="990" height="629" alt="image" src="https://github.com/user-attachments/assets/4656cdc6-cea5-49cf-8e29-49a0f7b6be07" />

**_선택 사항:_** 동일한 PR에서 `docs/devices`에 기기에 대한 마크다운 파일을 추가합니다. 정의의 `model` 속성을 파일명으로 사용합니다. 이 파일의 대부분의 내용은 docgen을 통해 자동 생성되지만 notes 섹션에 직접 작성한 메모를 추가할 수 있습니다.

`## Notes` 섹션 내에서 `h1` 또는 `h2` 헤딩을 사용하지 마세요.

> > \<!-- Notes BEGIN --><br> >> \## Notes<br>
> > ...<br> >> \<!-- Notes END -->
