/**
 * @file 通用webpack plugins配置
 * @author Auven
 */

const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dir = require('../base/dir');
const pageArr = require('../base/pageArr');

const configPlugins = [

  // 全局shimming，自动加载模块，而不必到处 import 或 require 。
  // 将jq暴露到全局范围去，并不需要结合export-loader使用，这里直接就暴露出去了。
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
  }),

  new ExtractTextPlugin({
    filename: 'public/css/[name].css?v=[contentHash:8]'
  }),

  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    // 需要注意的是，chunk的name不能相同！！！
    name: 'common/common',
    // filename: 'public/js/[name].js?v=[chunkHash:8]',
    minChunks: 4,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common/runtime'
  })
];

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'views/' + page + '.html',
    template: resolve(dir.pageDir, page + '/index.art'),
    // 压缩html
    /*minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
    },*/
    chunks: ['common/runtime', 'common/common', page]
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
