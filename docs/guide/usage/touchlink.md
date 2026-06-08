---
redirectFrom: /information/touchlink.md
---

# Touchlink

Touchlink(또는 ZLL)은 Zigbee 기기가 반드시 같은 네트워크에 속하지 않아도 **직접** 통신할 수 있는 기능입니다.

기기들은 **물리적으로 가까이** 있어야 하며, 펌웨어에 Touchlink가 활성화되어 있어야 합니다.  
_범위는 기기에 따라 다릅니다: 일반적으로 10cm이지만, 강한 어댑터에서는 최대 1m까지 가능합니다._

**사용 예시:**

- Zigbee2MQTT를 통해 코디네이터 근처 기기를 식별하거나 초기화
- Touchlink 지원 기기를 통한 기기 초기화(예: [Hue dimmer switch gen 1](./../../devices/324131092621.md))
- 코디네이터와 Zigbee2MQTT 없이 기기 간 [binding](./binding.md) 설정(예: 리모컨과 조명 연결)

## 지원 현황

### 코디네이터

Texas Instruments 어댑터 _(zStack, CCxxxx)_: **완전 지원**.

Silicon Labs 어댑터 _(EmberZNet, EFR32xxxx)_: **부분 지원**.  
`2026-03-18`: 일부 펌웨어 버전에서 [Scan](#scan) 동작이 응답을 반환하지 않을 수 있습니다. Philips Hue 초기화에는 영향이 없습니다. _조사 중_

그 외 어댑터/드라이버는 현재 **지원되지 않습니다**.

### 기기

호환 기기는 `Touchlink` 클러스터를 지원하며, 여기에는 대부분의 Philips 및 IKEA 기기, 일부 Tuya 전구, Namron 릴레이 등이 포함됩니다.

::: warning
일부 기기는 몇 분 후 Touchlink를 비활성화할 수 있습니다! _(보안 조치)_  
기기의 전원을 껐다 켜서 Touchlink가 활성 상태인지 확인하세요.
:::

::: tip
아래 모든 명령은 프론트엔드의 _Touchlink_ 탭에서도 실행할 수 있습니다.
:::

## Scan

**코디네이터 근처의** Touchlink 지원 기기를 검색합니다.  
이 검색 결과를 이후에 초기화하거나 식별할 기기를 선택하는 데 사용할 수 있습니다.

최대 1분이 소요될 수 있습니다. **이는 네트워크에 영향을 주는 작업으로**, 검색 중에는 **기기와의 통신이 불가능합니다**(이 점을 반드시 고려하고, 가능하면 사용량이 적은 시간대에 수행하세요).

검색을 시작하려면 `zigbee2mqtt/bridge/request/touchlink/scan`에 빈 페이로드로 MQTT 메시지를 전송하세요.

응답은 `zigbee2mqtt/bridge/response/touchlink/scan`으로 전송됩니다. 예시 페이로드: `{"data":{"found":[{"ieee_address": "0x12345678", "channel": 12}, {"ieee_address": "0x12654321", "channel": 24}]},"status":"ok"}`.

## Identify

Touchlink을 통해 근처 기기를 식별합니다 _(예: 전구 깜빡임)._

`zigbee2mqtt/bridge/request/touchlink/identify`에 예시 페이로드 `{"ieee_address": "0x12345678", "channel": 12}`를 담아 MQTT 메시지를 전송하세요.  
_(`ieee_address`와 `channel`은 위의 scan을 통해 확인할 수 있습니다)._

## 기기 공장 초기화

Touchlink을 통해 근처 기기를 공장 초기화합니다. _시연 영상: [video](https://www.youtube.com/watch?v=kcRj77YGyKk)_

아래 방법 중 하나를 수행한 후 기기가 페어링 모드로 진입하지 않으면 **전원을 한 번 껐다 켜야** 할 수 있습니다.

초기화 완료 **후** 기기를 다시 페어링하려면 *참가 허용*을 활성화하세요.

### 모든 기기

특정 기기를 지정하지 않는 경우, _초기화되어서는 안 되는 기기의 전원을 끄거나 범위 밖으로 옮기는 것을 권장합니다_(처음 발견된 기기가 대상이 됩니다).
`zigbee2mqtt/bridge/request/touchlink/factory_reset`에 빈 페이로드로 MQTT 메시지를 전송하세요.

Zigbee2MQTT가 검색을 시작합니다.
잠시 후 기기가 자신을 식별하고 초기화됩니다.

### 특정 기기

#### IEEE 주소 + 채널

위 메시지에 페이로드를 추가하여 특정 기기를 대상으로 지정할 수 있습니다. 예: `{"ieee_address": "0x12345678", "channel": 12}`. _(값은 scan을 통해 얻을 수 있습니다)_

#### 시리얼 번호 (Philips Hue 전용)

대부분의 Philips Hue 기기는 scan 없이 기기에 적힌 시리얼 번호를 사용하여 대상을 지정할 수 있습니다. 기기별 페이지에서 자세한 정보를 확인하세요. 예: [Hue white ambiance E27](./../../devices/9290022169.md)
