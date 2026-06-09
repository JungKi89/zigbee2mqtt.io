import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/guide/adapters/zboss.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/zboss.html\",\"title\":\"ZBOSS adapters\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Ilya Kirov\",\"username\":\"\",\"email\":\"kirovilya@gmail.com\",\"commits\":2},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4},{\"name\":\"andry\",\"username\":\"andry\",\"email\":\"blackicebox@gmail.com\",\"commits\":1,\"url\":\"https://github.com/andry\"},{\"name\":\"captainlettuce\",\"username\":\"captainlettuce\",\"email\":\"31080747+captainlettuce@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/captainlettuce\"},{\"name\":\"Die Peter Pan\",\"username\":\"\",\"email\":\"diepeterpan@gmail.com\",\"commits\":1},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"1fdd8dd050a3a8f33610360e057332f1f997f110\",\"time\":1756036148000,\"email\":\"diepeterpan@gmail.com\",\"author\":\"Die Peter Pan\",\"message\":\"Update zboss.md for ESP32-C6 firmware (#4062)\"},{\"hash\":\"a3bbb363e489638128d56b7c9f692678660c19ec\",\"time\":1736795985000,\"email\":\"31080747+captainlettuce@users.noreply.github.com\",\"author\":\"captainlettuce\",\"message\":\"Update zboss.md to include Nice!Nano v2 (#3422)\"},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"52bfd5aaa3fad607ff47604a9aebc39c7877067e\",\"time\":1730228785000,\"email\":\"kirovilya@gmail.com\",\"author\":\"Ilya Kirov\",\"message\":\"ZBOSS: Notes about ESP32-C6 (#3156)\"},{\"hash\":\"74c9549c57be9d46fdaab206d75a7fa1909d954e\",\"time\":1729539973000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Fix lint\"},{\"hash\":\"8200bc71d19269a0d76c8610d01ba9ac84596f26\",\"time\":1729527443000,\"email\":\"blackicebox@gmail.com\",\"author\":\"andry\",\"message\":\"Add link to ESP32 adapter firmware (#3119)\"},{\"hash\":\"db9f75e229d9d17501163e45418a9c2b981d4e9c\",\"time\":1724783796000,\"email\":\"kirovilya@gmail.com\",\"author\":\"Ilya Kirov\",\"message\":\"ZBOSS adapter page (#2974)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]}]},\"filePathRelative\":\"guide/adapters/zboss.md\"}");
var _sfc_main = { name: "zboss.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[17] || (_cache[17] = createStaticVNode("<h1 id=\"zboss-adapters\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zboss-adapters\"><span>ZBOSS adapters</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">주의</p><p>이 adapter에 대한 지원은 <strong>실험적</strong>이며, 프로덕션 환경에서의 사용은 아직 권장되지 않습니다.</p></div><p>ZBOSS 프로토콜용 adapter는 nRF5340, nRF52840, nRF52833, nRF21540 등 Nordic Semiconductor 칩을 위한 ZBOSS NCP Host <a href=\"https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html\" target=\"_blank\" rel=\"noopener noreferrer\">Zigbee NCP (Network Co-Processor)</a> 예제를 기반으로 합니다.</p><p>또한 특수 firmware https://github.com/andryblack/esp-coordinator 덕분에 ZBOSS 프로토콜을 사용하여 Espressif ESP32-C6/H2 칩과 상호작용할 수 있습니다.</p><p>칩과 호스트 간의 상호작용은 <a href=\"https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm\" target=\"_blank\" rel=\"noopener noreferrer\">ZBOSS NCP Serial Protocol</a>에 따라 이루어집니다.</p><p>adapter 코드는 <a href=\"https://github.com/kardia-as/zigpy-zboss\" target=\"_blank\" rel=\"noopener noreferrer\">zigpy-zboss 라이브러리</a>를 기반으로 합니다.</p>", 6)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "주의", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "현재 이 adapter는 다양한 기능을 지원하지 않습니다. 해당 기능에 의존하는 경우 다른 adapter를 사용하는 것을 고려하세요.", -1)),
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
		_cache[18] || (_cache[18] = createStaticVNode("<h3 id=\"설정\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#설정\"><span>설정</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zboss</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 2)),
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
		_cache[19] || (_cache[19] = createStaticVNode("<h2 id=\"하드웨어\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#하드웨어\"><span>하드웨어</span></a></h2><p>현재 nRF52840 Dongle, Nice!Nano v2 (nRF52840) 및 ESP32-C6/H2 개발 보드에서 테스트되었습니다.</p><ul><li><a href=\"https://github.com/kardia-as/nrf-zboss-ncp\" target=\"_blank\" rel=\"noopener noreferrer\">nRF52840 SoC가 있는 Nordic Semiconductor용 미리 빌드된 coordinator firmware</a></li></ul><img src=\"https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg\" width=\"500\"><ul><li><a href=\"https://github.com/captainlettuce/zboss_adapter_nice_nano_v2\" target=\"_blank\" rel=\"noopener noreferrer\">nRF52840 SoC가 있는 Nice!Nano v2용 미리 빌드된 coordinator firmware</a></li></ul><img alt=\"Nice!Nano v2\" src=\"https://github.com/user-attachments/assets/db2f3041-e36c-4921-b078-7cf0236eeae3\" width=\"75\"><ul><li><p><a href=\"https://github.com/andryblack/esp-coordinator\" target=\"_blank\" rel=\"noopener noreferrer\">실험적 ESP32-C6 firmware</a></p><p>안정성 수정이 포함된 더 최신 빌드 <a href=\"https://github.com/diepeterpan/esp-coordinator\" target=\"_blank\" rel=\"noopener noreferrer\">업데이트된 ESP32-C6 firmware</a></p></li></ul><img src=\"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/_images/esp32-c6-devkitc-1-isometric_v1.2.png\" width=\"200\">", 8))
	]);
}
var zboss_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, zboss_default as default };
