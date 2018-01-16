const { resolve } = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const entryConfig = require('./build/entry.config');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: require('./build/entry.config'),
    output: require('./build/output.config'),
    resolve: require('./build/resolve.config'),
    module: require('./build/module.product.config'),
    plugins: require('./build/plugins.product.config')
}
