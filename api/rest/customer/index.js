const express = require('express');
const customer = require('./model');

module.exports = {
	create: function (req, res, next) {console.log(req.body);
		customer.create(req.body)
		.then(function (createdCustomer) {
			req.locals.createOp = createdCustomer;
			next();
		}, function (err) {
			
		});
	},
	delete: function (req, res, next) {
		customer.delete(req.params.id)
		.then(function (deleteResponse) {
			req.locals.deleteOp = {n: deleteResponse.result.n};
			next();
		}, function (err) {
		
		})
	},
	read: function (req, res, next) {
		customer.read(req.params.id)
		.then(function (readCustomer) {
			req.locals.readOp = readCustomer;
			next();
		}, function (err) {
		
		})
	},
	update: function (req, res, next) {
		customer.update(req.params.id, req.body)
		.then(function (updateResponse) {
			req.locals.updateOp = {nModified: updateResponse.nModified};
			next();
		}, function (err) {
			
		});
	}
};