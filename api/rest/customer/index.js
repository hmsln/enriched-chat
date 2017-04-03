const express = require('express');
const customer = require('./model');

module.exports = {
	create: function (obj) {
		return customer.create(obj);
	},
	delete: function (id) {
		return customer.delete(id);
	},
	read: function (id) {
		return customer.read(id);
	},
	update: function (id, obj) {
		return customer.update(id, obj);
	}
};