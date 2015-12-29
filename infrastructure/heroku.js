var heroin = require('heroin-js');
var configurator = heroin("7f1cd912-6399-4673-a18e-3b24f827ef3f", {debug: false});

configurator.export('book-stock').then(function (result) {
  console.log(result);
});

configurator(
  {
    name: 'book-stock-test',
    region: 'us',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {MONGOLAB_URI: 'mongodb://heroku_rx48mcn1:cosa2l9r845lc6q1uso70prlrv@ds037175.mongolab.com:37175/heroku_rx48mcn1'},
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    collaborators: ['miroslaw.kucharzyk@schibsted.pl',
      'wojciech.kabala@schibsted.pl',
      'pawel.gol@schibsted.pl',
      'jakub@plan3.se'],
    features: {
      'runtime-dyno-metadata': {enabled: false},
      'log-runtime-metrics': {enabled: false},
      'http-session-affinity': {enabled: false},
      preboot: {enabled: false},
      'http-shard-header': {enabled: false},
      'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: [],
    domains: ['book-stock-test.herokuapp.com']
  })