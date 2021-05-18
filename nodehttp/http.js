//http 这个模块专门复制编写服务器  http://nodejs.cn/api/http.html

//1. 加载http核心模块
var http = require('http')

// 2.使用createServer()创建一个web服务器

var server = http.createServer()


//当客户端发送


//request 请求事件处理函数，需要接受两个参数：
// Request 请求对象
// response 响应对象
// 响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到客户端请求了,请求路径是'+request.url)
    console.log('收到客户端请求了,请求端口是'+request.socket.remotePort+request.socket.remoteAddress);
    if(request.url==='/'){
        response.end('index page')//write 可以写多次，但一定要end结束
    }else if(request.url==='/index'){
        response.end('index page')//响应内容只能是二进制或者字符串
    }else if(request.url==='/product'){
        var product = [
            {
                name:'张',
                age:10,
            },
            {
                name:'李',
                age:15,
            },
            {
                name:'熊',
                age:14,
            }
        ]
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end(JSON.stringify(product))
    }
    else{
        response.end('404 NOT FOUND')
    }

})

//设置端口
server.listen(3000,function(){
    console.log('服务器启动成功，通过127.0.0.1:3000')
})