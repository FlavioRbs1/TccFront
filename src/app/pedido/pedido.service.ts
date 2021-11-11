import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  situacaoById(idCliente: number): Observable<String> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/pedido/buscasituacaopedido/${idCliente}`,{headers, responseType: 'text' as const });
  }
  dataById(idCliente: number): Observable<String> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/pedido/buscadatapedido/${idCliente}`,{headers, responseType: 'text' as const });
  }
  formaPagtByID(idCliente: number): Observable<String> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/pedido/buscaformapedido/${idCliente}`,{headers, responseType: 'text' as const });
  }
  getCpfById(id:number):Observable<Pedidos>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/buscacpfporid/${id}`);
  }
  buscaclientebypedido(id:number):Observable<Pedidos>{
    return this.http.get<any>(`http://localhost:8080/api/pedido/buscaclientebypedido/${id}`)
  }
  getPedidosEmCredito():Observable<any>{
    return this.http.get<Pedidos>(`http://localhost:8080/api/pedido/pedidosemcredito`);
  }
}
