import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';


const routes: Routes = [
  {path: 'enderecos-form', component:EnderecosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecosRoutingModule { }
