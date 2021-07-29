import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent  } from './analise-form/analise-form.component';
import { AnaliseRoutingModule } from './analise-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnaliseFormComponent
  ],
  imports: [
    CommonModule,
    AnaliseRoutingModule,
    FormsModule
  ],
  exports:[
    AnaliseFormComponent
  ]
})
export class AnaliseModule { }
