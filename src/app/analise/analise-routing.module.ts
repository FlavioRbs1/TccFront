import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent } from './analise-form/analise-form.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AnaliseCartaoComponent } from './analise-cartao/analise-cartao.component';

const routes: Routes =[
  {path: 'analise-form/:idCliente/:idPedido', component:AnaliseFormComponent},
  {path: 'analise-cartao/:idCliente', component:AnaliseCartaoComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseRoutingModule { }
