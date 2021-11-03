import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin-guard.service';
import { AuthGuard } from '../guard/auth-guard.service';
import { GestorGuard } from '../guard/gestor-guard.service';
import { ConfiguracaoFormComponent } from './configuracao-form/configuracao-form.component';

const routes: Routes = [
  {path: 'configuracao-form', component: ConfiguracaoFormComponent,canActivate:[AuthGuard,GestorGuard,AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoRoutingModule { }
