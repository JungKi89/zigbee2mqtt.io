---
redirectFrom: /how_tos/how_to_find_tuya_data_points.md
---

# Tuya Data Point 찾기

Tuya 기기는 커스텀 `manuSpecificTuya` cluster를 사용합니다. 이 cluster의 보고된 값 내의 데이터에는 Tuya 기기의 핵심인 dp(소위 "Data Point ID")가 있습니다. 기기 관점에서 DPID는 기기가 제공하는 기능입니다. 아래 지침은 Tuya gateway가 있는 Tuya IoT Platform을 사용하여 datapoint의 기능을 결정하는 방법을 안내합니다. 이는 나중에 기기 converter 생성에 도움이 됩니다.

## 요구사항 및 주의사항

1. 최신 버전의 Google Chrome이 필요합니다 (다른 브라우저도 작동할 수 있지만 지침이 다를 수 있음)
2. Chrome 및 개발자 도구 사용에 대한 기본 지식이 필요합니다
3. Tuya IoT Platform에 가입하고 계정을 연결해야 합니다 (자세한 내용은 아래 참조)
4. Tuya Zigbee Gateway가 필요합니다
5. 모바일 기기에 Tuya 앱(주황색 아이콘)이 설치되어 있어야 합니다

## 지침

### 1. 기본 설정 부분

Tuya 계정을 설정하고 Zigbee 기기를 Tuya gateway에 연결했는지 확인합니다 (이 지침은 이미 완료되었다고 가정합니다).

### 2. Tuya IoT Platform 가입

Tuya IoT Platform은 인터넷에 연결된 Tuya 기기가 Tuya 플랫폼으로 통신하는 방법의 중심입니다. 개발자가 자신의 플랫폼에 Tuya 기능을 포함할 수 있도록 하는 애플리케이션 프로그래밍 인터페이스(API) 모음이 포함되어 있습니다.

[Tuya IoT Platform](https://iot.tuya.com/)을 방문하여 새 계정에 가입합니다 (계정이 없는 경우):

![01_sign_up](../../images/how_tos/tuya_dp/01_sign_up.png)

### 3. 로그인

새 자격 증명을 사용하여 Tuya IoT Platform에 로그인합니다. 플랫폼을 안내하는 첫 번째 사용 튜토리얼이 표시됩니다. 튜토리얼 끝에서 `Individual Developer`를 선택합니다. 이를 놓친 경우 오른쪽 상단의 `person` 아이콘 -> `Account`를 클릭하고 `Account Type`을 `Individual Developer`로 설정합니다.

### 4. 클라우드 프로젝트 생성

사이드 메뉴에서 `Cloud`, 서브 메뉴에서 `Development`를 클릭하고 `Create Cloud Project`를 클릭합니다.

![04_create_cloud_project](../../images/how_tos/tuya_dp/04_create_cloud_project.png)

새로 열린 대화 상자에서 Development Method가 Smart Home으로 선택되어 있고 Data Center가 Tuya 계정과 연결된 지역에 해당하는지 확인하면서 세부 정보를 입력합니다.

![05_project_creation](../../images/how_tos/tuya_dp/05_project_creation.png)

확인 후 새 대화 상자가 열립니다. `Select API Services` 옆의 `All`을 클릭하고 `Authorize`를 클릭합니다.

### 5. Tuya 계정을 새 Tuya 프로젝트와 연결하기

확인 후 새 Tuya 프로젝트로 이동합니다. `Devices`, `Link Tuya App Account`, `Add App Account`를 클릭합니다.

![07_link_tuya_account](../../images/how_tos/tuya_dp/07_link_tuya_account.png)

QR 코드가 표시됩니다. 모바일 기기에서 Tuya 앱으로 들어가서 (새 기기를 추가하는 것처럼) `[+]`를 클릭합니다. 화면 상단에 바코드 스캔 버튼 `[-]`가 표시됩니다. `[-]` 버튼을 클릭하고 (메시지가 표시되면) 카메라 사용 권한을 허용합니다. 모바일 기기로 QR 코드를 스캔하고 `Confirm login`을 누릅니다. 컴퓨터에 `Link Tuya App Account` 팝업이 표시됩니다. `Device Linking Method`를 `Automatic Link`, `Device Permission`을 `Read, write, and Manage`로 설정하고 `Ok`를 클릭합니다. 추가된 기기 수를 보여주는 팝업이 표시되면 닫습니다.

### 6. 기기 찾기

`All Devices`를 클릭하고 Data Point를 찾으려는 기기를 찾습니다. `Debug Device`를 클릭합니다. 목록에서 기기를 찾을 수 없거나 목록이 비어 있는 경우 프로젝트의 지역을 확인하세요.

![08_devices](../../images/how_tos/tuya_dp/08_devices.png)

### 7. 기기 로그 표시

`Device Logs` 탭을 클릭하면 기기가 Tuya 플랫폼에 보낸 모든 이벤트 목록이 표시됩니다. Event Details 섹션은 쓸모없는 내용처럼 보이므로 무시하세요.

![09_device_logs](../../images/how_tos/tuya_dp/09_device_logs.png)

### 8. Data Point 찾기!!

#### **자동**

`Device Logs` 탭에서 키보드의 `ctrl` + `shift` + `i` (Windows) 또는 `cmd` + `alt` + `i` (macOS)를 누르거나 Chrome 창 오른쪽 상단의 `3점 메뉴` -> `More Tools` -> `Dev Tools`로 이동하여 개발자 도구를 엽니다. 개발자 도구가 열리면 `Console` 탭을 클릭하고 아래 [코드](#automatic-script)를 콘솔에 붙여넣고 키보드에서 `Enter`를 누릅니다. 그런 다음 `DP ID` 드롭다운 목록을 열고 각 항목 위로 마우스를 이동합니다. 실행 중인 코드가 각 항목의 data point ID를 자동으로 가져옵니다. 완료되면 콘솔에서 `export_codes()`를 실행합니다. 그러면 data point ID-이름 대응이 출력됩니다.

![11_automatic_data_points_fetch](../../images/how_tos/tuya_dp/11_automatic_data_points_fetch.gif)

##### _자동 스크립트_

> 경고: 이해하지 못하는 코드는 절대 실행하지 마세요. 코드가 무엇을 하는지 이해했는지 확인하는 것은 사용자의 책임입니다.

드롭다운 목록에서 선택/호버된 data point ID와 이전 및 다음 ID의 코드는 DOM의 `<div id="code_list">` 아래에 저장됩니다. 아래 코드는 div가 업데이트될 때마다 이 세 코드를 가져와 `codes` 딕셔너리에 저장합니다.

```javascript
function waitForElm(selector) {
    /** DOM에 HTML 요소가 나타날 때까지 기다립니다.
     *
     * https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists에 대한
     * Yong Wang (https://stackoverflow.com/users/4556536/yong-wang)의 답변
     */
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {childList: true, subtree: true});
    });
}

let codes_selector = '#code_list';
let codes = {};

// code list가 DOM에 나타날 때까지 기다립니다.
waitForElm(codes_selector).then((elm) => {
    // 변경 사항을 감시하고 codes 딕셔너리를 업데이트하는 observer를 생성합니다.
    var observer = new MutationObserver((mutations) => {
        let code_items = document.getElementById('code_list').getElementsByTagName('div');
        for (const code_item of code_items) {
            codes[code_item.textContent] = code_item.getAttribute('aria-label');
        }
    });

    observer.observe(document.querySelector(codes_selector), {childList: true});
});

function export_codes() {
    /** codes 딕셔너리를 복사하기 좋은 형식으로 콘솔에 출력합니다. */
    let codes_str = JSON.stringify(codes);
    console.log(codes_str);
}
```

#### **수동**

이벤트 테이블 위의 드롭다운 목록에서 ID를 찾으려는 Data Point를 선택합니다. 키보드의 `ctrl` + `shift` + `i` (Windows) 또는 `cmd` + `alt` + `i` (macOS)를 누르거나 Chrome 창 오른쪽 상단의 `3점 메뉴` -> `More Tools` -> `Dev Tools`로 이동하여 개발자 도구를 엽니다. 개발자 도구가 열리면 `Network` 탭을 클릭하고 Tuya IoT Platform 창에서 `Search` 버튼을 클릭합니다.

![10_dev_tools](../../images/how_tos/tuya_dp/10_dev_tools.png)

개발자 도구의 `Name` 섹션에 여러 호출이 표시됩니다. 관심 있는 호출은 `list`입니다. 이것을 클릭하고 오른쪽 패널에서 `Request Payload` 섹션이 표시될 때까지 아래로 스크롤합니다. 그 안에는 검색 기능에서 전송된 모든 데이터를 포함하는 JSON 인코딩 객체가 있습니다. 키 중 하나는 `code`로 레이블이 붙어 있습니다. 이 `code` 즉 112는 Data Point ID의 값입니다!

### 9. 반복하기!

이제 드롭다운 목록에서 사용 가능한 각 Data Point를 순서대로 탐색해야 합니다. 완료되면 다른 방법 가이드를 따라 이러한 Data Point를 converter에 매핑하세요.
