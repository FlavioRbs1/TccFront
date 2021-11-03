import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth-guard.service';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesCartaoComponent } from './clientes-cartao/clientes-cartao.component';
import { ClientesFormComponent} from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {path:'clientes',component:LayoutComponent,children:[
    {path: 'cartao',component: ClientesCartaoComponent,canActivate:[AuthGuard]},
    {path: 'form/:cpf', component: ClientesFormComponent,canActivate:[AuthGuard]},
    {path: 'lista',component:ClientesListaComponent,canActivate:[AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
