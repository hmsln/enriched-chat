const express = require('express');
const app = express();

module.exports = function () {
	
	const foo = require('./foo');
	app.use('/foo', require('./routes/foo')(foo));
	
	return app;
}