import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient) { }
  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente);
  }

 

}
