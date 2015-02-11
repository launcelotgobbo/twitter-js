var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

var twitterApp = express();
twitterApp.use(morgan('dev'));

twitterApp.engine('html', swig.renderFile);
twitterApp.set('view engine', 'html');
twitterApp.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

twitterApp.get('/', function(req, res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

twitterApp.get('/news', function(req, res) {
	res.send('On the news route which uses nodemon!');
});

var server = twitterApp.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
