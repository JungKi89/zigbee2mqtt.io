---
next: 14_securing.md
---

# openHABian

## 설치

Raspberry Pi에서 openHABian을 사용 중인 경우 설치가 매우 간단합니다:

1. `sudo openhabian-config` 명령으로 설정 유틸리티를 실행합니다.
1. _Select Branch_ 에서 _main_ 옵션을 선택합니다.
1. _optional components_ 로 이동합니다.
1. MQTT 서버가 아직 없다면 먼저 Mosquitto를 선택하고 안내에 따라 설치합니다. Mosquitto 설치 후 다시 _optional components_ 로 돌아와 _Zigbee2MQTT_ 를 선택합니다.
1. Zigbee USB adapter를 선택하거나 이더넷 adapter의 ip:port를 입력한 후, MQTT 사용자명과 필요한 경우 비밀번호를 입력합니다.
1. 약 3~4분 후 Zigbee2MQTT가 실행됩니다. 포트 8081에서 설정 페이지가 접속 가능한지 확인할 수 있습니다.

## 업데이트

1. _optional components_ 로 이동합니다.
2. _Zigbee2MQTT_ 를 선택합니다.
3. 업데이트 여부를 묻는 메시지가 나타납니다.
4. 약 3~4분 후 Zigbee2MQTT가 실행됩니다. 포트 8081에서 설정 페이지가 접속 가능한지 확인할 수 있습니다.
