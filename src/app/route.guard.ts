import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
// import { AuthService } from "./register/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(
    private router: Router,
    // private authService: AuthService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    let user = sessionStorage.getItem('token');
    if (user) {
      return new Observable((observer: any) => {
        observer.next(true);
        return;
      })
    }
    else {
      this.router.navigate(['/differ-service-address']);
      return false;
    }
  }

}
