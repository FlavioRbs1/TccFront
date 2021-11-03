import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin-guard.service';
import { AuthGuard } from '../guard/auth-guard.service';
import { LayoutComponent } from '../layout/layout.component';
import{ MetricasFormComponent } from './metricas-form/metricas-form.component'
const routes: Routes = [
  {path:'metricas',component:LayoutComponent,children:[
    {path:'form', component: MetricasFormComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'form/:id', component:MetricasFormComponent,canActivate:[AuthGuard,AdminGuard]}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricasRoutingModule { }
