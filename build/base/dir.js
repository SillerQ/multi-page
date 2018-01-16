/**
 * @file 获得项目源文件目录
 * @author Auven
 */

const path = require('path');
const dir = {};

// 项目根目录
dir.staticRootDir = path.resolve(__dirname, '../../');
// 项目业务代码根目录
dir.srcRootDir = path.resolve(dir.staticRootDir, './src');
// 存放所有不能用npm管理的第三方库
dir.vendorDir = path.resolve(dir.srcRootDir, './vendor');
// 存放各种静态资源，包括图片，字体文件
dir.assetDir = path.resolve(dir.srcRootDir, './asset');
// 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
dir.pageDir = path.resolve(dir.srcRootDir, './page');
// 存放各个页面使用到的公共资源，包括布局layout，js模块module，公共样式style
dir.commonDir = path.resolve(dir.srcRootDir, './common');
// 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
dir.componentDir = path.resolve(dir.srcRootDir, './component');

// 生成文件目录
dir.distDir = path.resolve(dir.staticRootDir, './dist');

module.exports = dir;
