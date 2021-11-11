import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { isEmptyObject } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  Cliente: [] = [];
  id: number | any;
  Pedido: [] = [];
  cliente: Cliente | any;
  retorno: number | any;

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/cliente/save', cliente);
  }
  getByCpf(cpf: string): Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8080/api/cliente/busca/${cpf}`);
  }
  getById(id: number): Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8080/api/cliente/buscaid/${id}`);
  }
  getCpfById(id: number): Observable<String> {
    return this.http.get<any>(`http://localhost:8080/api/cliente/buscacpfporid/${id}`);
  }
  alterar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`http://localhost:8080/api/cliente/busca/${cliente.cpf}`, cliente);
  }
  validaCpf(cpf: string): Observable<boolean> {
    return this.http.get<any>(`http://localhost:8080/api/cliente/validacpf/${cpf}`);
  }
  validaFormulario(cliente: Cliente) {
    if (isEmptyObject(cliente.cpf)) {
      alert('O campo CPF não foi preenchido')
    }else if(isEmptyObject(cliente.nome)){
      alert('O campo Nome não foi preenchido')
    }else if(isEmptyObject(cliente.rg)){
      alert('O campo RG não foi preenchido')
    }else if(isEmptyObject(cliente.tel1)){
      alert('O campo Telefone não foi preenchido')
    }else if(isEmptyObject(cliente.dtNasc)){
      alert('O campo Dt de Nascimento não foi preenchido')
    }else if(isEmptyObject(cliente.endereco)){
      alert('O campo endereço não foi preenchido')
    }else if(isEmptyObject(cliente.cidade) ){
      alert('O campo Cidade não foi preenchido')
    }else if(isEmptyObject(cliente.bairro)){
      alert('O campo bairro não foi preenchido')
    }else if(isEmptyObject(cliente.estado)){
      alert('O campo estado não foi preenchido')
    }else if(cliente.renda ===null){
      alert('O campo renda não foi preenchido')
    }else if(isEmptyObject(cliente.profissao) ){
      alert('O campo profissão não foi preenchido')
    }
  }
}



