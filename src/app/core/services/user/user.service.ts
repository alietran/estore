import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUserLogin } from "../../models/interface/auth.interface";
import { IUser } from "../../models/interface/user.interface";

@Injectable()
export class UserService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  autoLogout: any;

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  get isUserAuthenticated(): boolean {
    return this.isAuthenticated.value;
  }

  get isUserAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  createUser(user: IUser): Observable<any> {
    const url: string = "http://localhost:5001/users/signup";
    return this.http.post(url, user);
  }

  login(account: IUserLogin): Observable<any> {
    const url: string = "http://localhost:5001/users/login";
    return this.http.post(url, account);
  }

  activateToken() {
    this.isAuthenticated.next(true);
  }

  logout() {
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
        this.setAutoLogout(expiredIn * 1000);
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
