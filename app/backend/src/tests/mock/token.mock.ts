import * as jwt from 'jsonwebtoken';

const Token: string = jwt.sign(
  { userId: 1 },
  '09302022',
  { expiresIn: '30d' },
);

export default Token;
