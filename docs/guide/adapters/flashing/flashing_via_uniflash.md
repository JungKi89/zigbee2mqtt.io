---
redirectFrom: /information/flashing_via_uniflash.md
---

# UNIFLASH를 통한 Flash

UNIFLASH를 사용하여 특정 Texas Instruments MCU(예: CC26X2R1 및 CC1352P-2)를 Flash할 수 있습니다. Windows, macOS 및 Linux에서 실행됩니다.

**참고:** UNIFLASH는 때때로 프로그래머 firmware를 업데이트해야 하며, 기기가 USB 3 포트에 연결되어 있으면 실패할 수 있습니다. 이런 경우 USB 2 포트로 변경하세요.

**Linux에서 Flash 시 참고:** Uniflash는 일부 배포판에서 잘 작동하지 않습니다. 특히 Fedora 31에서는 문제가 있을 수 있습니다. 작동이 확인된 조합은:

- _Ubuntu 18.4 (LTS)_:
    - 새로 설치
    - `# sudo apt install libgconf-2-4`
    - `# sudo apt install libusb-0.1-4`
    - ... 그런 다음 아래 지침을 따르세요

## 지침

1. UNIFLASH 다운로드 및 설치: [다운로드 링크](http://www.ti.com/tool/download/UNIFLASH)
2. 기기를 연결합니다
3. UNIFLASH를 시작하면 기기가 자동으로 감지됩니다. *Start*를 누릅니다
   ![Start](../../../images/uniflash/start.png)
4. _Settings & Utilities_ -> *Manual Erase*로 이동하여 *Erase Entire Flash*를 누릅니다
   ![Erase](../../../images/uniflash/erase.png)
5. _Settings & Utilities_ -> *Program Load*로 이동하여 *All Unprotected Sectors*를 선택하고 *Perform Blank Check*를 클릭합니다
   ![Load](../../../images/uniflash/sectors.png)
6. _Program_ -> *Flash Image(s)*로 이동하고 *Browse*를 눌러 firmware를 선택합니다. 경로와 파일 이름에 공백이 없어야 합니다 (공백이 있으면 "Error! Unable to open file ..."로 Flash가 실패할 수 있습니다).
7. *Load image*를 클릭하여 firmware를 업로드합니다
   ![Load](../../../images/uniflash/load.png)
8. 완료!
