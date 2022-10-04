import * as Sinon from 'sinon';
import * as Chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/TeamModel';
import * as Mock from './mock';

Chai.use(chaiHttp);

describe('From the /teams endpoint', () => {
  describe('When a GET request is sent', () => {
    describe('And succeeds', () => {
      before(() => {
        Sinon.stub(Team, 'findAll').resolves(Mock.Teams as Team[])
      });
      after(() => {
        Sinon.restore();
      });
  
      it('should return a 200 status and the championship team list', async () => {
        const response = await Chai.request(app).get('/teams');
        Chai.expect(response.status).to.equal(200);
        Chai.expect(response.body).to.deep.equal(Mock.Teams);
      });
    });

    describe('And fails', () => {
      before(() => {
        Sinon.stub(Team, 'findAll').resolves(undefined)
      });
      after(() => {
        Sinon.restore();
      });
  
      it('should return a 500 status and a server error', async () => {
        const response = await Chai.request(app).get('/teams');
        Chai.expect(response.status).to.equal(500);
        Chai.expect(response.body.message).to.equal('Internal server error');
      });
    });
  });
});

