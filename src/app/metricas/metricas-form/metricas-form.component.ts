import { Component, OnInit } from '@angular/core';
import { MetricasService } from 'src/app/metricas.service';
import { Metricas } from '../metricas';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metricas-form',
  templateUrl: './metricas-form.component.html',
  styleUrls: ['./metricas-form.component.css']
})
export class MetricasFormComponent implements OnInit {

  formulario: FormGroup | any;
  metrica: Metricas | any;
  resposta: any;
  id: number | any;
  analiseCpf: Boolean | any;
  analiseEstCivil: Boolean | any;
  analiseIdade: Boolean | any;
  analiseProfissao: Boolean | any;
  analiseRenda: Boolean | any;
  analisePercEndiv: Boolean | any;
  libAutomatica: Boolean | any;
  classVermelho: number | any;
  classAmarelo: number | any;
  classVerde: number | any;
  classAzul: number | any;
  limiteCredito: number | any;
  percentual: number | any;

  constructor(
    private fb: FormBuilder, private service: MetricasService, private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      analiseCpf: [''],
      analiseEstCivil: [''],
      analiseIdade: [''],
      analiseProfissao: [''],
      analiseRenda: [''],
      analisePercEndiv: [''],
      libAutomatica: [''],
      classVermelho: [''],
      classAmarelo: [''],
      classVerde: [''],
      classAzul: [''],
      limiteCredito: [''],
      percentual: ['']

    })
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.service.getById(this.id).subscribe(
          response => this.metrica = response, errorResponse => this.metrica = new Metricas(this.analiseCpf = this.formulario.analiseCpf, this.analiseEstCivil,
            this.analiseIdade, this.analisePercEndiv, this.analiseProfissao,
            this.analiseRenda, this.classAmarelo, this.classAzul= this.formulario.classAzul , this.classVerde,
            this.classVermelho, this.libAutomatica, this.limiteCredito = this.formulario.limiteCredito, this.percentual)
        )
      }
    })
  }

  submit() {
    const formValues = this.formulario.value;
    const metrica: Metricas = new Metricas(formValues.analiseCpf, formValues.analiseEstCivil,
      formValues.analiseIdade, formValues.analisePercEndiv, formValues.analiseProfissao,
      formValues.analiseRenda, formValues.classAmarelo, formValues.classAzul, formValues.classVerde,
      formValues.classVermelho, formValues.libAutomatica, formValues.limiteCredito, formValues.percentual);
    this.service.alterar(metrica).subscribe((response: Metricas) => {
      this.metrica.id;
      console.log(metrica);
    });
  }
}
