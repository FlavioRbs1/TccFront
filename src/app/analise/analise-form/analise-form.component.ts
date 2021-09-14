import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Analise } from '../analise';
import { AnaliseService } from '../analise.service';


@Component({
  selector: 'app-analise',
  templateUrl: './analise-form.component.html',
  styleUrls: ['./analise-form.component.css'],

})
export class AnaliseFormComponent implements OnInit {

  data: Date | any;
  cpf: Cliente | any;
  id: number | any;
  nome:String|any;
  analise: Analise | any;
  cliente: number | any;
  errors:string[]=[];
  success:boolean=false;
  

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router) {

    this.analise = new Analise();
    
    
  }
  
  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.clienteService.getById(this.id).subscribe(
          response => this.cliente = response, errorResponse => this.cliente = new Cliente()
          )
        }
      })
      this.analise.nome = this.cliente.nome;
      this.analise.cliente = this.cliente.id;
      
  }

  onSubmit() {     
  }
}
