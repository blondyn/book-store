var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
  name: 'book-stock-test',
  domains: ['book-stock-test.herokuapp.com'],
  formation: [{process: 'web', quantity: 1, size: 'Free'}]
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
