import type {NavbarOptions} from '@vuepress/theme-default';
import {resolve} from 'path';
import {readdirSync} from 'fs';

export function getFiles(dir: string, locale = '') {
    const base = resolve(__dirname, 'docs');
    return readdirSync(resolve(base, ...(locale ? [locale, dir] : [dir])))
        .filter((file) => file.endsWith('.md') && file !== 'README.md')
        .map((file) => `/${locale ? locale + '/' : ''}${dir}/${file}`);
}

export const koNavbar: NavbarOptions = [
    {
        text: '가이드',
        children: [
            '/guide/getting-started/',
            {
                link: '/guide/adapters/',
                text: '지원 어댑터',
                activeMatch: '(/guide/adapters/|/guide/supported-hardware)',
            },
            {
                text: '지원 디바이스',
                link: '/supported-devices/',
            },
            '/guide/installation/',
            '/guide/configuration/',
            {
                text: '사용법',
                link: '/guide/usage/pairing_devices.md',
                activeMatch: '/guide/usage/',
            },
            '/guide/faq/',
        ],
    },
    {
        text: '디바이스',
        link: '/supported-devices/',
        activeMatch: '^/(supported-)?devices/',
    },
    {
        text: '고급',
        children: [
            {text: 'Zigbee', children: getFiles('advanced/zigbee')},
            {text: '새 디바이스 지원', children: getFiles('advanced/support-new-devices')},
            {text: '원격 어댑터', children: getFiles('advanced/remote-adapter')},
            {text: '더보기', children: getFiles('advanced/more')},
        ],
    },
    {
        text: '지원',
        children: [
            {
                text: '포럼',
                link: 'https://github.com/Koenkk/zigbee2mqtt/discussions',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/NyseBeK',
            },
            {
                text: '이슈',
                link: 'https://github.com/Koenkk/zigbee2mqtt/issues',
            },
            {
                text: '기부',
                link: 'https://github.com/Koenkk/zigbee2mqtt',
            },
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Koenkk/zigbee2mqtt',
    },
];

export const enNavbar: NavbarOptions = [
    {
        text: 'Guide',
        children: [
            '/en/guide/getting-started/',
            {
                link: '/en/guide/adapters/',
                text: 'Supported Adapters',
                activeMatch: '(/en/guide/adapters/|/en/guide/supported-hardware)',
            },
            {
                text: 'Supported Devices',
                link: '/supported-devices/',
            },
            '/en/guide/installation/',
            '/en/guide/configuration/',
            {
                text: 'Usage',
                link: '/en/guide/usage/pairing_devices.md',
                activeMatch: '/en/guide/usage/',
            },
            '/en/guide/faq/',
        ],
    },
    {
        text: 'Devices',
        link: '/supported-devices/',
        activeMatch: '^/(supported-)?devices/',
    },
    {
        text: 'Advanced',
        children: [
            {text: 'Zigbee', children: getFiles('advanced/zigbee', 'en')},
            {text: 'Support new devices', children: getFiles('advanced/support-new-devices', 'en')},
            {text: 'Remote Adapter', children: getFiles('advanced/remote-adapter', 'en')},
            {text: 'More', children: getFiles('advanced/more', 'en')},
        ],
    },
    {
        text: 'Support',
        children: [
            {
                text: 'Forum',
                link: 'https://github.com/Koenkk/zigbee2mqtt/discussions',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/NyseBeK',
            },
            {
                text: 'Issues',
                link: 'https://github.com/Koenkk/zigbee2mqtt/issues',
            },
            {
                text: 'Donate',
                link: 'https://github.com/Koenkk/zigbee2mqtt',
            },
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Koenkk/zigbee2mqtt',
    },
];

// 하위 호환성을 위한 기본 export (한국어)
export const navbar = koNavbar;
