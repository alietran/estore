import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from "@angular/router";
import { map } from "rxjs";
import { UserService } from "../services/user/user.service";

export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(UserService).isUserAuthenticated$.pipe(
    map((isAuthenticated) => {
      return isAuthenticated
        ? true
        : createUrlTreeFromSnapshot(next, ["/home/signin"]);
    })
  );
};
