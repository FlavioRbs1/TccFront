import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClientesService } from 'src/app/clientes/clientes.service';
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
  
  constructor(private service:ClientesService, private router: Router) {
    this.cliente = new Cliente();
    this.pedido = new Pedidos();
   }

  ngOnInit(): void {}
  onSubmit(){ }


}
