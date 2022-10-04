import { Request, Response, NextFunction } from 'express';
import HttpException from '../../shared/http.exception';

class IdValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    const { id } = request.params;

    if (!id || typeof +id !== 'number') {
      throw new HttpException(406, 'The id you\'re trying to access are not valid');
    }

    next();
  }
}

export default IdValidation;
