import { Component, OnInit } from '@angular/core';
import { AnaliseService } from 'src/app/analise/analise.service';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-cartao',
  templateUrl: './clientes-cartao.component.html',
  styleUrls: ['./clientes-cartao.component.css']
})
export class ClientesCartaoComponent implements OnInit {

  cliente: Cliente | any;
  situacao: String ="";
  id:number|any;

  constructor( private service: ClientesService, private serviceAnalise:AnaliseService ) {
    this.cliente = new Cliente();
    this.id = this.cliente.id;

   }

  ngOnInit(): void {
    
  }
  salvaCliente(){
    let cliente = this.cliente
    this.service.salvar(cliente).subscribe(
      response => this.cliente = response, errorResponse => this.cliente = null
    );
  }
  onSubmit(){

  }
}
