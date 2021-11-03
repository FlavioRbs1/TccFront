import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string |any;
  senha: string | any;
  loginError: boolean | any;
  tipoUser: string | any;
  errors: string[] = [];
  _login: string | any;
  _senha: string | any;
  user:string|any;
  usuarioAutenticado:boolean=false;





  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {  }
  onSubmit() { }

  
  loga() {
    this.loginService.fazerLogin(this.senha,this._senha,this.user,this.tipoUser)
  }
  
  getLogin(){
    this.loginService.verificaLogin(this.login).subscribe(
      response => this.tipoUser=response, errorResponse => this.tipoUser = null
    );
    this.getSenha();
    this.getNome();
  }
  getSenha(){
    this.loginService.verificaSenha(this.login).subscribe(
      response=> this._senha = response,errorResponse => this._senha = null
    )
  }   
  getNome(){
    this.loginService.verificaNome(this.login).subscribe(
      response=> this.user = response,errorResponse => this.user = null
    )
  }
    
  }

