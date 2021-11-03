import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './pedido-form/pedido-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../guard/auth-guard.service';


const routes:Routes =[
  {path:'pedido',component:LayoutComponent,children:[
    {path:'lista/:id',component:PedidoComponent,canActivate:[AuthGuard]},
    {path:'form/:idCliente',component:PedidoComponent,canActivate:[AuthGuard]}
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PedidoRoutingModule { }
