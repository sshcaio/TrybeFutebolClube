import * as Sinon from 'sinon';
import * as Chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

Chai.use(chaiHttp);

describe('From the root', () => {
  describe('When the app is started', () => {
    describe('Successfully', () => {
      it('should log the listened port on the console', async () => {
        Chai.expect(app.listen).to.exist;
      })
    })
  })
  describe('When a GET request is sent', () => {
    describe('And succeeds', () => {  
      it('should return a 200 status and a OK', async () => {
        const response = await Chai.request(app).get('/').send();
        Chai.expect(response.status).to.equal(200);
        Chai.expect(response.body.ok).to.exist;
        Chai.expect(response.body.ok).to.be.true;
      });
    });
  });
});
