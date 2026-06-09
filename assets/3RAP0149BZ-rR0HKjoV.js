import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/devices/3RAP0149BZ.md
var _pageData = JSON.parse("{\"path\":\"/devices/3RAP0149BZ.html\",\"title\":\"Third Reality 3RAP0149BZ control via MQTT\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Third Reality 3RAP0149BZ control via MQTT\",\"description\":\"Integrate your Third Reality 3RAP0149BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-01-31T13:20:01.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/3RAP0149BZ.md\"}");
var _sfc_main = { name: "3RAP0149BZ.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[4] || (_cache[4] = createStaticVNode("<h1 id=\"third-reality-3rap0149bz\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#third-reality-3rap0149bz\"><span>Third Reality 3RAP0149BZ</span></a></h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3RAP0149BZ</td></tr><tr><td>Vendor</td><td><a href=\"/supported-devices/#v=Third%20Reality\" target=\"_blank\" rel=\"noopener noreferrer\">Third Reality</a></td></tr><tr><td>Description</td><td>Smart Filter Sensor</td></tr><tr><td>Exposes</td><td>battery, dirty_level, pressure</td></tr><tr><td>Picture</td><td><img src=\"https://www.zigbee2mqtt.io/images/devices/3RAP0149BZ.png\" alt=\"Third Reality 3RAP0149BZ\"></td></tr></tbody></table><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(".", -1))
		]),
		_cache[5] || (_cache[5] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[6] || (_cache[6] = createStaticVNode("<ul><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"dirty-level-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#dirty-level-numeric\"><span>Dirty level (numeric)</span></a></h3><p>Measure dirty level. Value can be found in the published state on the <code>dirty_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dirty_level&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"pressure-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pressure-numeric\"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pressure&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p>", 8))
	]);
}
var _3RAP0149BZ_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _3RAP0149BZ_default as default };
