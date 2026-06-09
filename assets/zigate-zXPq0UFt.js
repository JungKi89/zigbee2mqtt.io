import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
import "./zigate_usb_ttl-ChpmyLKF.js";
//#region docs/guide/adapters/zigate.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/zigate.html\",\"title\":\"ZiGate adapters\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":6},{\"name\":\"Ilya Kirov\",\"username\":\"\",\"email\":\"kirovilya@gmail.com\",\"commits\":1},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"fb657485f8c0ecc9865b62ddf252c2612d86743d\",\"time\":1743968672000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add note to unrecomended/not maintained adapters (#3668)\"},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"db9f75e229d9d17501163e45418a9c2b981d4e9c\",\"time\":1724783796000,\"email\":\"kirovilya@gmail.com\",\"author\":\"Ilya Kirov\",\"message\":\"ZBOSS adapter page (#2974)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"14ad26dceb60441b5b7c9f66002b60110f0dce66\",\"time\":1722715476000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"List not supported features of adapters (#2919)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"178a244cea0d021a267b8a26c1011a168c712327\",\"time\":1715713565000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Add rec. firmware links for emberznet adapters. Add logging details. Fix display issues. (#2749)\"},{\"hash\":\"a8d9729fdf2f799fb7b7ed40ace509519c241be8\",\"time\":1715020255000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Create pages for each supported stack. (#2739)\"}]},\"filePathRelative\":\"guide/adapters/zigate.md\"}");
var _sfc_main = { name: "zigate.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[17] || (_cache[17] = createStaticVNode("<h1 id=\"zigate-adapters\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigate-adapters\"><span>ZiGate adapters</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">주의</p><p>이 adapter의 구현은 <strong>더 이상 유지 관리되지 않습니다</strong>. 대신 권장 adapter 중 하나를 구매하는 것을 고려하세요.</p></div><div class=\"hint-container warning\"><p class=\"hint-container-title\">주의</p><p>이 adapter에 대한 지원은 <strong>실험적</strong>이며, 프로덕션 환경에서의 사용은 아직 권장되지 않습니다.</p></div><p>다양한 ZigGate adapter에 대한 실험적(알파 단계) 지원 개발이 시작되었습니다. 여기에는 현재 ZigGate 3.1d firmware 이상을 사용하는 JN5168 및 JN5169와 같은 NXP Zigbee MCU 칩 기반의 모든 ZiGate 호환 하드웨어 adapter가 포함됩니다.</p>", 4)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "주의", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 고려하세요.", -1)),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#changing-the-zigbee-channel" }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("채널 변경", -1)])]),
					_: 1
				}), _cache[1] || (_cache[1] = createTextVNode(": 변경하면 모든 기기를 다시 페어링해야 합니다.", -1))]),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd" }, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("설치 코드", -1)])]),
					_: 1
				}), _cache[3] || (_cache[3] = createTextVNode(" 추가: 일부 기기 페어링에 필요합니다.", -1))]),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestbackup" }, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("백업", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [
					_cache[6] || (_cache[6] = createTextVNode("Inter-PAN: ", -1)),
					createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
						default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("touchlink", -1)])]),
						_: 1
					}),
					_cache[7] || (_cache[7] = createTextVNode("에 필요합니다.", -1))
				])
			])
		]),
		_cache[18] || (_cache[18] = createStaticVNode("<div class=\"hint-container warning\"><p class=\"hint-container-title\">주의</p><p>zigbee-herdsman은 ZiGate adapter의 유지 관리자를 찾고 있습니다. <a href=\"https://github.com/Koenkk/zigbee-herdsman/issues/1037\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Koenkk/zigbee-herdsman/issues/1037</a>을 참조하세요.</p></div><h3 id=\"설정\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설정\"><span>설정</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zigate</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 3)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("기타 지원되는 설정: ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "adapter_concurrent", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" 및 ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("code", null, "transmit_power", -1)),
			_cache[15] || (_cache[15] = createTextVNode(" (", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("문서", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(").", -1))
		]),
		_cache[19] || (_cache[19] = createStaticVNode("<h2 id=\"하드웨어\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#하드웨어\"><span>하드웨어</span></a></h2><ul><li><a href=\"https://zigate.fr/tag/firmware/\" target=\"_blank\" rel=\"noopener noreferrer\">Coordinator firmware</a></li><li><a href=\"https://github.com/Koenkk/zigbee-herdsman/issues/242\" target=\"_blank\" rel=\"noopener noreferrer\">토론</a></li><li><a href=\"https://zigate.fr/boutique/?orderby=date_desc\" target=\"_blank\" rel=\"noopener noreferrer\">구매</a></li></ul><img src=\"/zigbee2mqtt.io/assets/zigate_usb_ttl-DN1YW54P.png\" width=\"200\">", 3))
	]);
}
var zigate_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, zigate_default as default };
