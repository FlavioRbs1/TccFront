import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent } from './analise-form/analise-form.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AnaliseCartaoComponent } from './analise-cartao/analise-cartao.component';
import { AnaliseSobConcessaoFormComponent } from './analise-sob-concessao-form/analise-sob-concessao-form.component';
import { AnaliseSobConcessaoCartaoComponent } from './analise-sob-concessao-cartao/analise-sob-concessao-cartao.component';

const routes: Routes =[
  {path: 'analise-form/:idCliente/:idPedido', component:AnaliseFormComponent},
  {path: 'analise-cartao/:idCliente', component:AnaliseCartaoComponent},
  {path: 'analise-sob-concessao-form/:id',component:AnaliseSobConcessaoFormComponent},
  {path: 'analise-sob-concessao-cartao/:id',component:AnaliseSobConcessaoCartaoComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseRoutingModule { }
