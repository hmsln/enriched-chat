const express = require('express');
const app = express();

module.exports = function (customer) {
	
	app.post('/create', function (req, res, next) {
    	customer.create(req.body)
		.then(function (createdCustomer) {
			req.locals.createOp = createdCustomer;
			next();
		}, function (err) {
		
		});
    },
    function (req, res) {
      	res.json(req.locals.createOp);
      	res.end();
	});
	
	app.delete('/delete/:id', function (req, res, next) {
		customer.delete(req.params.id)
		.then(function (deleteResponse) {
			req.locals.deleteOp = {n: deleteResponse.result.n};
			next();
		}, function (err) {
		
		})
	},
	function (req, res) {
		res.json(req.locals.deleteOp);
		res.end();
	});
	
	app.get('/read/:id', function (req, res, next) {
		customer.read(req.params.id)
		.then(function (readCustomer) {
			req.locals.readOp = readCustomer;
			next();
		}, function (err) {
		
		})
	},
	function (req, res) {
		res.json(req.locals.readOp);
		res.end();
	});
	
	app.put('/update/:id', function (req, res, next) {
		return customer.update(req.params.id, req.body)
		.then(function (updateResponse) {
			req.locals.updateOp = {nModified: updateResponse.nModified};
			next();
		}, function (err) {
			
		});
	},
	function (req, res) {
		res.json(req.locals.updateOp);
		res.end();
	});
	
	return app;
}