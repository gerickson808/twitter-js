var router = require('express').Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

bodyParser.json();
bodyParser.urlencoded();

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
	res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

// say that a client GET requests the path /users/nimit
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

// say that a client GET requests the path /tweets/:id
router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { title: 'Twitter.js - Post #'+id, tweets: list } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;