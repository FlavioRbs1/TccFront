import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent  } from './analise-form/analise-form.component';
import { AnaliseRoutingModule } from './analise-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnaliseCartaoComponent } from './analise-cartao/analise-cartao.component';



@NgModule({
  declarations: [
    AnaliseFormComponent,
    AnaliseCartaoComponent
  ],
  imports: [
    CommonModule,
    AnaliseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    AnaliseFormComponent,
    AnaliseCartaoComponent
  ]
})
export class AnaliseModule { }
