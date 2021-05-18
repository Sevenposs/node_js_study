//用户自己编写的文件模块,相对路径必须加./
//没有全局作用域，只有模块作用域,类似文件作用域，内部不能访问外部，外部也访问不了内部
//require 1.加载文件模块并执行代码 2.


var foo = 'aaa'

var bExports = require('./userb')//后缀名.js可以省略

console.log(foo,bExports.foo,bExports.add(50,60));