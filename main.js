// console.log('main !!!');

var fs=require("fs");

//阻塞
var data=fs.readFileSync("input.js");
console.log(data.toString());

//非阻塞
fs.readFile('input.js',function(err,data){
    console.log(data.toString());
})

var Shape=require('./shape');

shape1=new Shape(1,2);
console.log('area:'+shape1.getArea());