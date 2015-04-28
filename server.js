var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false}));

app.post('/rest/cart/add', function (req, res) {
	var sess = req.session;

	if(!sess.cart){
		sess.cart = {};
	} 

	var product = req.body;
	if(!sess.cart[product.id]){
		sess.cart[product.id] = product;
		sess.cart[product.id].count = 1;
	}else{
		sess.cart[product.id].count++;
	}

	console.log(sess.cart);
	res.sendStatus(200);
});

app.get('/rest/cart/list', function(req, res){
	res.status(200).json(req.session.cart);
});

app.use(express.static('public'));

app.listen(8080);