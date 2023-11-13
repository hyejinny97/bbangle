module.exports = {
    '**/*.(ts|tsx)': filenames => [
        `npx tsc --noEmit`,
        `npx eslint --fix ${filenames.join(' ')}`,
        `npx prettier --write ${filenames.join(' ')}`
    ],
    '**/node_modules/**/*': () => null
};
