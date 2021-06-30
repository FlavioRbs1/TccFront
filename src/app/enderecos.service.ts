import { Injectable } from '@angular/core';
import { Enderecos } from './enderecos/enderecos';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class EnderecosService{

  constructor( private http : HttpClient) { }
  salvar(enderecos:Enderecos):Observable<Enderecos>{
    return this.http.post<Enderecos>('http://localhost:8080/api/enderecos',enderecos);
  }

 

}
