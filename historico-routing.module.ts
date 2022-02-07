import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth-guard.service';
import { GestorGuard } from '../guard/gestor-guard.service';
import { LayoutComponent } from '../layout/layout.component';
import { HistoricoFormComponent } from './historico-form/historico-form.component';

const routes: Routes = [
  {path:'historico',component:LayoutComponent,children:[
    {path:'form', component: HistoricoFormComponent,canActivate:[AuthGuard,GestorGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricoRoutingModule { }
