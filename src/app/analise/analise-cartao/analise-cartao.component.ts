import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Analise } from '../analise';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-cartao',
  templateUrl: './analise-cartao.component.html',
  styleUrls: ['./analise-cartao.component.css']
})
export class AnaliseCartaoComponent implements OnInit {
  idCliente: number|any;
  analise: Analise|any;
  dataAnalise:string|any;
  analiseCpf: number | any;
  analiseRenda: number | any;
  analisePerc: number | any;
  score: number|any;
  situacao: string | any;
  concessao: string | any;

  constructor( 
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router) { 

    }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.idCliente = Number(urlParams['idCliente'])
      const analise = new Analise();
      analise.idCliente = this.idCliente;
      this.service.criaAnaliseSemPedido(analise).subscribe(
        response => this.analise = response,errorResponse => this.analise= new Analise()
      )
    })
  }
  onSubmit(){
    console.log(this.idCliente)
  }
}
