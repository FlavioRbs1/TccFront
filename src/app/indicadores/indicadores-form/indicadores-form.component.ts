import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Analise } from 'src/app/analise/analise';
import { AnaliseService } from 'src/app/analise/analise.service';

@Component({
  selector: 'app-indicadores-form',
  templateUrl: './indicadores-form.component.html',
  styleUrls: ['./indicadores-form.component.css']
})
export class IndicadoresFormComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef | any;

  dias: String = "";
  aprovado: any = [];
  reprovados: any = [];
  concessao: number | any;
  novos: number | any;



  constructor(private service: AnaliseService) {
    const valor = [];

  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Aprovados', 'Reprovados'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData:
    ChartDataSets[] = [{
      data: this.aprovado , label: 'Series A'
    }];


  ngOnInit(): void {
    

  }
  aprovadosFunction() {
    this.service.getAprovados().subscribe(
      response => this.aprovado = response
    )
  }
  reprovadosFunction() {
    this.service.getReprovados().subscribe(
      response => this.reprovados = response
    )
  }
}





