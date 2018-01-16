/**
 * @file 通用webpack module配置
 * @author Auven
 */

const {resolve} = require('path');
const dir = require('../base/dir');

module.exports = {
  rules: [
    /*{ // 本来是想暴露全局$的，但是这里不需要它就可以暴露了
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      },{
        loader: 'expose-loader',
        options: '$'
      }]
    },*/
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [dir.srcRootDir, resolve('test')],
      exclude: [resolve(__dirname, '../../node_modules'), dir.vendorDir],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.js$/,
      // 最新版本的webpack，不让简写loader，所以必须加上“-loader”
      loader: 'babel-loader',
      // 不处理在这个文件夹里的ES6文件，即指定不打包的范围，必须是绝对路径
      exclude: resolve(__dirname, '../../node_modules'),
      // 指定打包的范围，必须是绝对路径
      include: dir.srcRootDir,
      query: {
        // 告诉babel如何去处理我们的ES6，以哪个版本的ES6规则来处理，这里的lastest是所有的版本
        presets: ['latest']
      }
    },
    {
      test: /\.html$/,
      loader: "html-loader"
    },
    {
      // test: /\.ejs$/,
      test: /\.tpl$/,
      loader: "ejs-loader"
    },
    {
      test: /\.(png|jpg|gif|svg)$/i,
      loaders: [
        // 这里无法使用chunkHash。。
        "url-loader?limit=10000&name=public/assets/img/[name]-[Hash:8].[ext]",
        // 压缩图片
        "image-webpack-loader"
      ]
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: dir.srcRootDir,
      loader: 'file-loader',
      options: {
        // 这里无法使用chunkHash。。
        name: 'public/assets/fonts/[name].[Hash:8].[ext]',
      },
    },
    {
      test: /.art$/,
      use: ['art-template-loader']
    }
  ]
};
