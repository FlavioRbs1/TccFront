import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType,ChartOptions, ChartDataSets } from 'chart.js';


import {Chart} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-indicadores-form',
  templateUrl: './indicadores-form.component.html',
  styleUrls: ['./indicadores-form.component.css']
})
export class IndicadoresFormComponent implements OnInit {
  @ViewChild("meuCanvas", {static: true})elemento:ElementRef | any;
 
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  ngOnInit(): void {
    
  }
}

  

  

