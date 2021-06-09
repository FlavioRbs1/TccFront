import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient) { 
    
  }
  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente);
  }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.id=1;
    cliente.nome = 'Fulano';
    cliente.comentarios='comentarios';
    cliente.cpf='12312312';
    cliente.dtNasc='21051989';
    cliente.estadoCivil='casado';
    cliente.id = 2;
    cliente.rg='23423423';
    cliente.sexo='masc';
    cliente.tel1='4656346';
    cliente.tel2='';
    return cliente;
  }

}
