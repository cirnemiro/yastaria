const router = require('express').Router();
const usuarios = require('./usuarios');
const usuarios_priv = require('./usuarios_priv');
const chat = require('./chat');
const auth = require('./auth');


// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();	//Sigue corriendo en las siguientes rutas
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.use(usuarios);
router.use(chat);
router.use(auth);
router.use(usuarios_priv);

// FUNCTIONS FOR TRAINEDS

module.exports = router;