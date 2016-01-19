var express = require('express');
var app = express();
var swig = require('swig');
var output;
var people = {
	1:{name: 'Gandalf'},
	2:{name: 'Frodo'},
	3:{name: 'Hermione'}
};

var title = "Template Madness Y'all";
var locals = {title:title, people:people};

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');


app.use(function(response, request, next){
	output = "";
	next();
});

app.use('/special', function(request, response, next){
	output += "Hey, special person.\n";
	next();
});

app.get('/', function(request, response, next){
	output += "Yooooooooo\n";
	next();
});

app.get('/swiggums', function(request, response){
	response.render('index', locals);
});

app.get('/news', function(request, response, next){
	output += "Hey, there's some Bird News!\n";
	next();
});

app.use(function(request, response){
	//output += request.method+" "+request.path+" "+response.statusCode;
	response.send(output);
});


app.listen(3000, function(){
	console.log('server listening');
});