import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresFormComponent } from './indicadores-form/indicadores-form.component';


@NgModule({
  declarations: [
    IndicadoresFormComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ],
  exports: [
    IndicadoresFormComponent
  ]
})
export class IndicadoresModule { }
