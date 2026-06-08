import type {NavbarOptions} from '@vuepress/theme-default';
import {resolve} from 'path';
import {readdirSync} from 'fs';

export function getFiles(dir: string) {
    const base = resolve(__dirname, 'docs');
    return readdirSync(resolve(base, dir))
        .filter((file) => file.endsWith('.md') && file !== 'README.md')
        .map((file) => `/${dir}/${file}`);
}

export const navbar: NavbarOptions = [
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
