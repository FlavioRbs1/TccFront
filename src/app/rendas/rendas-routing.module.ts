import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendasFormComponent } from './rendas-form/rendas-form.component';

const routes: Routes = [
  {path: 'rendas-form', component:RendasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendasRoutingModule { }
