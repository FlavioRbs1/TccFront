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

  public barChartLabels: Label[] = ['Aprovados', 'Reprovados','Em analise'];
  public barChartType: ChartType = 'pie';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData:
    ChartDataSets[] = [{
      data: [30,20,10 ], label: 'Analises'
    }];

    public barChartLabels2: Label[] = ['Aprovado Sob Concessão','Reprovado'];
    public barChartType2: ChartType = 'bar';
    public barChartData2:
    ChartDataSets[] = [{
      data: [ 63,30,4 ], label: 'Reprovados'
    }];

    public barChartLabels3: Label[] = ['21/10','22/10','23/10','24/10','25/10','26/10'];
    public barChartType3: ChartType = 'line';
    public barChartData3:
    ChartDataSets[] = [{
      data: [ 15,40,12,25,32,11 ], label: 'Qtd Analise'
    }];

    public barChartLabels4: Label[] = ['21/10','22/10','23/10','24/10','25/10','26/10'];
    public barChartType4: ChartType = 'bar';
    public barChartData4:
    ChartDataSets[] = [
      {data: [ 7,10,5,12,11,5 ], label: 'Reprovados'},
      {data: [ 8,30,7,13,21,6 ], label: 'Aprovados'}
  ];

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





