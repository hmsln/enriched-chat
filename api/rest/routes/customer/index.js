const express = require('express');
const app = express();

module.exports = function (customer) {
	
	app.post('/create', customer.create, function (req, res) {
		res.json(req.locals.createOp);
		res.end();
	});
	
	app.delete('/delete/:id', customer.delete, function (req, res) {
		res.json(req.locals.deleteOp);
		res.end();
	});
	
	app.get('/read/:id', customer.read, function (req, res) {
		res.json(req.locals.readOp);
		res.end();
	});
	
	app.put('/update/:id', customer.update, function (req, res) {
		res.json(req.locals.updateOp);
		res.end();
	});
	
	return app;
}