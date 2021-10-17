import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  Cliente: [] = [];
  id : number |any;
  Pedido: [] = [];


  constructor( private http : HttpClient) { }
  
  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/cliente/save',cliente);
  }
  getByCpf(cpf: string):Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/busca/${cpf}`);
  }
  getById(id:number):Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/buscaid/${id}`);
  }
  getCpfById(id:number):Observable<String>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/cliente/buscacpfporid/${id}`,{headers, responseType: 'text' as const });
  }
  alterar(cliente:Cliente):Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/cliente/busca/${cliente.cpf}`,cliente);
  }
 
  
}
