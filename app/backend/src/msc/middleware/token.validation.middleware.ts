import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../../database/models/UserModel';
import { ITokenDec } from '../../interfaces/token.interface';
import HttpException from '../../shared/http.exception';

class TokenValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;

      if (!authorization) {
        throw new HttpException(400, 'Provide a token');
      }

      const token = jwt.verify(authorization as string, 'jwt_secret') as ITokenDec;
      const { userId } = token;

      const user = await User.findByPk(userId);
      if (!user) {
        throw new HttpException(401, 'Token must be a valid token');
      }

      next();
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  }
}

export default TokenValidation;
