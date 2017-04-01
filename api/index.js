const express = require('express');
const bodyParser = require('body-parser')

module.exports = function () {
	const app = express();
	
	const db = require('./db');
	db();
	
	app.use(function (req, res, next) {
		req.locals = {};
		next();
	});
	
	app.use(bodyParser.json());
	
	app.use('/rest', require('./rest')());
	
	return app;
}