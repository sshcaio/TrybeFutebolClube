import { Request, Response, NextFunction } from 'express';
import HttpException from '../../shared/http.exception';

class RoleValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new HttpException(400, 'Provide a token');
    }

    next();
  }
}

export default RoleValidation;
