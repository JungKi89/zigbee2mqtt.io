import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { t as _plugin_vue_export_helper_default } from "./app-BxelcmS-.js";
//#region docs/devices/E2491.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2491.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectTo\":\"/devices/E2435_E2491.md\",\"head\":[[\"script\",{},\"{const anchor = window.location.hash.slice(1);window.location.replace(`/zigbee2mqtt.io/devices/E2435_E2491.html${anchor? `#${anchor}`: \\\"\\\"}`);}\"]]},\"git\":{\"updatedTime\":1780922378000,\"contributors\":[{\"name\":\"Andrei LAZAROV\",\"username\":\"\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":2},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1},{\"name\":\"Wayne Shih\",\"username\":\"\",\"email\":\"0x26@wayneshih.com\",\"commits\":1},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"jungki\",\"username\":\"jungki\",\"email\":\"kimjk6463@gmail.com\",\"commits\":1,\"url\":\"https://github.com/jungki\"}],\"changelog\":[{\"hash\":\"704cb69cdf52b6087f553e783732c15789ac7e05\",\"time\":1780922378000,\"email\":\"kimjk6463@gmail.com\",\"author\":\"jungki\",\"message\":\"feat: 디바이스 Notes 섹션 한국어 번역 (1168개 파일)\"},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"7a885a7a3faaeca5320abb03a311372cfd770e8f\",\"time\":1775458437000,\"email\":\"0x26@wayneshih.com\",\"author\":\"Wayne Shih\",\"message\":\"fix: clarify pairing instructions for E2491 (#4996)\"},{\"hash\":\"8293ffc260c4f74bb6e39d81eb418259c73e6e04\",\"time\":1775072473000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add IKEA TOFSMYGGA plug (#4973)\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"b0281c7cde989fb7122134f6fc7c1b58e550cebd\",\"time\":1774198415000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add E2491 IKEA GRILLPLATS plug (#4947)\"}]},\"filePathRelative\":\"devices/E2491.md\"}");
var _sfc_main = { name: "E2491.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[3] || (_cache[3] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"페어링\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#페어링\"><span>페어링</span></a></h3><p>플러그를 페어링하려면 다음 순서를 따르세요:</p><ol><li><strong>LED가 빨간색으로 깜빡이다가 멈출 때까지 (~10초) 버튼을 눌러 초기화합니다.</strong><br> 플러그가 이제 Thread 페어링 모드로 진입합니다</li><li><strong>버튼을 4번 누르세요</strong></li><li><strong>버튼을 8번 누르세요.</strong><br> 플러그가 이제 Zigbee 페어링 모드로 진입합니다</li></ol>", 4)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("또는 ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode("로 초기화하세요.", -1))
		]),
		_cache[4] || (_cache[4] = createStaticVNode("<h3 id=\"펌웨어\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#펌웨어\"><span>펌웨어</span></a></h3><ul><li>초기 출하 제품에는 v1.3.11 (20250827)이 사전 설치되어 있습니다</li><li>업데이트는 Matter를 통해 제공됩니다.<br> 업데이트를 위해 Thread 허브로 기기를 이동하세요</li><li>사용 가능한 버전은 <a href=\"https://webui.dcl.csa-iot.org/models\" target=\"_blank\" rel=\"noopener noreferrer\">여기</a>에서 확인하세요 (<em>GRILLPLATS</em> 또는 <em>4476</em> 검색)</li></ul>", 2))
	]);
}
var E2491_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, E2491_default as default };
