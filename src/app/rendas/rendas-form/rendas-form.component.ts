import { Component, OnInit } from '@angular/core';
import { RendasService } from 'src/app/rendas.service';
import { Rendas } from '../rendas';

@Component({
  selector: 'app-rendas-form',
  templateUrl: './rendas-form.component.html',
  styleUrls: ['./rendas-form.component.css']
})
export class RendasFormComponent implements OnInit {

  rendasc:Rendas | any;

  constructor( private service:RendasService) {
    this.rendasc = new Rendas();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.rendasc).subscribe(response =>{
      console.log(response);
    })
  }
  chamaCadastroEndereco(){
    window.location.href=("enderecos-form");
  }
}
