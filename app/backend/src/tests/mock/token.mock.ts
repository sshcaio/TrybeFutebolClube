import * as jwt from 'jsonwebtoken';

const Token: string = jwt.sign(
  { userId: 1 },
  'jwt_secret',
  { expiresIn: '10d' },
);

export default Token;
