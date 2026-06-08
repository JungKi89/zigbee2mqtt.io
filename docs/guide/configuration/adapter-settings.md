---
sidebarDepth: 1
---

# Adapter 설정

::: warning 주의
모든 기능이 모든 adapter에서 지원되는 것은 아닙니다. 지원 여부를 확인하려면 [adapter 페이지](../../guide/adapters/README.md)를 방문하세요.
:::

## 기본 설정

Zigbee2MQTT가 adapter를 자동으로 감지하지 못하는 경우(`USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.` 오류로 시작 실패), `configuration.yaml`의 `serial` 섹션을 직접 설정해야 합니다.

먼저 adapter의 포트를 확인하세요:

- USB adapter의 경우: Windows에서 실행 중이라면 [이 안내](../installation/05_windows.md#starting-zigbee2mqtt)를 참고하고, Linux에서는 `ls -l /dev/serial/by-id`를 실행합니다:

    ```bash
    pi@raspberry:/ $ ls -l /dev/serial/by-id
    total 0
    lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
    ```

    - 여전히 연결되지 않는다면 adapter가 USB 모드인지 확인하세요. [ZigStar](https://xzg.xyzroe.cc/hardware/)와 같은 일부 adapter는 기본적으로 네트워크 모드로 동작하며, USB 모드로 전환하기 전까지는 USB로 통신하지 않습니다.

- 네트워크 adapter의 경우 라우터/스위치 웹 인터페이스를 통해 adapter의 IP 주소를 확인해야 합니다. adapter에 고정 IP 주소가 할당되어 있는지 확인하세요!
    - adapter가 mDNS를 지원하는 경우 아래의 mDNS 문서를 참고하세요.

다음으로 [adapter 페이지](../adapters/README.md)에서 사용 중인 `adapter` 종류를 확인하세요.
가능한 adapter 종류: `zstack`, `ember`, `deconz`, `zigate`, `zboss`.

위의 USB adapter 예시에서 `zstack` adapter를 사용하는 경우 `configuration.yaml`에 다음을 추가합니다:

```yaml
serial:
    # adapter 위치
    # USB adapter - 형식: "port: /dev/serial/by-id/XXX"
    # Ethernet adapter - 형식: "port: tcp://192.168.1.12:6638"
    port: /dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00
    # adapter 종류, 허용 값: `zstack`, `ember`, `deconz`, `zigate`, `zboss`
    adapter: zstack
```

이 serial 설정만으로 Zigbee2MQTT를 시작할 수 있습니다.

## mDNS Zeroconf 자동 검색

Zigbee2MQTT는 Zigbee 네트워크 adapter의 자동 검색을 지원합니다. 이 기능을 사용하려면 adapter가 mDNS Zeroconf를 통한 검색을 지원해야 합니다.

동일한 mDNS 서비스 유형(이름)을 가진 장치가 2개 이상 있는 경우, 자동 검색 옵션이 활성화된 Zigbee2MQTT는 그 중 하나에 무작위로 연결됩니다. 따라서 올바른 사용을 위해 동일한 mDNS 서비스 유형(이름)을 가진 네트워크 adapter는 하나만 연결하는 것을 권장합니다. 그렇지 않으면 위에서 설명한 대로 IP 주소와 포트로 설정하세요.

::: warning 주의
이 자동 감지 기능을 사용할 경우 `configuration.yaml`의 다음 파라미터는 무시됩니다: `adapter`, `baudrate`
:::

mDNS Zeroconf 자동 검색을 지원하는 테스트된 장치 목록:
| 장치 | MDNS 서비스 유형 |
| :--- | :---: |
| SLZB-06 | slzb-06 |
| UZG-01 | uzg-01 |
| CZC-01 | czc |

```yaml
serial:
    port: mdns://slzb-06
    # port: mdns://uzg-01
    # port: mdns://czc
    # 선택 사항: 지원되는 경우 adapter의 LED 비활성화 (기본값: false)
    disable_led: false
    # 선택 사항: 시리얼 포트 Baud rate, 펌웨어가 지원하는 값으로 설정 가능하지만
    # 기본값은 Z-Stack과 EZSP는 115200, Deconz는 38400. 일부 EZSP 펌웨어는 57600이 필요할 수 있음
    baudrate: 115200
    # 선택 사항: 시리얼 포트 RTS / CTS 하드웨어 흐름 제어 (기본값: false)
    rtscts: false
```

## 고급 설정

```yaml
advanced:
    # 선택 사항: adapter 동시성 설정 (예: CC2531은 2, CC26X2R1은 16) (기본값: null, 권장값 사용)
    adapter_concurrent: null
    # 선택 사항: dBm 단위 전송 출력 설정 (기본값: 5).
    # 내장 앰프가 있는 장치의 전송 출력을 설정합니다.
    # 각 하드웨어의 최대값을 초과할 수 없으며, 펌웨어에 의해 제한될 수 있습니다
    # (예: 발열 방지, 또는 지원되지 않는 펌웨어 사용 시).
    # CC2652R(B)는 5 dBm, CC2652P/CC1352P-2는 20 dBm.
    transmit_power: 5
    # 선택 사항: adapter 지연 설정, Conbee/Raspbee adapter에만 사용 (기본값 0).
    # 문제가 있는 경우 `200`을 시도해 보세요.
    # 자세한 내용은 https://github.com/Koenkk/zigbee2mqtt/issues/4884 참고
    adapter_delay: 0
```

<!-- TODO: rtscts에 대한 설명 추가? 유용한지, 어떤 adapter가 지원하는지? -->

::: tip
TCP를 통해 USB adapter를 연결하는 것도 가능합니다. [원격 adapter 연결 방법](../../advanced/remote-adapter/connect_to_a_remote_adapter.md)을 참고하세요.
:::
