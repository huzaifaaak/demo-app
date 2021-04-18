const { pathGroups, pathGroupsExcludedImportTypes } = getImportOrder();

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-native', 'import', 'prettier'],
    extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        jest: true,
    },
    rules: {
        'no-undef': 'off',
        'lines-between-class-members': ['warn', 'always'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'import/default': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
                pathGroups,
                pathGroupsExcludedImportTypes,
            },
        ],
    },
    settings: {
        'import/internal-regex': internalRegex,
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: 'tsconfig.json',
            },
        },
    },
};

function getImportOrder() {
    const tsconfig = require('./tsconfig.json');

    const order = [
        ['react', 'external', 'before'],
        ['*react-native*', 'external', 'before'],
    ];

    const tsPaths = Object.keys(tsconfig.compilerOptions.paths || {}).reduce((acc, key) => {
        const newKey = key.replace(/\/\*/g, '');
        if (!acc.find((o) => o[0] === `${newKey}*`)) {
            acc.push([`^${newKey}*`, 'internal', 'before']);
        }

        return acc;
    }, []);

    const importOrder = [...order, ...tsPaths].reduce(
        (acc, [pattern, group, position]) => {
            acc.pathGroups.push({
                pattern,
                group,
                position,
            });
            acc.pathGroupsExcludedImportTypes.push(pattern);
            return acc;
        },
        {
            pathGroups: [],
            pathGroupsExcludedImportTypes: [],
            internalRegex: `^@(${tsPaths.map((o) => o[0].replace(/\*|@/g, '')).join('|')})`,
        }
    );

    return importOrder;
}
