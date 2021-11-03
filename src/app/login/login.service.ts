import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  login:string=""
  senha:string=""
  usuarioAutenticado:boolean=false
  usuarioAdmin:boolean=false
  usuarioGestor:boolean=false
  
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }


  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
  usuarioAdminAutenticado(){
    return this.usuarioAdmin;
  }
  usuarioGestorAutenticado(){
    return this.usuarioGestor;
  }


  fazerLogin(senhafront:string,senhaServ:string,user:string,tipo:string){
    if(senhaServ === senhafront){
      this.usuarioAutenticado = true
      if(tipo === "ADMIN"){
        this.usuarioAdmin = true;
        this.usuarioGestor = true
      }
      if(tipo === "GESTOR"){
        this.usuarioGestor = true
      }
      alert(user+' seja bem vindo(a)!');
      this.router.navigate(['/home']);
    }else{
      alert('Usuário e/ou senha incorreta.')
      this.usuarioAutenticado = false
      window.location.href='/login'
    }
  }

  fazerLogoff(){
    this.usuarioAutenticado = false
    this.usuarioAdmin = false;
    this.usuarioGestor = false
    this.router.navigate(['/login']);
  }

  verificaLogin(login:string):Observable<String>{
    const headers = new HttpHeaders().set('Content-Type','text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/usuarios/getlogin/${login}`,{headers, responseType: 'text' as const });
  }
  verificaSenha(login:string):Observable<String>{
    const headers = new HttpHeaders().set('Content-Type','text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/usuarios/getsenha/${login}`,{headers, responseType: 'text' as const }); 
  }
  verificaNome(login:string):Observable<String>{
    const headers = new HttpHeaders().set('Content-Type','text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/usuarios/getnome/${login}`,{headers, responseType: 'text' as const }); 
  }
}
