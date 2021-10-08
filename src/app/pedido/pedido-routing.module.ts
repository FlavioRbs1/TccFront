import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './pedido-form/pedido-form.component';


const routes:Routes =[
  {path:'pedido-form/:idCliente',component:PedidoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PedidoRoutingModule { }
