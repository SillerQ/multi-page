/**
 * @file 生产环境webpack plugins配置
 * @author Auven
 */

const webpack = require('webpack');
const pluginsConfig = require('./inherit/plugins.config.js');

pluginsConfig.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  })
);

pluginsConfig.push(
  new webpack.HashedModuleIdsPlugin()
);

module.exports = pluginsConfig;
