import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Alert } from 'bootstrap';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { Pedidos } from 'src/app/pedido/pedidos';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  cliente: Cliente |any;
  pedido: Pedidos |any;
  
  constructor(private service:ClientesService, private router: Router,private pedidoService:PedidoService) {
    this.cliente = new Cliente();
    this.pedido = new Pedidos();
   }

  ngOnInit(): void {


  }

  buscaPedido(){
    const pedido = this.pedido.id;  
    this.pedidoService.getById(pedido).subscribe(
      response => this.cliente = response, errorResponse => this.cliente = null    
    )
  }
  onSubmit(){ }


}
