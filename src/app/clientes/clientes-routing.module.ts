import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCartaoComponent } from './clientes-cartao/clientes-cartao.component';
import { ClientesFormComponent} from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {path: 'clientes-form/:cpf', component: ClientesFormComponent},
  {path: 'clientes-cartao',component: ClientesCartaoComponent},
  {path: 'clientes-lista',component:ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
