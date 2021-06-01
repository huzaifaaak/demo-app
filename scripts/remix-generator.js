/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const BASE_PATH = path.resolve(__dirname, '../node_modules/react-native-remix-icon');

const exists = fs.existsSync(BASE_PATH);

if (exists) {
    const files = fs.readdirSync(path.resolve(BASE_PATH, './src/icons'));
    const content = [];

    files.forEach((file) => {
        const component = file.replace('.js', '');

        content.push(
            [
                `declare module '@icons/${component}' {`,
                `    import { ComponentType } from 'react';`,
                `    const Icon${component}: ComponentType<{ width?: number; height?: number; fill?: string }>;`,
                `    export default Icon${component};`,
                `}`,
            ].join('\n')
        );
    });

    fs.writeFileSync(path.resolve(__dirname, '../remix.d.ts'), content.join('\n\n'));
}
