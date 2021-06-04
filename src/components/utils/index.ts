// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export function randomPastel(): string {
    const randomSaturation = Math.floor(Math.random() * (80 - 40 + 1) + 40);
    const randomLight = Math.floor(Math.random() * (50 - 40 + 1) + 40);
    return `hsla(${~~(360 * Math.random())},${randomSaturation}%,${randomLight}%,1)`;
}
