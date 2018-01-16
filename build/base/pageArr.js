/**
 * @file 获取页面数组
 * @author Auven
 */

const glob = require('glob');
const {resolve} = require('path');
const dir = require('./dir');
const options = {
  // 寻找page下面的所有页面
  cwd: dir.pageDir,
  // 这里不能异步，只能同步
  sync: true,
};

const pageArr = new glob.Glob('**/index.js', options).found;

// 一个数组，形如['index', 'login', 'register']
for (let i = 0; i < pageArr.length; i++) {
  console.log(pageArr);
  pageArr[i] = pageArr[i].substring(0, pageArr[i].lastIndexOf('/'));
}

module.exports = pageArr;
