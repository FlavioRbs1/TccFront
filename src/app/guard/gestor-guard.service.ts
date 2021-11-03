import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GestorGuard implements CanActivate {

  constructor(
    private authService:LoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |boolean {
    if(this.authService.usuarioGestorAutenticado()){
      return true;
    }
      alert('Você não tem permissão para acessar esta rotina')
      this.router.navigate(['/home']);
      return false;
  }
}
