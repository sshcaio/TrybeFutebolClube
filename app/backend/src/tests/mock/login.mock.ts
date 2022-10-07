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

const MissingPass: object = {
  email: 'decaxias@ateseropa.com',
}

const MissingEmail: object = {
  password: '5x1zumbi',
}

export {
  Login,
  WrongEmail,
  WrongPassword,
  MissingPass,
  MissingEmail,
};
