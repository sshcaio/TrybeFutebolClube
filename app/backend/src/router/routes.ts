import { Router } from 'express';
import RoleValidation from '../msc/middleware/role.validation.middleware';
import UsersController from '../msc/controllers/users.controllers';
import LoginValidation from '../msc/middleware/login.validation.middleware';
import TeamsController from '../msc/controllers/teams.controllers';
import MatchesController from '../msc/controllers/matches.controllers';

const routes = Router();

routes.post('/login', LoginValidation.validate, UsersController.login);
routes.get('/login/validate', RoleValidation.validate, UsersController.loginValidate);
routes.get('/teams', TeamsController.getTeams);
routes.get('/teams/:id', TeamsController.getTeamById);
routes.get('/matches', MatchesController.getMatches);

export default routes;
