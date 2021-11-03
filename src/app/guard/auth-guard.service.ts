import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor( 
    private authService : LoginService,
    private router: Router

  ) { 

  }
 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |boolean {
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
      this.router.navigate(['/login']);
      return false;
  }

 
}
