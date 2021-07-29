import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/clientes';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoComponent implements OnInit {

  pedido:Pedido|any;
  cliente:Cliente|any;

  constructor() {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
