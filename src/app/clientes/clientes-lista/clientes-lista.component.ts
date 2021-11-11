import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { Pedidos } from 'src/app/clientes/pedidos';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  cliente: Cliente |any;
  pedido: Pedidos |any;
  idCliente:number|any;
  id: number|any;
  listaPedido:Pedidos[]|any;

  
  constructor(private service:ClientesService, private router: Router,private pedidoService:PedidoService) {
    this.cliente = new Cliente();
    this.pedido = new Pedidos();
   }

  ngOnInit(): void {
    this.pedidoService.getPedidosEmCredito().subscribe(
      response => this.listaPedido = response
    );

  }

  onSubmit(){}

  buscaCliente(){
    const valor = Number(this.pedido.id);
    this.pedidoService.buscaclientebypedido(valor).subscribe(
      response => this.idCliente = response,errorResponse => this.idCliente = null
    );
  }

}
