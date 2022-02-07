import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  Analise:[] = [];

  constructor(private http:HttpClient) { 

  }

  getAnalise():Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/analise/lista`)
  }
}
