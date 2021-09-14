import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent  } from './analise-form/analise-form.component';
import { AnaliseRoutingModule } from './analise-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AnaliseFormComponent
  ],
  imports: [
    CommonModule,
    AnaliseRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    AnaliseFormComponent
  ]
})
export class AnaliseModule { }
