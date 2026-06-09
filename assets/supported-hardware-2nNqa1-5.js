import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/en/guide/supported-hardware.md
var _pageData = JSON.parse("{\"path\":\"/en/guide/supported-hardware.html\",\"title\":\"Supported Hardware\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"next\":\"./adapters/\"},\"git\":{\"updatedTime\":1780981931000,\"contributors\":[{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":2,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"c318d66df3bbb3577ac18d601aadcb3ebd257f3f\",\"time\":1780981931000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"fix: docs/en/ 내부 링크 및 check-links 엔티티 파싱 수정\"},{\"hash\":\"994b3857cb9f8668c20a28412a002650c40fd990\",\"time\":1780971094000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 헤더 언어 전환(EN/KO) 기능 추가\"}]},\"filePathRelative\":\"en/guide/supported-hardware.md\"}");
var _sfc_main = { name: "supported-hardware.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[9] || (_cache[9] = createBaseVNode("h1", {
			id: "supported-hardware",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#supported-hardware"
		}, [createBaseVNode("span", null, "Supported Hardware")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "zigbee-adapters",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee-adapters"
		}, [createBaseVNode("span", null, "Zigbee Adapters")])], -1)),
		createBaseVNode("p", null, [
			_cache[2] || (_cache[2] = createTextVNode("Zigbee2MQTT supports a range of Adapters which enable communication with the Zigbee radio network. Most adapters are connected on a USB port but there are options to use GPIO-Pins or ", -1)),
			createVNode(_component_RouteLink, { to: "/en/advanced/remote-adapter/connect_to_a_remote_adapter.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("connect it remotely", -1)])]),
				_: 1
			}),
			_cache[3] || (_cache[3] = createTextVNode(" over TCP using a WIFI or Ethernet network. See the ", -1)),
			createVNode(_component_RouteLink, { to: "/en/guide/adapters/" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("list of supported Zigbee Adapters", -1)])]),
				_: 1
			})
		]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "zigbee-devices",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee-devices"
		}, [createBaseVNode("span", null, "Zigbee Devices")])], -1)),
		createBaseVNode("p", null, [
			_cache[5] || (_cache[5] = createTextVNode("Currently there are plenty of ", -1)),
			_cache[6] || (_cache[6] = createBaseVNode("a", {
				href: "/supported-devices/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "supported Zigbee Devices", -1)),
			_cache[7] || (_cache[7] = createTextVNode(" with a rising trend. If your device is not supported yet check out ", -1)),
			createVNode(_component_RouteLink, { to: "/en/advanced/support-new-devices/01_support_new_devices.html" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("how to support new devices", -1)])]),
				_: 1
			}),
			_cache[8] || (_cache[8] = createTextVNode(" and contribute to Zigbee2MQTT.", -1))
		])
	]);
}
var supported_hardware_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, supported_hardware_default as default };
