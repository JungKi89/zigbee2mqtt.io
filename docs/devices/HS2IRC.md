---
title: "Heiman HS2IRC control via MQTT"
description: "Integrate your Heiman HS2IRC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS2IRC

|     |     |
|-----|-----|
| Model | HS2IRC  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart IR Control |
| Exposes |  |
| Picture | ![Heiman HS2IRC](https://www.zigbee2mqtt.io/images/devices/HS2IRC.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


기기는 최대 15개의 장치와 각 장치당 최대 30개의 키코드를 학습할 수 있습니다.

### 설정
`zigbee2mqtt/FRIENDLY_NAME/set`에 게시하여 다양한 기기 속성을 설정할 수 있습니다:

#### 장치 생성

요청:
```json
{
    "create": {
        "model_type": 55
    }
}
```

- **model_type**: 사용자 정의 모델 ID. 참조용으로만 사용됩니다. `1..255` 범위.

응답:
```json
{
    "action": "create",
    "action_result": "success",
    "action_model_type": 55,
    "action_id": 1
}
```

- **action_result**: (`success`/`error`). 동작 결과.
- **action_model_type**: 사용자 정의 모델 ID. `1..255`
- **action_id**: 내부 장치 슬롯 ID. IR 송신기는 ID `1..15`로 최대 15개의 장치를 저장할 수 있습니다.

참고: `devices` 토픽을 갱신하려면 `get_list`를 수동으로 호출해야 합니다.

#### 키 학습

요청:
```json
{
    "learn": {
        "id": 1,
        "key_code": 31
    }
}
```

- **id**: 내부 장치 슬롯 ID. `1..15`.
- **key_code**: 키코드 슬롯 ID. `1..30` - 지정한 슬롯 ID에 특정 키를 저장/교체합니다. `>=31` - 슬롯 ID를 새로 생성합니다.

참고: `key_code`를 직접 지정했다면 키를 하나씩 저장해야 합니다.

응답:
```json
{
    "action": "learn",
    "action_result": "success",
    "action_key_code": 1,
    "action_id": 1
}
```

- **action_result**: (`success`/`error`). 동작 결과.
- **action_key_code**: 키가 저장된 내부 키코드 슬롯 ID. `1...30`
- **action_id**: 내부 장치 슬롯 ID. `1..15`

참고: 키 학습 후 `devices` 토픽을 갱신하려면 `get_list`를 수동으로 호출해야 합니다.

#### 저장된 키 전송

요청:
```json
{
    "send_key": {
        "id": 1,
        "key_code": 1
    }
}
```

- **id**: 내부 장치 슬롯 ID. `1..15`.
- **key_code**: 키코드 슬롯 ID. `1..30`.

#### 저장된 장치 및 키 목록 가져오기

요청:
```json
{
    "get_list": ""
}
```

응답:

```json
{
  "devices": [
    {
      "id": 1,
      "key_codes": [
        1,
      ],
      "model_type": 55
    }
  ]
}
```


#### 장치 또는 키코드 삭제

요청:
```json
{
    "delete":{
        "id": 1,
        "key_code": 31
    }
}
```

- **id**: `1..15` - 해당 ID의 특정 장치를 삭제합니다. `>=16` - 모든 장치를 삭제합니다.
- **key_code**: `1..30` - 특정 키코드를 삭제합니다. `>=31` - 지정한 장치 ID의 모든 키코드를 삭제합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes



