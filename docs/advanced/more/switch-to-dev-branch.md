---
sidebar: auto
redirectFrom: /how_tos/how-to-switch-to-dev-branch.md
---

# Dev 브랜치로 전환하기

Zigbee2MQTT dev 브랜치에는 최신 기능, 개선 사항 및 지원 기기가 포함되어 있습니다.
시도해 보려면 dev 브랜치를 체크아웃할 수 있습니다.

::: warning
이 브랜치는 개발 브랜치입니다! 릴리스 버전보다 불안정할 수 있습니다!
:::

## Linux

```bash
# Zigbee2MQTT 중지 및 디렉토리 이동
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# 설정 백업
cp -R data data-backup

# 업데이트
git fetch origin dev:dev
# `error: pathspec 'dev' did not match any file(s) known to git` 오류가 발생하면 실행: `git fetch origin --unshallow`
git checkout dev  # 릴리스 버전으로 돌아가려면 'dev'를 'master'로 변경
git pull
pnpm install --frozen-lockfile

# 설정 복원
cp -R data-backup/* data
rm -rf data-backup

# Zigbee2MQTT 시작
sudo systemctl start zigbee2mqtt
```

## Docker

`latest-dev` 태그가 있는 Docker 이미지를 사용하세요.

## Home Assistant 애드온

[`edge`](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt) 버전을 사용하세요.

- "일반" 애드온 중지
- "일반" 애드온에서 `Start on boot` 비활성화
- "일반" 애드온에서 `Watchdog` 비활성화
- 애드온 스토어로 이동
- `Zigbee2MQTT Edge` 선택 및 설치
- "일반" 애드온의 `Configuration` 페이지에 설정이 있으면 `Edge` 애드온으로 복사
- `Edge` 애드온 시작 (원하는 대로 `Start on boot`, `Watchdog` 및 `Show in sidebar` 설정)

:::caution 주의
동일한 설정으로 두 애드온을 동시에 시작하지 마세요. 실패합니다.
:::

:::tip 팁
`Edge` 애드온을 업데이트하려면 간단히 제거하고(**데이터는 삭제하지 말 것**) 다시 설치하세요.
:::

:::tip 팁
`Edge` 애드온을 영구적으로 사용하려면 `Edge`가 작동하는 것을 확인한 후 "일반" 애드온을 제거할 수 있습니다(**데이터는 삭제하지 말 것**).
:::

:::tip 팁
애드온을 자주 전환하는 경우, 실수로 설정이 일치하지 않는 것을 방지하기 위해 애드온 `Configuration` 페이지 대신 항상 `configuration.yaml`을 직접 사용하는 것이 좋습니다. 설정을 `configuration.yaml`로 성공적으로 이동한 후 애드온 `Configuration` 페이지의 해당 상자(`mqtt`, `serial`)를 비우고 Zigbee2MQTT를 다시 시작할 수 있습니다.
:::
