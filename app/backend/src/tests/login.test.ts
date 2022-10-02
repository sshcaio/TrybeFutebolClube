import * as Sinon from 'sinon';
import * as Chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';
import * as Mock from './mock';

Chai.use(chaiHttp);

describe('From the /login endpoint', () => {
  describe('When a POST request is sent', () => {
    describe('And succeeds', () => {
      before(() => {
        Sinon.stub(User, 'findOne').resolves({ ...Mock.Users[0] } as User)
      });
      after(() => {
        Sinon.restore();
      });
  
      it('should return a 200 status and a token', async () => {
        const response = await Chai.request(app).post('/login').send(Mock.Login);
        Chai.expect(response.status).to.equal(200);
        Chai.expect(response.body.token).to.exist;
      });
    });

    describe('And fails', () => {
      before(() => {
        Sinon.stub(User, 'findOne').resolves(undefined)
      });
      after(() => {
        Sinon.restore();
      });

      it(`should return a 400 status and missing 
      fields message when missing data`, async () => {
        const response = await Chai.request(app).post('/login').send(Mock.MissingLogin);
        Chai.expect(response.status).to.equal(400);
        Chai.expect(response.body.message).to.equal('All fields must be filled');
      });
  
      it(`should return a 401 status and incorrect 
      fields message when receiving wrong email`, async () => {
        const response = await Chai.request(app).post('/login').send(Mock.WrongEmail);
        Chai.expect(response.status).to.equal(401);
        Chai.expect(response.body.message).to.equal('Incorrect email or password');
      });
  
      it(`should return a 401 status and incorrect 
      fields message when receiving wrong password`, async () => {
        const response = await Chai.request(app).post('/login').send(Mock.WrongPassword);
        Chai.expect(response.status).to.equal(401);
        Chai.expect(response.body.message).to.equal('Incorrect email or password');
      });
    });
  });
});