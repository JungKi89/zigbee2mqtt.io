export const domain = 'https://jungki89.github.io/zigbee2mqtt.io';
export const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
    let base = '/zigbee2mqtt.io/';
    if (isDevelop) base += 'develop/';
    return base as '/' | `/${string}/`;
}
