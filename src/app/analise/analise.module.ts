import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseFormComponent  } from './analise-form/analise-form.component';
import { AnaliseRoutingModule } from './analise-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnaliseCartaoComponent } from './analise-cartao/analise-cartao.component';
import { AnaliseSobConcessaoFormComponent } from './analise-sob-concessao-form/analise-sob-concessao-form.component';
import { AnaliseSobConcessaoCartaoComponent } from './analise-sob-concessao-cartao/analise-sob-concessao-cartao.component';



@NgModule({
  declarations: [
    AnaliseFormComponent,
    AnaliseCartaoComponent,
    AnaliseSobConcessaoFormComponent,
    AnaliseSobConcessaoCartaoComponent
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
    AnaliseCartaoComponent,
    AnaliseSobConcessaoFormComponent,
    AnaliseSobConcessaoCartaoComponent
  ]
})
export class AnaliseModule { }
