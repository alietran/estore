import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUserLogin } from "../../models/interface/auth.interface";
import { IUser } from "../../models/interface/user.interface";
import { authRO, userInfoRO } from "../../models/ro/auth.ro";

@Injectable()
export class UserService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  private loggedUserInfo: BehaviorSubject<userInfoRO> = new BehaviorSubject(
    <userInfoRO>{}
  );
  autoLogout: any;
  infoUser: userInfoRO;
  constructor(private http: HttpClient) {
    this.loadToken();
  }

  get isUserAuthenticated(): boolean {
    return this.isAuthenticated.value;
  }

  get isUserAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  get loggedUser$(): Observable<userInfoRO> {
    return this.loggedUserInfo.asObservable();
  }

  get loggedUser(): userInfoRO {
    return this.loggedUserInfo.value;
  }

  createUser(user: IUser): Observable<any> {
    const url: string = "http://localhost:5001/users/signup";
    return this.http.post(url, user);
  }

  login(account: IUserLogin): Observable<any> {
    const url: string = "http://localhost:5001/users/login";
    return this.http.post(url, account);
  }

  activateToken(token: authRO) {
    this.isAuthenticated.next(true);
    this.setAutoLogout(token.expiresInSeconds * 1000);
    this.loggedUserInfo.next(token.user);
    this.infoUser = token.user;
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated.next(false);
    clearTimeout(this.autoLogout);
  }

  loadToken() {
    const token: string | null = localStorage.getItem("token");
    const expiredTime: string | null = localStorage.getItem("expiredTime");
    if (!token || !expiredTime) {
      return;
    } else {
      const expiredIn: number =
        new Date(expiredTime).getTime() - new Date().getTime();
      if (expiredIn > 0) {
        this.isAuthenticated.next(true);
        this.loggedUserInfo.next(this.infoUser);
        this.setAutoLogout(expiredIn);
      } else {
        this.logout();
      }
    }
  }

  setAutoLogout(durations: number) {
    this.autoLogout = setTimeout(() => {
      this.logout();
    }, durations);
  }
}
