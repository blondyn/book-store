var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/library';
var db = require('./db')(url);
var routes = require('./routes')(db);
var app = require('./app')(routes);

var server = app.listen(process.env.PORT || 3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});