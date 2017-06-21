var express=require('express');
var app=express();

var fs=require('fs');

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

//add
app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       jdata = JSON.parse( data );
       jdata["user4"] = user["user4"];
       console.log( jdata );
       res.end( JSON.stringify(jdata));
   });
})

//get
app.get('/user/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       jdata = JSON.parse( data );
       var user = jdata["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

//delete
app.get('/deleteUser/:id',function(req,res){
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       jdata = JSON.parse( data );
       delete jdata["user"+req.params.id]
       console.log( jdata );
       res.end( JSON.stringify(jdata));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("restful应用实例，访问地址为 http://%s:%s", host, port)
});

