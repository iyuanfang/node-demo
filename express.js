var express = require('express');
console.log('fdsfdsfds');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

app.get('/list',function (req,res){
    res.send('list');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})