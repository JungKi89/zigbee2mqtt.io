# OTA 장치 펌웨어 업데이트

[OTA 펌웨어 업데이트 사용 가이드](../usage/ota_updates.md)도 참고하세요.

```yaml
# 선택 사항: OTA 업데이트 설정
# 자세한 내용은 https://www.zigbee2mqtt.io/guide/usage/ota_updates.html 참고
ota:
    # 선택 사항: OTA 업데이트 확인 최소 간격
    update_check_interval: 1440
    # 선택 사항: 자동 업데이트 확인 비활성화
    disable_automatic_update_check: false
    # 선택 사항: 네트워크 혼잡을 줄이기 위해 OTA 업데이트 중 요청 속도 제한 (밀리초 단위).
    # 업데이트 중 네트워크가 불안정하면 이 값을 높일 수 있습니다
    image_block_response_delay: 250
    # 선택 사항: 업데이트 중 전송되는 파일 청크의 크기 (바이트 단위).
    # 참고: 특정 값이 필요한 제조사의 경우 이 값이 무시될 수 있습니다.
    default_maximum_data_size: 50
```

## OTA 인덱스 재정의 파일

```yaml
ota:
    zigbee_ota_override_index_location: my_index.json
```

이 키의 값은 설정 디렉토리(`configuration.yaml` 옆)에 있는 파일 이름입니다.
Docker 컨테이너 내에서 Zigbee2MQTT를 실행할 때 호스트 파일 시스템을 사용할 수 없을 수 있으므로, 파일의 전체 경로를 사용할 수도 있습니다.

또는 Zigbee2MQTT는 원격 HTTP(s) 서버에 있는 인덱스 파일도 지원합니다. 이 경우 `zigbee_ota_override_index_location` 키는 인덱스 파일의 URL이어야 합니다.

Zigbee2MQTT가 OTA 이미지를 가져오는 방법, DIY 장치용 이미지 추가 방법, 공식 이미지를 다른 것으로 재정의하는 방법에 대한 자세한 내용은 [OTA 펌웨어 업데이트 사용 가이드](../usage/ota_updates.md)를 참고하세요.
