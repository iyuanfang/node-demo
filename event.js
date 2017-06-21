var EventEmitter=require('events');

class MyEmitter extends EventEmitter{};

var myEmitter=new MyEmitter();
myEmitter.on('event',function(a){
    console.log('event on '+a);
});

myEmitter.emit('event','a');

myEmitter.removeAllListeners('event');
myEmitter.emit('event','a');
