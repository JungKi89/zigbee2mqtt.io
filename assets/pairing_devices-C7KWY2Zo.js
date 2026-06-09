import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/guide/usage/pairing_devices.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/pairing_devices.html\",\"title\":\"기기 참가 허용\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/getting_started/pairing_devices.md\"},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":6},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"catduckgnaf\",\"username\":\"catduckgnaf\",\"email\":\"129601174+catduckgnaf@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/catduckgnaf\"},{\"name\":\"Rotzbua\",\"username\":\"Rotzbua\",\"email\":\"Rotzbua@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Rotzbua\"},{\"name\":\"Daafip\",\"username\":\"Daafip\",\"email\":\"59128851+Daafip@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Daafip\"},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"e03fe14936ed135593593ac289aa3b9f57fae529\",\"time\":1728677304000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Permit join MQTT API change (#3092)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"0cce5ce0e4dc815549952d652d0c5c430bdd9d4e\",\"time\":1702669555000,\"email\":\"59128851+Daafip@users.noreply.github.com\",\"author\":\"David Haasnoot\",\"message\":\"Update pairing_devices.md - adding note on interference (#2384)\"},{\"hash\":\"bf045b577104032dc4141f4d898f8bb40d9aeb81\",\"time\":1699214753000,\"email\":\"Rotzbua@users.noreply.github.com\",\"author\":\"Rotzbua\",\"message\":\"fix(typo): correct misspell (#2306)\"},{\"hash\":\"e35e2e78df9eb8d3c010bb8624b149f65ffa063d\",\"time\":1696320287000,\"email\":\"129601174+catduckgnaf@users.noreply.github.com\",\"author\":\"CatDuck\",\"message\":\"Update pairing_devices.md (#2201)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/usage/pairing_devices.md\"}");
var _sfc_main = { name: "pairing_devices.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createStaticVNode("<h1 id=\"기기-참가-허용\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#기기-참가-허용\"><span>기기 참가 허용</span></a></h1><p>기기가 네트워크에 참가할 수 있도록 하려면 참가를 허용해야 합니다. 이를 위한 방법은 여러 가지가 있습니다:</p><h3 id=\"프론트엔드\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#프론트엔드\"><span>프론트엔드</span></a></h3><p>프론트엔드에서 참가를 활성화하면 네트워크가 254초 동안 열립니다. 참가 버튼은 내비게이션 바 오른쪽 상단에 있으며, 타이머가 끝나기 전에 수동으로 네트워크를 닫는 데도 사용할 수 있습니다.</p><h4 id=\"특정-기기를-통한-페어링\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#특정-기기를-통한-페어링\"><span>특정 기기를 통한 페어링</span></a></h4><p><code>Permit join (All)</code> 버튼 오른쪽에 아래를 가리키는 화살표가 있습니다. 이를 통해 기기가 자동으로 선택하는 대신, 코디네이터 또는 특정 라우터를 지정하여 그곳을 통해 참가할 수 있습니다. 이것이 해당 라우터가 선택된다는 보장은 없습니다(또는 장기적으로 유지된다는 보장도 없습니다). 하지만 Aqara처럼 라우터 선택이 까다로운 기기나 스위치를 전구에 연결하고 싶을 때 유용할 수 있습니다.</p><h3 id=\"mqtt\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mqtt\"><span>MQTT</span></a></h3>", 7)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createBaseVNode("code", null, "zigbee2mqtt/bridge/request/permit_join", -1)),
			_cache[2] || (_cache[2] = createTextVNode(" MQTT topic을 사용하여 참가를 활성화할 수 있습니다. 자세한 내용은 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-permit-join" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("MQTT topic과 메시지", -1)])]),
				_: 1
			}),
			_cache[3] || (_cache[3] = createTextVNode("를 참조하세요.", -1))
		]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "페어링",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#페어링"
		}, [createBaseVNode("span", null, "페어링")])], -1)),
		createBaseVNode("p", null, [
			_cache[5] || (_cache[5] = createTextVNode("먼저 기기 페이지(", -1)),
			createVNode(_component_RouteLink, { to: "/supported-devices/" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("지원 기기", -1)])]),
				_: 1
			}),
			_cache[6] || (_cache[6] = createTextVNode("에서 모델 번호 클릭)에 기기 페어링 방법에 대한 지침이 있는지 확인하세요.", -1))
		]),
		_cache[12] || (_cache[12] = createStaticVNode("<p>지침이 없는 경우, 기기를 공장 초기화하여 페어링할 수 있을 것입니다.</p><p>로그에 아래와 유사한 내용이 나타나면 기기가 페어링된 것입니다.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div>", 3)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("페어링 중 문제가 발생하면 가능한 해결 방법은 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/faq/#why-does-my-device-not-or-fail-to-pair" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("FAQ", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode("를 참조하세요.", -1))
		])
	]);
}
var pairing_devices_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, pairing_devices_default as default };
