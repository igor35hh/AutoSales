var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config')();
var MongoClient = require('mongodb').MongoClient;

//var express = require('express');
//var express = require('express');
//var express = require('express');
//var express = require('express');

var app = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('auto-sales-site'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/autosales', function(err, db) {
	if(err) {
		console.log('Sorry, there is no mongo db server running.');
	} else {
		var attachDB = function(req, res, next) {
			req.db = db;
			next();
		};
		app.all('/', attachDB, function(req, res, next) {
			//Home.run(req, res, next);
		};
		http.createServer(app).listen(config.port, function() {
			console.log(
				'Successfully connected to mongodb://' + config.mongo.host + ':' + config.mongo.port,
				'\nExpress server listening on port ' + config.port
			);
		});
	}
});