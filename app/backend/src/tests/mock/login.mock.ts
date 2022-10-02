const Login: object = {
  email: 'decaxias@ateseropa.com',
  password: 'secret_admin',
};

const WrongEmail: object = {
  email: 'baixada@cruel.com',
  password: 'secret_admin',
}

const WrongPassword: object = {
  email: 'decaxias@ateseropa.com',
  password: '5x1zumbi',
}

const MissingLogin: object = {
  email: 'decaxias@ateseropa.com',
}

export {
  Login,
  WrongEmail,
  WrongPassword,
  MissingLogin,
};
