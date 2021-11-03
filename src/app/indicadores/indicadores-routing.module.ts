import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth-guard.service';
import { GestorGuard } from '../guard/gestor-guard.service';
import { LayoutComponent } from '../layout/layout.component';
import { IndicadoresFormComponent } from './indicadores-form/indicadores-form.component';

const routes: Routes = [
  {path:'indicadores',component:LayoutComponent,children:[
    
    {path:'form', component:IndicadoresFormComponent,canActivate:[AuthGuard,GestorGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
