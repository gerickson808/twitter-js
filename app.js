var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.send("Yooooooooo");
});

app.listen(3000, function(){
	console.log('server listening');
});