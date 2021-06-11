import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesCartaoComponent } from './clientes-cartao/clientes-cartao.component';


@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesListaComponent,
    ClientesCartaoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesFormComponent,
    ClientesListaComponent,
    ClientesCartaoComponent
  ]
})
export class ClientesModule { }
