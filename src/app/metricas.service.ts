import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Metricas } from './metricas/metricas';

@Injectable({
  providedIn: 'root'
})
export class MetricasService {
  
  Metricas:[] = [];
  
  constructor(private http:HttpClient) {
    
  }

  alterar(metrica: Metricas):Observable<any> {
    return this.http.put<Metricas>(`http://localhost:8080/api/metrica/${metrica.id}`,metrica);
  }

  getById(id:number):Observable<Metricas>{
    return this.http.get<any>(`http://localhost:8080/api/metrica/${id}`);
  }
}


