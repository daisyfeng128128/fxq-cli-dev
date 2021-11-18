#!/usr/bin/env node

const importLocal = require('import-local')

if(importLocal(__filename)){
  // 使用的本地的脚手架文件
  require('npmlog').info('cli', '正在使用 fxq-cli-dev 本地版本')
}else{
  require('../lib')(process.argv.slice(2));
}