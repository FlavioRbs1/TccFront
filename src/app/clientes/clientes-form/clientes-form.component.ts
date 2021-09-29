import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente } from '../clientes';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { param } from 'jquery';
import { Analise } from 'src/app/analise/analise';
import { AnaliseService } from 'src/app/analise/analise.service';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente | any;
  cpf: string | any;
  id: number|any;
  clientes: Cliente[] = [];
  renda:number|any;
  rendaFamiliar:number|any;
  success:Boolean = false;
  errors:String | any;
  analise:Analise|any;
  
 


  constructor(
    private service: ClientesService,
    private analiseService:AnaliseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.cliente = new Cliente();   
  //  this.analise = new Analise();
    
  
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.cpf = urlParams['cpf']
      if (this.cpf) {
        this.service.getByCpf(this.cpf).subscribe(
          response => this.cliente = response, errorResponse => this.cliente = new Cliente()
        )
      }
    })
  }
  
  onSubmit(){
    this.service.alterar(this.cliente)
    .subscribe(response =>{
      console.log(this.cliente);
    });     
  }



}
