interface IToken {
  token: string,
}

interface ITokenDec {
  userId: number;
  iat: number;
  exp: number;
}

export default IToken;
export { ITokenDec };
