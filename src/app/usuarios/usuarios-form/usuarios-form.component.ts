import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService} from '../usuarios.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuarios|any ;
  success:Boolean = false;
  errors: String []|any;
  formulario: FormGroup|any;
  fb: FormBuilder|any;

  constructor(
    private service: UsuariosService) { 
    this.usuario = new Usuarios();
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(
      resposta => this.usuario = resposta
    );
    this.formulario = new FormGroup({
      'user': new FormControl(null),
      'login': new FormControl(null),
      'senha': new FormControl(null),
      'tipoUser': new FormControl(null),
      'situacao': new FormControl(null),
    });
  }

  onSubmit(){
    alert('clicou');
    console.log(this.formulario.value)
    this.service
      .salvar(this.usuario)
      .subscribe(response =>{
        console.log(response);
        this.success = true;
    }
      );
    window.location.href="/usuarios-form";
    this.service.getUsuarios().subscribe(
      resposta => this.usuario = resposta
    );
  }
}

