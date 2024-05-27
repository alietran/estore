export class authRO {
  token: string;
  expiresInSeconds: number;
  user: userInfoRO;
}

export class userInfoRO {
  firstName: string;
  lastName: string;
}
