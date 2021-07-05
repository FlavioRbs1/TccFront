import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-indicadores-form',
  templateUrl: './indicadores-form.component.html',
  styleUrls: ['./indicadores-form.component.css']
})
export class IndicadoresFormComponent implements OnInit {
  @ViewChild("meuCanvas", {static: true})elemento:ElementRef | any;
 
  

  ngOnInit(): void {
    new Chart(this.elemento.nativeElement, {
      type:'line',
      data:{
        labels:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        datasets:[
          {
            data:[12,43,23,65,76,34,65,96,45,86,23,56]
          }

        ]
      }
    });
  }
}

  

  

