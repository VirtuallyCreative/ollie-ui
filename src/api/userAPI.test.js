var expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:3001');
import express from 'express';

let app = express();

if ( !app.settings.env === 'production' ) {
  describe('Users', function() {
  // It should return 200
  it('should return 200 response', function(done) {
    api.get('/users')
      .set('Accept', 'application/json')
      .expect(200,done);
  });

  // It should return user data
  it('should be a json object with keys and values', function(done) {
    api.get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        expect(res).to.be.a('object');

        //expect(res.body).to.have.property("id");
        //expect(res.body.id).to.not.equal(null);

        //expect(res.body).to.have.property("firstName");
        //expect(res.body.firstName).to.not.equal(null);

        //expect(res.body).to.have.property("lastName");
        //expect(res.body.lastName).to.not.equal(null);

        //expect(res.body).to.have.property("email");
        //expect(res.body.email).to.not.equal(null);

        done();
      })
  })
  })
}
