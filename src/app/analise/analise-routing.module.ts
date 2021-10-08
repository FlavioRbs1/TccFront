import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent } from './analise-form/analise-form.component';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes =[
  {path: 'analise-form',component:AnaliseFormComponent},
  {path: 'analise-form/:idCliente/:idPedido', component:AnaliseFormComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseRoutingModule { }
