# Synology DSM 7.0에서 Docker

> **_참고:_** 모든 Zigbee 컨트롤러에서 작동하지 않을 수 있으나, CC2531로 테스트되었습니다.

Disk Station Manager 버전 7부터 Synology는 Zigbee 컨트롤러와 같은 USB 장치에 대한 내장 지원을 제거했습니다.
다음 명령을 _root_ 로 실행하여 Linux 커널에 USB 지원을 설치할 수 있습니다.

```
modprobe usbserial
modprobe ftdi_sio
modprobe cdc-acm
```

명령을 실행한 후, Zigbee 컨트롤러를 USB 포트에서 분리했다가 다시 연결해야 할 수 있습니다.

USB Zigbee 컨트롤러 설정에 따라 추가 드라이버가 필요할 수 있습니다. 예를 들어 CH341 모듈은 기본적으로 포함되어 있지 않습니다. jadahl.com 페이지에서 미리 컴파일된 모듈을 다운로드할 수 있습니다 - NAS CPU 아키텍처에 맞는 모듈 디렉토리를 선택하세요 (DS218+ -> INTEL Celeron J3355 -> Apollo Lake).

```
cd /lib/modules
wget http://www.jadahl.com/iperf-arp-scan/DSM_7.0/apollolake/ch341.ko
insmod /lib/modules/ch341.ko
```

위의 명령을 실행하는 시작 작업을 생성할 수 있습니다:

1. 세 가지 modprobe 명령을 포함하는 실행 가능한 스크립트 파일을 생성합니다.
1. DSM의 _제어판_ -> _작업 스케줄러_ -> _생성_ -> _트리거된 작업_ -> _사용자 정의 스크립트_ 를 사용하여 설정합니다: **사용자:** root, **이벤트:** 부팅, 그리고 _작업 설정_ 에서 실행 가능한 파일을 실행하는 `bash` 명령을 입력합니다.
