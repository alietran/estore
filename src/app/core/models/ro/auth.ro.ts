export class authRO {
  token: string;
  expiresInSeconds: number;
  user: userInfoRO;
}

export class userInfoRO {
  firstName: string;
  lastName: string;
  address?: string;
  pin?: string;
  state?: string;
  city?: string;
  email?: string;
}
