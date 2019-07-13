// Created By Abhishek Verma date-13-july-2019
var express=require('express');
var app=express();
var socket=require('socket.io');

// spp setup

var server=app.listen(4000,function(){
	console.log('listening to requests on port 4000');
});


// static files

app.use(express.static('public'));


//socket setup

var io=socket(server);
io.on('connection',function(socket){
	console.log('made socket connection');
	socket.on('chat',function(data){
		io.sockets.emit('chat',data);
	});
	socket.on('typing',function(data){
		socket.broadcast.emit('typing',data);
	});

});

	
