---
sidebarDepth: 1
redirectFrom: /information/frontend.md
---

# Frontend

Zigbee2MQTT에는 웹 기반 frontend가 내장되어 있습니다.

frontend를 활성화하려면 `configuration.yaml`에 다음을 추가하세요. 이렇게 하면 포트 `8080`에서 frontend가 시작됩니다.

```yaml
frontend:
    enabled: true
```

## 고급 설정

```yaml
frontend:
    enabled: true
    # 선택 사항, 기본값: zigbee2mqtt-frontend, 가능한 값: zigbee2mqtt-frontend, zigbee2mqtt-windfront
    package: zigbee2mqtt-frontend
    # 선택 사항, 기본값: 8080
    port: 8080
    # 선택 사항, 기본값은 IPv4와 IPv6 모두 수신. 주소 대신 경로를 입력하면 unix 소켓을 엽니다 (예: '/run/zigbee2mqtt/zigbee2mqtt.sock')
    # Docker 또는 Home Assistant 애드온을 사용하는 경우 컨테이너 내에서 선택한 IP가 사용 가능한지 확인한 후에만 설정하세요
    host: 0.0.0.0
    # 선택 사항, 인증 활성화, 기본값 비활성화, 평문 텍스트 (해싱 불필요)
    auth_token: your-secret-token
    # 선택 사항, frontend에 접근할 수 있는 URL, 현재는 Home Assistant 장치 설정 페이지에만 사용됨
    url: 'https://zigbee2mqtt.myhouse.org'
    # 선택 사항, HTTPS 노출을 위한 인증서 파일 경로. HTTPS 활성화를 위해 sibling 속성 'ssl_key'도 설정해야 합니다
    ssl_cert: /config/etc/letsencrypt/live/mydomain.com/fullchain.pem
    # 선택 사항, HTTPS 노출을 위한 개인 키 파일 경로. HTTPS 활성화를 위해 sibling 속성 'ssl_cert'도 설정해야 합니다
    ssl_key: /config/etc/letsencrypt/live/mydomain.com/privkey.pem
    # 선택 사항, 프록시 뒤에서 서브패스로 서비스할 때 frontend의 기본 URL. 기본값은 '/'
    base_url: /zigbee2mqtt
    # 선택 사항, 알림을 숨기기 위한 정규 표현식 목록, 아래 예시는 장치 핑 실패 알림을 숨김
    notification_filter:
        - 'z2m: Failed to ping.*'
    # 선택 사항, true로 설정하면 frontend UI를 서빙하지 않고 WebSocket만 유지됩니다
    # (필요에 따라 독립형 UI를 직접 서빙해야 합니다).
    disable_ui_serving: false
```

`auth_token`을 다른 파일에 지정하려면 `auth_token: '!secret.yaml auth_token'`으로 설정하고, `configuration.yaml` 옆에 `secret.yaml` 파일을 생성하여 `auth_token: super-secret-token` 내용을 작성하세요.

**참고:** Home Assistant 애드온으로 Zigbee2MQTT를 실행하는 경우 포트를 변경할 수 없습니다. Home Assistant Ingress가 필요로 하므로 애드온은 frontend를 강제로 포트 8099에서 실행합니다.

### `package` 설정 상세

frontend에 사용할 패키지를 변경할 수 있습니다 (Zigbee2MQTT 재시작 필요). 이에 따라 Zigbee2MQTT의 웹 기반 UI가 변경됩니다.

::: warning 중요
각 패키지의 기능, 링크 및 전반적인 디자인은 서로 다를 수 있습니다.
:::

##### zigbee2mqtt-windfront

새로운 코드, 새로운 디자인, 새로운 기능으로 재작성된 원본 frontend입니다...
![WindFront](../../images/windfront.png)
상세 정보: [https://github.com/Nerivec/zigbee2mqtt-windfront](https://github.com/Nerivec/zigbee2mqtt-windfront)

피드백은 [#28442](https://github.com/Koenkk/zigbee2mqtt/discussions/28442)에서 제공할 수 있습니다.

다수의 Zigbee2MQTT 인스턴스를 지원하는 독립형으로도 사용 가능합니다: [https://github.com/Nerivec/zigbee2mqtt-windfront/wiki#standalone-serving-with-multi-zigbee2mqtt-support](https://github.com/Nerivec/zigbee2mqtt-windfront/wiki#standalone-serving-with-multi-zigbee2mqtt-support)

##### zigbee2mqtt-frontend

원본 frontend (레거시).
![Frontend](../../images/frontend.png)
상세 정보: [https://github.com/nurikk/zigbee2mqtt-frontend](https://github.com/nurikk/zigbee2mqtt-frontend)

## Nginx 프록시 설정

프록시 뒤에서 frontend를 실행하려면 다음 설정을 예시로 사용할 수 있습니다.

[WebKit 버그 80362](https://bugs.webkit.org/show_bug.cgi?id=80362)로 인해 WebSocket에서 기본 인증 사용이 불가능하므로, 이 인증 방식을 설정하면 WebKit 기반 브라우저에서 frontend가 작동하지 않습니다. Mac의 데스크탑 Safari와 iOS의 _모든_ 브라우저 및 웹뷰가 해당됩니다. 이 문제를 해결하려면 frontend의 `auth_token`을 설정하여 애플리케이션 수준 인증을 구성하고 웹 서버 설정에서 `auth_basic`을 제거하세요.

```
server {
    listen       80;
    server_name  zigbee2mqtt.mydomain.com;
    return 301   https://zigbee2mqtt.mydomain.com$request_uri;
}

server {
    listen      443 ssl http2;
    listen      [::]:443 ssl http2;

    # 기본 인증을 사용하려면:
    auth_basic "Login";
    auth_basic_user_file /zigbee2mqtt_htpasswd;

    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;
    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;

    server_name zigbee2mqtt.mydomain.com;

    location / {
        proxy_pass http://localhost:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /api {
        proxy_pass         http://localhost:8080/api;
        proxy_set_header Host $host;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

## Apache2 프록시 설정

출처: [Florian Metzger-Noel](https://stackoverflow.com/questions/38838567/proxy-websocket-wss-to-ws-apache/60506715#60506715)

다음 명령으로 모듈을 활성화하세요:
`a2enmod proxy proxy_wstunnel proxy_http rewrite`

```
<VirtualHost *:80>
   ServerName example.com
   ServerAdmin info@example.com


    ProxyRequests off
    ProxyVia on
    RewriteEngine On

    RewriteEngine On
    RewriteCond %{HTTP:Connection} Upgrade [NC]
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule /(.*) ws://localhost:8080/$1 [P,L]

    ProxyPass               / http://localhost:8080/
    ProxyPassReverse        / http://localhost:8080/


   <Proxy *>
   Order deny,allow
   Allow from all
   </Proxy>

   ErrorLog ${APACHE_LOG_DIR}/company2-error.log
   CustomLog ${APACHE_LOG_DIR}/company2-access.log combined

</VirtualHost>


```

## 고급: frontend 포트 변경

기본 Dockerfile은 `EXPOSE 8080`을 사용합니다. 런타임에 변경할 수는 없으며, 주로 문서 힌트로서의 역할을 합니다.

다른 포트(예: `9090`)에서 frontend를 실행하려면 `configuration.yaml`에서 포트를 먼저 업데이트한 다음, 컨테이너 실행 시 새 포트를 게시해야 합니다.

**방법 1: 직접 포트 게시**

가장 간단한 방법입니다.

1.  `configuration.yaml`에서 포트를 설정합니다:

    ```yaml
    frontend:
        port: 9090
    ```

2.  새 포트를 게시하고 data 디렉토리를 마운트하여 컨테이너를 실행합니다:
    ```bash
    docker run \
      -p 9090:9090 \
      -v ./data:/app/data \
      koenkk/zigbee2mqtt
    ```

**방법 2: 리버스 프록시 사용 (예: Traefik)**

리버스 프록시를 사용하는 경우 포트를 직접 게시할 필요가 없습니다. 대신 레이블을 사용하여 프록시에 서비스가 내부적으로 실행 중인 포트를 알려주세요.

1.  `configuration.yaml`에서 포트를 설정합니다 (방법 1 참고).

2.  Traefik 레이블과 함께 컨테이너를 실행합니다:
    ```bash
    docker run \
      -v ./data:/app/data \
      -l "traefik.enable=true" \
      -l "traefik.http.services.zigbee2mqtt.loadbalancer.server.port=9090" \
      koenkk/zigbee2mqtt
    ```
