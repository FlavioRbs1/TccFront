import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alert } from 'bootstrap';
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


  data: string | any;
  id: number | any;
  analise: Analise | any;
  cliente: Cliente | any;
  analiseCpf: number | any;
  analisePendencias: number | any;
  analiseRenda: number | any;
  analisePerc: number | any;
  situacao: string | any;
  concessao: string | any;
  idCliente: number | any;
  idPedido: number | any;
  sucess: Boolean = false;
  errors: String | any;
  dataAnalise: string | any;
  score: number|any;




  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router) {



  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.idCliente = Number(urlParams['idCliente'])
      this.idPedido = Number(urlParams['idPedido'])
      console.log(urlParams)
     if (this.idCliente) {
        this.clienteService.getById(this.idCliente).subscribe(
          response => this.cliente = response, errorResponse => this.cliente = null
        )
      } 
    });
    const analise = new Analise();
    analise.idCliente = Number(this.idCliente);
    analise.idPedido = Number(this.idPedido);
    this.service.criaAnalisecompleta(analise).subscribe(
      response => this.analise = response, errorResponse => this.analise = new Analise()
    )
  }
  
  onSubmit() {
    this.concessao = prompt('Justifique a liberação')
    while(this.concessao ===""){
      this.concessao = prompt('Justifique a liberação')
    }
    const libera = new Analise();
    libera.id = Number(this.analise.id);
    libera.concessao = this.concessao;
    this.service.liberaSobConcessao(libera).subscribe(
      response => this.analise =response, errorResponse => this.analise = null
      )
    libera.idPedido = Number(this.idPedido);
    this.service.aprovaSobConcessao(libera.idPedido).subscribe(
      response => this.analise = response,errorResponse => this.analise = null
    );
    const busca = new Analise();
    busca.idPedido= Number(this.idPedido);
    busca.idCliente=Number(this.idCliente);
      this.service.analiseById(busca).subscribe(
        response => this.analise = response, errorResponse => this.analise = null
      )
    } 
  


  enviaEmail() {
    alert('Email enviado ao cliente com sucesso')
  }

}


