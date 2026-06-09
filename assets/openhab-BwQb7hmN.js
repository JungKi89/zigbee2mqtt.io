import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/en/guide/usage/integrations/openhab.md
var _pageData = JSON.parse("{\"path\":\"/en/guide/usage/integrations/openhab.html\",\"title\":\"openHAB\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebar\":\"auto\"},\"git\":{\"updatedTime\":1780971094000,\"contributors\":[{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"994b3857cb9f8668c20a28412a002650c40fd990\",\"time\":1780971094000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 헤더 언어 전환(EN/KO) 기능 추가\"}]},\"filePathRelative\":\"en/guide/usage/integrations/openhab.md\"}");
var _sfc_main = { name: "openhab.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[3] || (_cache[3] = createBaseVNode("h1", {
			id: "openhab",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#openhab"
		}, [createBaseVNode("span", null, "openHAB")])], -1)),
		_cache[4] || (_cache[4] = createBaseVNode("p", null, [
			createTextVNode("For examples how to integrate your Zigbee devices see this "),
			createBaseVNode("a", {
				href: "https://community.openhab.org/t/zigbee2mqtt-revisited-no-more-ugly-transformations/86362",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "community thread"),
			createTextVNode(".")
		], -1)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("In case you are using openHABian see ", -1)),
			createVNode(_component_RouteLink, { to: "/en/guide/installation/04_openhabian.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("this", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(" for the recommended way to install.", -1))
		])
	]);
}
var openhab_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, openhab_default as default };
