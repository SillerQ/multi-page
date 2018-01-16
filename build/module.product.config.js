/**
 * @file 生产环境webpack module配置
 * @author Auven
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const moduleConfig = require('./inherit/module.config');

moduleConfig.rules.push.apply(moduleConfig.rules, [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
        'postcss-loader'
      ]
    })
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
        'postcss-loader',
        'less-loader'
      ]
    })
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
        'postcss-loader',
        'sass-loader'
      ]
    })
  }
]);

module.exports = moduleConfig;
