import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../clientes';
@Component({
  selector: 'app-clientes-cartao',
  templateUrl: './clientes-cartao.component.html',
  styleUrls: ['./clientes-cartao.component.css']
})
export class ClientesCartaoComponent implements OnInit {

  clientec: Cliente | any;
  
  constructor( private service: ClientesService) { 
    this.clientec = new Cliente();
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.service.salvar(this.clientec).subscribe(response =>{
      console.log(response);
    })
  }
}
