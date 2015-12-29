var request = require('supertest');
var assert = require('assert');
var db = require('../inMemoryDb')();
var routes = require('../routes')(db);
var app = require('../app')(routes);

describe('POST /isbn', function(){
  it('respond with json', function(done){
    request(app)
      .post("/stock")
      .send({"isbn": "1234567890", "count": "3"})
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function(err, res) {
        if(err) return done(err);
        assert.equal(res.body.isbn, "1234567890");
        done()
      });
  });

  it('get book by isbn', function(done){
    request(app)
      .get("/stock/1234567890")
      .expect(200, function(err, res) {
        if(err) return done(err);
        assert.equal(res.body.isbn, "1234567890");
        assert.equal(res.body.count, "3");
        done()
      });
  });

  it('get all books', function(done) {
    request(app)
      .get('/stock')
      .expect('Content-Type', /json/)
      .expect(200, function(err, res){
        if(err) return done(err);
        assert.equal(res.body.length, 1)
        done();
      })
  });


});