const tsconfig = require('./tsconfig.json');

const alias = Object.entries(tsconfig.compilerOptions.paths).reduce((acc, [key, value]) => {
    const newKey = `${key.replace(/\/\*/, '')}`;

    if (!acc[newKey]) {
        acc[newKey] = `./${value[0].replace(/\/\*/, '')}`;
    }

    return acc;
}, {});

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['.'],
                extensions: ['.ts', '.tsx'],
                alias,
            },
        ],
    ],
};
