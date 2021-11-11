import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  listaUsuario:Usuarios[]|any;
  usuario: Usuarios|any ;
  success:Boolean = false;
  errors: String []|any;
  tipos:String[]|any;
  situacoes:String[]=["Liberado"];
  
  constructor(
    private service: UsuariosService) { 
    this.usuario = new Usuarios();
    this.tipos = ["USUARIO","GESTOR","ADMIN"];
    this.situacoes = ["Bloqueado","Liberado"]
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(
      resposta => this.listaUsuario = resposta
    );
    this.busca();
    
  }
  onSubmit(){
    this.service.salvar(this.usuario).subscribe(
      response => this.usuario = response,errorResponse => this.usuario = new this.usuario()
      );
      alert('Usuario salvo com sucesso')
     this.busca();
  }
  
  busca() {
    this.service.getUsuarios().subscribe(
      resposta => this.listaUsuario = resposta
    );
  }
}




