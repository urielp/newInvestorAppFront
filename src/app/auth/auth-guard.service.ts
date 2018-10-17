import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './authenticate.service';


@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getUserStatus()) {
      return true;
    }
    else {
      this.router.navigate(['./signin']);
      return false;
    }
  }
}
