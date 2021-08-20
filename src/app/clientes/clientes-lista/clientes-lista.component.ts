import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Pedido } from 'src/app/pedido/pedido';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  cliente: Cliente |any;
  pedido: Pedido |any;
  
  constructor(private service:ClientesService, private router: Router) {
    this.cliente = new Cliente();
    this.pedido = new Pedido();
   }

  ngOnInit(): void {}
  onSubmit(){ }


}
