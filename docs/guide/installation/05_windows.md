---
next: 14_securing.md
redirectFrom:
    - /information/windows.md
    - /guide/installation/04_windows.md
---

# Windows

이 안내서는 Windows에서 Zigbee2MQTT를 실행하는 방법을 설명합니다.

::: tip TIP
시작하기 전에 시스템에 MQTT 브로커가 설치되어 있는지 확인하세요.
설치 방법에 대한 다양한 튜토리얼이 있습니다. [예시](https://cedalo.com/blog/how-to-install-mosquitto-mqtt-broker-on-windows/).
Mosquitto가 권장 MQTT 브로커이지만 다른 것도 잘 작동합니다.
:::

## USB-to-UART Bridge Virtual COM Port 드라이버 설치

가상 COM 포트를 통해 USB 장치와 통신하려면 OS에서 플래싱 소프트웨어가 장치를 인식할 수 있도록 드라이버가 필요할 수 있습니다.

- CP210x 기반 칩셋의 경우 [Silicon Labs 웹사이트](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)에서 드라이버를 사용할 수 있습니다.
- CC1352/CC2652/CC2538 기반 칩셋의 경우 드라이버는 [FTDI chip 웹사이트](https://ftdichip.com/drivers/vcp-drivers/)를 참고하세요.

## 설치

1. [공식 사이트](https://nodejs.org/)에서 Node.js 22 LTS를 다운로드하여 설치합니다.
1. 시작 메뉴에서 `명령 프롬프트` 또는 `Powershell`을 엽니다 (Powershell이 색상이 더 보기 좋습니다).
1. Node.js가 성공적으로 설치되었는지 확인합니다.
    ```bash
    node --version
    ```
1. corepack을 활성화합니다.
    ```bash
    corepack enable
    ```
1. Zigbee2MQTT에 적합한 디렉토리를 선택하고 [Zigbee2MQTT 저장소](https://github.com/koenkk/zigbee2mqtt)에서 모든 파일을 복사합니다.
    - git 사용을 선호한다면 전체 저장소를 클론합니다 (권장).
        ```bash
        git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt/
        ```
    - 또는 초록색 `Clone or download` 버튼을 눌러 zip 아카이브를 다운로드한 후 압축을 풉니다.
1. 새로 생성된 디렉토리로 이동하여 pnpm으로 의존성을 설치합니다:
    ```bash
    pnpm install --frozen-lockfile
    ```

## Zigbee2MQTT 시작

모든 설정이 완료되면 Zigbee2MQTT를 시작할 수 있습니다.
설치 루트 디렉토리로 이동하여 Zigbee2MQTT를 실행합니다:

```bash
pnpm start
```

처음 시작 시, Zigbee2MQTT는 포트 8080에서 온보딩을 시작합니다.
해당 페이지로 이동하여 설정을 진행하세요.
[온보딩](../getting-started/README.md#onboarding)에 대한 자세한 정보를 참고하세요.

온보딩이 완료되면 다음과 같은 내용이 표시됩니다:

```
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: 'D:\Documents\GitHub\zigbee2mqtt\data\log\2019-10-18.22-56-22'
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)
Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd
Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started
Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: '20190608'
```

Zigbee2MQTT는 `CTRL + C`를 누른 후 `Y`로 확인하여 언제든지 중지할 수 있습니다.

::: warning 주의

Zigbee2MQTT가 `USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.` 오류로 시작에 실패하는 경우, `configuration.yaml`의 `serial` 섹션을 설정해야 합니다.

먼저 장치에 할당된 COM 포트를 확인합니다:

1. 시작 메뉴를 열고 `장치 관리자`를 입력합니다.
1. `포트 (COM 및 LPT)` 를 확장합니다.
1. `USB 직렬 장치 (COM4)` 와 유사한 항목을 찾습니다.

![Device Manager](../../images/devicemanager.png)

위 예시에서는 `configuration.yaml`에 `port: COM4`를 사용합니다.
다음으로 [여기](../configuration/adapter-settings.md)에 설명된 대로 `serial` 섹션을 설정합니다.

:::

## Zigbee2MQTT 업데이트

수정 사항을 적용하기 전에 Zigbee2MQTT의 `\data` 하위 디렉토리를 백업하는 것을 권장합니다.

1. 먼저 Zigbee2MQTT를 중지합니다.
1. [설치](#설치) 단계에서 Zigbee2MQTT 저장소를 클론한 디렉토리로 이동합니다.
1. 설정된 소스에서 최신 내용을 가져옵니다.
    ```bat
    git pull
    ```
1. 의존성을 업데이트합니다.
    ```bat
    pnpm install --frozen-lockfile
    ```
1. Zigbee2MQTT를 재시작합니다.
    ```bat
    pnpm start
    ```

아래는 다음 작업을 자동으로 수행하는 PowerShell 스크립트 예시입니다:

- data 디렉토리 백업
- Zigbee2MQTT 업데이트
- data 디렉토리 내용 복원

이 스크립트는 node가 실행 중인지 자동으로 확인하고(Zigbee2MQTT가 아직 실행 중인 경우) 종료를 요청합니다. 이후에는 수동으로 중지하고 재시작해야 합니다.

스크립트의 경로를 환경에 맞게 수정하세요. 기본적으로 스크립트는 `D:\ProgramData\zigbee2mqtt\`를 설치 폴더로, `C:\Temp\`를 `data` 폴더 백업의 임시 저장 위치로 사용합니다.

관리자 권한의 PowerShell 콘솔에서 스크립트를 실행하세요.

```powershell
# Z2M이 실행 중이면 안 됩니다
# 이 스크립트는 Z2M을 다시 시작하지 않습니다

# 아래 경로를 필요에 맞게 수정하세요
$z2mPath = "D:\ProgramData\zigbee2mqtt"
$backupPath = "C:\Temp"


# 이 줄 아래는 수정하지 마세요
# ------------------------------------------------------------------------------
# 경로 설정
$z2mDataPath = Join-Path -Path $z2mPath -ChildPath 'data'
$z2mBackupPath = Join-Path -Path $backupPath -ChildPath 'z2mdata'

# Z2M이 실행 중인지 확인
if (Get-Process -Name "node" -ErrorAction SilentlyContinue) {
    # node 실행 중 인스턴스 발견, 스크립트 중단
    "Node still running, please close first" | Write-Host -ForegroundColor Red
    pause
    return
}
else {
    # 계속 진행!
    "Node not running, Zigbee2MQTT upgrade will continue" | Write-Host -ForegroundColor Green
}
# 작업 디렉토리 변경:
"Setting location to ""$($z2mPath)""" | Write-Host
Set-Location -Path $z2mPath
# data 디렉토리 백업:
"Backing up data subdirectory" | Write-Host
Copy-Item -Path $z2mDataPath -Destination $z2mBackupPath -Recurse
# 최신 릴리즈 가져오기:
"Running ""git pull""" | Write-Host
& git pull
# 의존성 업데이트:
"Running ""pnpm install --frozen-lockfile""" | Write-Host
& pnpm install --frozen-lockfile
# 백업된 data 복원:
"Restore backed up data directory" | Write-Host
Copy-Item -Path "$($z2mBackupPath)\*" -Destination $z2mDataPath -Recurse -Force
# 백업 폴더 삭제:
"Delete backed up folder" | Write-Host
Remove-Item -Path $z2mBackupPath -Recurse
"Update completed!" | Write-Host -ForegroundColor Green
pause
```
