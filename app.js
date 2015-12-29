var bodyParser = require('body-parser');
var errors = require('./errors');
var express = require('express');

module.exports = function(routes) {
  var app = express();

  app.use(bodyParser.json());
  app.post('/stock', routes.updateStock);
  app.get('/stock', routes.showStock);
  app.get('/stock/:isbn', routes.checkIsbn);
  app.get('/copies/:isbn', routes.copiesLeft);
  app.use(errors.clientError);
  app.use(errors.serverError);

  return app;
};



