module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-min-length': [2, 'always', 5], // start with imperative VERB and give INFORMATIVE info
        'type-enum': [
            2,
            'always',
            [
                'feat', // e.g., `feat(copycat): support saying hi to copycat`
                'fix', // e.g., `fix(coycat): make copycat great again`
                'refactor', // e.g., `refactor(copycat): make copycat faster`
                'chore', // e.g., `chore(eslint): turn off annoying rules`
                'WIP', // e.g., `WIP: back soon`
                'revert', // e.g., `revert(a1bc): rollback for bug fix`  (where a1bc is the target commit hash)
                'docs', // e.g., `docs(copycat): update cat description`
                'test', // e.g., `test(copydog): prove that cat is cuter than dog`
                'merge', // e.g., `merge(develop): from branch 'feature/implement_api_copycat'`  (where develop is the target branch)
            ],
        ],
        'scope-enum': [
            2,
            'always',
            ['deps', 'release', 'ui', 'checkout', 'product', 'settings', 'transactions'],
        ],
    },
};
