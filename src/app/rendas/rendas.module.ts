import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendasRoutingModule } from './rendas-routing.module';
import { RendasFormComponent } from './rendas-form/rendas-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RendasFormComponent
  ],
  imports: [
    CommonModule,
    RendasRoutingModule,
    FormsModule
  ],
  exports:[
    RendasFormComponent
  ]
})
export class RendasModule { }
