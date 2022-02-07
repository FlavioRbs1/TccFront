import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent } from './analise-form/analise-form.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AnaliseCartaoComponent } from './analise-cartao/analise-cartao.component';
import { AnaliseSobConcessaoFormComponent } from './analise-sob-concessao-form/analise-sob-concessao-form.component';
import { AnaliseSobConcessaoCartaoComponent } from './analise-sob-concessao-cartao/analise-sob-concessao-cartao.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../guard/auth-guard.service';
import { GestorGuard } from '../guard/gestor-guard.service';
import { AdminGuard } from '../guard/admin-guard.service';

const routes: Routes =[
  {path: 'analise',component:LayoutComponent,children:[
    {path: 'form/:idCliente/:idPedido', component:AnaliseFormComponent},
    {path: 'cartao/:idCliente', component:AnaliseCartaoComponent},
    {path: 'sob-concessao-form/:id',component:AnaliseSobConcessaoFormComponent},
    {path: 'sob-concessao-cartao/:id',component:AnaliseSobConcessaoCartaoComponent},
    {path: '',redirectTo:'/analise',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseRoutingModule { }
