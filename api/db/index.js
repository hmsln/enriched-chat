const mongoose = require('mongoose');
const config = require('./config');

module.exports = function () {
	
	mongoose.connect(config.mongoUrl);
	
	mongoose.connection.on('open', function () {
		console.log('connected to mongooose');
	});
	
	mongoose.connection.on("error", function ( err ) {
      	console.log("Unable to connect to MongoDB");
    	process.exit(1);
    });
}