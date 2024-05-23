const { join } = require('path');
const { merge } = require('webpack-merge');

const base = require('./webpack.base');
const plugins = require('./plugins');

module.exports = merge(base('checkout'), {
    entry: {
        checkout: join(__dirname, '..', 'src', 'scripts-1r', 'checkout.js'),
    },
    experiments: {
        topLevelAwait: true,
    },
    plugins: [
        plugins.clean([
            'assets/checkout*',
            'snippets/script-tags.checkout.liquid',
            'snippets/style-tags.checkout.liquid',
        ]),
        plugins.cssExtract('checkout'),
        plugins.scriptTags('checkout'),
        plugins.styleTags('checkout'),
    ],
    resolve: {
        alias: {
            '@': join(__dirname, '..', 'src', 'scripts-1r'),
        },
    },
});
