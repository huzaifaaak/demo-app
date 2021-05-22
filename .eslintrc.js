const { pathGroups, pathGroupsExcludedImportTypes, internalRegex } = require('./.eslint-import')();

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
        'prettier/prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        jest: true,
    },
    rules: {
        'no-undef': 'off',
        'no-shadow': 'off',
        'lines-between-class-members': ['warn', 'always'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'react-native/no-inline-styles': 'off',
        'import/default': 'off',
        'import/no-named-as-default': 'off',
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
        // 'import/internal-regex': internalRegex,
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
