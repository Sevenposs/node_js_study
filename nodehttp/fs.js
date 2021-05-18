//Node 中，采用EScmaScript进行编码，没有dom，bom等操作
//浏览器没有文件操作的能力
//成功 data 数据  error null     失败 data null ，error 错误对象


var fs = require('fs')

fs.readFile('./hello.txt',function(error,data){
    if(error){
        console.log('文件读取失败');
    }else{
        console.log(data.toString());
    }
     
})
//读文件
fs.writeFile('./你好.md','51212',function(error,data){
    console.log('写入成功');
})
//写文件