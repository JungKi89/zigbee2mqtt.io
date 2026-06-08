---
title: "Hive SLT6 control via MQTT"
description: "Integrate your Hive SLT6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-02-16T14:30:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT6

|     |     |
|-----|-----|
| Model | SLT6  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery |
| Picture | ![Hive SLT6](https://www.zigbee2mqtt.io/images/devices/SLT6.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 페어링
1. 온도조절기(SLT)를 벽에서 분리하고 배터리를 제거하여 끕니다.
2. 주 전원 차단기에서 보일러를 꺼서 Hive 리시버(SLR)를 끕니다.
3. 보일러와 리시버를 켭니다.
4. Hive 리시버의 중앙 난방 버튼을 10초간 눌러 표시등이 분홍색으로 바뀔 때까지 기다린 후 놓습니다.
5. 중앙 난방 버튼을 다시 눌러 표시등이 이중 깜박임으로 황색이 될 때까지 기다립니다.
6. "Permit Join (all)"을 사용하여 Zigbee2mqtt에 페어링합니다.
7. 황색 이중 깜박임이 단일 깜박임으로 바뀔 수 있습니다.
8. 리시버가 zigbee2mqtt에 추가됩니다. "Hive Receiver"와 같이 이름을 변경합니다.
9. 온도조절기에 배터리를 다시 넣고 부팅되도록 합니다.
10. 메뉴 버튼과 뒤로 가기 버튼을 누른 채로 디바이스를 공장 초기화합니다. 카운트다운이 끝날 때까지 기다리다가 디바이스 정보 화면 다음에 'Hive' 로고가 표시되면 버튼을 놓습니다. 이제 페어링 모드로 진입합니다.
11. Zigbee2Mqtt에서 "Permit Join" 옆의 드롭다운 화살표를 사용하여 이전에 추가한 Hive 리시버 디바이스를 선택합니다.
12. 새로 표시된 "Permit join (Hive Receiver)" 버튼으로 페어링을 시작합니다.
13. 약 30초를 기다립니다.
14. 온도조절기가 보일러 리시버에 페어링되어야 합니다. 황색 표시등이 녹색으로 바뀌고, 온도조절기가 시작 마법사를 실행합니다.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

