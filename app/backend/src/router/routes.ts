import { Router } from 'express';
import RoleValidation from '../msc/middleware/role.validation.middleware';
import UsersController from '../msc/controllers/users.controllers';
import LoginValidation from '../msc/middleware/login.validation.middleware';
import TeamsController from '../msc/controllers/teams.controllers';
import MatchesController from '../msc/controllers/matches.controllers';
import TokenValidation from '../msc/middleware/token.validation.middleware';
import NewMatchValidation from '../msc/middleware/newmatch.validation.middleware';
import LeaderboardHomeController from '../msc/controllers/leaderboards.controllers';

const routes = Router();

routes.post(
  '/matches',
  TokenValidation.validate,
  NewMatchValidation.validate,
  MatchesController.postMatch,
);
routes.post(
  '/login',
  LoginValidation.validate,
  UsersController.login,
);
routes.get(
  '/login/validate',
  RoleValidation.validate,
  UsersController.loginValidate,
);
routes.get(
  '/teams',
  TeamsController.getTeams,
);
routes.get(
  '/teams/:id',
  TeamsController.getTeamById,
);
routes.get(
  '/matches',
  MatchesController.getMatches,
);
routes.patch(
  '/matches/:id',
  MatchesController.patchMatch,
);
routes.patch(
  '/matches/:id/finish',
  MatchesController.endMatch,
);
routes.get(
  '/leaderboard/home',
  LeaderboardHomeController.getTable,
);

export default routes;
