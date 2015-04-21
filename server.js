var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false}));

app.post('/rest/cart/add', function (req, res) {
	//var msg = req.body.msg;
	var sess = req.session;
	if(sess.views){
		sess.views++;
	}else{
		sess.views = 1;
	}
	//console.log(req.body);
	console.log(sess.views);
  	res.send(sess.views);
});

app.use(express.static('public'));

app.listen(8080);