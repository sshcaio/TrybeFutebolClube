import { Request, Response } from 'express';
import UsersService from '../services/users.services';

class UsersController {
  static async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const result = await UsersService.login(email, password);
    return response.status(200).json(result);
  }

  static async loginValidate(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;
    const result = await UsersService.loginValidate(authorization as string);
    return response.status(200).json(result);
  }
}

export default UsersController;
