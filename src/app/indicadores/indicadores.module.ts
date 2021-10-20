import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresFormComponent } from './indicadores-form/indicadores-form.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    IndicadoresFormComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    ChartsModule
    
  ],
  exports: [
    IndicadoresFormComponent
  ]
})
export class IndicadoresModule { }
