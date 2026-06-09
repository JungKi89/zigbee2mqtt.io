import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/devices/SLACKY_DIY_CO2_SENSOR_R01.md
var _pageData = JSON.parse("{\"path\":\"/devices/SLACKY_DIY_CO2_SENSOR_R01.html\",\"title\":\"Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01 control via MQTT\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01 control via MQTT\",\"description\":\"Integrate your Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-04-01T18:29:09.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Fedor Lizunkov\",\"username\":\"\",\"email\":\"lfa1@yandex.ru\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"d39247b979aab27a5f9d13c111e06babe2904610\",\"time\":1743532928000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.18.0\"},{\"hash\":\"610dffda46306b6ef87d92c5b83bc8e6ba46b17a\",\"time\":1743102536000,\"email\":\"lfa1@yandex.ru\",\"author\":\"Fedor Lizunkov\",\"message\":\"add photo Thermostat with custom firmware (#3608)\"}]},\"filePathRelative\":\"devices/SLACKY_DIY_CO2_SENSOR_R01.md\"}");
var _sfc_main = { name: "SLACKY_DIY_CO2_SENSOR_R01.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[4] || (_cache[4] = createStaticVNode("<h1 id=\"slacky-diy-slacky-diy-co2-sensor-r01\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#slacky-diy-slacky-diy-co2-sensor-r01\"><span>Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01</span></a></h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLACKY_DIY_CO2_SENSOR_R01</td></tr><tr><td>Vendor</td><td><a href=\"/supported-devices/#v=Slacky-DIY\" target=\"_blank\" rel=\"noopener noreferrer\">Slacky-DIY</a></td></tr><tr><td>Description</td><td>Tuya CO2 sensor with custom Firmware</td></tr><tr><td>Exposes</td><td>co2</td></tr><tr><td>Picture</td><td><img src=\"https://www.zigbee2mqtt.io/images/devices/SLACKY_DIY_CO2_SENSOR_R01.png\" alt=\"Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01\"></td></tr></tbody></table><p><a href=\"https://github.com/slacky1965/tuya_co2sensor_zrd\" target=\"_blank\" rel=\"noopener noreferrer\">Original project description</a></p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 4)),
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
		_cache[6] || (_cache[6] = createStaticVNode("<ul><li><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"co2-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#co2-numeric\"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p>", 4))
	]);
}
var SLACKY_DIY_CO2_SENSOR_R01_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SLACKY_DIY_CO2_SENSOR_R01_default as default };
