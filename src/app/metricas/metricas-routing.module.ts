import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ MetricasFormComponent } from './metricas-form/metricas-form.component'
const routes: Routes = [
  {path:'metricas-form', component: MetricasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricasRoutingModule { }
