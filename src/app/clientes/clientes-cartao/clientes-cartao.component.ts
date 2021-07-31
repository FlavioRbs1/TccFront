import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-cartao',
  templateUrl: './clientes-cartao.component.html',
  styleUrls: ['./clientes-cartao.component.css']
})
export class ClientesCartaoComponent implements OnInit {

  cliente: Cliente | any;
  situacao: String ="";

  constructor( private service: ClientesService ) {
    this.cliente = new Cliente();
    
   }

  ngOnInit(): void {
    
  }
  
  onSubmit(){
    this.service.salvar(this.cliente).subscribe(response =>{
      console.log(response);
      window.location.href="/analise-form";
    });

  }
  
}
