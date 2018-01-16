/**
 * @file webpack resolve配置
 * @author Auven
 */

const dir = require('./base/dir');

module.exports = {
  alias: {
    '@': dir.srcRootDir
  }
};
