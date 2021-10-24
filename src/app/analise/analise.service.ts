import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../pedido/pedidos';
import { Analise } from './analise';

@Injectable({
  providedIn: 'root'
})
export class AnaliseService {

  Analise: [] = [];

  constructor( private http : HttpClient) { }
  
  criaAnalisecompleta(analise:Analise):Observable<any>{
    return this.http.post<Analise>('http://localhost:8080/api/analise/postanalisecp',analise);
  }
  criaAnaliseSemPedido(analise:Analise):Observable<any>{
    return this.http.post<Analise>('http://localhost:8080/api/analise/postanalisedecliente',analise);
  }
  alteraAnalise(analise:Analise):Observable<any>{
    return this.http.put<Analise>(`http://localhost:8080/api/analise/${analise.id}`,analise);
  }
  analiseById(analise: Analise):Observable<Analise>{
    return this.http.get<any>(`http://localhost:8080/api/analise/${analise.idPedido}/${analise.idCliente}`);
  }
  getById(id: Analise):Observable<Analise>{
    return this.http.get<any>(`http://localhost:8080/api/analise/getanalise/${id}`);
  }
  liberaSobConcessao(libera:Analise):Observable<any>{
    return this.http.put<Analise>(`http://localhost:8080/api/analise/liberasobconcessao/${libera.id}/${libera.concessao}`,libera);
  }
  alteraConcessao(analise:Analise):Observable<any>{
    return this.http.put<Analise>(`http://localhost:8080/api/analise/insereconcessao/${analise.id}/${analise.concessao}`,analise);
  }
  aprovaSobConcessao(idPedido:Pedidos):Observable<any>{
    return this.http.put<Pedidos>(`http://localhost:8080/api/pedido/aprovapedido/${idPedido}`,idPedido);
  }
  getAprovados():Observable<any>{
    return this.http.get<Analise>(`http://localhost:8080/api/analise/aprovados`);
  }
  getReprovados():Observable<any>{
    return this.http.get<Analise>(`http://localhost:8080/api/analise/reprovados`);
  }
}
