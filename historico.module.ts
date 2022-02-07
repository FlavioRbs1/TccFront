import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoFormComponent } from './historico-form/historico-form.component';


@NgModule({
  declarations: [
    HistoricoFormComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule
  ],
  exports:[
    HistoricoFormComponent
  ]
})
export class HistoricoModule { }
