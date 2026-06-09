import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/guide/installation/14_securing.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/14_securing.html\",\"title\":\"설치 보안\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":1,\"next\":\"../configuration/\",\"redirectFrom\":[\"/how_tos/how_to_secure_network.md\",\"/advanced/zigbee/03_secure_network.md\"]},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Andy\",\"username\":\"Andy\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":1,\"url\":\"https://github.com/Andy\"},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"783dad40de34a7ba7543161e41783dffd0849cbe\",\"time\":1777648793000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add \\\"securing\\\" page (#5067)\",\"coAuthors\":[{\"name\":\"Andy\",\"email\":\"andrei_lazarov@yahoo.com\"}]}]},\"filePathRelative\":\"guide/installation/14_securing.md\"}");
var _sfc_main = { name: "14_securing.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[37] || (_cache[37] = createStaticVNode("<h1 id=\"설치-보안\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설치-보안\"><span>설치 보안</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">경고</p><p>이 페이지는 일반적인 설치에서 보안이 어떻게 적용되는지 개요를 제공합니다. 설정마다 약간씩 다를 수 있으므로, 전부 해당되지 않을 수도 있고 추가적인 사항이 있을 수도 있습니다.</p></div><p>Zigbee2MQTT를 보안 관점에서 이해하는 유용한 방법은 네트워크 라우터에서 실행되는 소프트웨어와 비교하는 것입니다: 네트워크의 설정과 제어를 담당합니다. 따라서 기본적으로 로컬에서만 접근 가능합니다.</p><p>Zigbee2MQTT는 브리지이므로, 연결된 다양한 소프트웨어 구성 요소(MQTT 브로커, 자동화 소프트웨어 등)도 각각 적절히 보안 설정을 해야 합니다. 각 소프트웨어의 공식 문서를 참고하세요.</p><p>이러한 구성 요소를 공개적으로 노출하려면 신중한 보안 계획이 필요합니다. 신뢰할 수 없는 접근은 절대 허용해서는 안 됩니다.</p><h2 id=\"호스트-시스템\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#호스트-시스템\"><span>호스트 시스템</span></a></h2><ul><li><strong>전용 사용자</strong>: 전용의 권한이 없는 사용자 계정(<code>root</code> 아님)으로 Zigbee2MQTT를 실행합니다. 이는 프로세스가 침해될 경우 피해 범위를 제한합니다.</li><li><strong>data 디렉토리 접근 제한</strong>: data 디렉토리에는 전체 설정, 네트워크 상태, 장치 데이터가 포함됩니다. Zigbee2MQTT 사용자만 접근할 수 있어야 합니다.</li><li><strong>호스트 시스템 최신 상태 유지</strong>: 운영 체제 및 의존성(Node.js, MQTT 브로커 등)의 보안 업데이트를 정기적으로 적용하고 Zigbee2MQTT 자체도 업데이트된 상태를 유지합니다.</li></ul><h2 id=\"설정-파일\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설정-파일\"><span>설정 파일</span></a></h2><p><code>configuration.yaml</code> 파일에는 MQTT 자격 증명 및 Zigbee 네트워크 키와 같은 민감한 정보가 포함되어 있습니다.</p>", 9)),
		createBaseVNode("ul", null, [_cache[11] || (_cache[11] = createStaticVNode("<li><p><strong>파일 권한 제한</strong>: Zigbee2MQTT를 실행하는 사용자만 파일을 읽고 쓸 수 있도록 합니다.</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">chmod</span> <span class=\"token number\">600</span> configuration.yaml</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div></li>", 1)), createBaseVNode("li", null, [createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createBaseVNode("strong", null, "secrets 파일 사용", -1)),
			_cache[2] || (_cache[2] = createTextVNode(": ", -1)),
			_cache[3] || (_cache[3] = createBaseVNode("code", null, "configuration.yaml", -1)),
			_cache[4] || (_cache[4] = createTextVNode("에 자격 증명을 평문으로 저장하지 않습니다. 대신 ", -1)),
			_cache[5] || (_cache[5] = createBaseVNode("code", null, "!secret.yaml", -1)),
			_cache[6] || (_cache[6] = createTextVNode(" 구문을 사용하여 참조하는 별도의 ", -1)),
			_cache[7] || (_cache[7] = createBaseVNode("code", null, "secret.yaml", -1)),
			_cache[8] || (_cache[8] = createTextVNode(" 파일을 사용합니다. ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html#specifying-mqtt-serveruserpassword-and-network_key-in-a-different-file" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("다른 파일에서 지정하기", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode("를 참고하세요.", -1))
		]), _cache[10] || (_cache[10] = createStaticVNode("<p><code>secret.yaml</code>에도 동일한 권한 제한을 적용합니다:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">chmod</span> <span class=\"token number\">600</span> secret.yaml</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div>", 2))])]),
		_cache[38] || (_cache[38] = createBaseVNode("h2", {
			id: "mqtt",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#mqtt"
		}, [createBaseVNode("span", null, "MQTT")])], -1)),
		_cache[39] || (_cache[39] = createBaseVNode("p", null, "MQTT는 Zigbee2MQTT의 주요 입출력 경로입니다. 데이터를 발행하고 Zigbee2MQTT의 모든 측면(설정, 네트워크, 장치 등)을 제어하는 데 사용됩니다.", -1)),
		createBaseVNode("p", null, [
			_cache[13] || (_cache[13] = createTextVNode("전체 참조는 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("MQTT 설정", -1)])]),
				_: 1
			}),
			_cache[14] || (_cache[14] = createTextVNode("을 참고하세요.", -1))
		]),
		_cache[40] || (_cache[40] = createStaticVNode("<div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>접근 보안 없이 MQTT 브로커를 공개적으로 노출하지 마세요. 브로커에 대한 사용 가능한 문서와 가이드를 참고하세요.</p></div><div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>프로덕션 환경에서 <code>reject_unauthorized: false</code>를 사용하는 것은 위험합니다. TLS 인증서 검증을 비활성화하여 연결을 취약하게 만듭니다.</p></div><h2 id=\"frontend\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#frontend\"><span>Frontend</span></a></h2><p>Frontend는 MQTT와 동일한 API를 사용하지만, 브라우저 내 접근을 위해 <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket\" target=\"_blank\" rel=\"noopener noreferrer\">WebSocket</a>으로 래핑됩니다. Frontend에 접근할 수 있는 사람은 MQTT와 동일하게 Zigbee2MQTT를 완전히 제어할 수 있습니다.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>접근 보안 없이 frontend를 공개적으로 노출하지 마세요.</p></div><h3 id=\"인증\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#인증\"><span>인증</span></a></h3>", 6)),
		createBaseVNode("p", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html#advanced-configuration" }, {
			default: withCtx(() => [..._cache[15] || (_cache[15] = [createBaseVNode("code", null, "auth_token", -1), createTextVNode(" 옵션", -1)])]),
			_: 1
		}), _cache[16] || (_cache[16] = createTextVNode("을 사용하여 토큰 기반 인증을 활성화합니다.", -1))]),
		_cache[41] || (_cache[41] = createBaseVNode("p", null, [
			createTextVNode("비밀번호와 동일한 주의를 기울여 사용합니다. "),
			createBaseVNode("code", null, "configuration.yaml"),
			createTextVNode("에 직접 저장하지 말고 "),
			createBaseVNode("code", null, "secret.yaml"),
			createTextVNode("에 저장합니다("),
			createBaseVNode("a", { href: "#%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC" }, "설정 파일"),
			createTextVNode(" 참고).")
		], -1)),
		_cache[42] || (_cache[42] = createBaseVNode("h3", {
			id: "암호화-https-wss",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#암호화-https-wss"
		}, [createBaseVNode("span", null, "암호화 (HTTPS / WSS)")])], -1)),
		createBaseVNode("p", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html#advanced-configuration" }, {
			default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("인증서 및 개인 키", -1)])]),
			_: 1
		}), _cache[18] || (_cache[18] = createTextVNode("를 제공하여 Zigbee2MQTT 내에서 직접 HTTPS/WSS를 활성화합니다.", -1))]),
		createBaseVNode("p", null, [
			_cache[20] || (_cache[20] = createTextVNode("또는 frontend 앞에 배치된 리버스 프록시(Nginx, Apache 등)에서 TLS를 종료합니다. 프록시 설정 예시는 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html" }, {
				default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode("Frontend 설정", -1)])]),
				_: 1
			}),
			_cache[21] || (_cache[21] = createTextVNode("을 참고하세요.", -1))
		]),
		_cache[43] || (_cache[43] = createStaticVNode("<h3 id=\"바인드-주소\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#바인드-주소\"><span>바인드 주소</span></a></h3><p>기본적으로 frontend는 모든 인터페이스(<code>0.0.0.0</code>)에서 수신 대기합니다. 원격 접근이 필요하지 않은 경우 localhost로 제한합니다:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">frontend</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">host</span><span class=\"token punctuation\">:</span> 127.0.0.1</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>또는 Unix 소켓을 사용하여 네트워크 노출을 완전히 피할 수 있습니다:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">frontend</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">host</span><span class=\"token punctuation\">:</span> <span class=\"token string\">&#39;/run/zigbee2mqtt/zigbee2mqtt.sock&#39;</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><div class=\"hint-container warning\"><p class=\"hint-container-title\">경고</p><p>이와 관련하여 일부 시스템(Docker, Home Assistant 등)의 특정 요구 사항에 주의하세요.</p></div><h2 id=\"zigbee-네트워크\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-네트워크\"><span>Zigbee 네트워크</span></a></h2><h3 id=\"네트워크-암호화-키\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#네트워크-암호화-키\"><span>네트워크 암호화 키</span></a></h3><p>Zigbee 통신은 128비트 네트워크 키를 사용하여 암호화됩니다.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>이 키를 변경하면 모든 장치를 재페어링해야 합니다.</p></div><div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>현재 기존 기본 키 <code>[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]</code>로 네트워크를 운영 중인 경우, 키를 변경하는 것을 강력히 권장합니다.</p></div>", 11)),
		createBaseVNode("p", null, [
			_cache[23] || (_cache[23] = createTextVNode("다음 시작 시 새로운 랜덤 키를 생성하려면 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/getting-started/#onboarding" }, {
				default: withCtx(() => [..._cache[22] || (_cache[22] = [createTextVNode("온보딩", -1)])]),
				_: 1
			}),
			_cache[24] || (_cache[24] = createTextVNode("을 사용하거나 수동으로 업데이트합니다:", -1))
		]),
		_cache[44] || (_cache[44] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">network_key</span><span class=\"token punctuation\">:</span> GENERATE</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Zigbee2MQTT는 시작 시 <code>GENERATE</code>를 무작위로 생성된 키로 교체합니다. 물론 특정 키를 수동으로 설정할 수도 있습니다.</p>", 2)),
		createBaseVNode("p", null, [
			_cache[26] || (_cache[26] = createTextVNode("자세한 내용은 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html" }, {
				default: withCtx(() => [..._cache[25] || (_cache[25] = [createTextVNode("Zigbee 네트워크 설정", -1)])]),
				_: 1
			}),
			_cache[27] || (_cache[27] = createTextVNode("을 참고하세요.", -1))
		]),
		_cache[45] || (_cache[45] = createStaticVNode("<h3 id=\"pan-id-및-extended-pan-id\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pan-id-및-extended-pan-id\"><span>PAN ID 및 Extended PAN ID</span></a></h3><p>PAN ID와 Extended PAN ID는 네트워크를 식별합니다. 이것들은 보안 수단이 아닙니다.</p><p>변경은 가능하지만 모든 장치를 재페어링해야 합니다. 주로 근처의 다른 네트워크와의 충돌을 피해야 할 때 사용합니다.</p><h3 id=\"ieee-및-네트워크-주소\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ieee-및-네트워크-주소\"><span>IEEE 및 네트워크 주소</span></a></h3><p>IEEE 주소와 네트워크 주소는 장치를 식별합니다. 이것들은 보안 수단이 아닙니다.</p><p>IEEE 주소는 장치의 Zigbee 칩에 정적으로 할당됩니다(일부 경우에는 변경 가능). 동일한 IEEE 주소를 가진 두 장치는 같은 네트워크에 참여할 수 없습니다.</p><p>네트워크 주소는 장치 참여 시 무작위로 할당되며 일반적으로 리셋/재참여까지 동일하게 유지됩니다(장치의 재량에 따라 변경될 수 있음).</p><h3 id=\"참여-permit-join\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#참여-permit-join\"><span>참여 (permit join)</span></a></h3><p>&quot;permit join&quot; 상태는 새 장치가 네트워크에 참여할 수 있는지 여부를 결정합니다. 참여는 전용 frontend 버튼 또는 MQTT를 통해 일시적으로(기본 254초) 활성화됩니다. 페어링이 완료되면 참여 창을 수동으로 닫을 수도 있습니다.</p><div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>새로 참여한 장치는 특정 기간(최대 254초) 동안 자체적으로 참여를 자동 허용할 수 있습니다.</p></div><h4 id=\"설치-코드\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설치-코드\"><span>설치 코드</span></a></h4><p>설치 코드로 참여하면 더 나은 보안을 제공합니다(사용 가능한 경우). 코드는 장치 제조 과정에서 무작위로 할당됩니다. 코드는 Trust Center(coordinator)에서 참여 장치로의 초기 네트워크 키 전송을 암호화합니다.</p>", 12)),
		createBaseVNode("p", null, [
			_cache[29] || (_cache[29] = createTextVNode("설치 코드가 있는지 확인하려면 공급업체에 문의하거나 각 장치의 문서를 참조하세요(일반적으로 장치에 인쇄되어 있거나 QR 코드로 표시됩니다). 코드는 frontend를 통해 추가할 수 있습니다. ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd" }, {
				default: withCtx(() => [..._cache[28] || (_cache[28] = [createTextVNode("MQTT를 통한 설치 코드 추가", -1)])]),
				_: 1
			}),
			_cache[30] || (_cache[30] = createTextVNode("도 참고하세요.", -1))
		]),
		_cache[46] || (_cache[46] = createBaseVNode("h3", {
			id: "장치-passlist-및-blocklist",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#장치-passlist-및-blocklist"
		}, [createBaseVNode("span", null, "장치 passlist 및 blocklist")])], -1)),
		createBaseVNode("p", null, [
			_cache[32] || (_cache[32] = createTextVNode("네트워크에 허용되는 장치를 더 엄격하게 제어하려면 passlist 또는 blocklist를 사용합니다. 자세한 내용은 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/block-pass-list.html" }, {
				default: withCtx(() => [..._cache[31] || (_cache[31] = [createTextVNode("장치 blocklist / passlist", -1)])]),
				_: 1
			}),
			_cache[33] || (_cache[33] = createTextVNode("를 참고하세요.", -1))
		]),
		_cache[47] || (_cache[47] = createStaticVNode("<div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>허용되지 않은 장치는 시작 시(예: 마지막 실행 이후 설정 변경) 및 참여 시도 시 네트워크에서 제거됩니다. 참고: 제거는 대상 장치에 &quot;떠나달라&quot;는 요청을 전송하는 것이므로, 악의적인 장치는 의도적으로 이를 무시할 수 있습니다.</p></div><div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>passlist를 사용하는 것이 가장 제한적이고 따라서 가장 안전한 옵션으로, 명시적으로 신뢰할 수 있는 장치만 참여할 수 있습니다.</p></div><h3 id=\"inter-pan\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#inter-pan\"><span>Inter-PAN</span></a></h3><p>Inter-PAN 메시지는 1홉 거리의 미참여 장치로 보내거나 받는 <strong>비보안 메시지</strong>입니다. Touchlink(이전에는 ZLL로 알려진)는 Inter-PAN 메시징을 사용합니다.</p><p>Inter-PAN은 일반적으로 매우 특정한 작업(예: Touchlink를 통해 장치를 공장 초기화)에 사용되며, 원하지 않는 메시지는 적극적으로 차단되고 물리적 근접이 필요합니다. 이는 보안 부재의 영향을 제한합니다.</p><div class=\"hint-container warning\"><p class=\"hint-container-title\">경고</p><p>특히 접근이 비교적 쉬운 장소에서는 Touchlink가 영구적으로 활성화된 장치를 피하세요. 악의적인 사용자가 네트워크를 방해할 수 있습니다.</p></div><h3 id=\"zigbee-4-0\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-4-0\"><span>Zigbee 4.0</span></a></h3><p>Zigbee 4.0은 여러 보안 향상 사항을 제공합니다. CSA의 발표에서 더 자세히 읽을 수 있습니다: <a href=\"https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/\" target=\"_blank\" rel=\"noopener noreferrer\">https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/</a></p><p>참고: 장치들이 새로운 표준을 따르고 이러한 향상 사항을 모두 지원하기까지는 시간이 걸릴 것입니다.</p><h2 id=\"외부-확장-및-컨버터\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#외부-확장-및-컨버터\"><span>외부 확장 및 컨버터</span></a></h2><p>설계상, 외부 확장 및 컨버터는 Zigbee2MQTT 프로세스 내에서 사용자가 제공한 임의의 JavaScript 코드를 실행합니다. 이는 상당한 커스터마이징 유연성을 제공하지만, 악의적이거나 버그가 있는 코드가 전체 Zigbee2MQTT 인스턴스, 나아가 호스트 시스템을 침해할 수 있음을 의미합니다.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">주의</p><p>신뢰할 수 있고 검토된 출처에서만 외부 확장 및 컨버터를 추가하세요. 시스템에서 실행되는 다른 코드/스크립트와 동일한 수준의 검토를 적용하세요.</p></div><h2 id=\"펌웨어-업데이트-ota\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#펌웨어-업데이트-ota\"><span>펌웨어 업데이트 (OTA)</span></a></h2>", 13)),
		createBaseVNode("p", null, [
			_cache[35] || (_cache[35] = createTextVNode("펌웨어 업데이트는 버그 수정, 보안 업데이트 및 기타 유용한 기능을 제공할 수 있습니다. 그러나 Zigbee2MQTT 호환성에 영향을 미치거나 버그가 있거나 심지어 악의적인 기능을 도입하는 방식으로 장치 동작을 변경할 수도 있습니다. 펌웨어 업데이트를 적용하기 전에 릴리즈 노트를 검토하세요. 자세한 내용은 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[34] || (_cache[34] = [createTextVNode("OTA 업데이트", -1)])]),
				_: 1
			}),
			_cache[36] || (_cache[36] = createTextVNode("를 참고하세요.", -1))
		]),
		_cache[48] || (_cache[48] = createBaseVNode("p", null, [
			createTextVNode("기본적으로 Zigbee2MQTT는 "),
			createBaseVNode("a", {
				href: "https://github.com/Koenkk/zigbee-OTA",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "Koenkk/zigbee-OTA"),
			createTextVNode(" 저장소에서 OTA 이미지를 매칭하고 가져옵니다. 이 저장소는 수동 및 자동으로 관리되는 제조업체 제공 펌웨어 업데이트의 미러입니다.")
		], -1)),
		_cache[49] || (_cache[49] = createBaseVNode("div", { class: "hint-container caution" }, [createBaseVNode("p", { class: "hint-container-title" }, "주의"), createBaseVNode("p", null, "신뢰할 수 있는 출처의 펌웨어만 사용하세요. 출처를 완전히 신뢰하지 않는 한 사용자 정의 OTA index URL을 사용하지 마세요.")], -1))
	]);
}
var _14_securing_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _14_securing_default as default };
