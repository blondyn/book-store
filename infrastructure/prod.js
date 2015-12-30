var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
  name: 'book-stock',
  domains: ['book-stock.herokuapp.com'],
  formation: [{process: 'web', quantity: 1, size: 'Free'}],
  log_drains: ['syslog://data.logentries.com:13636']
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
