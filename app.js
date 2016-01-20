var express = require('express');
var app = express();
var morgan  = require('morgan');
var swig = require('swig');
var routes = require('./routes');
var socketio = require('socket.io');
var server = app.listen(3000, function(){
	console.log('server listening');
});
var io = socketio.listen(server);


swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
//This tells express to log via morgan
//and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'))

//gives access to static files
app.use(express.static('public'));

//does get/post based on routes module.export
app.use('/', routes(io));




















// var output;
// var people = {
// 	1:{name: 'Gandalf'},
// 	2:{name: 'Frodo'},
// 	3:{name: 'Hermione'}
// };

// var title = "Template Madness Y'all";
// var locals = {title:title, people:people};


// app.get('/swiggums', function(request, response){
// 	response.render('index', locals);
// });

// app.use(function(response, request, next){
// 	output = "";
// 	next();
// });

// app.use('/special', function(request, response, next){
// 	output += "Hey, special person.\n";
// 	next();
// });

// app.get('/', function(request, response, next){
// 	output += "Yooooooooo\n";
// 	next();
// });


// app.get('/news', function(request, response, next){
// 	output += "Hey, there's some Bird News!\n";
// 	next();
// });

// app.use(function(request, response){
// 	//output += request.method+" "+request.path+" "+response.statusCode;
// 	response.send(output);
// });