import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
import "./zigate_usb_ttl-ChpmyLKF.js";
//#region docs/en/guide/adapters/zigate.md
var _pageData = JSON.parse("{\"path\":\"/en/guide/adapters/zigate.html\",\"title\":\"ZiGate adapters\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"git\":{\"updatedTime\":1780979369000,\"contributors\":[{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":2,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"201eff222626ac587ecc9a8bbe43b659e002ea21\",\"time\":1780979369000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"fix: docs/en/ 이미지 경로 수정 (빌드 에러 해결)\"},{\"hash\":\"994b3857cb9f8668c20a28412a002650c40fd990\",\"time\":1780971094000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 헤더 언어 전환(EN/KO) 기능 추가\"}]},\"filePathRelative\":\"en/guide/adapters/zigate.md\"}");
var _sfc_main = { name: "zigate.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[17] || (_cache[17] = createStaticVNode("<h1 id=\"zigate-adapters\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigate-adapters\"><span>ZiGate adapters</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">ATTENTION</p><p>The implementation of this adapter is <strong>not maintained</strong> anymore. Consider buying one of the recommended adapters instead.</p></div><div class=\"hint-container warning\"><p class=\"hint-container-title\">ATTENTION</p><p>Support for this adapter is <strong>experimental</strong>, not recommended yet for production setups</p></div><p>Initial development started on experimental (alpha stage) support for various ZigGate adapters. This includes all ZiGate compatible hardware adapters which are currently based on NXP Zigbee MCU chips like JN5168 and JN5169 with ZigGate 3.1d firmware or later.</p>", 4)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "ATTENTION", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "Various features are not supported by this adapter, in case you depend on these features, consider a different adapter.", -1)),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/en/guide/configuration/zigbee-network.html#changing-the-zigbee-channel" }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Changing the channel", -1)])]),
					_: 1
				}), _cache[1] || (_cache[1] = createTextVNode(", changing requires re-pairing all devices.", -1))]),
				createBaseVNode("li", null, [
					_cache[3] || (_cache[3] = createTextVNode("Adding ", -1)),
					createVNode(_component_RouteLink, { to: "/en/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd" }, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("install codes", -1)])]),
						_: 1
					}),
					_cache[4] || (_cache[4] = createTextVNode(", which is required to pair some devices.", -1))
				]),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/en/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestbackup" }, {
					default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Backups", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [_cache[7] || (_cache[7] = createTextVNode("Inter-PAN, which is required for ", -1)), createVNode(_component_RouteLink, { to: "/en/guide/usage/touchlink.html" }, {
					default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("touchlink", -1)])]),
					_: 1
				})])
			])
		]),
		_cache[18] || (_cache[18] = createStaticVNode("<div class=\"hint-container warning\"><p class=\"hint-container-title\">ATTENTION</p><p>zigbee-herdsman is looking for maintainers for the ZiGate adapter. See <a href=\"https://github.com/Koenkk/zigbee-herdsman/issues/1037\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Koenkk/zigbee-herdsman/issues/1037</a></p></div><h3 id=\"configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration\"><span>Configuration</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zigate</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 3)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("Other supported settings are: ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "adapter_concurrent", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" and ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("code", null, "transmit_power", -1)),
			_cache[15] || (_cache[15] = createTextVNode(" (", -1)),
			createVNode(_component_RouteLink, { to: "/en/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("docs", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(").", -1))
		]),
		_cache[19] || (_cache[19] = createStaticVNode("<h2 id=\"hardware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hardware\"><span>Hardware</span></a></h2><ul><li><a href=\"https://zigate.fr/tag/firmware/\" target=\"_blank\" rel=\"noopener noreferrer\">Coordinator firmware</a></li><li><a href=\"https://github.com/Koenkk/zigbee-herdsman/issues/242\" target=\"_blank\" rel=\"noopener noreferrer\">Discussion</a></li><li><a href=\"https://zigate.fr/boutique/?orderby=date_desc\" target=\"_blank\" rel=\"noopener noreferrer\">Buy</a></li></ul><img src=\"/zigbee2mqtt.io/assets/zigate_usb_ttl-DN1YW54P.png\" width=\"200\">", 3))
	]);
}
var zigate_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, zigate_default as default };
