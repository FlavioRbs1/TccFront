import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  Usuarios:[] = [];

  constructor(private http:HttpClient) { 

  }
  getUsuarios():Observable<any>{
    return this.http.get<Usuarios>(`http://localhost:8080/api/usuarios/lista`);
  }
  salvar(usuarios:Usuarios):Observable<any>{
    return this.http.post<Usuarios>(`http://localhost:8080/api/usuarios/save`,usuarios);
  }
}
