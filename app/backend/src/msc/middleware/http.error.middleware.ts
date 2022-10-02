import { NextFunction, Request, Response } from 'express';
import HttpException from '../../shared/http.exception';

const httpErrorMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const { status, message } = error as HttpException;
  response.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
