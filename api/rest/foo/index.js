const express = require('express');
const foo = require('./model');

module.exports = {
	create: foo.create,	
	read: function (req, res, next) {
		
		var bool = foo.read();

		req.locals.readFoo = {a: 4, b: 9}
		next();
	}
};