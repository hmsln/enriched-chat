const mongoose = require('mongoose');

const customerSchema = {
	name: String
};

const Customer = mongoose.model('customer', customerSchema);

module.exports = {
	model: Customer,
	create: function (obj) {
		var newCustomer = new Customer(obj);
		return newCustomer.save();
	},
	delete: function (id) {
		return Customer.remove({_id: id}).exec();
	},
	read: function (id) {
		return Customer.findById(id).exec();
	},
	update: function (id, obj) {
		return Customer.update({_id: id}, obj)
	}
}