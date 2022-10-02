import { Request, Response, NextFunction } from 'express';
import HttpException from '../../shared/http.exception';

class LoginValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    const { email, password } = request.body;

    if (!email) {
      throw new HttpException(400, 'All fields must be filled');
    }

    if (!password) {
      throw new HttpException(400, 'All fields must be filled');
    }

    next();
  }
}

export default LoginValidation;
