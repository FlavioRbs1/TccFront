import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { MetricasService } from '../metricas.service';
import { Metricas } from '../metricas';
import { Observable } from 'rxjs';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { Opcoes  } from '../opcoes'


@Component({
  selector: 'app-metricas-form',
  templateUrl: './metricas-form.component.html',
  styleUrls: ['./metricas-form.component.css']
})
export class MetricasFormComponent implements OnInit {

  metrica: Metricas|any;
  analiseCpf:Metricas|any;
  analiseEstCivil:Metricas|any;
  analiseIdade:Metricas|any;
  analiseRenda:Metricas|any;
  analisePercEndiv:Metricas|any;
  libAutomatica:Metricas|any;
  id: number | any;
  errors:String | any;
  response:any;
  success:Boolean = false;
  opcoes: Opcoes[] = [
    {id: 1, opcao:'Ativado'},
    {id: 2, opcao:'Desativado'}
  ];
  
  
  constructor(
    private service:MetricasService, private activatedRoute: ActivatedRoute,
    private router: Router )
    {
    this.metrica = new Metricas();
    this.analiseCpf = new Metricas();
    }

  ngOnInit(): void {
     let params: Observable<Params> = this.activatedRoute.params
     params.subscribe(urlParams => {
       this.id = urlParams['id']
       if(this.id){
         this.service.getById(this.id).subscribe(
           response => this.metrica = response,errorResponse => this.metrica = new Metricas()
         )
       }
     })
     console.log(this.metrica.analiseCpf, this.analiseCpf);
  }

  onSubmit(){
    console.log(this.metrica);
    this.service.alterar(this.metrica)
    .subscribe(response =>{
      this.success = true;
      this.errors = null;
    }, errorResponse =>{ this.errors =['Erro ao atualizar o cliente.']})
    if(this.success = true){
      alert('Metrica atualizada com sucesso')
    }
  }
}
