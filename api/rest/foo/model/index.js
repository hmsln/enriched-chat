const mongoose = require('mongoose');

const fooSchema = {
	name: String
};

const Foo = mongoose.model('foo', fooSchema);

module.exports = {
	model: Foo,
	create: function (obj) {
		var newFoo = new Foo(obj);
		
		newFoo.save(function (err, foo) {
			if (err) {
			
			} else {
				console.log('foo saved');
			}
		});
	},
	read: function () {
		return true;
	}
}