import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/guide/faq/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/faq/\",\"title\":\"자주 묻는 질문 (FAQ)\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":0,\"redirectFrom\":\"/information/FAQ.md\"},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":27},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"wizbowes\",\"username\":\"wizbowes\",\"email\":\"wizbowes@gmail.com\",\"commits\":1,\"url\":\"https://github.com/wizbowes\"},{\"name\":\"Or Bin\",\"username\":\"\",\"email\":\"orbin50@gmail.com\",\"commits\":1},{\"name\":\"Artur Sena\",\"username\":\"\",\"email\":\"algoz098@gmail.com\",\"commits\":1},{\"name\":\"Hedda\",\"username\":\"Hedda\",\"email\":\"rockerc.harley@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Hedda\"},{\"name\":\"Daniel Lo Nigro\",\"username\":\"\",\"email\":\"daniel@dan.cx\",\"commits\":1},{\"name\":\"Rotzbua\",\"username\":\"Rotzbua\",\"email\":\"Rotzbua@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Rotzbua\"},{\"name\":\"N3rdix\",\"username\":\"N3rdix\",\"email\":\"70015952+N3rdix@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/N3rdix\"},{\"name\":\"Tony Air\",\"username\":\"\",\"email\":\"tony@twma.pro\",\"commits\":1},{\"name\":\"Márton Maráz\",\"username\":\"\",\"email\":\"marazmarci@gmail.com\",\"commits\":5},{\"name\":\"Patricide\",\"username\":\"Patricide\",\"email\":\"bjschuit@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Patricide\"},{\"name\":\"Antoine Libert\",\"username\":\"\",\"email\":\"antoine@a-l.fr\",\"commits\":1},{\"name\":\"dependabot[bot]\",\"username\":\"dependabot[bot]\",\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/dependabot[bot]\"},{\"name\":\"Peter Wake\",\"username\":\"\",\"email\":\"peter_wake@hotmail.com\",\"commits\":1},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"BarryShaffer\",\"username\":\"BarryShaffer\",\"email\":\"barry.shaffer@gmail.com\",\"commits\":1,\"url\":\"https://github.com/BarryShaffer\"},{\"name\":\"Copilot\",\"username\":\"Copilot\",\"email\":\"175728472+Copilot@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Copilot\"},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"aecbaec9d0269849f36de9f51b68443014d9c592\",\"time\":1779391962000,\"email\":\"barry.shaffer@gmail.com\",\"author\":\"BarryShaffer\",\"message\":\"Clarify baud rate update when changing adapters (#5148)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Copilot Autofix powered by AI\",\"email\":\"175728472+Copilot@users.noreply.github.com\"}]},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"bd53f19bd445198d88cea3d31d2bba697b486f43\",\"time\":1771694140000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: install code details (#4847)\"},{\"hash\":\"9aacf66387d6df6d00700ed2c69e729e058bd3c2\",\"time\":1763929254000,\"email\":\"peter_wake@hotmail.com\",\"author\":\"Peter Wake\",\"message\":\"Update external converter directory references in docs (#4445)\"},{\"hash\":\"6544a2009a5c2df057f26460738547199b3991e3\",\"time\":1751392268000,\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\",\"author\":\"dependabot[bot]\",\"message\":\"fix(ignore): bump the all group with 5 updates (#3906)\",\"coAuthors\":[{\"name\":\"dependabot[bot]\",\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"6196d57afb907073eea6a4390688a6804cfab0d7\",\"time\":1742022232000,\"email\":\"antoine@a-l.fr\",\"author\":\"Antoine Libert\",\"message\":\"Add guide to migrate adapter including unsupported ones (#3586)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"a79a26930daf1671f900189edcf8e543f5e44781\",\"time\":1737314183000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update switching adapers faq (#3428)\"},{\"hash\":\"daac7e599b6ed09079ad722c2d5cdd787c806a2e\",\"time\":1734179441000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"HA legacy action sensor docs (#3325)\"},{\"hash\":\"9689c982a9f8a435e2dff69174918629198be752\",\"time\":1733947694000,\"email\":\"bjschuit@gmail.com\",\"author\":\"Patricide\",\"message\":\"Update README.md (#3292)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"34edd09bd58cd87208039a84e9b0c6a214bff8e4\",\"time\":1730642112000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Remove deprecated Home Assistant integration features (#3143)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"af7c3f95317324710d00f1030c30f59d06825179\",\"time\":1721160165000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Channel change docs (#2893)\"},{\"hash\":\"b7cf8dbec9bbeb7e2afa2091eab32face05af8f2\",\"time\":1719660228000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"Mention some general Zigbee imitations in FAQ (#2849)\",\"coAuthors\":[{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"}]},{\"hash\":\"0d732b3bf5d6baf97df80a72df10c5d2c2111740\",\"time\":1719607091000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"FAQ on how to interpret RSSI and LQI values (#2850)\",\"coAuthors\":[{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"}]},{\"hash\":\"600efd27a41c23682430bfb327ab35fa26f5068b\",\"time\":1716126478000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add <code>log_namespaced_levels</code> docs (#2750)\"},{\"hash\":\"5b9f2d3c7227b278a2ef1fb98ae3cc3d05c0d75e\",\"time\":1710965783000,\"email\":\"tony@twma.pro\",\"author\":\"Tony Air\",\"message\":\"Update README.md (#2642)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"94172db3b089a0e8d6aef9f0399663f8a6c94ce7\",\"time\":1704443858000,\"email\":\"70015952+N3rdix@users.noreply.github.com\",\"author\":\"Nerdix\",\"message\":\"Correct link to \\\"coordinator check\\\" (#2463)\"},{\"hash\":\"62ed2515e5957348e74de94159a79e0532bfd518\",\"time\":1696255413000,\"email\":\"Rotzbua@users.noreply.github.com\",\"author\":\"Rotzbua\",\"message\":\"fix(typo): docs/guide (#2239)\"},{\"hash\":\"7168dfbc987fb1c50f23a0b2bee66371e0ec36a4\",\"time\":1692037767000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add coordinator check docs (#2169)\"},{\"hash\":\"d2fd864b2d070cf3ff12b8486194ecbb8998b875\",\"time\":1678381393000,\"email\":\"daniel@dan.cx\",\"author\":\"Daniel Lo Nigro\",\"message\":\"Add details about how to disable USB autosuspend on Raspberry Pi (#1941)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"acc73872415d5f905425f3e1601ca412a34e6265\",\"time\":1676488212000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"Add FAQ note that deconz, ezsp, and zigate not yet supporting adapter migration (#1892)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"1a983627f5e3f226b8ec9e115579c34bd6947dec\",\"time\":1674294904000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Improve bad network stability/range notes.\"},{\"hash\":\"b3103041f11e10c9c096142c281e6704d0a8ddde\",\"time\":1672995909000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"FAQ: add poor performance tip. https://github.com/Koenkk/zigbee2mqtt/issues/2437\"},{\"hash\":\"07e1c18d0616b46b2891609a4a5bd0f6f204a45d\",\"time\":1669744896000,\"email\":\"algoz098@gmail.com\",\"author\":\"Artur Sena\",\"message\":\"Update FAQ (#1730)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"10125201c129f229b486d3af4eb0d576a6702264\",\"time\":1664983740000,\"email\":\"orbin50@gmail.com\",\"author\":\"Or Bin\",\"message\":\"Typo fixes (#1620)\"},{\"hash\":\"5e054139c56d42e1582ebb5120b31692a50bf194\",\"time\":1662453023000,\"email\":\"wizbowes@gmail.com\",\"author\":\"wizbowes\",\"message\":\"Update README.md (#1551)\"},{\"hash\":\"60525d635129a3530d44b988bfc6c91d5aec8712\",\"time\":1640514826000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update FAQ\"},{\"hash\":\"80833b5ee6d3cea2e36f027b571d72655f1e8f49\",\"time\":1640371033000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Clarify adapter migration and what requires repairing\"},{\"hash\":\"a64c2a88c286cb5e1472fc79f3c8c84cad7c142a\",\"time\":1640366575000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Write docs on how to copy the coordinator ieee address\"},{\"hash\":\"44982138319682e37fabc866f6497c1c9e7aa4e7\",\"time\":1638706084000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add Zigbee2MQTT crashes after some time to FAQ. https://github.com/Koenkk/zigbee2mqtt/issues/2308\"},{\"hash\":\"47e728ee1572f36315d90b643fcadf276882ea6b\",\"time\":1637001417000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add copy ieee address instructions.\"},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/faq/README.md\"}");
var _sfc_main = { name: "README.md" };
var _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[95] || (_cache[95] = createBaseVNode("h1", {
			id: "자주-묻는-질문-faq",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#자주-묻는-질문-faq"
		}, [createBaseVNode("span", null, "자주 묻는 질문 (FAQ)")])], -1)),
		createBaseVNode("nav", _hoisted_1, [createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#모든-zigbee-구현에-적용되는-일반적인-제한-사항" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("모든 Zigbee 구현에 적용되는 일반적인 제한 사항", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#네트워크가-불안정하거나-성능이-저하되면-어떻게-해야-하나요" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("네트워크가 불안정하거나 성능이 저하되면 어떻게 해야 하나요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#기기가-페어링되지-않거나-페어링에-실패하는-이유는-무엇인가요" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("기기가 페어링되지 않거나 페어링에 실패하는 이유는 무엇인가요?", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#로그가-전혀-표시되지-않는-경우" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("로그가 전혀 표시되지 않는 경우", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#인터뷰-실패" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("인터뷰 실패", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#다른-adapter로-마이그레이션하는-방법은-무엇인가요" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("다른 adapter로 마이그레이션하는 방법은 무엇인가요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt-인스턴스를-다른-환경으로-이동하는-방법은-무엇인가요" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Zigbee2MQTT 인스턴스를 다른 환경으로 이동하는 방법은 무엇인가요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#모든-기기를-다시-페어링해야-하는-경우와-그렇지-않은-경우" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("모든 기기를 다시 페어링해야 하는 경우와 그렇지 않은 경우", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#다시-페어링이-필요한-경우" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("다시 페어링이 필요한 경우", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#다시-페어링이-필요하지-않은-경우" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("다시 페어링이 필요하지 않은 경우", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#네트워크-맵에서-일부-링크가-누락되는-이유는-무엇인가요" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("네트워크 맵에서 일부 링크가 누락되는 이유는 무엇인가요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#rssi-및-lqi-값은-어떻게-해석하나요" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("RSSI 및 LQI 값은 어떻게 해석하나요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#action-속성이-항상-비어-있는-이유는-무엇인가요" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("action 속성이 항상 비어 있는 이유는 무엇인가요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt는-기기를-20개까지만-지원한다고-하던데-cc2530-cc2531-adapter-사용-시-맞나요" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("Zigbee2MQTT는 기기를 20개까지만 지원한다고 하던데(CC2530/CC2531 adapter 사용 시), 맞나요?", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#예시" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("예시", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#일반적인-오류-코드" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("일반적인 오류 코드", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt를-여러-인스턴스로-실행하는-방법은-무엇인가요" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("Zigbee2MQTT를 여러 인스턴스로 실행하는 방법은 무엇인가요?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt가-일정-시간-후-충돌합니다" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("Zigbee2MQTT가 일정 시간 후 충돌합니다", -1)])]),
				_: 1
			})])
		])]),
		_cache[96] || (_cache[96] = createStaticVNode("<h2 id=\"모든-zigbee-구현에-적용되는-일반적인-제한-사항\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#모든-zigbee-구현에-적용되는-일반적인-제한-사항\"><span>모든 Zigbee 구현에 적용되는 일반적인 제한 사항</span></a></h2><p>각 Zigbee2MQTT 인스턴스는 단 하나의 전용 Zigbee Coordinator 라디오 adapter 또는 모듈과 단 하나의 Zigbee 네트워크에만 연결할 수 있으며, 해당 Zigbee Coordinator는 다른 애플리케이션에서 이미 사용 중이어서는 안 됩니다. 다른 Zigbee 구현에 연결되었거나 연결된 적이 있는 기기는 Zigbee2MQTT에 페어링/참가하기 전에 반드시 공장 초기화가 필요합니다. 자세한 내용은 각 기기 제조사의 문서를 참고하세요.</p><p>모든 Zigbee 기기는 하나의 Zigbee Coordinator와 하나의 Zigbee 네트워크에만 페어링/참가할 수 있습니다. 즉, Zigbee 기기는 단 하나의 Zigbee gateway에만 연결될 수 있습니다. Zigbee 기기를 다른 Zigbee 네트워크로 이동하려면 해당 기기를 공장 초기화한 후 다른 Zigbee gateway에 다시 페어링/참가해야 합니다. 이는 <a href=\"https://csa-iot.org/all-solutions/zigbee/\" target=\"_blank\" rel=\"noopener noreferrer\">CSA (Connectivity Standards Alliance)</a>가 관장하는 현재(및 이전) Zigbee 프로토콜 사양의 제한 사항이며, Zigbee2MQTT만의 제한이 아닌 모든 Zigbee 구현에 동일하게 적용됩니다.</p><p>모든 Zigbee 구현에 적용되는 또 다른 제한 사항은 Zigbee 프로토콜 사양에 &quot;IP를 통한 Zigbee&quot; 또는 &quot;LAN/WAN을 통한 Zigbee&quot;가 존재하지 않는다는 점입니다. 따라서 Zigbee 네트워크 mesh 내에서 Zigbee 무선 신호로 직접 도달할 수 없는 두 개의 별도 위치나 사이트에 동일한 Zigbee 네트워크를 확장하는 것은 불가능합니다. 즉, 이더넷이나 VPN과 같은 다른 매체를 통해 단일 Zigbee 네트워크 통신을 변환·브리지하는 &quot;Zigbee network adapter&quot; 또는 유사한 솔루션을 사용하는 것은 방법이 없습니다. 따라서 일부 제품의 마케팅 자료에서 &quot;Zigbee Router&quot; 모드로 원격 사이트에 Zigbee 네트워크를 확장할 수 있다고 홍보하더라도, 실제로 그런 기능을 제공하는 네트워크 연결 원격 Zigbee adapter는 존재하지 않습니다. 실제로 이러한 &quot;Zigbee network adapter&quot; 제품의 &quot;Zigbee Router&quot; 기능은 Zigbee 라디오 칩을 독립 실행 모드로 전환하여 이더넷 네트워크 부분과 분리된 일반 Zigbee Router 기기처럼 동작하게 할 뿐입니다.</p><p>&quot;Install Code&quot; 또는 &quot;QR Code&quot;를 통한 Zigbee 3.0 기기의 커미셔닝 지원은 현재 Zigbee2MQTT에서 <code>zstack</code>(Texas Instruments ZNP), <code>ember</code>(Silicon Labs EmberZNet), <code>deconz</code>(Dresden Elektronik deCONZ, 최신 coordinator 펌웨어 필요) adapter 타입의 라디오에만 구현되어 있습니다. 다른 라디오 adapter 타입은 <a href=\"https://github.com/Koenkk/zigbee-herdsman\" target=\"_blank\" rel=\"noopener noreferrer\">zigbee-herdsman</a>의 해당 adapter/드라이버 지원이 부족하거나, 제조사의 펌웨어 명령/API 및 문서에서 지원이 누락되어 있기 때문입니다.</p><p>Zigbee2MQTT는 현재 ZSE(&quot;Zigbee Smart Energy&quot;) 프로파일만 사용하는 기기를 지원하지 않습니다. 이는 &quot;Zigbee SE&quot; 사양이 더 일반적인 Zigbee Home Automation + Zigbee 조명을 포함하는 표준 Zigbee 3.0 사양에 포함되지 않기 때문이며, 통상적으로 Zigbee Coordinator 라디오 adapter와 모듈에서 사용할 수 있는 대부분의 Zigbee Coordinator 펌웨어에도 구현되어 있지 않습니다. 대개 제조사가 Zigbee Smart Energy용 별도의 Zigbee 프로토콜 스택 SDK를 제공하기 때문입니다.</p><h2 id=\"네트워크가-불안정하거나-성능이-저하되면-어떻게-해야-하나요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#네트워크가-불안정하거나-성능이-저하되면-어떻게-해야-하나요\"><span>네트워크가 불안정하거나 성능이 저하되면 어떻게 해야 하나요?</span></a></h2>", 7)),
		createBaseVNode("ul", null, [_cache[20] || (_cache[20] = createBaseVNode("li", null, "연결이 불량하거나 불안정한 Zigbee 기기를 재시작해 보세요. coordinator를 다른 위치로 이동한 경우 라우팅 경로가 유실될 수 있습니다.", -1)), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html" }, {
			default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("네트워크 범위 및 안정성 향상하기", -1)])]),
			_: 1
		}), _cache[19] || (_cache[19] = createTextVNode("를 참고하세요.", -1))])]),
		_cache[97] || (_cache[97] = createBaseVNode("h2", {
			id: "기기가-페어링되지-않거나-페어링에-실패하는-이유는-무엇인가요",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#기기가-페어링되지-않거나-페어링에-실패하는-이유는-무엇인가요"
		}, [createBaseVNode("span", null, "기기가 페어링되지 않거나 페어링에 실패하는 이유는 무엇인가요?")])], -1)),
		_cache[98] || (_cache[98] = createBaseVNode("p", null, "이 문제는 두 가지 경우로 나눌 수 있습니다: 로그가 전혀 표시되지 않는 경우 또는 인터뷰가 실패하는 경우입니다.", -1)),
		_cache[99] || (_cache[99] = createBaseVNode("h3", {
			id: "로그가-전혀-표시되지-않는-경우",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#로그가-전혀-표시되지-않는-경우"
		}, [createBaseVNode("span", null, "로그가 전혀 표시되지 않는 경우")])], -1)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/pairing_devices.html" }, {
				default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("참가(joining)가 활성화되어 있는지", -1)])]),
				_: 1
			}), _cache[22] || (_cache[22] = createTextVNode(" 확인하세요.", -1))]),
			_cache[26] || (_cache[26] = createBaseVNode("li", null, "간섭이 너무 많을 수 있습니다. coordinator USB를 USB 연장 케이블로 연결해 보세요. 이 문제는 Raspberry Pi 3, 4와 함께 사용할 때 자주 발생합니다.", -1)),
			createBaseVNode("li", null, [
				_cache[24] || (_cache[24] = createTextVNode("Texas Instruments CC2652 또는 CC1352 기반 adapter를 사용 중인 경우, coordinator 메모리에서 router가 누락되었을 수 있습니다. ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-coordinator-check" }, {
					default: withCtx(() => [..._cache[23] || (_cache[23] = [createTextVNode("coordinator 점검", -1)])]),
					_: 1
				}),
				_cache[25] || (_cache[25] = createTextVNode("을 실행하고 누락된 router를 다시 페어링하세요.", -1))
			]),
			_cache[27] || (_cache[27] = createBaseVNode("li", null, "Raspberry Pi를 사용 중이라면 다른 USB 기기를 모두 분리해 보세요. 그 후 페어링이 작동하면, 해당 USB 기기를 전원이 공급되는 USB 허브를 통해 연결해 보세요.", -1)),
			_cache[28] || (_cache[28] = createBaseVNode("li", null, "다른 Zigbee 네트워크/허브의 전원이 꺼져 있는지 확인하세요. 예를 들어 IKEA gateway에 먼저 페어링된 IKEA 전구를 페어링하려는 경우 IKEA gateway의 전원을 끄세요. 그래도 해결되지 않으면 IKEA 허브에 연결된 모든 기기의 전원도 꺼 보세요.", -1)),
			_cache[29] || (_cache[29] = createBaseVNode("li", null, "배터리로 구동되는 기기라면 배터리를 교체해 보세요.", -1)),
			_cache[30] || (_cache[30] = createBaseVNode("li", null, "coordinator의 기기 한도에 도달했을 수 있습니다. 특히 소스 라우팅 펌웨어와 함께 CC2531 또는 CC2530을 사용할 때 자주 발생합니다. coordinator를 다시 플래시하고 Zigbee2MQTT 시작 직후 기기를 페어링해 보세요.", -1)),
			_cache[31] || (_cache[31] = createBaseVNode("li", null, "coordinator에 더 가까운 위치에서 기기를 페어링해 보세요.", -1)),
			_cache[32] || (_cache[32] = createBaseVNode("li", null, [createTextVNode("CC2531/CC2530 coordinator 전용: "), createBaseVNode("ul", null, [createBaseVNode("li", null, "Zigbee2MQTT를 중지하고, coordinator를 분리한 후 10초 대기, coordinator를 다시 연결하고, Zigbee2MQTT를 시작한 뒤 다시 페어링을 시도하세요."), createBaseVNode("li", null, "위의 방법으로 해결되지 않으면 coordinator를 다시 플래시해 보세요(이미 페어링된 기기는 다시 페어링할 필요가 없습니다).")])], -1))
		]),
		_cache[100] || (_cache[100] = createBaseVNode("h3", {
			id: "인터뷰-실패",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#인터뷰-실패"
		}, [createBaseVNode("span", null, "인터뷰 실패")])], -1)),
		createBaseVNode("ul", null, [
			_cache[41] || (_cache[41] = createBaseVNode("li", null, "coordinator에 더 가까운 위치에서 기기를 페어링해 보세요.", -1)),
			_cache[42] || (_cache[42] = createBaseVNode("li", null, "간섭이 너무 많을 수 있습니다. coordinator USB를 USB 연장 케이블로 연결해 보세요. 이 문제는 Raspberry Pi 4와 함께 사용할 때 자주 발생합니다.", -1)),
			_cache[43] || (_cache[43] = createBaseVNode("li", null, "배터리로 구동되는 기기라면 배터리를 교체해 보세요. 기기에 버튼이 있다면 3초마다 버튼을 눌러 기기가 깨어있는 상태를 유지해 보세요.", -1)),
			_cache[44] || (_cache[44] = createBaseVNode("li", null, "기기를 2~3회 다시 페어링해 보세요.", -1)),
			createBaseVNode("li", null, [
				_cache[34] || (_cache[34] = createTextVNode("Zigbee2MQTT의 버그일 수 있습니다. 디버그 로그를 첨부하여 ", -1)),
				_cache[35] || (_cache[35] = createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/new",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "새 이슈를 생성", -1)),
				_cache[36] || (_cache[36] = createTextVNode("해 주세요. ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/logging.html#debugging" }, {
					default: withCtx(() => [..._cache[33] || (_cache[33] = [createTextVNode("디버그 로깅 활성화 방법", -1)])]),
					_: 1
				}),
				_cache[37] || (_cache[37] = createTextVNode(".", -1))
			]),
			_cache[45] || (_cache[45] = createBaseVNode("li", null, [
				createTextVNode("기기가 "),
				createBaseVNode("code", null, "ieeeAddress"),
				createTextVNode("가 "),
				createBaseVNode("code", null, "0x000000000000000"),
				createTextVNode("인 상태로 참가하는 경우(Zigbee2MQTT 로그에 "),
				createBaseVNode("code", null, "Starting interview of '0x0000000000000000'"),
				createTextVNode("이 표시됨) CC253X가 고장났을 수 있습니다. "),
				createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/2761",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "이슈 #2761 참고"),
				createTextVNode(".")
			], -1)),
			createBaseVNode("li", null, [
				_cache[39] || (_cache[39] = createTextVNode("기기가 전구인 경우 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
					default: withCtx(() => [..._cache[38] || (_cache[38] = [createTextVNode("Touchlink", -1)])]),
					_: 1
				}),
				_cache[40] || (_cache[40] = createTextVNode("를 통해 초기화를 시도해 보세요.", -1))
			]),
			_cache[46] || (_cache[46] = createBaseVNode("li", null, "coordinator가 아닌 전구(조명) router 가까이에서 페어링해 보세요.", -1))
		]),
		_cache[101] || (_cache[101] = createStaticVNode("<h2 id=\"다른-adapter로-마이그레이션하는-방법은-무엇인가요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#다른-adapter로-마이그레이션하는-방법은-무엇인가요\"><span>다른 adapter로 마이그레이션하는 방법은 무엇인가요?</span></a></h2><p>예를 들어 CC2530/CC2531에서 더 강력한 adapter(예: CC2652/CC1352)로 마이그레이션하려는 경우 아래 안내를 따르세요:</p><div class=\"hint-container warning\"><p class=\"hint-container-title\">경고</p><p>한 adapter에서 다른 adapter로의 마이그레이션은 백업 및 복원 지원이 필요하며, 현재 <code>zstack</code>(Texas Instrument)과 <code>ember</code> adapter에서만 구현되어 있습니다. 다른 adapter(<code>conbee</code>, <code>ezsp</code>, <code>zboss</code>, <code>zigate</code>)는 백업 및 복원이 <strong>지원되지 않습니다</strong>. 다만 <a href=\"https://github.com/Koenkk/zigbee2mqtt/discussions/26716\" target=\"_blank\" rel=\"noopener noreferrer\">이 방법</a>으로 성공할 수도 있습니다.</p><p><code>zstack</code> -&gt; <code>ember</code> 또는 <code>ember</code> -&gt; <code>zstack</code>으로 전환할 때 다시 페어링이 <strong>필요하지 않을 수도</strong> 있지만, 공식적으로 지원되지 않으므로 결과는 다를 수 있습니다. 전환 후 모든 기기가 정상 동작하는지 확인하고, 동작하지 않는 기기는 다시 페어링하세요. 새 기기 페어링이 작동하지 않는 경우, coordinator를 통해서만 참가를 허용하면서 coordinator 근처의 router 일부를 다시 페어링하세요. 그 후 다시 페어링된 router를 통해 페어링이 작동해야 합니다.</p></div>", 3)),
		createBaseVNode("ol", null, [
			_cache[56] || (_cache[56] = createBaseVNode("li", null, "최신 버전의 Zigbee2MQTT를 실행 중인지 확인하세요.", -1)),
			_cache[57] || (_cache[57] = createBaseVNode("li", null, "Zigbee2MQTT를 중지하세요.", -1)),
			createBaseVNode("li", null, [
				_cache[53] || (_cache[53] = createTextVNode("마이그레이션 시 ", -1)),
				_cache[54] || (_cache[54] = createBaseVNode("a", { href: "#what-does-and-does-not-require-re-pairing-of-all-devices" }, "기기를 다시 페어링해야 하는지 여부를 확인하세요", -1)),
				_cache[55] || (_cache[55] = createTextVNode(". ", -1)),
				createBaseVNode("ul", null, [_cache[52] || (_cache[52] = createBaseVNode("li", null, [
					createTextVNode("다시 페어링이 필요한 경우: "),
					createBaseVNode("code", null, "data/coordinator_backup.json"),
					createTextVNode("(있는 경우)과 "),
					createBaseVNode("code", null, "data/database.db"),
					createTextVNode("를 삭제하세요(Home Assistant 애드온으로 실행 중인 경우 "),
					createBaseVNode("code", null, "data/"),
					createTextVNode("는 "),
					createBaseVNode("code", null, "zigbee2mqtt/"),
					createTextVNode("로 이름이 변경되어 있습니다).")
				], -1)), createBaseVNode("li", null, [
					_cache[48] || (_cache[48] = createTextVNode("다시 페어링이 ", -1)),
					_cache[49] || (_cache[49] = createBaseVNode("strong", null, "필요하지 않은", -1)),
					_cache[50] || (_cache[50] = createTextVNode(" 경우: ", -1)),
					createVNode(_component_RouteLink, { to: "/guide/adapters/flashing/copy_ieeaddr.html" }, {
						default: withCtx(() => [..._cache[47] || (_cache[47] = [createTextVNode("이전 adapter의 ieee 주소를 새 adapter에 복사하세요", -1)])]),
						_: 1
					}),
					_cache[51] || (_cache[51] = createTextVNode(".", -1))
				])])
			]),
			_cache[58] || (_cache[58] = createBaseVNode("li", null, [
				createBaseVNode("code", null, "configuration.yaml"),
				createTextVNode("에서 "),
				createBaseVNode("code", null, "serial"),
				createTextVNode(" -> "),
				createBaseVNode("code", null, "port"),
				createTextVNode("를 업데이트하세요. "),
				createBaseVNode("ul", null, [createBaseVNode("li", null, [
					createTextVNode("이전 adapter에서 마이그레이션하는 경우(예: zbt-1 -> zbt2) "),
					createBaseVNode("code", null, "baud"),
					createTextVNode("도 업데이트해야 할 수 있습니다.")
				])])
			], -1)),
			_cache[59] || (_cache[59] = createBaseVNode("li", null, "Zigbee2MQTT를 시작하세요.", -1))
		]),
		_cache[102] || (_cache[102] = createStaticVNode("<ul><li>다시 페어링이 필요한 경우: <ol><li>전원이 공급되는 모든 기기의 전원을 차단하세요.</li><li>기기를 하나씩 다시 페어링하세요.</li></ol></li><li>다시 페어링이 <strong>필요하지 않은</strong> 경우에도 기기가 응답하지 않으면, 전원에서 몇 초간 분리했다가 다시 연결하여 일부 router를 재시작하세요.</li></ul><h2 id=\"zigbee2mqtt-인스턴스를-다른-환경으로-이동하는-방법은-무엇인가요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee2mqtt-인스턴스를-다른-환경으로-이동하는-방법은-무엇인가요\"><span>Zigbee2MQTT 인스턴스를 다른 환경으로 이동하는 방법은 무엇인가요?</span></a></h2><p>네트워크 정보는 coordinator와 <code>data/</code> 디렉토리 아래의 파일에 모두 저장됩니다(Home Assistant 애드온으로 실행 중인 경우 <code>data/</code>는 <code>zigbee2mqtt/</code>로 이름이 변경되어 있습니다). 인스턴스를 다른 환경으로 이동하려면 <code>data</code> 디렉토리의 내용을 복사하고 <code>configuration.yaml</code>에서 coordinator 경로를 업데이트하세요. 그런 다음 Zigbee2MQTT를 시작할 수 있습니다.</p><h2 id=\"모든-기기를-다시-페어링해야-하는-경우와-그렇지-않은-경우\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#모든-기기를-다시-페어링해야-하는-경우와-그렇지-않은-경우\"><span>모든 기기를 다시 페어링해야 하는 경우와 그렇지 않은 경우</span></a></h2><h3 id=\"다시-페어링이-필요한-경우\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#다시-페어링이-필요한-경우\"><span>다시 페어링이 필요한 경우</span></a></h3><p>다음과 같은 경우 모든 기기를 다시 페어링해야 합니다:</p>", 6)),
		createBaseVNode("ul", null, [
			_cache[68] || (_cache[68] = createBaseVNode("li", null, [
				createBaseVNode("code", null, "configuration.yaml"),
				createTextVNode("에서 network key("),
				createBaseVNode("code", null, "network_key"),
				createTextVNode(") 또는 panID("),
				createBaseVNode("code", null, "pan_id"),
				createTextVNode(")를 변경하는 경우.")
			], -1)),
			createBaseVNode("li", null, [
				_cache[61] || (_cache[61] = createBaseVNode("code", null, "configuration.yaml", -1)),
				_cache[62] || (_cache[62] = createTextVNode("에서 Zigbee channel(", -1)),
				_cache[63] || (_cache[63] = createBaseVNode("code", null, "channel", -1)),
				_cache[64] || (_cache[64] = createTextVNode(")을 변경하면 ", -1)),
				_cache[65] || (_cache[65] = createBaseVNode("strong", null, "일부", -1)),
				_cache[66] || (_cache[66] = createTextVNode(" 기기의 다시 페어링이 필요할 수 있습니다. 자세한 내용은 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#changing-the-zigbee-channel" }, {
					default: withCtx(() => [..._cache[60] || (_cache[60] = [createTextVNode("문서", -1)])]),
					_: 1
				}),
				_cache[67] || (_cache[67] = createTextVNode("를 참고하세요.", -1))
			]),
			_cache[69] || (_cache[69] = createStaticVNode("<li>adapter 전환 시 다시 페어링이 필요합니다. <strong>다음 경우는 예외</strong>입니다: <ul><li><code>configuration.yaml</code>의 <code>serial.adapter</code>가 <code>zstack</code> 또는 <code>ember</code>이고 <code>serial.adapter</code> 타입이 동일하게 유지되는 경우(예: <code>zstack</code> -&gt; <code>zstack</code>은 다시 페어링이 <strong>필요하지 않습니다</strong>). <ul><li>예외적으로, CC2531 또는 CC2530(Z-Stack 1.2)에서 CC2652/CC1352(Z-Stack 3)로 전환하는 경우 다시 페어링이 <strong>필요합니다</strong>.</li></ul></li><li><code>zstack</code> -&gt; <code>ember</code> 또는 <code>ember</code> -&gt; <code>zstack</code>으로 전환할 때 다시 페어링이 <strong>필요하지 않을 수도</strong> 있지만, 공식적으로 지원되지 않으므로 결과는 다를 수 있습니다. <ul><li>전환 후 모든 기기가 정상 동작하는지 확인하고, 동작하지 않는 기기는 다시 페어링하세요. 새 기기 페어링이 작동하지 않는 경우, coordinator를 통해서만 참가를 허용하면서 coordinator 근처의 router 일부를 다시 페어링하세요. 그 후 다시 페어링된 router를 통해 페어링이 작동해야 합니다.</li></ul></li></ul></li>", 1))
		]),
		_cache[103] || (_cache[103] = createStaticVNode("<h3 id=\"다시-페어링이-필요하지-않은-경우\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#다시-페어링이-필요하지-않은-경우\"><span>다시 페어링이 필요하지 않은 경우</span></a></h3><p>다음과 같은 경우 기기를 다시 페어링할 <strong>필요가 없습니다</strong>:</p><ul><li>Zigbee2MQTT를 다른 버전으로 업데이트하거나 다운그레이드하는 경우.</li><li>coordinator 펌웨어를 업데이트하는 경우. <ul><li>플래싱 후 기기를 제어할 수 없는 경우 다음을 시도해 보세요: <ul><li>Zigbee 네트워크가 안정화될 수 있도록 몇 분 기다리세요.</li><li>기기에 Zigbee 명령(예: 켜기/끄기)을 보내세요.</li><li>기기를 재부팅하세요(전원을 뽑았다가 다시 꽂으세요).</li></ul></li></ul></li><li>Zigbee2MQTT를 실행하는 시스템을 교체하는 경우. <ul><li>이 경우 <code>data</code> 디렉토리의 내용을 반드시 복사해야 합니다.</li></ul></li></ul><h2 id=\"네트워크-맵에서-일부-링크가-누락되는-이유는-무엇인가요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#네트워크-맵에서-일부-링크가-누락되는-이유는-무엇인가요\"><span>네트워크 맵에서 일부 링크가 누락되는 이유는 무엇인가요?</span></a></h2><p>걱정하지 마세요. end device(배터리 구동)에서 이런 현상이 발생하는 경우 대부분은 해당 기기가 네트워크 맵에서 더 이상 연결되지 않는다는 의미가 <strong>아닙니다</strong>. 일부 end device(예: Xiaomi 도어 센서)는 너무 오랫동안 절전 모드로 진입하여, 부모(router)가 child ageing으로 인해 child 테이블에서 해당 기기를 제거하는 경우가 있습니다. 이것이 링크가 누락되는 원인입니다. child 테이블에 없더라도 end device는 router를 통해 통신할 수 있습니다. 모든 router가 child ageing을 사용하는 것은 아니기 때문에(Zigbee 3.0 기능) 항상 이런 현상이 발생하는 것은 아닙니다.</p><h2 id=\"rssi-및-lqi-값은-어떻게-해석하나요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rssi-및-lqi-값은-어떻게-해석하나요\"><span>RSSI 및 LQI 값은 어떻게 해석하나요?</span></a></h2><p>네트워크 맵은 페어링된 기기 간의 멀티홉 연결과 수신 신호 강도 지표(RSSI, Received Signal Strength Indicator) 및 링크 품질 지표(LQI, Link Quality Indication)의 누적 보고 값을 표시합니다. 이 값들이 보고되는 방식은 각 기기에서 사용하는 Zigbee 네트워크 스택에 따라 다릅니다. LQI 값은 메시지가 mesh 네트워킹 매트릭스를 통해 전파될 때 각 단계에서 수정될 수 있습니다.</p><p>RSSI 및 LQI 값 해석은 복잡합니다. Zigbee 전문가가 아니거나 전문가의 안내를 받지 않는 한 이 값들은 무시하는 것을 권장합니다. 오해를 불러일으킬 수 있습니다. 이 값들을 분석할 때 RSSI나 LQI를 단독으로 판단하지 않는 것이 중요합니다. Zigbee 메시지가 누락되는 문제를 해결할 때는 RSSI와 LQI의 조합을 함께 해석해야 합니다.</p><p>RSSI(수신 신호 강도 지표) 값은 두 기기 사이의 원시 신호 강도를 나타내는 지표입니다. RSSI 값은 -dBm 형식의 음수(1밀리와트 기준 측정 전력의 0~-100 데시벨 전력 비율)입니다. 낮은 음수 값일수록 간섭이 적고 신호가 좋다는 것을 의미합니다. RSSI 정보는 endpoint 기기와 해당 기기의 첫 번째 홉 사이에서만 측정됩니다. 따라서 Zigbee Coordinator까지의 신호 강도가 아닌 가장 가까운 Zigbee Router 기기까지의 신호 강도를 나타낼 수 있습니다.</p><ul><li>일반적으로 RSSI가 -60 이상(-50, -40 등)이면 강한 신호(메시지 손실 없음)로 간주합니다.</li><li>RSSI가 -80 이하(-85, -90 등)이면 잡음이 많은 환경으로 간주하며 메시지 손실이 발생할 수 있습니다.</li></ul><p>LQI(링크 품질 지수) 값은 Zigbee에서 해석하기 어려울 수 있습니다. Zigbee 사양과 IEEE 802.15.4 사양이 LQI 측정 방법을 표준화하지 않기 때문입니다. LQI 값은 양수 척도로 표시됩니다. 그러나 Zigbee 기기가 제공하는 값이 모든 기기 제조사와 Zigbee 스택에서 통일된 표준으로 측정되지 않기 때문에 항상 신뢰할 수는 없습니다. 예를 들어 Silicon Labs EmberZNet 스택 기반 Zigbee 기기는 LQI에 양수 표시 값을 사용하며 높을수록 좋고 낮을수록 나쁩니다. Texas Instruments Z-Stack은 수신한 각 패킷의 LQI를 원시 &quot;수신 신호 강도 지수&quot;(RSSI)로부터 라디오의 최소/최대 RF 전력 수준 사이를 선형 스케일링하여 계산하며, 이는 수신 신호 강도에 기반한 LQI 값을 제공합니다. 이는 동일한 주파수 범위 내에 간섭이 있는 잡음 환경(실제 링크 품질이 저하되더라도 RSSI 값이 높게 표시될 수 있음)에서 오해를 불러일으킬 수 있습니다. 다른 제조사와 Zigbee 스택은 또 다른 방식으로 LQI 값을 측정하고 계산합니다.</p><ul><li>이론적으로 LQI 값이 255이면 오류율이 0임을 의미하며, 완벽한 링크 품질을 나타냅니다.</li><li>일반적으로 LQI 값이 높을수록 좋고 낮을수록 나쁩니다. 다만 기기에 따라 현실은 다를 수 있습니다.</li><li>일반적으로 기기의 LQI 값이 40 이상을 유지하면 정상적인 운영 조건에서 해당 링크가 허용 가능한 수준이라고 볼 수 있습니다.</li></ul><h2 id=\"action-속성이-항상-비어-있는-이유는-무엇인가요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-속성이-항상-비어-있는-이유는-무엇인가요\"><span><code>action</code> 속성이 항상 비어 있는 이유는 무엇인가요?</span></a></h2><p>Home Assistant 레거시 action 센서가 활성화된 경우(<code>configuration.yaml</code>에서 <code>homeassistant.legacy_action_sensor: true</code>) 버튼 등의 <code>action</code> 속성은 거의 항상 비어 있습니다. <code>{&quot;action&quot;: &quot;single&quot;}</code>과 같이 <code>action</code>이 게시되면 즉시 <code>{&quot;action&quot;: &quot;&quot;}</code>이 뒤따릅니다. 이는 Home Assistant action 센서에서 상태 변화를 트리거하기 위한 것입니다(예: 자동화에서 사용할 수 있도록).</p><h2 id=\"zigbee2mqtt는-기기를-20개까지만-지원한다고-하던데-cc2530-cc2531-adapter-사용-시-맞나요\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee2mqtt는-기기를-20개까지만-지원한다고-하던데-cc2530-cc2531-adapter-사용-시-맞나요\"><span>Zigbee2MQTT는 기기를 20개까지만 지원한다고 하던데(CC2530/CC2531 adapter 사용 시), 맞나요?</span></a></h2>", 15)),
		createBaseVNode("p", null, [
			_cache[71] || (_cache[71] = createTextVNode("전혀 그렇지 않습니다! 예를 들어, 기본 Zigbee2MQTT CC2531 펌웨어는 coordinator에 ", -1)),
			_cache[72] || (_cache[72] = createBaseVNode("strong", null, "직접", -1)),
			_cache[73] || (_cache[73] = createTextVNode(" 연결된 20개의 기기를 지원합니다. 그러나 네트워크에 router가 있으면 네트워크 크기를 확장할 수 있습니다. AC 전원으로 구동되는 기기(예: 전구)는 거의 모두 router 역할을 하며, 다른 ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/05_create_a_cc2530_router.html" }, {
				default: withCtx(() => [..._cache[70] || (_cache[70] = [createTextVNode("CC2530/CC2531을 router로", -1)])]),
				_: 1
			}),
			_cache[74] || (_cache[74] = createTextVNode(" 사용할 수도 있습니다(최대 21개 기기 지원).", -1))
		]),
		_cache[104] || (_cache[104] = createStaticVNode("<h3 id=\"예시\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#예시\"><span>예시</span></a></h3><p>기본 Zigbee2MQTT CC2531 coordinator 펌웨어 + CC2531 router 2개를 사용하는 경우 기기 한도는 다음과 같습니다:</p><ul><li>Coordinator: 15 - 2개 router = 13</li><li>Router 1: 21</li><li>Router 2: 21</li><li><strong>기기 한도: 55개</strong></li></ul><h2 id=\"일반적인-오류-코드\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#일반적인-오류-코드\"><span>일반적인 오류 코드</span></a></h2><p>일반적인 오류 코드 목록과 해결 방법:</p>", 5)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[76] || (_cache[76] = createBaseVNode("code", null, "MAC_CHANNEL_ACCESS_FAILURE", -1)),
			_cache[77] || (_cache[77] = createTextVNode(": 무선 주파수 대역이 너무 혼잡할 때 발생합니다. 주로 전자레인지가 켜져 있거나 동일한 채널에 WiFi 네트워크가 있을 때 발생합니다. 해결 방법은 ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wifi-interference-by-changing-the-zigbee-channel" }, {
				default: withCtx(() => [..._cache[75] || (_cache[75] = [createTextVNode("Zigbee 채널 변경으로 WiFi 간섭 줄이기", -1)])]),
				_: 1
			}),
			_cache[78] || (_cache[78] = createTextVNode("를 참고하세요.", -1))
		]), _cache[79] || (_cache[79] = createBaseVNode("li", null, [
			createBaseVNode("code", null, "NWK_TABLE_FULL"),
			createTextVNode(": 위의 "),
			createBaseVNode("code", null, "MAC_CHANNEL_ACCESS_FAILURE"),
			createTextVNode("와 동일한 원인으로 "),
			createBaseVNode("a", {
				href: "https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "보고된"),
			createTextVNode(" 오류입니다.")
		], -1))]),
		_cache[105] || (_cache[105] = createBaseVNode("h2", {
			id: "zigbee2mqtt를-여러-인스턴스로-실행하는-방법은-무엇인가요",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee2mqtt를-여러-인스턴스로-실행하는-방법은-무엇인가요"
		}, [createBaseVNode("span", null, "Zigbee2MQTT를 여러 인스턴스로 실행하는 방법은 무엇인가요?")])], -1)),
		createBaseVNode("p", null, [
			_cache[81] || (_cache[81] = createTextVNode("여러 Zigbee2MQTT 인스턴스를 설정하는 경우 서로 다른 ", -1)),
			_cache[82] || (_cache[82] = createBaseVNode("code", null, "base_topic", -1)),
			_cache[83] || (_cache[83] = createTextVNode("과 ", -1)),
			_cache[84] || (_cache[84] = createBaseVNode("code", null, "channel", -1)),
			_cache[85] || (_cache[85] = createTextVNode("을 사용하는 것이 중요합니다. ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/" }, {
				default: withCtx(() => [..._cache[80] || (_cache[80] = [createBaseVNode("code", null, "configuration.yaml", -1)])]),
				_: 1
			}),
			_cache[86] || (_cache[86] = createTextVNode("에서 설정할 수 있습니다.", -1))
		]),
		_cache[106] || (_cache[106] = createBaseVNode("h2", {
			id: "zigbee2mqtt가-일정-시간-후-충돌합니다",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee2mqtt가-일정-시간-후-충돌합니다"
		}, [createBaseVNode("span", null, "Zigbee2MQTT가 일정 시간 후 충돌합니다")])], -1)),
		_cache[107] || (_cache[107] = createBaseVNode("p", null, [
			createTextVNode("Zigbee2MQTT가 일정 시간 실행 후 "),
			createBaseVNode("code", null, "SRSP - AF - dataRequest after 6000ms"),
			createTextVNode(" 또는 "),
			createBaseVNode("code", null, "SRSP - ZDO - mgmtPermitJoinReq after 6000ms"),
			createTextVNode("와 같은 오류로 충돌하면 adapter가 충돌한 것입니다.")
		], -1)),
		createBaseVNode("ul", null, [
			_cache[93] || (_cache[93] = createBaseVNode("li", null, [createBaseVNode("p", null, "일반적으로 adapter를 다시 연결하고 Zigbee2MQTT를 재시작하면 해결됩니다.")], -1)),
			createBaseVNode("li", null, [createBaseVNode("p", null, [
				_cache[88] || (_cache[88] = createTextVNode("CC2530 또는 CC2531 adapter를 사용 중이라면 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[87] || (_cache[87] = [createTextVNode("권장 adapter", -1)])]),
					_: 1
				}),
				_cache[89] || (_cache[89] = createTextVNode("로 업그레이드를 고려하세요. CC2530/CC2531은 레거시 하드웨어로 메모리 손상이 쉽게 발생합니다.", -1))
			])]),
			createBaseVNode("li", null, [createBaseVNode("p", null, [
				_cache[91] || (_cache[91] = createTextVNode("adapter에 최신 펌웨어를 사용하고 있는지 확인하세요. 최신 펌웨어 링크는 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[90] || (_cache[90] = [createTextVNode("adapter 페이지", -1)])]),
					_: 1
				}),
				_cache[92] || (_cache[92] = createTextVNode("를 참고하세요.", -1))
			])]),
			_cache[94] || (_cache[94] = createStaticVNode("<li><p>Raspberry Pi를 사용 중인 경우, 불량 전원 공급 장치를 사용하거나 다른 USB 기기를 Pi에 직접 연결할 때(특히 외장 SSD) 이 문제가 발생할 수 있습니다. 다른 USB 기기를 전원이 공급되는 USB 허브를 통해 연결해 보세요.</p></li><li><p>USB autosuspend 기능을 비활성화하세요. <code>cat /sys/module/usbcore/parameters/autosuspend</code> 명령이 <code>1</code> 또는 <code>2</code>를 반환하면 활성화된 것입니다. 비활성화하려면 다음을 실행하세요:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">sed</span> <span class=\"token parameter variable\">-i</span> <span class=\"token string\">&#39;s/GRUB_CMDLINE_LINUX_DEFAULT=&quot;/&amp;usbcore.autosuspend=-1 /&#39;</span> /etc/default/grub</span>\n<span class=\"line\"><span class=\"token function\">update-grub</span></span>\n<span class=\"line\">systemctl <span class=\"token function\">reboot</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><ul><li>Raspberry Pi의 경우 <code>/boot/cmdline.txt</code>를 편집하여 줄 끝에 <code>usbcore.autosuspend=-1</code>을 추가해야 합니다.</li></ul></li>", 2))
		])
	]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, README_default as default };
