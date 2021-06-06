import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricasRoutingModule } from './metricas-routing.module';
import { MetricasFormComponent } from './metricas-form/metricas-form.component';


@NgModule({
  declarations: [
    MetricasFormComponent
  ],
  imports: [
    CommonModule,
    MetricasRoutingModule
  ],
  exports:[
    MetricasFormComponent
  ]
})
export class MetricasModule { }
