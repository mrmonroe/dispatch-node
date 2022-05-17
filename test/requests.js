/* eslint-disable no-undef */
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../apiserver');
const Requests = require('../utils/schemas/requests');
const db = require('../utils/dispatchDB');

chai.use(chaiHttp);

// keep server up for multiple requests and close at the end
const requester = chai.request(app).keepOpen();

describe('Server', () => {
  describe('Request API', () => {
    it('should post a new request', (done) => {
      requester
        .post('/api/v1/requests')
        .send({
          companyName: 'test',
        })
        .then((res) => {
          expect(res.body).haveOwnProperty('companyName');
        });
    });

    it('get should have companyName', (done) => {
      requester
        .get('/api/v1/requests')
        .type('application/json')
        .then((res) => {
          expect(res.body).haveOwnProperty('companyName');
        })
        .end(() => done());
    });

    const recordID = {};
    it('get should find one record', (done) => {
      requester
        .get('/api/v1/requests')
        .query({ companyName: 'test' })
        .type('application/json')
        .then((res) => {
          expect(res.body).haveOwnProperty('companyName');
          expect(res.body).haveOwnProperty('_id');
          expect(res.body).to.have.length(3);
          recordID = res.body._id;
        })
        .then(() => done());
    });

    it('get should update companyName', (done) => {
      requester
        .put(`/api/v1/requests/${recordID}`)
        .send({ companyName: 'matt' })
        .type('application/json')
        .then((res) => {
          expect(res.body).haveOwnProperty('companyName');
          expect(res.body.companyName).equal('matt');
        })
        .then(() => done());
    });
  }).afterAll(() => {
    //db.dropCollection( 'requests' );
    requester.close();
  });
});
