import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import IUser from '../../interfaces/user.interface';
import IToken from '../../interfaces/token.interface';
import User from '../../database/models/UserModel';
import HttpException from '../../shared/http.exception';

class UsersService {
  static async login(email: string, password: string): Promise<IToken> {
    const user = await User.findOne({ where: { email } }) as IUser;
    if (!user) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const token = jwt.sign(
      { userId: user.id },
      'jwt_secret',
      { expiresIn: '10d' },
    );

    return { token };
  }
}

export default UsersService;
