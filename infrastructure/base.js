var base = {
  //name: 'book-stock-test',
  region: 'us',
  maintenance: false,
  stack: 'cedar-14',
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
  //formation: [{process: 'web', quantity: 1, size: 'Free'}],
  log_drains: [],
  //domains: ['book-stock-test.herokuapp.com']
};


module.exports = base;