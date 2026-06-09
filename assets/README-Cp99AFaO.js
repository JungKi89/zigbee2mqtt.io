import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/en/guide/configuration/README.md
var _pageData = JSON.parse("{\"path\":\"/en/guide/configuration/\",\"title\":\"Configuration\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"next\":\"adapter-settings.md\",\"redirectFrom\":\"/information/configuration.md\"},\"git\":{\"updatedTime\":1780971094000,\"contributors\":[{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"994b3857cb9f8668c20a28412a002650c40fd990\",\"time\":1780971094000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 헤더 언어 전환(EN/KO) 기능 추가\"}]},\"filePathRelative\":\"en/guide/configuration/README.md\"}");
var _sfc_main = { name: "README.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_Configurator = resolveComponent("Configurator");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[5] || (_cache[5] = createStaticVNode("<h1 id=\"configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration\"><span>Configuration</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">ATTENTION</p><p>Never rely solely on configurations produced by LLMs like ChatGPT! Always verify the generated configurations against the relevant documentation. Not doing so can potentially break your setup.</p></div><p>Zigbee2MQTT is configured using <a href=\"https://en.wikipedia.org/wiki/YAML\" target=\"_blank\" rel=\"noopener noreferrer\">YAML</a> based <code>configuration.yaml</code> file. The file have to be located in the <code>data</code> directory within your installation. The <code>data</code> directory and the <code>configuration.yaml</code> has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It&#39;s possible specify a custom data directory by setting the <code>ZIGBEE2MQTT_DATA</code> environment variable.</p><div class=\"hint-container tip\"><p class=\"hint-container-title\">CONVENTION</p><p>The <em>dot-notation</em> of a config-key like <code>mqtt.server</code> means <code>server</code> property within the <code>mqtt</code> section. All <em>dot-notation</em> references are absolute.</p></div><h2 id=\"generate-minimal-configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#generate-minimal-configuration\"><span>Generate minimal configuration</span></a></h2>", 5)),
		createVNode(_component_Configurator),
		_cache[6] || (_cache[6] = createStaticVNode("<h2 id=\"environment-variables\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#environment-variables\"><span>Environment variables</span></a></h2><p>It is possible to override the values in <code>configuration.yaml</code> via environment variables. The name of the environment variable should start with <code>ZIGBEE2MQTT_CONFIG_</code> followed by the path to the property you want to set in uppercase split by a <code>_</code>.</p><p>In case you want to for example override:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">mqtt</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">base_topic</span><span class=\"token punctuation\">:</span> zigbee2mqtt</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>set <code>ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC</code> to the desired value.</p><h2 id=\"config-changes-at-runtime\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#config-changes-at-runtime\"><span>Config changes at runtime</span></a></h2>", 6)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("Configuration options can be changed at runtime by publishing the appropriate MQTT payload with the topic ", -1)),
			_cache[2] || (_cache[2] = createBaseVNode("code", null, "zigbee2mqtt/bridge/request/options", -1)),
			_cache[3] || (_cache[3] = createTextVNode(". See ", -1)),
			createVNode(_component_RouteLink, { to: "/en/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("MQTT Topics and Messages", -1)])]),
				_: 1
			}),
			_cache[4] || (_cache[4] = createTextVNode(" for details.", -1))
		]),
		_cache[7] || (_cache[7] = createBaseVNode("div", { class: "hint-container tip" }, [createBaseVNode("p", { class: "hint-container-title" }, "NOTE"), createBaseVNode("p", null, "Some options will require a restart before being effective.")], -1))
	]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, README_default as default };
