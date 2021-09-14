import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuarios|any ;
  success:Boolean = false;
  errors: String []|any;
  
  constructor(
    private service: UsuariosService) { 
    this.usuario = new Usuarios();
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(
      resposta => this.usuario = resposta
    );
    
  }

  onSubmit(){
    alert('clicou');
    console.log()
    this.service
      .salvar(this.usuario)
      .subscribe(response =>{
        console.log(response);
        this.success = true;
    }
      );
 //   window.location.href="/usuarios-form";
    this.service.getUsuarios().subscribe(
      resposta => this.usuario = resposta
    );
  }
}

