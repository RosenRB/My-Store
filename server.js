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
        sess.cart.products = {}
        sess.cart.totalPrice = 0;
	} 

	var product = req.body;
	if(!sess.cart.products[product.id]){
		sess.cart.products[product.id] = product;
		sess.cart.products[product.id].count = 1;
	}else{
        sess.cart.products[product.id].count++;
	}
    sess.cart.totalPrice += product.price;
    
	console.log(sess.cart);
	res.sendStatus(200);
});

app.get('/rest/cart/list', function(req, res){
	res.status(200).json(req.session.cart);
});

app.use(express.static('public'));

app.listen(8080);