import * as Sinon from 'sinon';
import * as Chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/MatchModel';
import User from '../database/models/UserModel';
import IMatch from '../interfaces/match.interface';
import * as Mock from './mock';

Chai.use(chaiHttp);

describe('From the /matches endpoint', () => {
  describe('When a GET request is sent', () => {
    describe('Without any filters', () => {
      describe('And succeeds', () => {
        before(() => {
          Sinon.stub(Match, 'findAll').resolves(Mock.Matches as Match[])
        });
        after(() => {
          Sinon.restore();
        });
        it('should return a 200 status and the championship match list', async () => {
          const response = await Chai.request(app).get('/matches');
          Chai.expect(response.status).to.equal(200);
          Chai.expect(response.body).to.deep.equal(Mock.Matches);
        });
      });
      describe('And fails', () => {
        before(() => {
          Sinon.stub(Match, 'findAll').resolves(undefined)
        });
        after(() => {
          Sinon.restore();
        });
        it('should return a 500 status and a server error', async () => {
          const response = await Chai.request(app).get('/matches');
          Chai.expect(response.status).to.equal(500);
          Chai.expect(response.body.message).to.equal('Internal server error');
        });
      });
    });

    describe('With a filter', () => {
      describe('That returns only in progress matches', () => {
        describe('And succeeds', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(Mock.Unfinished as Match[])
          });
          after(() => {
            Sinon.restore();
          });
          it('should return a 200 status and the unfinished matches', async () => {
            const response = await Chai.request(app).get('/matches?inProgress=true');
            Chai.expect(response.status).to.equal(200);
            response.body.forEach((match: IMatch) => {
              Chai.expect(match.inProgress).to.be.true;
            });
          });
        });

        describe('And fails', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(Mock.Matches as Match[]);
          });
          after(() => {
            Sinon.restore();
          });

          it(`should return a 500 status and a server error
          if a finished match is found`, async () => {
            const response = await Chai.request(app).get('/matches?inProgress=true');
            Chai.expect(response.status).to.equal(500);
            const progress: boolean = response.body.some((match: IMatch) => {
              match.inProgress === false;
            });
            Chai.expect(progress).to.be.true;
            Chai.expect(response.body.message).to.equal('Internal server error');
          });
        });

        describe('And fails', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(undefined)
          });
          after(() => {
            Sinon.restore();
          });

          it(`should return a 500 status and a server error
          if nothing is found`, async () => {
            const response = await Chai.request(app).get('/matches?inProgress=true');
            Chai.expect(response.status).to.equal(500);
            Chai.expect(response.body.message).to.equal('Internal server error');
          });
        });
      });

      describe('That returns only finished matches', () => {
        describe('And succeeds', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(Mock.Finished as Match[])
          });
          after(() => {
            Sinon.restore();
          });
          it('should return a 200 status and the finished matches', async () => {
            const response = await Chai.request(app).get('/matches?inProgress=false');
            Chai.expect(response.status).to.equal(200);
            response.body.forEach((match: IMatch) => {
              Chai.expect(match.inProgress).to.be.false;
            });
          });
        });

        describe('And fails', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(Mock.Matches as Match[]);
          });
          after(() => {
            Sinon.restore();
          });

          it(`should return a 500 status and a server error
          if an unfinished match is found`, async () => {
            const response = await Chai.request(app).get('/matches?inProgress=false');
            Chai.expect(response.status).to.equal(500);
            const progress: boolean = response.body.some((match: IMatch) => {
              match.inProgress === true;
            });
            Chai.expect(progress).to.be.true;
            Chai.expect(response.body.message).to.equal('Internal server error');
          });
        });

        describe('And fails', () => {
          before(() => {
            Sinon.stub(Match, 'findAll').resolves(undefined)
          });
          after(() => {
            Sinon.restore();
          });

          it(`should return a 500 status and a server error
          if nothing is found`, async () => {
            const response = await Chai.request(app).get('/matches?inProgress=false');
            Chai.expect(response.status).to.equal(500);
            Chai.expect(response.body.message).to.equal('Internal server error');
          });
        });
      })
    })
  });

  describe('When a POST request is sent', () => {
    describe('And succeeds', () => {
      before(() => {
        Sinon.stub(User, 'findByPk').resolves({ ...Mock.Users[0] } as User)
        Sinon.stub(Match, 'create').resolves({ ...Mock.CreatedMatch } as Match)
      });
      after(() => {
        Sinon.restore();
      });
  
      it('should return a 201 status and the new match', async () => {
        const response = await Chai.request(app).post('/matches')
          .send(Mock.NewMatch).set('authorization', Mock.Token);
        Chai.expect(response.status).to.equal(201);
        Chai.expect(response.body).to.equal(Mock.CreatedMatch);
      });
    });

    describe('And fails', () => {
      before(() => {
        Sinon.stub(User, 'findByPk').resolves(undefined)
        Sinon.stub(Match, 'create').resolves(undefined)
      });
      after(() => {
        Sinon.restore();
      });
  
      it(`should return a 401 status and a message
      when unauthorized`, async () => {
        const response = await Chai.request(app).post('/matches').send(Mock.NewMatch);
        Chai.expect(response.status).to.equal(401);
        Chai.expect(response.body.message).to.equal('Token must be a valid token');
      });

      it(`should return a 401 status and a message
      when both teams are the same`, async () => {
        const response = await Chai.request(app).post('/matches').send(Mock.SameMatch);
        Chai.expect(response.status).to.equal(401);
        Chai.expect(response.body.message).to
          .equal('It is not possible to create a match with two equal teams');
      });

      it(`should return a 404 status and a message
      when can't find a team`, async () => {
        const response = await Chai.request(app).post('/matches').send(Mock.NoMatch);
        Chai.expect(response.status).to.equal(404);
        Chai.expect(response.body.message).to
          .equal('There is no team with such id!');
      });

      it(`should return a 400 status and a message
      when missing info`, async () => {
        const response = await Chai.request(app).post('/matches').send(Mock.WrongMatch);
        Chai.expect(response.status).to.equal(400);
        Chai.expect(response.body.message).to.equal('Missing data on match registration');
      });

      it(`should return a 500 status and a server error
      if match couldn't be registered`, async () => {
        const response = await Chai.request(app).post('/matches').send(Mock.NewMatch);
        Chai.expect(response.status).to.equal(500);
        Chai.expect(response.body.message).to.equal('Internal server error');
      });;
    });
  });
});

describe('From the /matches/:id/finish endpoint', () => {
  describe('When a PATCH request is sent', () => {
    describe('And succeeds', () => {
      before(() => {
        Sinon.stub(User, 'findByPk').resolves({ ...Mock.Users[0] } as User)
        Sinon.stub(Match, 'create').resolves({ ...Mock.CreatedMatch } as Match)
      });
      after(() => {
        Sinon.restore();
      });
  
      it(`should return a 200 status and a message
      confirming the end of the match`, async () => {
        const response = await Chai.request(app).patch('/matches/1/finish');
        Chai.expect(response.status).to.equal(200);
        Chai.expect(response.body.message).to.equal('Finished');
      });
    });
  });
});
