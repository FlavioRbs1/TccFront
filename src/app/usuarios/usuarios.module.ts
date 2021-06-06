import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';


@NgModule({
  declarations: [
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [
    UsuariosFormComponent
  ]
})
export class UsuariosModule { }
