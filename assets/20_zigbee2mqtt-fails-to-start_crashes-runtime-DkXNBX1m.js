import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
import "./good-vs-bad-usb-cable-CGUdB8ZQ.js";
//#region docs/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.html\",\"title\":\"Zigbee2MQTT 시작 실패/런타임 충돌\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":0,\"redirectFrom\":[\"/guide/installation/20_zigbee2mqtt-fails-to-start.md\",\"/information/zigbee2mqtt_fails_to_start.md\"]},\"git\":{\"updatedTime\":1780909774000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":19},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"Ernst\",\"username\":\"Ernst\",\"email\":\"ernst.kloppenburg@gmx.de\",\"commits\":1,\"url\":\"https://github.com/Ernst\"},{\"name\":\"Michal Dziekonski\",\"username\":\"\",\"email\":\"glibnes@gmail.com\",\"commits\":1},{\"name\":\"Christoph Neumann\",\"username\":\"\",\"email\":\"programmdesign@users.noreply.github.com\",\"commits\":2},{\"name\":\"nixilb\",\"username\":\"nixilb\",\"email\":\"64604304+nixilb@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/nixilb\"},{\"name\":\"Tarik2142\",\"username\":\"Tarik2142\",\"email\":\"31830530+Tarik2142@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Tarik2142\"},{\"name\":\"sergge1\",\"username\":\"sergge1\",\"email\":\"49363121+sergge1@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/sergge1\"},{\"name\":\"Daniel\",\"username\":\"Daniel\",\"email\":\"toyeca@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Daniel\"},{\"name\":\"Kosygor\",\"username\":\"Kosygor\",\"email\":\"61921662+Kosygor@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Kosygor\"},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":4,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Bart Kummel\",\"username\":\"\",\"email\":\"bart@kummelweb.nl\",\"commits\":1},{\"name\":\"Ricc68\",\"username\":\"Ricc68\",\"email\":\"ricc68@local\",\"commits\":6,\"url\":\"https://github.com/Ricc68\"},{\"name\":\"Rotzbua\",\"username\":\"Rotzbua\",\"email\":\"Rotzbua@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Rotzbua\"},{\"name\":\"Andrei LAZAROV\",\"username\":\"\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":1},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"50852dbc0efd5c50a3c8c0fc16b0ef674583d968\",\"time\":1780909774000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 문서 한국어 번역 (navbar, sidebar, guide, advanced)\"},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"4ceee008a4420fe71bd3bddefc30a9485e7614d1\",\"time\":1766088934000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add more Tuya custom firmware (#4568)\"},{\"hash\":\"44e2db8c06a4d0f16815deb0e3cc922aeaa4e3a8\",\"time\":1765307824000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: add docs for couple of well-known issues (#4538)\",\"coAuthors\":[{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"}]},{\"hash\":\"bb828540982fbbe22de285c472d48eef0dc97d5b\",\"time\":1760647413000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Rename <code>ZigBee</code> -> <code>Zigbee</code> (#4293)\"},{\"hash\":\"45ddd9ee0289537805cb92116ccfbdb1d64b6128\",\"time\":1744660642000,\"email\":\"Rotzbua@users.noreply.github.com\",\"author\":\"Rotzbua\",\"message\":\"fix: typos (#3697)\"},{\"hash\":\"fe717ee1c08a300b41430531c02a1df476b93382\",\"time\":1743966825000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"RPI updates\"},{\"hash\":\"f689936a3ce3939557d27212db4069351cd4a7c0\",\"time\":1738788533000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Note about resources\"},{\"hash\":\"3033f2b068c1f992d61a048eecdd3eced54e1f1d\",\"time\":1737406190000,\"email\":\"164665725+Ricc68@users.noreply.github.com\",\"author\":\"Ricc68\",\"message\":\"Added paragraph on network adapters to troubleshooting guide (#3439)\",\"coAuthors\":[{\"name\":\"Ricc68\",\"email\":\"ricc68@local\"}]},{\"hash\":\"9f2a28d30f7f63831305bea7088aded5a62c1a11\",\"time\":1735390918000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Revert \\\"Error header more generic to cover all stacks, not just ember (#3360)\\\"\\\"\"},{\"hash\":\"6866702666760f9a86b0e7f6eb6e5b86a2a2a0f2\",\"time\":1735390882000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Revert \\\"Updated troubleshooting page (#3353)\\\"\\\"\"},{\"hash\":\"b1a76815a5e1291513de629f5072561598fdf301\",\"time\":1735390758000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Updated troubleshooting page (#3353)\\\"\"},{\"hash\":\"50e91f11c6ba028dd865494525c7d71cbc95c9b9\",\"time\":1735390746000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Error header more generic to cover all stacks, not just ember (#3360)\\\"\"},{\"hash\":\"e4cb8f6f194b5144679858cd645e3f6055088625\",\"time\":1735390606000,\"email\":\"164665725+Ricc68@users.noreply.github.com\",\"author\":\"Ricc68\",\"message\":\"Error header more generic to cover all stacks, not just ember (#3360)\",\"coAuthors\":[{\"name\":\"Ricc68\",\"email\":\"ricc68@local\"}]},{\"hash\":\"fe9e5114068adc66a355d994f4656416d6523b82\",\"time\":1735130729000,\"email\":\"164665725+Ricc68@users.noreply.github.com\",\"author\":\"Ricc68\",\"message\":\"Updated troubleshooting page (#3353)\",\"coAuthors\":[{\"name\":\"Ricc68\",\"email\":\"ricc68@local\"}]},{\"hash\":\"ebd821bba2f1f09db3a3392779d8cdf75cad778c\",\"time\":1734796471000,\"email\":\"bart@kummelweb.nl\",\"author\":\"Bart Kummel\",\"message\":\"Fix for #25220: Add documentation about startup failure after editing network key (#3339)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"b356d28ed648894213faeb8ce13a81f6c7e2ed66\",\"time\":1732373127000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Add configuration update page (#3244)\"},{\"hash\":\"dbc2863d32bcbe8434adba4be79408fe9aabb08d\",\"time\":1732132750000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Add some details on fails to start page (#3233)\"},{\"hash\":\"2bbbe8a478491307a0402e3cd54dcead23eb5db2\",\"time\":1728678291000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update docs for improved adapter discovery (#3061)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"da116bbb9c4ddce2cbb7470af2476dfb669e83c9\",\"time\":1704182635000,\"email\":\"61921662+Kosygor@users.noreply.github.com\",\"author\":\"Kosygor\",\"message\":\"Update 20_zigbee2mqtt-fails-to-start.md (#2440)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"8b322c0f517e3c0628b3cace43871ed50b8a63c8\",\"time\":1690130335000,\"email\":\"toyeca@gmail.com\",\"author\":\"Daniel\",\"message\":\"Added information accidentally removed in #1668 to 20_zigbee2mqtt-fails-to-start documentation.md (#2141)\"},{\"hash\":\"b081c3100deb2ea5f8c3685df9be0a665eb637c4\",\"time\":1683382159000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Improvements for cf2d04cf68dff95ab1f7576881d868323ec95069\"},{\"hash\":\"cf2d04cf68dff95ab1f7576881d868323ec95069\",\"time\":1683381374000,\"email\":\"31830530+Tarik2142@users.noreply.github.com\",\"author\":\"Taras\",\"message\":\"Update adapter-settings, add ZB-OTA info (#2028)\",\"coAuthors\":[{\"name\":\"sergge1\",\"email\":\"49363121+sergge1@users.noreply.github.com\"}]},{\"hash\":\"b6a27a6ed8c1a905bedae6f06cbd7a316aea039e\",\"time\":1678521576000,\"email\":\"programmdesign@users.noreply.github.com\",\"author\":\"Christoph Neumann\",\"message\":\"Added additional reason for \\\"RSP - SYS - ping after 6000ms\\\" error (#1942)\"},{\"hash\":\"06bcd471991613420b10cdd87ec2129e2ce57f2d\",\"time\":1667331157000,\"email\":\"64604304+nixilb@users.noreply.github.com\",\"author\":\"Nicolas Silberzahn\",\"message\":\"Update 20_zigbee2mqtt-fails-to-start.md (#1668)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"5e266ec5e4c102d4620e3acdd890ab5890505586\",\"time\":1656947063000,\"email\":\"programmdesign@users.noreply.github.com\",\"author\":\"Christoph Neumann\",\"message\":\"Update 20_zigbee2mqtt-fails-to-start.md (#1468)\"},{\"hash\":\"a67e062ef1f2d543ef262946ff87a0959eb80d0d\",\"time\":1649691735000,\"email\":\"glibnes@gmail.com\",\"author\":\"Michal Dziekonski\",\"message\":\"Adapters config notes (#1326)\"},{\"hash\":\"f3dcf0fdcb44982ed9feb9024879c6bb7e60c162\",\"time\":1637412006000,\"email\":\"ernst.kloppenburg@gmx.de\",\"author\":\"Ernst\",\"message\":\"language fixes to the advanced zigbee documentation (trivial) (#1026)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.md\"}");
var _sfc_main = { name: "20_zigbee2mqtt-fails-to-start_crashes-runtime.md" };
var _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[64] || (_cache[64] = createBaseVNode("h1", {
			id: "zigbee2mqtt-시작-실패-런타임-충돌",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee2mqtt-시작-실패-런타임-충돌"
		}, [createBaseVNode("span", null, "Zigbee2MQTT 시작 실패/런타임 충돌")])], -1)),
		_cache[65] || (_cache[65] = createBaseVNode("p", null, "대부분의 경우 Zigbee2MQTT가 Zigbee adapter와 통신하지 못해서 발생합니다.", -1)),
		createBaseVNode("nav", _hoisted_1, [createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("오류: USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-zstack의-경우-srsp-sys-ping-after-6000ms-emberznet의-경우-host-fatal-error" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("오류: zStack의 경우 SRSP - SYS - ping after 6000ms, EmberZNet의 경우 HOST_FATAL_ERROR", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-emberznet의-경우-error-exceeded-maximum-ack-timeout-count" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("오류: EmberZNet의 경우 ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#configuration-yaml에-올바른-포트를-입력했는지-확인" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("configuration.yaml에 올바른 포트를 입력했는지 확인", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#texas-instruments-launchxl-cc26x2r1-cc1352p-2에서-어떤-포트를-사용해야-하나요-dev-ttyacm0-아니면-dev-ttyacm1" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2에서 어떤 포트를 사용해야 하나요? /dev/ttyACM0 아니면 /dev/ttyACM1?", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt를-실행하는-사용자에게-포트-쓰기-권한이-있는지-확인" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Zigbee2MQTT를 실행하는 사용자에게 포트 쓰기 권한이 있는지 확인", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#방법-1-재부팅-시마다-사용자에게-권한-부여" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("방법 1: 재부팅 시마다 사용자에게 권한 부여.", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#방법-2-특정-그룹에-사용자-추가" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("방법 2: 특정 그룹에 사용자 추가", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("오류: Coordinator failed to start, probably the panID is already in use, try a different panID or channel", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-resource-temporarily-unavailable-cannot-lock-port" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("오류: Resource temporarily unavailable Cannot lock port", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#raspberry-pi-사용자" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("Raspberry Pi 사용자", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#raspberry-pi-os" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("Raspberry Pi OS", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#좋은-전원-어댑터-사용" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("좋은 전원 어댑터 사용", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#연장-케이블이-올바르게-작동하는지-확인" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("연장 케이블이 올바르게 작동하는지 확인", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#openhab-사용자-zwave-바인딩-비활성화" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("Openhab 사용자: zwave 바인딩 비활성화", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#cc2530-또는-cc2531-adapter의-경우-cc2540이-없는지-확인" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("CC2530 또는 CC2531 adapter의 경우, CC2540이 없는지 확인", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#modemmanager-설치-여부" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("ModemManager 설치 여부", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#컴퓨터에-충분한-리소스가-있는지-확인" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("컴퓨터에 충분한 리소스가 있는지 확인", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#hciuart가-실행-중" }, {
				default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("hciuart가 실행 중", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#texas-instruments-launchxl-cc1352p-2-cc26x2r1만-해당-장치의-리셋-버튼-누르기" }, {
				default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode("Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1만 해당: 장치의 리셋 버튼 누르기", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#cc2531-coordinator만-해당-장치의-리셋-버튼-누르기" }, {
				default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("CC2531 coordinator만 해당: 장치의 리셋 버튼 누르기", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#texas-instruments-launchxl-cc26x2r1-coordinator만-해당-올바른-리비전인지-확인" }, {
				default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("Texas Instruments LAUNCHXL-CC26X2R1 coordinator만 해당: 올바른 리비전인지 확인", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#emberznet-coordinator만-해당" }, {
				default: withCtx(() => [..._cache[22] || (_cache[22] = [createTextVNode("EmberZNet coordinator만 해당", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#저가-usb-uart-다중-연결" }, {
				default: withCtx(() => [..._cache[23] || (_cache[23] = [createTextVNode("저가 USB-UART 다중 연결", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#mqtt-v5-연결-끊김" }, {
				default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("MQTT v5 연결 끊김", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information" }, {
				default: withCtx(() => [..._cache[25] || (_cache[25] = [createTextVNode("오류: startup failed - configuration-adapter mismatch - see logs above for more information", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#네트워크-연결-zigbee-adapter-zigbee2mqtt-서버에서-견고하고-신뢰할-수-있는-네트워크-adapter-사용" }, {
				default: withCtx(() => [..._cache[26] || (_cache[26] = [createTextVNode("네트워크 연결 Zigbee adapter: Zigbee2MQTT 서버에서 견고하고 신뢰할 수 있는 네트워크 adapter 사용", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#오류-타임아웃-오류-또는-직렬-포트-열린-후-시작-실패로-인한-주기적-충돌" }, {
				default: withCtx(() => [..._cache[27] || (_cache[27] = [createTextVNode("오류: 타임아웃 오류 또는 직렬 포트 열린 후 시작 실패로 인한 주기적 충돌", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#스팸-장치" }, {
				default: withCtx(() => [..._cache[28] || (_cache[28] = [createTextVNode("스팸 장치", -1)])]),
				_: 1
			})])
		])]),
		_cache[66] || (_cache[66] = createBaseVNode("h2", {
			id: "오류-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#오류-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration"
		}, [createBaseVNode("span", null, [createTextVNode("오류: "), createBaseVNode("code", null, "USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.")])])], -1)),
		createBaseVNode("p", null, [
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[29] || (_cache[29] = [createTextVNode("여기", -1)])]),
				_: 1
			}),
			_cache[30] || (_cache[30] = createTextVNode("에 설명된 대로 ", -1)),
			_cache[31] || (_cache[31] = createBaseVNode("code", null, "serial", -1)),
			_cache[32] || (_cache[32] = createTextVNode(" 섹션을 설정하세요.", -1))
		]),
		_cache[67] || (_cache[67] = createBaseVNode("h2", {
			id: "오류-zstack의-경우-srsp-sys-ping-after-6000ms-emberznet의-경우-host-fatal-error",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#오류-zstack의-경우-srsp-sys-ping-after-6000ms-emberznet의-경우-host-fatal-error"
		}, [createBaseVNode("span", null, [
			createTextVNode("오류: zStack의 경우 "),
			createBaseVNode("code", null, "SRSP - SYS - ping after 6000ms"),
			createTextVNode(", EmberZNet의 경우 "),
			createBaseVNode("code", null, "HOST_FATAL_ERROR")
		])])], -1)),
		_cache[68] || (_cache[68] = createBaseVNode("p", null, "이 오류의 일반적인 원인:", -1)),
		createBaseVNode("ol", null, [
			createBaseVNode("li", null, [
				_cache[34] || (_cache[34] = createTextVNode("직렬 adapter의 포트가 변경되었습니다. adapter의 포트를 찾으려면 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
					default: withCtx(() => [..._cache[33] || (_cache[33] = [createTextVNode("이 문서", -1)])]),
					_: 1
				}),
				_cache[35] || (_cache[35] = createTextVNode("를 확인하세요.", -1))
			]),
			createBaseVNode("li", null, [
				_cache[37] || (_cache[37] = createTextVNode("CC2530 또는 CC2531을 사용하는 경우, 구식 하드웨어로 인해 이 adapter가 충돌하는 것은 흔한 문제입니다. 펌웨어를 다시 플래싱하면 문제가 해결될 수 있습니다. 자주 발생하는 경우 ", -1)),
				_cache[38] || (_cache[38] = createBaseVNode("a", {
					href: "https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "소스 라우팅 펌웨어", -1)),
				_cache[39] || (_cache[39] = createTextVNode(" 플래싱을 고려하거나 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[36] || (_cache[36] = [createTextVNode("더 강력한 adapter", -1)])]),
					_: 1
				}),
				_cache[40] || (_cache[40] = createTextVNode("로 업그레이드하세요.", -1))
			]),
			createBaseVNode("li", null, [
				_cache[42] || (_cache[42] = createTextVNode("adapter에 추가 설정 파라미터가 필요합니다. adapter에 추가 파라미터가 필요한지 확인하려면 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[41] || (_cache[41] = [createTextVNode("지원 Adapter", -1)])]),
					_: 1
				}),
				_cache[43] || (_cache[43] = createTextVNode(" 섹션을 확인하세요 (예: ConBee II / RaspBee II).", -1))
			]),
			_cache[44] || (_cache[44] = createBaseVNode("li", null, "Home Assistant의 \"Zigbee Home Automation\"(ZHA) 통합이 활성화되어 있습니다. ZHA 통합을 비활성화하고 Zigbee2MQTT 애드온을 재시작해 보세요.", -1)),
			_cache[45] || (_cache[45] = createBaseVNode("li", null, "하드웨어 adapter가 coordinator 펌웨어가 아닌 router 펌웨어로 플래싱되어 있습니다.", -1)),
			_cache[46] || (_cache[46] = createBaseVNode("li", null, "네트워크 Zigbee adapter가 LAN 네트워크를 통해 접근할 수 없습니다.", -1)),
			_cache[47] || (_cache[47] = createBaseVNode("li", null, [
				createTextVNode("머신의 다른 소프트웨어(Home Assistant 통합 포함)가 USB 장치를 방해하고 있습니다 (예: USB 장치를 찾으려는 "),
				createBaseVNode("a", {
					href: "https://www.home-assistant.io/integrations/edl21",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "HA EDL21 통합"),
				createTextVNode(").")
			], -1))
		]),
		_cache[69] || (_cache[69] = createStaticVNode("<h2 id=\"오류-emberznet의-경우-error-exceeded-maximum-ack-timeout-count\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#오류-emberznet의-경우-error-exceeded-maximum-ack-timeout-count\"><span>오류: EmberZNet의 경우 <code>ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT</code></span></a></h2><p>일반적인 원인:</p><ul><li>USB 또는 2.4GHz 간섭 <ul><li>간섭을 줄이기 위한 다양한 가이드를 참고하세요</li></ul></li><li>부적절하거나 불안정한 전원(USB, POE...) <ul><li>케이블과 전력 등급을 확인하고 의심스러운 하드웨어를 교체하세요</li></ul></li><li>Zigbee2MQTT가 실행되는 머신의 리소스 사용량 급증(디스크, CPU 또는 RAM) - 저사양 머신에서 더 두드러짐 <ul><li>필요한 경우 구성 요소를 업그레이드하거나 더 많은 리소스를 할당하세요 (가상화 환경의 경우)</li></ul></li><li>&quot;core&quot; 칩의 리소스 사용량 급증 (TCP adapter의 경우) <ul><li>알려진 버그를 수정할 수 있는 새로운 &quot;core&quot; 펌웨어가 있는지 확인하세요</li></ul></li><li><a href=\"#%EC%8A%A4%ED%8C%B8-%EC%9E%A5%EC%B9%98\">스팸 장치</a> (특히 Tuya 및 유사 제품) <ul><li><a href=\"https://github.com/darkxst/silabs-firmware-builder/releases\" target=\"_blank\" rel=\"noopener noreferrer\">darkxst</a> 또는 <a href=\"https://github.com/Nerivec/silabs-firmware-builder/releases\" target=\"_blank\" rel=\"noopener noreferrer\">Nerivec</a>의 coordinator 펌웨어 8.0.2 이상을 사용하거나, <a href=\"https://github.com/NabuCasa/silabs-firmware-builder/releases\" target=\"_blank\" rel=\"noopener noreferrer\">Nabu Casa</a>의 7.4.4.5 이상을 사용하세요.</li></ul></li></ul><h2 id=\"configuration-yaml에-올바른-포트를-입력했는지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration-yaml에-올바른-포트를-입력했는지-확인\"><span>configuration.yaml에 올바른 포트를 입력했는지 확인</span></a></h2><p>올바른 경로를 찾으려면 다음 명령을 실행합니다:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\">pi@raspberry:/ $ <span class=\"token function\">ls</span> <span class=\"token parameter variable\">-l</span> /dev/serial/by-id</span>\n<span class=\"line\">total <span class=\"token number\">0</span></span>\n<span class=\"line\">lrwxrwxrwx. <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Oct <span class=\"token number\">19</span> <span class=\"token number\">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM0</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>이 예시에서 올바른 <code>port</code>는 <code>/dev/ttyACM0</code>입니다.</p>", 7)),
		createBaseVNode("p", null, [
			_cache[49] || (_cache[49] = createTextVNode("설정을 다시 할 수 있도록 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/getting-started/#onboarding" }, {
				default: withCtx(() => [..._cache[48] || (_cache[48] = [createTextVNode("온보딩", -1)])]),
				_: 1
			}),
			_cache[50] || (_cache[50] = createTextVNode("을 강제 실행할 수도 있습니다.", -1))
		]),
		_cache[70] || (_cache[70] = createStaticVNode("<h3 id=\"texas-instruments-launchxl-cc26x2r1-cc1352p-2에서-어떤-포트를-사용해야-하나요-dev-ttyacm0-아니면-dev-ttyacm1\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#texas-instruments-launchxl-cc26x2r1-cc1352p-2에서-어떤-포트를-사용해야-하나요-dev-ttyacm0-아니면-dev-ttyacm1\"><span>Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2에서 어떤 포트를 사용해야 하나요? /dev/ttyACM0 아니면 /dev/ttyACM1?</span></a></h3><p>Texas Instruments launchpad에는 내장 디버거가 있습니다. 이 디버거는 장치 데이터 포트 외에 추가 포트를 등록합니다. 물론 반드시 0번과 1번이 아닐 수도 있습니다. 하지만 일반적으로 낮은 번호가 장치 데이터 포트이고 다른 것이 디버거입니다.</p><p>올바른 포트를 찾으려면 다음을 실행합니다:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\">pi@raspberry:/ $ <span class=\"token function\">ls</span> <span class=\"token parameter variable\">-l</span> /dev/serial/by-id</span>\n<span class=\"line\">total <span class=\"token number\">0</span></span>\n<span class=\"line\">lrwxrwxrwx <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Jan  <span class=\"token number\">6</span> <span class=\"token number\">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM0</span>\n<span class=\"line\">lrwxrwxrwx <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Jan  <span class=\"token number\">6</span> <span class=\"token number\">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM1</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>id가 <em>if00</em>으로 끝나는 장치가 장치 데이터용입니다. 설정에서 이 포트를 사용하세요.</p><h2 id=\"zigbee2mqtt를-실행하는-사용자에게-포트-쓰기-권한이-있는지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee2mqtt를-실행하는-사용자에게-포트-쓰기-권한이-있는지-확인\"><span>Zigbee2MQTT를 실행하는 사용자에게 포트 쓰기 권한이 있는지 확인</span></a></h2><p>다음을 실행하여 테스트할 수 있습니다: <code>test -w [PORT] &amp;&amp; echo success || echo failure</code> ( 예: <code>test -w /dev/ttyACM0 &amp;&amp; echo success || echo failure</code>).</p><p><code>failure</code>가 출력되면 사용자가 포트에 접근 권한이 없는 것입니다. 쓰기 권한을 부여하여 테스트하려면 다음을 실행합니다: <code>sudo chown [USER] [PORT]</code> (예: <code>sudo chown pi /dev/ttyACM0</code>).</p><p><code>failure</code>가 출력되면 사용자에게 장치에 대한 영구 권한을 부여해야 합니다.</p><h3 id=\"방법-1-재부팅-시마다-사용자에게-권한-부여\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#방법-1-재부팅-시마다-사용자에게-권한-부여\"><span>방법 1: 재부팅 시마다 사용자에게 권한 부여.</span></a></h3><p>재부팅 후 사용자에게 권한을 부여하는 &#39;udev&#39; 규칙을 생성할 수 있습니다:</p><ol><li><p><code>udevadm info -a -n /dev/ttyACM0 | grep &#39;serial&#39;</code> 장치의 시리얼을 가져옵니다 <code>YOURSERIAL</code></p></li><li><p>다음 명령으로 규칙 파일을 생성합니다: <code>sudo nano /etc/udev/rules.d/99-usb-serial.rules</code></p></li><li><p>다음 줄을 추가합니다: <code>SUBSYSTEM==&quot;tty&quot;, ATTRS{idVendor}==&quot;0451&quot;, ATTRS{idProduct}==&quot;16a8&quot;, ATTRS{serial}==&quot;YOURSERIAL&quot;, SYMLINK=&quot;ttyUSB.CC2531-01&quot;, OWNER=&quot;pi&quot;</code></p></li><li><p>새로운 SYMLINK 이름에 맞게 Zigbee2MQTT 설정을 수정합니다: <code>nano /opt/zigbee2mqtt/data/configuration.yaml</code></p></li></ol><p><code>… serial: port: /dev/ttyUSB.CC2531-01 …</code></p><p>재부팅 후 장치는 올바른 권한을 갖게 되고 항상 동일한 이름을 유지합니다.</p><h3 id=\"방법-2-특정-그룹에-사용자-추가\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#방법-2-특정-그룹에-사용자-추가\"><span>방법 2: 특정 그룹에 사용자 추가</span></a></h3><p>https://github.com/esp8266/source-code-examples/issues/26 에서 언급된 것처럼, Linux 설치에 따라 다양한 그룹이 장치 소유권을 가질 수 있습니다.</p><p>사용자를 <code>uucp</code>, <code>tty</code>, <code>dialout</code> 그룹에 추가합니다:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">sudo usermod -a -G uucp $USER</span>\n<span class=\"line\">sudo usermod -a -G tty $USER</span>\n<span class=\"line\">sudo usermod -a -G dialout $USER</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>장치를 재부팅하면 사용자가 장치에 접근할 수 있게 됩니다.</p><h2 id=\"오류-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#오류-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel\"><span>오류: <code>Coordinator failed to start, probably the panID is already in use, try a different panID or channel</code></span></a></h2>", 20)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [
				_cache[52] || (_cache[52] = createTextVNode("panID를 증가시킨 후에도(설명은 ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#network-config" }, {
					default: withCtx(() => [..._cache[51] || (_cache[51] = [createTextVNode("여기", -1)])]),
					_: 1
				}),
				_cache[53] || (_cache[53] = createTextVNode(") 이 오류가 계속 발생하고, 다른 USB 장치(예: SSD)가 연결된 Raspberry Pi를 사용하는 경우, SSD나 adapter를 파워드 USB 허브를 통해 연결해 보세요.", -1))
			]),
			_cache[54] || (_cache[54] = createBaseVNode("li", null, [
				createTextVNode("처음 시작에 성공하고 장치를 페어링한 후 이 오류가 발생하면 펌웨어가 잘못 플래싱된 것일 수 있습니다. 다른 컴퓨터에서 스틱을 다시 플래싱해 보세요("),
				createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/6302",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "자세한 정보"),
				createTextVNode("). 이 문제는 주로 Slaesh의 CC2652RB 스틱과 함께 발생합니다.")
			], -1)),
			_cache[55] || (_cache[55] = createBaseVNode("li", null, "이전 Zigbee 네트워크가 있었고 새 Zigbee adapter로 이런 오류가 발생하면, 이전 Zigbee 네트워크에 연결된 Zigbee router를 끄고 Zigbee2MQTT를 재시작해 보세요.", -1))
		]),
		_cache[71] || (_cache[71] = createStaticVNode("<h2 id=\"오류-resource-temporarily-unavailable-cannot-lock-port\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#오류-resource-temporarily-unavailable-cannot-lock-port\"><span>오류: <code>Resource temporarily unavailable Cannot lock port</code></span></a></h2><p>이 오류는 다른 프로그램이 이미 adapter를 사용하고(따라서 잠금) 있을 때 발생합니다. 다음 명령으로 어떤 프로그램인지 확인할 수 있습니다: <code>ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0</code> (<code>/dev/ttyACM0</code>을 adapter 포트로 교체하세요).</p><h2 id=\"raspberry-pi-사용자\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#raspberry-pi-사용자\"><span>Raspberry Pi 사용자</span></a></h2><h2 id=\"raspberry-pi-os\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#raspberry-pi-os\"><span>Raspberry Pi OS</span></a></h2><p>최소 Raspberry Pi OS 11을 사용하고 있는지 확인하세요. 실행 중인 버전을 확인하려면 다음을 실행합니다:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">cat</span> /etc/issue.net</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div><h2 id=\"좋은-전원-어댑터-사용\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#좋은-전원-어댑터-사용\"><span>좋은 전원 어댑터 사용</span></a></h2><p>불량 전원 어댑터는 시스템과 USB 장치를 불안정하게 만들 수 있습니다. 좋은 전원 어댑터를 사용하세요.</p><p><code>dmesg -w</code> 실행 시 아래와 같은 메시지가 보이면 불량 전원 어댑터를 사용 중인 것입니다.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[44870.355590] Under-voltage detected! (0x00050005)</span>\n<span class=\"line\">[44874.515618] Voltage normalised (0x00000000)</span>\n<span class=\"line\">[44880.755718] Under-voltage detected! (0x00050005)</span>\n<span class=\"line\">[44889.075627] Voltage normalised (0x00000000)</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>파워드 USB 허브를 통해 adapter를 연결해 보세요(특히 Pi에 SSD가 연결되어 있는 경우).</p><h2 id=\"연장-케이블이-올바르게-작동하는지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#연장-케이블이-올바르게-작동하는지-확인\"><span>연장 케이블이 올바르게 작동하는지 확인</span></a></h2><p>불량 연장 케이블은 시스템과 adapter 사이의 연결 문제를 유발할 수 있습니다. 이의 증상은 아래와 같이 <code>dmesg -w</code> 로그에서 연결 끊김 메시지로 나타납니다.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[44929.156957] usb 1-1.5: USB disconnect, device number 119</span>\n<span class=\"line\">[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg</span>\n<span class=\"line\">[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09</span>\n<span class=\"line\">[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3</span>\n<span class=\"line\">[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC</span>\n<span class=\"line\">[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"openhab-사용자-zwave-바인딩-비활성화\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#openhab-사용자-zwave-바인딩-비활성화\"><span>Openhab 사용자: zwave 바인딩 비활성화</span></a></h2><p>Openhab zwave 바인딩은 Zigbee2MQTT와 간섭합니다. 자세한 정보는 <a href=\"https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245\" target=\"_blank\" rel=\"noopener noreferrer\">여기</a>를 참고하세요.</p><h2 id=\"cc2530-또는-cc2531-adapter의-경우-cc2540이-없는지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cc2530-또는-cc2531-adapter의-경우-cc2540이-없는지-확인\"><span>CC2530 또는 CC2531 adapter의 경우, CC2540이 없는지 확인</span></a></h2><p>CC2540은 외형이 CC2531과 거의 동일하여 혼동하기 쉽습니다. 그러나 이 장치는 Zigbee가 아닌 블루투스를 지원합니다. 칩을 직접 확인하여 구별할 수 있습니다.</p><h2 id=\"modemmanager-설치-여부\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#modemmanager-설치-여부\"><span><a href=\"https://www.freedesktop.org/wiki/Software/ModemManager/\" target=\"_blank\" rel=\"noopener noreferrer\">ModemManager</a> 설치 여부</span></a></h2><p>Ubuntu 등에 기본 설치되는 ModemManager는 문제를 일으키는 것으로 알려져 있습니다. <code>sudo apt-get purge modemmanager</code> 명령으로 ModemManager를 제거하면 쉽게 해결됩니다.</p><h2 id=\"컴퓨터에-충분한-리소스가-있는지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#컴퓨터에-충분한-리소스가-있는지-확인\"><span>컴퓨터에 충분한 리소스가 있는지 확인</span></a></h2><p>컴퓨터 리소스가 부족하면 직렬 통신이 불안정해질 수 있습니다. CPU와 메모리가 지속적으로 최대 용량으로 작동하면 리소스 부족을 나타낼 수 있습니다. 예를 들어 Raspberry Pi 3의 Home Assistant에서 Zigbee2MQTT 애드온을 사용하면 리소스 고갈이 발생할 수 있습니다.</p><h2 id=\"hciuart가-실행-중\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hciuart가-실행-중\"><span>hciuart가 실행 중</span></a></h2><p>hciuart는 다음을 실행하여 비활성화할 수 있습니다: <code>sudo systemctl disable hciuart</code>.</p><h2 id=\"texas-instruments-launchxl-cc1352p-2-cc26x2r1만-해당-장치의-리셋-버튼-누르기\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#texas-instruments-launchxl-cc1352p-2-cc26x2r1만-해당-장치의-리셋-버튼-누르기\"><span>Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1만 해당: 장치의 리셋 버튼 누르기</span></a></h2><p>Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1에서 <code>Error: SRSP - SYS - version after 6000ms</code>로 Zigbee2MQTT가 시작에 실패하면, USB 케이블을 연결한 직후 리셋 버튼(USB 커넥터 옆의 버튼)을 잠깐 눌러야 하는 시스템에 장치를 연결한 것입니다. 이 문제는 주로 x86 아키텍처(예: Intel NUC, HPE Microserver, i7 노트북)에서만 관찰되었습니다. <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/2162\" target=\"_blank\" rel=\"noopener noreferrer\">#2162</a>도 참고하세요. adapter를 다시 연결할 때마다 이 과정을 반복해야 하며, 이 문제가 완전히 해결될 수 있는지는 아직 불명확합니다. ARM 기반 보드(Raspberry Pi, ODROID XU4)에서는 발생하지 않는 것 같습니다.</p><p>USB 케이블을 다시 꽂으면 문제가 해결될 수도 있습니다.</p><h2 id=\"cc2531-coordinator만-해당-장치의-리셋-버튼-누르기\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cc2531-coordinator만-해당-장치의-리셋-버튼-누르기\"><span>CC2531 coordinator만 해당: 장치의 리셋 버튼 누르기</span></a></h2><p>CC2531을 컴퓨터에 연결하면 녹색 LED가 켜져야 합니다. CC2531의 리셋 버튼을 누르면 녹색 LED가 꺼져야 합니다. CC2531에는 버튼이 2개 있으며, 리셋 버튼은 USB 포트에 가장 가까운 것입니다. 이제 Zigbee2MQTT를 다시 시작해 보세요.</p><h2 id=\"texas-instruments-launchxl-cc26x2r1-coordinator만-해당-올바른-리비전인지-확인\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#texas-instruments-launchxl-cc26x2r1-coordinator만-해당-올바른-리비전인지-확인\"><span>Texas Instruments LAUNCHXL-CC26X2R1 coordinator만 해당: 올바른 리비전인지 확인</span></a></h2><p>보드의 리비전은 UniFlash에서 상단의 <em>more info</em> 를 클릭한 후 <em>Read device info</em> 를 누르면 확인할 수 있습니다.</p><p>올바른 리비전은 아래와 같이 <strong>E</strong>입니다.</p><p><img src=\"/zigbee2mqtt.io/assets/cc26xr1_revision-yzThkCip.png\" alt=\"cc26xr1_revision\"></p><p>이전 버전은 지원되지 않습니다(개발 보드입니다). 즉시 판매자에게 반품하세요.</p><h2 id=\"emberznet-coordinator만-해당\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#emberznet-coordinator만-해당\"><span>EmberZNet coordinator만 해당</span></a></h2>", 35)),
		createBaseVNode("p", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/emberznet.html#error-level" }, {
			default: withCtx(() => [..._cache[56] || (_cache[56] = [createTextVNode("EmberZNet 오류", -1)])]),
			_: 1
		}), _cache[57] || (_cache[57] = createTextVNode("를 참고하세요.", -1))]),
		_cache[72] || (_cache[72] = createBaseVNode("h2", {
			id: "저가-usb-uart-다중-연결",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#저가-usb-uart-다중-연결"
		}, [createBaseVNode("span", null, "저가 USB-UART 다중 연결")])], -1)),
		_cache[73] || (_cache[73] = createBaseVNode("p", null, "저가 USB-UART 변환기(CH341)를 사용하는 여러 장치가 연결되어 있는 경우, 동일한 idProduct, SerialNumber 등을 가질 수 있어 시스템에서 구별이 불가능하며 동일한 /dev/serial/by-id를 공유할 수 있습니다. 가장 쉬운 해결책은 장치 중 하나를 다른 uart-usb 변환기를 사용하는 것으로 교체하는 것입니다. 두 번째 해결책은 전체 변환기를 교체하거나 시리얼 번호를 추가할 수 없는 칩(CH341 같은)에 외부 EEPROM 메모리를 추가하여 시리얼 번호를 설정하는 것입니다.", -1)),
		_cache[74] || (_cache[74] = createBaseVNode("h2", {
			id: "mqtt-v5-연결-끊김",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#mqtt-v5-연결-끊김"
		}, [createBaseVNode("span", null, "MQTT v5 연결 끊김")])], -1)),
		_cache[75] || (_cache[75] = createBaseVNode("p", null, "MQTT 명세 버전 5의 MQTT 브로커를 사용하는 경우, 오작동 시 연결이 끊길 수 있습니다. 예를 들어 \"최대 패킷 크기\" 초과(대규모 네트워크)로 발생할 수 있습니다.", -1)),
		createBaseVNode("p", null, [
			_cache[59] || (_cache[59] = createTextVNode("이를 해결하려면 브로커를 적절히 설정하고 Zigbee2MQTT에도 조정 가능한 설정이 있는지 확인하세요. ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html#server-connection" }, {
				default: withCtx(() => [..._cache[58] || (_cache[58] = [createTextVNode("MQTT 설정", -1)])]),
				_: 1
			}),
			_cache[60] || (_cache[60] = createTextVNode("을 참고하세요.", -1))
		]),
		_cache[76] || (_cache[76] = createStaticVNode("<h2 id=\"오류-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#오류-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information\"><span>오류: <code>startup failed - configuration-adapter mismatch - see logs above for more information</code></span></a></h2><p><code>configuration.yml</code>에서 <code>pan_id</code>, <code>network_key</code> 또는 <code>ext_pan_id</code> 값 중 하나 이상을 수정하면 발생합니다. 의도적으로 변경한 경우 가장 쉬운 해결 방법은 <code>data/coordinator-backup.json</code> 파일을 삭제하고 다시 시작하는 것입니다. 이 작업은 네트워크를 초기화하므로 <strong>모든 장치를 다시 페어링해야 합니다!</strong> 또는 이전 값으로 되돌릴 수 있습니다. 이 경우 로그에서 오류 몇 줄 앞에 다음과 같은 내용을 찾을 수 있습니다:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: Configuration is not consistent with adapter state/backup!</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - PAN ID: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Extended PAN ID: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Network Key: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Channel List: configured=**, adapter=**</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>(이 예시에서 실제 값은 <code>*</code>로 대체되었습니다) adapter에 나열된 값을 사용하여 설정 파일에 다시 입력할 수 있습니다. 단, 그대로 붙여 넣을 수 없습니다: 로그에서 키는 16진수 문자열로 출력되지만, 설정 파일에서 <code>ext_pan_id</code>와 <code>network_key</code>는 배열로 입력해야 합니다. 예를 들어 네트워크 키가 로그에서 <code>39af4d83h2dcb389</code>로 표시된다면 설정 파일에 다음과 같이 입력해야 합니다:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">ext_pan_id: [0x39,0xaf,0x4d,0x83,0xh2,0xdc,0xb3,0x89]</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div><h2 id=\"네트워크-연결-zigbee-adapter-zigbee2mqtt-서버에서-견고하고-신뢰할-수-있는-네트워크-adapter-사용\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#네트워크-연결-zigbee-adapter-zigbee2mqtt-서버에서-견고하고-신뢰할-수-있는-네트워크-adapter-사용\"><span>네트워크 연결 Zigbee adapter: Zigbee2MQTT 서버에서 견고하고 신뢰할 수 있는 네트워크 adapter 사용</span></a></h2><p>WiFi 또는 이더넷으로 연결된 Zigbee adapter를 사용하는 경우, Zigbee2MQTT는 serial-over-IP 프로토콜을 통해 LAN으로 Zigbee adapter와 통신합니다.</p><p>Zigbee2MQTT 서버에서 USB-WiFi 또는 USB-이더넷 adapter 사용은 권장하지 않습니다. 사양 면에서 온보드 adapter와 동등해 보이지만, 작은 케이스에 설계되어 있고 환기가 좋지 않아 과열되는 경향이 있습니다.<br> 이러한 adapter는 높은 부하나 과열 시 정지하거나 작동을 멈추는 것으로 알려져 있으며, 다음과 같은 오류를 유발합니다:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: Received ERROR from NCP while connecting, with code=ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT.</span>\n<span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: ASH disconnected | NCP status: ASH_NCP_FATAL_ERROR</span>\n<span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: Error while parsing received frame, status=ASH_NCP_FATAL_ERROR.</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>이는 serial-over-IP 프로토콜에서 타임아웃이 발생한 경우이거나:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:37:24] warning: zh:ember:uart:ash: Frame(s) in progress cancelled in [1ac1020b0a527e]</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: Received unexpected reset from NCP, with reason=RESET_SOFTWARE.</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: ASH disconnected: ASH_ERROR_NCP_RESET | NCP status: ASH_NCP_FATAL_ERROR</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: Error while parsing received frame, status=HOST_FATAL_ERROR.</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember: !!! NCP FATAL ERROR reason=HOST_FATAL_ERROR. ATTEMPTING RESET... !!!</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>호스트와 NCP 간 통신이 동기화되지 않은 경우이며, 네트워크 문제의 명확한 징후이기도 합니다:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:38:05] error: z2m:mqtt: Not connected to MQTT server!</span>\n<span class=\"line\">[2024-06-24 03:38:05] error: z2m:mqtt: Cannot send message: topic: &#39;zigbee2mqtt/bridge/state&#39;, payload: &#39;{&quot;state&quot;:&quot;offline&quot;}</span>\n<span class=\"line\">[2024-06-24 03:38:05] info: z2m:mqtt: Disconnecting from MQTT server</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>이는 Zigbee2MQTT가 LAN을 통해 MQTT 서버에 연결하지 못한 경우입니다.</p><p>이 상황에 가장 좋은 설정은 모든 부하 조건에서 통신의 신뢰성을 보장하는 Zigbee2MQTT 서버 마더보드에 내장된 이더넷 포트를 사용하는 것입니다.<br> 차선책으로 온보드 WiFi adapter를 사용할 수 있으며, 이 역시 신뢰성을 위해 설계되어야 하지만 WiFi 네트워크의 안정성도 고려하세요.<br> 모든 온보드 adapter가 사용 중이고 추가 네트워크 adapter가 필요하다면, 적절한 냉각 설계를 갖춘 PCIe 버스의 내부 네트워크 카드를 설치하는 것이 가장 좋습니다.</p><h2 id=\"오류-타임아웃-오류-또는-직렬-포트-열린-후-시작-실패로-인한-주기적-충돌\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#오류-타임아웃-오류-또는-직렬-포트-열린-후-시작-실패로-인한-주기적-충돌\"><span>오류: 타임아웃 오류 또는 직렬 포트 열린 후 시작 실패로 인한 주기적 충돌</span></a></h2><p>이러한 오류는 Zigbee 동글과 Zigbee2MQTT 간의 직렬 통신이 예기치 않게 작동을 멈출 때 발생할 수 있습니다.</p><p>이 오류를 유발할 수 있는 원인:</p><ol><li><p>호스트 컴퓨터와 Zigbee 동글 간의 하드웨어 연결이 불안정합니다. 다음 예시에서는 연결이 불안정한 저가 USB 케이블과 좋은 USB 케이블을 비교합니다: <img src=\"/zigbee2mqtt.io/assets/good-vs-bad-usb-cable-CTxwa7rA.jpg\" alt=\"good-vs-bad-usb-cable\"> 이런 저가 케이블은 케이블을 건드리는 것만으로도 USB 연결이 끊길 수 있습니다.</p></li><li><p>Zigbee2MQTT가 가상 머신에서 실행 중이고 호스트와 VM 간의 USB 패스스루가 불안정합니다. 이는 가상화 환경, USB 하드웨어 또는 둘의 조합으로 인해 발생할 수 있습니다. 이러한 오류가 발생하면 설정의 복잡성을 줄이고 안정성을 개선하며 호스트와 USB 연결을 조사하는 데 도움이 되는 조치를 취할 수 있습니다. 전체 USB 장치를 VM에 패스스루하는 대신 직렬 장치를 패스스루합니다. VM 설정이 다음에서 변경됩니다: host-(USB passthrough)-&gt;VM-&gt;USB-serial-&gt;serial(Zigbee2MQTT 설정용) 에서 host-(serial passthrough)-&gt;VM-&gt;serial(Zigbee2MQTT 설정용) 으로</p></li></ol><p>예를 들어, Proxmox Home Assistant OS 설치에서 직렬 장치를 패스스루하는 과정은 다음과 같습니다:</p><ul><li>Proxmox VM 하드웨어에 serial0(또는 serial1, 2, 3)를 추가합니다.<br> 기본적으로 직렬 포트는 Proxmox 하드웨어 VM 설정에서 소켓(&quot;serial0: socket&quot;)이므로, 실제 직렬 장치를 가리키도록 VM 설정 파일 /etc/pve/quemu-server/{VMID}.conf의 이 파라미터를 변경해야 합니다. 예: &quot;serial0: /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240122184528-if00&quot;</li><li>Home Assistant OS에서 getty로부터 ttyS0 직렬 포트를 해제합니다.<br> VM에서 이 패스스루된 직렬 포트는 ttyS0로 인식되지만, Home Assistant OS의 systemd는 기본적으로 /dev/ttyS0에 agetty를 생성합니다. 실제로 /mnt/boot/cmdline.txt 커널 커맨드라인 파라미터 파일에서 ttyS0가 콘솔로 설정되어 있습니다(내용은 &quot;console=ttyS0 console=tty0&quot;). systemd가 ttyS0를 그대로 두고 agetty를 생성하지 않도록 VM의 이 cmdline.txt 파일을 변경해야 합니다. ttyS0 부분을 제거하면 cmdline.txt는 &quot;console=tty0&quot;가 됩니다.</li></ul><p>이제 Zigbee2MQTT는 VM 내에서 &quot;실제&quot; 직렬 포트인 /dev/ttyS0를 통해 동글에 접근할 수 있습니다. USB 장치의 문제는 호스트 커널에 기록되며 이 방법을 통해 dmesg로 쉽게 확인할 수 있어 직렬 장치의 문제와 분리할 수 있습니다.</p><h2 id=\"스팸-장치\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#스팸-장치\"><span>스팸 장치</span></a></h2><p>데이터 리포트를 남발하는 장치는 네트워크를 빠르게 혼잡하게 하고 전체 안정성을 저하시킬 수 있습니다. 이런 장치를 여러 개 사용하면 정기적으로 네트워크가 충돌할 수도 있습니다. 이것은 Tuya(및 파생 제품)와 같은 브랜드의 잘 알려진 문제입니다. 일부 mmWave 센서도 이 문제를 가진 것으로 알려져 있습니다(특히 초기 변형).</p>", 24)),
		createBaseVNode("p", null, [
			_cache[62] || (_cache[62] = createTextVNode("장치의 리포트 비율을 비활성화하거나 줄일 수 있습니다(모든 또는 특정 상태에 대해). 가능하면 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-device-reporting-configure" }, {
				default: withCtx(() => [..._cache[61] || (_cache[61] = [createTextVNode("reporting", -1)])]),
				_: 1
			}),
			_cache[63] || (_cache[63] = createTextVNode("을 필요에 맞게 설정하고 네트워크가 처리할 수 있는 수준에 맞춥니다. 그러나 위에서 언급한 장치들은 종종 적절한 설정을 허용하지 않으므로, 그 경우 실질적인 해결 방법이 없어 더 나은 것으로 교체하는 수밖에 없습니다.", -1))
		]),
		_cache[77] || (_cache[77] = createStaticVNode("<div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>여러 오픈 소스 프로젝트에서 Tuya OTA 업데이트 대체 펌웨어를 제공합니다(사용 전에 관련 문서를 모두 읽으세요). 예시:</p><ul><li><a href=\"https://github.com/romasku/tuya-zigbee-switch\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/romasku/tuya-zigbee-switch</a></li><li><a href=\"https://github.com/pvvx/ZigbeeTLc\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/pvvx/ZigbeeTLc</a></li><li><a href=\"https://github.com/Andrik45719/ZY-M100\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Andrik45719/ZY-M100</a></li><li><a href=\"https://github.com/slacky1965\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/slacky1965</a></li></ul></div>", 1))
	]);
}
var _20_zigbee2mqtt_fails_to_start_crashes_runtime_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _20_zigbee2mqtt_fails_to_start_crashes_runtime_default as default };
