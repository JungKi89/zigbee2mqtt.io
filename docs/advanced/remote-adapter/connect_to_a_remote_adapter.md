---
redirectFrom: /how_tos/how_to_connect_to_a_remote_adapter.md
---

# 원격 Adapter에 연결하기

이 가이드는 원격 위치에 있는 adapter로 Zigbee2MQTT를 실행하는 방법을 설명합니다.
TCP를 통해 직렬 포트에 연결할 수 있는 ser2net을 사용합니다.
이렇게 하면 Raspberry Pi Zero에 adapter를 연결하면서 다른 시스템에서 Zigbee2MQTT를 실행할 수 있습니다. 아래 지침은 adapter가 연결된 시스템에서 실행해야 합니다.

::: warning
WiFi, WAN 또는 VPN 연결을 통해 Serial-Proxy-Server(Serial-to-IP bridge 또는 Ser2Net 원격 adapter라고도 함)로 Zigbee Coordinator를 사용하는 것은 권장되지 않습니다.

Zigbee Coordinator에서 사용하는 직렬 프로토콜은 불안정한 연결에서 발생할 수 있는 패킷 손실 및 지연을 처리할 만큼 충분한 견고성, 탄력성 또는 장애 허용성을 갖추고 있지 않습니다.

Zigbee Coordinator는 호스트 컴퓨터에서 실행되는 Zigbee 게이트웨이 애플리케이션과의 통신 중단 없이 직렬 포트 인터페이스에 안정적인 로컬 연결이 필요합니다.

따라서 Ser2Net 또는 다른 Serial Proxy/Forwarding Tunnel을 사용하여 WiFi/WAN/VPN을 통해 네트워크에 연결된 원격 Zigbee Coordinator에 연결하는 것은 정상 작동에 지원되지 않습니다.
:::

## 1. ser2net 설치

```bash
sudo apt-get install ser2net
```

## 2(a). ser2net 설정 (<4.0)

```bash
sudo nano /etc/ser2net.conf
```

다음 항목을 추가하고 `/dev/ttyACM0`을 adapter의 올바른 경로로 교체합니다.

```
20108:raw:0:/dev/ttyACM0:115200 8DATABITS NONE 1STOPBIT
```

그런 다음 시스템을 재부팅합니다.

```bash
reboot
```

## 2(b). ser2net 설정 (>=4.0)

```bash
sudo nano /etc/ser2net.yaml
```

다음 항목을 추가하고 `/dev/ttyACM0`을 adapter의 올바른 경로로 교체합니다.

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local
  options:
    kickolduser: true
```

Slaesh coordinator를 사용하는 경우, RS232 인터페이스의 DTR 및 RTS 핀을 특정 방식으로 설정해야 합니다. 현재(2023-02-04) Raspberry Pi OS 버전에는 이를 올바르게 처리하기에 충분히 최신 버전의 ser2net이 없습니다. https://github.com/cminyard/ser2net/issues/46 참조. Raspberry Pi에서 직접 "gensi" 및 "ser2net" 패키지를 빌드해야 할 수 있습니다. 다른 배포판에는 이미 더 최신 버전이 있을 수 있습니다. "dtr=off" 설정을 지원하는 ser2net 버전이 있으면 다음 설정을 사용하세요:

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,local,dtr=off,rts=off
  options:
    kickolduser: true
```

ConBee II / RaspBee II의 경우 다음 설정을 사용합니다:

```
connection: &con01
  accepter: tcp,20108
  connector: serialdev,/dev/ttyACM0,115200n81,nobreak,local
  options:
    kickolduser: true
```

그런 다음 시스템을 재부팅합니다.

```bash
reboot
```

## 3. 설정

이제 Zigbee2MQTT `configuration.yaml`을 적절하게 편집합니다. `192.168.2.13`을 adapter가 연결된 시스템의 IP 또는 hostname으로 교체합니다.

```yaml
serial:
    port: 'tcp://192.168.2.13:20108'
```

완료! 이제 Zigbee2MQTT를 시작할 수 있습니다.
