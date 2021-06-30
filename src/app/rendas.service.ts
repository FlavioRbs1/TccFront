import { Injectable } from '@angular/core';
import { Rendas } from './rendas/rendas';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class RendasService{

  constructor( private http : HttpClient) { }
  salvar(rendas:Rendas):Observable<Rendas>{
    return this.http.post<Rendas>('http://localhost:8080/api/rendas',rendas);
  }

 

}
