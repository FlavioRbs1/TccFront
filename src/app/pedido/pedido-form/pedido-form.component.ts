
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Pedidos } from '../pedidos';
import { PedidoService } from '../pedido.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedidos | any;
  id: number | any;
  idPedido: number | any;
  dia: string | any;
  cliente: Cliente | any;
  idCliente: number | any;
  formaPagamento: string | any;
  valor: number | any;
  parcelas: number | any;
  situacao: string | any;


  constructor(
    private service: PedidoService,
    private clienteService: ClientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    const pedido = new Pedidos();
    params.subscribe(urlParams => {
      this.idCliente = Number(urlParams['idCliente']);
      console.log(this.idCliente)
      pedido.idCliente = this.idCliente;
      pedido.id = this.idPedido
      if (this.idCliente != 0) {
        this.service.getPedidoByCliente(pedido.idCliente).subscribe(
          response => this.idPedido = response,
        )
        this.service.valorById(pedido.idCliente).subscribe(
          response => this.valor = response, errorResponse => this.valor = null
        )
        this.service.parcelaById(pedido.idCliente).subscribe(
          response => this.parcelas = response, errorResponse => this.parcelas = null
        )
        this.service.situacaoById(pedido.idCliente).subscribe(
          response => this.situacao = response, errorResponse => this.situacao = null
        )
        this.service.formaPagtByID(pedido.idCliente).subscribe(
          response => this.formaPagamento = response, errorResponse => this.formaPagamento = null
        )
        this.service.dataById(pedido.idCliente).subscribe(
          response => {
            console.log(response); 
            this.dia = response}, 
            errorResponse => {
              console.log(errorResponse); 
              this.dia = null}
        )
      }
    });
  }

  onSubmit() {

  }

}
