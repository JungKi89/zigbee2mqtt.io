import type {SidebarOptions} from '@vuepress/theme-default';
import {getFiles} from './navbar';

export const sidebar: SidebarOptions = {
    '/devices/': false,
    '/guide/': [
        '/guide/getting-started/',
        {
            text: '지원 하드웨어',
            link: '/guide/supported-hardware.md',
            children: [
                {text: '어댑터', link: '/guide/adapters/'},
                {text: '디바이스', link: '/supported-devices/'},
            ],
        },
        {
            text: '설치',
            link: '/guide/installation/',
            children: [...getFiles('guide/installation')],
        },
        {
            text: '설정',
            link: '/guide/configuration/',
            children: [
                '/guide/configuration/adapter-settings.md',
                '/guide/configuration/mqtt.md',
                '/guide/configuration/zigbee-network.md',
                '/guide/configuration/frontend.md',
                '/guide/configuration/devices-groups.md',
                '/guide/configuration/logging.md',
                '/guide/configuration/block-pass-list.md',
                '/guide/configuration/ota-device-updates.md',
                '/guide/configuration/device-availability.md',
                '/guide/configuration/homeassistant.md',
                '/guide/configuration/more-config-options.md',
                '/guide/configuration/configuration-update.md',
                '/guide/configuration/all-settings.md',
            ],
        },
        {
            text: '사용법',
            link: '/guide/usage/',
            children: [
                '/guide/usage/pairing_devices.md',
                '/guide/usage/integrations.md',
                '/guide/usage/touchlink.md',
                '/guide/usage/scenes.md',
                '/guide/usage/binding.md',
                '/guide/usage/groups.md',
                '/guide/usage/ota_updates.md',
                '/guide/usage/mqtt_topics_and_messages.md',
                '/guide/usage/exposes.md',
                '/guide/usage/health.md',
            ],
        },
        {
            text: 'FAQ',
            link: '/guide/faq/',
        },
    ],

    '/advanced/zigbee/': getFiles('advanced/zigbee'),
    '/advanced/remote-adapter/': getFiles('advanced/remote-adapter'),
    '/advanced/support-new-devices/': getFiles('advanced/support-new-devices'),
};
