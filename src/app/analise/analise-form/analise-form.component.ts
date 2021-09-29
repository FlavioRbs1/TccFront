import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  formulario: FormGroup | any;
  data: string |any;
  id: number | any;
  analise: Analise | any;
  cliente: Cliente | any;
  analiseCpf: number|any;
  analisePendencias: number|any;
  analiseRenda: number|any;
  analisePerc: number|any;
  situacao:string|any;
  concessao:string|any;
  idCliente: number|any;
  idPedidos: number|any;
  sucess:Boolean = false;
  errors:String|any;
  



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router) {

      this.id = new Cliente();
      this.idCliente = 248;
      this.analiseCpf = 0;
      this.analisePendencias = 0;
      this.analiseRenda = 0;
      this.analisePerc = 0;
      this.idPedidos = 1794;
      this.data=null
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      console.log(urlParams)
      if (this.id) {
        this.clienteService.getById(this.id).subscribe(
          response => this.cliente = response, errorResponse => this.cliente = new Cliente()
        )
      }
      this.formulario = this.fb.group({
        idCliente: [this.id],
        idPedidos: [this.idPedidos],
        dataAnalise: [this.data],
        analiseCpf: [this.analiseCpf],
        analisePendencias: [this.analisePendencias],
        analiseRenda: [this.analiseRenda],
        analisePerc: [this.analisePerc],
        situacao: [this.situacao],
        concessao: [this.concessao],
      })
      console.log(this.id);
      console.log(this.idPedidos);
      console.log(this.data);
      console.log(this.analisePendencias);
      console.log(this.analiseRenda);
      console.log(this.analisePerc);
      console.log(this.formulario.value)
    })
  }

  onSubmit() {
    const formValues = this.formulario.value;
    const analise: Analise = new Analise(formValues.idCliente, formValues.idPedido,
      formValues.dataAnalise, formValues.analiseCpf, formValues.analisePendencias,
      formValues.analiseRenda, formValues.analisePerc, formValues.situacao, formValues.concessao);
    this.service.criaAnalise(this.analise).subscribe(response => {
      this.sucess = true;
      this.errors = null;
    }, errorResponse =>{ this.errors =['Erro']})
    
    console.log(this.errors);
  }

  realizaAnalise() {
  }

}


