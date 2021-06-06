import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { ConfiguracaoFormComponent } from './configuracao-form/configuracao-form.component';


@NgModule({
  declarations: [
    ConfiguracaoFormComponent
  ],
  imports: [
    CommonModule,
    ConfiguracaoRoutingModule
  ],
  exports: [
    ConfiguracaoFormComponent
  ]
})
export class ConfiguracaoModule { }
