/**
 * @file 开发环境webpack plugins配置
 * @author Auven
 */

const pluginsConfig = require('./inherit/plugins.config.js');

/*pluginsConfig.push(
    new webpack.HotModuleReplacementPlugin()
);

pluginsConfig.push(
    new webpack.NamedModulesPlugin()
);*/

module.exports = pluginsConfig;
