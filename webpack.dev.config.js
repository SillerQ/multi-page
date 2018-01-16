const { resolve } = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const entryConfig = require('./build/entry.config');

let dir = require('./build/base/dir');

process.env.NODE_ENV = 'production';

module.exports = {
    devServer:{
      open: true,
      inline:true,
      contentBase: dir.distDir,
      openPage: 'views',
      overlay: true
    },
    entry: require('./build/entry.config'),
    output: require('./build/output.config'),
    resolve: require('./build/resolve.config'),
    module: require('./build/module.dev.config'),
    plugins: require('./build/plugins.dev.config')
}
