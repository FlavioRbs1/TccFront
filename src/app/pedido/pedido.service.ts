import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/clientes';
import { Pedidos } from './pedidos';

@Injectable({
  providedIn: 'root'
})


export class PedidoService {

  Pedidos: [] = [];
  Cliente: any[] = [];
  idPedido: number | any;
  idCliente: number | any;

  constructor(private http: HttpClient) { }

  getPedidoByCliente(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscapedidocliente/${idCliente}`);
  }
  valorById(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscavalorpedido/${idCliente}`);
  }
  parcelaById(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscaparcelapedido/${idCliente}`);
  }
  situacaoById(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscasituacaopedido/${idCliente}`);
  }
/*  dataById(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscadatapedido/${idCliente}`);
  }*/
  formaPagtByID(idCliente: number): Observable<Pedidos> {
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscaformapedido/${idCliente}`);
  }
}
