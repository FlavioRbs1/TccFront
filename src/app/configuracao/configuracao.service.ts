import { Injectable } from '@angular/core';
import { Configuracao } from './configuracao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {

  id:number|any;

  constructor(private http:HttpClient) { }
    busca(id:number):Observable<Configuracao>{
      return this.http.get<any>(`http://localhost:8080/api/configuracao/buscaconfiguracao/${id}`);
   }
}

