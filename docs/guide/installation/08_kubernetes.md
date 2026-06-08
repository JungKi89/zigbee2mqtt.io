---
next: 14_securing.md
---

# Kubernetes

이 안내서는 helm chart를 사용하여 k8s 클러스터에서 Zigbee2MQTT를 실행하는 방법을 설명합니다.

# Values - 설정

helm cli, flux/argo CD 등 어떤 설치 방법을 선택하든 먼저 values.yaml 파일을 검토하고 필요한 설정을 선택합니다.
values.yaml의 Zigbee2MQTT config 섹션은 일반 설정 파일과 1:1로 매핑되며, helm 릴리즈 생성 시 configmap으로 만들어집니다. 추가 값을 제공하지 않으면 배포에서 적절한 기본값이 사용됩니다.

클러스터의 노드에 직접 연결된 USB adapter를 사용할 계획이라면, 올바른 노드에 파드가 스케줄링되도록 `.values.statefulset.nodeSelector`를 지정해야 할 가능성이 높습니다.

기본적으로 스토리지는 비활성화되어 있어 테스트에 적합합니다.
동적 볼륨 프로비저닝을 사용하려면 `statefulset.storage.storageClassName`만 설정하면 됩니다.
설치 간 볼륨을 유지하거나 기존 데이터를 재사용하려면, `volumeName`이나 볼륨 선택자를 제공하는 `statefulset.storage`의 옵션을 활용할 수 있습니다. 이 필드들은 기존 볼륨에 연결할 수 있는 statefulSet의 persistentVolumeClaim에 주입됩니다.

## helm

helm을 사용하여 차트를 수동으로 설치하려면 먼저 로컬 helm 설치에 helm 저장소를 추가합니다:

```bash
helm repo add zigbee2mqtt  https://charts.zigbee2mqtt.io
```

저장소에서 차트를 불러옵니다:

```bash
helm repo update
```

원하는 값으로 helm 차트를 설치합니다 (아래 예시에서는 `myvalues.yaml`):

```bash
helm install -f myvalues.yaml zigbee2mqtt zigbee2mqtt/zigbee2mqtt
```

## flux

gitops 방식으로 클러스터를 관리하는 경우, flux CRD를 사용하여 릴리즈를 생성하고 관리할 수 있습니다.

먼저 저장소에 zigbee2mqtt의 helm 저장소를 추가합니다:

```yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: HelmRepository
metadata:
    name: zigbee2mqtt
    namespace: flux-system
spec:
    interval: 10m
    url: https://charts.zigbee2mqtt.io
```

그런 다음 Helm 릴리즈를 생성합니다:

```yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta2
kind: HelmRelease
metadata:
    name: zigbee2mqtt
    namespace: flux-system
spec:
    interval: 5m
    targetNamespace: zigbee2mqtt
    chart:
        spec:
            chart: zigbee2mqtt
            version: '1.37.1'
            sourceRef:
                kind: HelmRepository
                name: zigbee2mqtt
                namespace: flux-system
            interval: 10m
    values: ... 여기에 설정을 입력하세요
```
