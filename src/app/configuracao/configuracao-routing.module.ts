import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracaoFormComponent } from './configuracao-form/configuracao-form.component';

const routes: Routes = [
  {path: 'configuracao-form', component: ConfiguracaoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoRoutingModule { }
