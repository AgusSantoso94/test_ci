const mocha = require('mocha')
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index')

chai.use(chaiHttp);

const expect = chai.expect;

describe('/GET search', () => {
  it('it should GET list of movies', (done) => {
    chai.request(app)
        .get('/search')
        .query({ s: 'Dragon Ball'})
        .end((err, res) => {
          if (err) done(err)

          expect(res).to.have.status(200);
          expect(res.body.status).to.be.eq(200);
          expect(res.body.message).to.be.eq('success');
          expect(res.body.data.searchData).to.be.an('array');
          done();
        });
  });

  it('it should send error 400 if `s` query param not exist', (done) => {
    chai.request(app)
        .get('/search')
        .query({ t: 'Dragon Ball'})
        .end((err, res) => {
          if (err) done(err)

          expect(res).to.have.status(400);
          expect(res.body.status).to.be.eq(400);
          expect(res.body.message).to.be.eq(`The 's' query param is required`);
          done();
        });
  
  });

  it('it should send error 400 if query params is empty', (done) => {
    chai.request(app)
      .get('/search')
      .end((err, res) => {
        if (err) done(err)

        expect(res).to.have.status(400);
        expect(res.body.status).to.be.eq(400);
        done()
      })
  });
  
});