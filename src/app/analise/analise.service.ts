import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  criaAnalise(analise:Analise):Observable<any>{
    return this.http.post<Analise>('http://localhost:8080/api/analise/postanalisec',analise);
  }
  alteraAnalise(analise:Analise):Observable<any>{
    return this.http.put<Analise>(`http://localhost:8080/api/analise/${analise.id}`,analise);
  }
  analiseById(id: number):Observable<Analise>{
    return this.http.get<any>(`http://localhost:8080/api/analise/${id}`);
  }
}
