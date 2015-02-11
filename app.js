var express = require('express');
var morgan = require('morgan');

var twitterApp = express();
twitterApp.use(morgan('dev'));

twitterApp.get('/', function(req, res) {
	res.send('Hello World!');
});

twitterApp.get('/news', function(req, res) {
	res.send('On the news route which uses nodemon!');
});

var server = twitterApp.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
