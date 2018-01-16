/**
 * @file webpack output配置
 * @author Auven
 */

const dir = require('./base/dir');

module.exports = {
  path: dir.distDir,
  // 文件有改动，覆盖原来的文件，添加新的版本号，适合小流量网站
  filename: 'public/js/[name].js?v=[chunkHash:8]',
  // 文件有改动，生成新的文件，不会覆盖原来的文件，适合大流量网站，做到无缝衔接。
  // filename: 'public/js/[name].[chunkHash:8].js',
  publicPath: '/',
  // 在按需加载（异步）模块的时候，这样的文件是没有被列在entry中的，使用这里定义的名字
  chunkFilename: "public/js/[name].js?v=[chunkHash:8]",
};
