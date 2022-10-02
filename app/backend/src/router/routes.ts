import { Router } from 'express';
import UsersController from '../msc/controllers/users.controllers';
import LoginValidation from '../msc/middleware/login.validation.middleware';

const routes = Router();

routes.post('/login', LoginValidation.validate, UsersController.login);

export default routes;
