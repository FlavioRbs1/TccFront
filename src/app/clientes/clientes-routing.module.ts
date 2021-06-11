import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCartaoComponent } from './clientes-cartao/clientes-cartao.component';
import { ClientesFormComponent} from './clientes-form/clientes-form.component'
const routes: Routes = [
  {path: 'clientes-form', component: ClientesFormComponent},
  {path: 'clientes-cartao',component: ClientesCartaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
