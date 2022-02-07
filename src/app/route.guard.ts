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
    // let user = sessionStorage.getItem('token');
    // if (user) {
    //   let reqObj = { token: user };
    //   return new Observable((observer: any) => {
    //     this.authService.CheckValidToken(reqObj).subscribe((result: any) => {
    //       console.log(result, "result");
    //       if (result['code'] == 200) {
    //         observer.next(true);
    //         return; //this.router.navigate(['/dashboard']);
    //       }
    //       else {
    //         console.log("in else condition")
    //         this.router.navigate(['/login']);
    //         observer.next(false);
    //         return;
    //       }
    //     }, (err: any) => {
    //        this.router.navigate(['/login']);
    //        observer.next(false);
    //        return;
    //     })
    //   })
    // }
    // else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }

}
