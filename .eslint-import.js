function getImportOrder() {
    const tsconfig = require('./tsconfig.json');

    const order = [
        ['react', 'external', 'before'],
        ['*react-native*', 'external', 'before'],
        ['@react-navigation/*', 'external', 'before'],
        ['react-*', 'external', 'before'],
    ];

    const tsPaths = Object.keys(tsconfig.compilerOptions.paths || {}).reduce((acc, key) => {
        const newKey = key.replace(/\/\*\^/g, '').replace('/*', '');
        console.log('newKey', newKey);
        if (!acc.find((o) => o[0] === `${newKey}/**/*`)) {
            acc.push([`${newKey}/**/*`, 'internal', 'after', true]);
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
            internalRegex: `^@(${tsPaths
                .map((o) => o[0].replace(/(@|\/*)/g, '').replace(/\**/g, ''))
                .join('|')})`,
        }
    );

    return importOrder;
}

console.log(getImportOrder());

module.exports = getImportOrder;
