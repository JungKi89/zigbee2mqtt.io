# Tuya 및 Xiaomi OTA URL 가져오기

::: warning
x86 컴퓨터에서 Android Studio는 더 이상 ARM을 에뮬레이션하여 Tuya 앱을 실행할 수 없습니다.
:::

이 가이드는 기기에 대한 TuYa 또는 Xiaomi OTA 파일을 가져오는 방법을 설명합니다. 이 파일은 Zigbee2MQTT를 통해 TuYa/Xiaomi 기기를 업데이트하는 데 사용할 수 있습니다.

사전 요구사항:

- Docker
- TuYa bridge 또는 Xiaomi gateway
- [Android Studio](https://developer.android.com/studio)

## 1단계: 프록시 실행

다음 명령을 실행합니다: `docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy`

## 2단계: Android 에뮬레이터 설정

Android Studio를 시작하고 새 빈 프로젝트를 만듭니다:

1. File -> New -> New Project...
1. Phone and Tablet -> Empty Activity -> Next
1. Finish
1. 에뮬레이터("Pixel*3a*..." 등)를 클릭 -> Device Manager <br/> ![](../../images/android_studio_run.png)
1. 기기의 연필 아이콘을 클릭하고 "Show Advanced Settings" 아래에서 "Internal Storage"를 "2000"으로 변경합니다. "Finish"를 클릭합니다.
1. 재생 아이콘을 클릭하여 에뮬레이터를 시작합니다. <br/> ![](../../images/android_studio_adv.png)
1. 에뮬레이터에서 Settings -> Network & internet -> Internet -> AndroidWifi -> Edit (오른쪽 상단 연필) -> Advanced options -> Proxy -> Manual로 이동합니다. 프록시 호스트 이름에 컴퓨터의 IP 주소(예: 192.168.2.145)를 입력하고, 포트에 8080을 입력합니다. 저장합니다.
1. 에뮬레이터에서 Chrome을 열고 http://mitm.it 로 이동하여 Android 아래의 "Get mitmproxy-ca-cert.cer"를 클릭합니다.
1. 다시 설정으로 이동하여 Security -> Encryption & credentials -> Install a certificate -> CA certificate -> Install anyway -> Drawer 아이콘 -> Downloads -> 다운로드된 인증서를 클릭합니다.

## 3a단계: TuYa OTA URL 가져오기

1. [이 링크](https://www.apkmirror.com/apk/volcano-technology-limited/smart-life-smart-living/smart-life-smart-living-3-12-6-release/smart-life-smart-living-3-12-6-android-apk-download/)에서 TuYa 앱 apk를 다운로드합니다(중요: 더 최신 버전은 작동하지 않음, 3.12.6으로 테스트됨). 다운로드한 apk를 에뮬레이터에 드래그합니다(설치됨).
1. 에뮬레이터에서 TuYa Smart Life 앱을 열고 계정으로 로그인합니다.
1. TuYa bridge + OTA를 가져오려는 기기가 이미 계정에 연결되어 있는지 확인합니다. 이는 에뮬레이터에서 수행할 수 없으므로 전화기를 사용하세요. 전화기에서 동일한 앱을 사용하는지 확인하세요. 그렇지 않으면 기기가 표시되지 않습니다 (예: iOS의 경우 [이것](https://apps.apple.com/nl/app/smart-life-smart-living/id1115101477) 사용, [**이것은 아님**](https://apps.apple.com/nl/app/tuya-smart/id1034649547)).
1. 기기 클릭 -> 편집 (오른쪽 상단 연필 아이콘). "Check for Firmware Upgrade"를 클릭합니다.
1. firmware 업그레이드를 사용할 수 있으면 빠르게 mitm 출력(1단계)으로 돌아가서 최신 요청을 클릭합니다(콘솔 창에서 클릭할 수 있음). 이것이 OTA URL을 보여줍니다 (아래 빨간 상자 참조).
    - 팁: 요청 개요로 돌아가려면 키보드의 `Q` 키를 누르세요.

![](../../images/tuya_ota.png)

## 3b단계: Xiaomi OTA URL 가져오기

참고: 이것은 Aqara Home 앱에 연결할 수 있는 기본 Aqara gateway에서만 작동합니다 (Xiaomi Home 앱은 아님!).

- 작동: ZHWG16LM/HE1-G0, ZHWG15LM, ZHWG12LM
- 작동 안 함: ZNDMWG03LM, DGNWG02LM

1. [이 링크](https://apkpure.com/nl/aqara-home/com.lumiunited.aqarahome)에서 Aqara Home 앱 apk를 다운로드합니다. 버전 2.2.5로 테스트됨. 다운로드한 apk를 에뮬레이터에 드래그합니다(설치됨).
1. 에뮬레이터에서 Aqara Home 앱을 열고 계정으로 로그인합니다.
1. Aqara gateway + OTA를 가져오려는 기기가 이미 계정에 연결되어 있는지 확인합니다. 이는 에뮬레이터에서 수행할 수 없으므로 전화기를 사용하세요.
1. 기기를 클릭하고 firmware 업그레이드를 확인합니다.
1. firmware 업그레이드를 사용할 수 있으면 빠르게 mitm 출력(1단계)으로 돌아가서 최신 요청을 클릭합니다(콘솔 창에서 클릭할 수 있음). OTA URL이 표시됩니다 (3a단계의 스크린샷 참조).

## 4단계: zigbee-ota에 OTA 추가

1. [이 가이드](https://github.com/koenkk/zigbee-ota#adding-new-and-updating-existing-ota-files)를 따라 [zigbee-OTA](https://github.com/koenkk/zigbee-ota) 저장소에 OTA를 추가합니다.
1. 기기 정의에 `ota: ota.zigbeeOTA`를 추가하여 OTA를 활성화합니다 ([예시](https://github.com/Koenkk/zigbee-herdsman-converters/blob/3e45f8f13b419ea8ce33fb3d30b11f5ac1bdec08/devices/tuya.js#L1172)).
