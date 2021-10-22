const mocha = require('mocha')
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index')

chai.use(chaiHttp);

const expect = chai.expect;

describe('/GET detail', () => {
  it('it should GET detail of movie', (done) => {
    chai.request(app)
        .get('/detail')
        .query({ t: 'The Big Bang Theory'})
        .end((err, res) => {
          if (err) done(err)

          expect(res).to.have.status(200);
          expect(res.body.status).to.be.eq(200);
          expect(res.body.message).to.be.eq('success');
          expect(res.body.data).to.be.an('object');
          done();
        });
  
  });

  it('it should send error 400 if `i` or `t` query param not exist', (done) => {
    chai.request(app)
        .get('/detail')
        .query({ s: 'The Big Bang Theory'})
        .end((err, res) => {
          if (err) done(err)

          expect(res).to.have.status(400);
          expect(res.body.status).to.be.eq(400);
          expect(res.body.message).to.be.eq(`At least one argument is required between 'i' or 't'`);
          done();
        });
  
  });

  it('it should send error 400 if query params is empty', (done) => {
    chai.request(app)
      .get('/detail')
      .end((err, res) => {
        if (err) done(err)

        expect(res).to.have.status(400);
        expect(res.body.status).to.be.eq(400);
        done()
      })
  });
  
});