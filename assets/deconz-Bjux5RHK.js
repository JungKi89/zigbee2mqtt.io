import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
import "./conbee-D0j0ZAXV.js";
//#region docs/guide/adapters/deconz.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/deconz.html\",\"title\":\"deCONZ (Dresden Elektronik)\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":5},{\"name\":\"Manuel Pietschmann\",\"username\":\"\",\"email\":\"manuel.pietschmann@gmail.com\",\"commits\":1},{\"name\":\"fox34\",\"username\":\"fox34\",\"email\":\"github@noecho.de\",\"commits\":1,\"url\":\"https://github.com/fox34\"},{\"name\":\"Sergio\",\"username\":\"Sergio\",\"email\":\"sejoruiz@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Sergio\"},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"06a82b084d32803896c3abcd95e1641d23fffb39\",\"time\":1773035645000,\"email\":\"sejoruiz@gmail.com\",\"author\":\"Sergio\",\"message\":\"Add baudrate for the original Conbee (#4896)\"},{\"hash\":\"bd53f19bd445198d88cea3d31d2bba697b486f43\",\"time\":1771694140000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: install code details (#4847)\"},{\"hash\":\"b2e8dda3be7ceed2c8d478d7b9bff5427cca8340\",\"time\":1760984173000,\"email\":\"github@noecho.de\",\"author\":\"fox34\",\"message\":\"Warn about unresolved connectivity issues with ConBee II (#4308)\"},{\"hash\":\"cd3ad3884b98e0bf269e083e9df6c5f126e6ae63\",\"time\":1750703512000,\"email\":\"manuel.pietschmann@gmail.com\",\"author\":\"Manuel Pietschmann\",\"message\":\"Update deconz.md (#3885)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"fb657485f8c0ecc9865b62ddf252c2612d86743d\",\"time\":1743968672000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add note to unrecomended/not maintained adapters (#3668)\"},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"14ad26dceb60441b5b7c9f66002b60110f0dce66\",\"time\":1722715476000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"List not supported features of adapters (#2919)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"a8d9729fdf2f799fb7b7ed40ace509519c241be8\",\"time\":1715020255000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Create pages for each supported stack. (#2739)\"}]},\"filePathRelative\":\"guide/adapters/deconz.md\"}");
var _sfc_main = { name: "deconz.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[15] || (_cache[15] = createBaseVNode("h1", {
			id: "deconz-dresden-elektronik",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#deconz-dresden-elektronik"
		}, [createBaseVNode("span", null, "deCONZ (Dresden Elektronik)")])], -1)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "주의", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 고려하세요.", -1)),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, [
					_cache[1] || (_cache[1] = createTextVNode("Inter-PAN: ", -1)),
					createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("touchlink", -1)])]),
						_: 1
					}),
					_cache[2] || (_cache[2] = createTextVNode("에 필요합니다", -1))
				]),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("송신 전력", -1)])]),
					_: 1
				}), _cache[4] || (_cache[4] = createTextVNode(" 낮추기", -1))]),
				_cache[7] || (_cache[7] = createBaseVNode("li", null, [createTextVNode("ConBee II (및 RaspBee II도 가능성 있음)는 "), createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/28041",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "네트워크 연결 문제(MacNoAck)를 나타낼 수 있습니다")], -1)),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd" }, {
					default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("설치 코드", -1)])]),
					_: 1
				}), _cache[6] || (_cache[6] = createTextVNode(" 지원에는 최신 coordinator firmware가 필요합니다. 일부 기기 페어링에 필요합니다.", -1))])
			])
		]),
		_cache[16] || (_cache[16] = createStaticVNode("<h3 id=\"설정\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설정\"><span>설정</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> deconz</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 2)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("기타 지원되는 설정: ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "baudrate", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" (", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("문서", -1)])]),
				_: 1
			}),
			_cache[14] || (_cache[14] = createTextVNode(").", -1))
		]),
		_cache[17] || (_cache[17] = createStaticVNode("<h2 id=\"하드웨어\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#하드웨어\"><span>하드웨어</span></a></h2><p>ConBee / ConBee II / ConBee III / RaspBee / RaspBee II</p><p>USB 연결 adapter (ConBee / ConBee II / ConBee III)와 Raspberry Pi GPIO 모듈 (RaspBee 및 RaspBee II).</p><p><code>configuration.yaml</code>의 serial 섹션에 올바른 baudrate를 추가하세요.</p><ul><li>ConBee2의 경우: baudrate를 지정할 필요가 없습니다</li><li>Conbee 및 RaspBee2의 경우: 38400</li><li>ConBee3의 경우: 115200</li></ul><p>최신 안정 firmware 버전이 권장되며, <a href=\"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Firmware-Changelog\" target=\"_blank\" rel=\"noopener noreferrer\">firmware 변경 로그</a>에 나열되어 있습니다.</p><ul><li><a href=\"https://deconz.dresden-elektronik.de/deconz-firmware/\" target=\"_blank\" rel=\"noopener noreferrer\">Coordinator firmware</a></li><li><a href=\"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually\" target=\"_blank\" rel=\"noopener noreferrer\">Flash</a></li><li><a href=\"https://phoscon.de/conbee2#buy\" target=\"_blank\" rel=\"noopener noreferrer\">구매</a> (ConBee II)</li><li><a href=\"https://phoscon.de/conbee3#buy\" target=\"_blank\" rel=\"noopener noreferrer\">구매</a> (ConBee III)</li><li><a href=\"https://phoscon.de/raspbee2#buy\" target=\"_blank\" rel=\"noopener noreferrer\">구매</a> (RaspBee II)</li></ul><img src=\"/zigbee2mqtt.io/assets/conbee-C8X3sHjA.jpg\" width=\"200\">", 8))
	]);
}
var deconz_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, deconz_default as default };
