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
    before(() => {
      Sinon.stub(User, 'findOne').resolves({ ...Mock.Users[0] } as User)
    });
    after(() => {
      Sinon.restore();
    });

    it('should return a 200 status and a token when successful', async () => {
      const response = await Chai.request(app).post('/login').send(Mock.Login);
      Chai.expect(response.status).to.equal(200);
      Chai.expect(response.body).to.deep.equal(Mock.Token);
    });

    it('should return a 400 status when failed', async () => {
      const response = await Chai.request(app).post('/login').send(Mock.WrongLogin);
      Chai.expect(response.status).to.equal(400);
    });
  });
});