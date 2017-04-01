const express = require('express');

module.exports = function () {
	const app = express();
	
	const db = require('./db');
	db();
	
	app.use(function (req, res, next) {
		req.locals = {};
		next();
	});
	
	app.use('/rest', require('./rest')());
	
	return app;
}