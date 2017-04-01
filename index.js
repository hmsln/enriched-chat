const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/api', require('./api')());

app.listen(process.env.PORT || 8000, function () {
	console.log('Server is listening on port ' + (process.env.PORT || 8000));
})