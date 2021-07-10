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
    
  }
}

  

  

