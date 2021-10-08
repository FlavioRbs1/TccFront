import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes';
import { HttpClient, HttpClientModule, HttpParams} from '@angular/common/http'
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
  alterar(cliente:Cliente):Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/cliente/busca/${cliente.cpf}`,cliente);
  }
 
}
