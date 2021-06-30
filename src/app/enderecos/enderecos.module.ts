import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecosRoutingModule } from './enderecos-routing.module';
import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnderecosFormComponent
  ],
  imports: [
    CommonModule,
    EnderecosRoutingModule,
    FormsModule
  ],
  exports:[
    EnderecosFormComponent
  ]
})
export class EnderecosModule { }
