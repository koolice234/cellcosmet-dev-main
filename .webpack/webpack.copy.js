const { merge } = require('webpack-merge');

const base = require('./webpack.base');
const plugins = require('./plugins');

module.exports = merge(base(), {
    entry: {},
    plugins: [
        plugins.clean([
            '**/*',
            '!assets',
            '!assets/theme*',
            '!snippets',
            '!snippets/script-tags.*.liquid',
            '!snippets/style-tags.*.liquid',
        ]),
        plugins.copy(),
        // plugins.landingdynamic(),
        plugins.multisection(),
        plugins.scripts(),
    ],
});
