import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Analise } from '../analise';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-create',
  templateUrl: './analise-create.component.html',
  styleUrls: ['./analise-create.component.css']
})
export class AnaliseCreateComponent implements OnInit {

  data: Date | any;
  cpf: Cliente | any;
  id: number | any;
  nome:String|any;
  analise: Analise | any;
  cliente: number | any;
  errors:string[]=[];
  success:boolean=false;
  analiseCpf: number = 0;
  analisePendencias: number = 0;
  analiseIdade: number = 0;
  analisePerc: number = 0;
  analiseProfissao: number = 0;
  analiseRenda: number = 0;
  concessao: string | any;
  dataAnalise: Data | any;
  situacao: string = "";
  
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router
  ) { }

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
    console.log(this.analise)
    console.log(this.cliente)
    this.service.criaAnalise(this.analise)
      .subscribe(response => {
        console.log(this.analise)
      });
     
  }

}
