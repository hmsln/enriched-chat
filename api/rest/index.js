const express = require('express');
const app = express();

module.exports = function () {
	
	const customer = require('./customer');
	app.use('/customer', require('./routes/customer')(customer));
	
	return app;
}