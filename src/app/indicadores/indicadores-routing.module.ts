import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresFormComponent } from './indicadores-form/indicadores-form.component';

const routes: Routes = [
  {path:'indicadores-form', component:IndicadoresFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
