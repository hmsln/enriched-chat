const express = require('express');
const app = express();

module.exports = function (foo) {
	
	app.post('/create', foo.create);
	
	app.get('/placeholder', foo.read, function (req, res) {
		res.json(req.locals.readFoo);
		res.end();
	});
	
	return app;
}