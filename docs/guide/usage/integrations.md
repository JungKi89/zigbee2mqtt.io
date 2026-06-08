# 연동(Integrations)

- [Home Assistant](./integrations/home_assistant.md)
- [Homey](https://community.homey.app/t/83214)
- [node-red-contrib-zigbee2mqtt](https://flows.nodered.org/node/node-red-contrib-zigbee2mqtt)
- [Domoticz](https://github.com/stas-demydiuk/domoticz-zigbee2mqtt-plugin)
- [Majordomo](https://github.com/directman66/majordomo-zigbee2mqtt/) (러시아어)
- [Mozilla IoT WebThings Gateway via Zigbee2MQTT adapter](https://github.com/kabbi/zigbee2mqtt-adapter)
- [openHAB](./integrations/openhab.md)
- [Homebridge plugin](https://github.com/itavero/homebridge-z2m/#readme) (Apple HomeKit)
- [Symcon Automation Solutions](https://github.com/Schnittcher/IPS-Zigbee2MQTT)
- [Gladys Assistant](https://gladysassistant.com/docs/integrations/zigbee2mqtt/)
- [HomeSeer](https://shop.homeseer.com/products/homeseer-zigbee-plus-plugin-for-hs4)
- [Matterbridge Zigbee2MQTT Plugin](https://github.com/Luligu/matterbridge-zigbee2mqtt) (Apple HomeKit 및 Google Home)
- [Zigbee2MQTT Automations](https://github.com/Luligu/zigbee2mqtt-automations)

이 목록은 개요의 일부만 보여줍니다. Zigbee2MQTT를 다른 시스템과 함께 사용하려면
_네이티브_ 연동이 반드시 필요한 것은 아니며, MQTT 지원만 있으면 됩니다. 네이티브 연동은 단지 작업을 더 쉽고 편리하게 만들어줄 뿐입니다.
일출 후 동작 감지기가 작동하면 조명-X를 켜는 것과 같은 사용자 정의 로직을
관련 MQTT topic을 구독(subscribing)하고 발행(publishing)하여 구현할 수 있습니다.

MQTT 기반으로 로직을 구현하는 도구는 NodeRED(플로우 기반)나
[MQTT-Scripts](https://github.com/hobbyquaker/mqtt-scripts) (자바스크립트) 등 다양합니다. 거의 모든 프로그래밍 언어에
MQTT 통신 라이브러리가 있으므로 원하는 언어나 도구로 직접 로직을 작성할 수도 있습니다.

[MQTT-Explorer](http://mqtt-explorer.com/)와 같은 저수준 MQTT 클라이언트를 활용하면 topic 구조를 이해하고
값을 발행하여 동작을 테스트하는 데 도움이 됩니다.
