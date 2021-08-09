import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricasRoutingModule } from './metricas-routing.module';
import { MetricasFormComponent } from './metricas-form/metricas-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MetricasFormComponent
  ],
  imports: [
    CommonModule,
    MetricasRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[
    MetricasFormComponent
  ]
})
export class MetricasModule { }
