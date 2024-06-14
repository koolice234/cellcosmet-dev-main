const { basename } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/** @param {string} suffix */
module.exports = (suffix) => new HTMLWebpackPlugin({
    filename: `snippets/script-tags.${suffix}.liquid`,
    inject: false,
    minify: false,
    /**
     * @param {{
     *     htmlWebpackPlugin: {
     *         files: {
     *             css: string[];
     *             js: string[];
     *         };
     *     };
     * }} _
     */
    templateContent ({ htmlWebpackPlugin }) {
        return `${htmlWebpackPlugin.files.js.map(file =>
            `<script defer src="{{ "${basename(file)}" | asset_url }}"></script>`
        ).join('')}`.replace(/\s+/g, ' ');
    },
});
