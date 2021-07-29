import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido-form/pedido-form.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule
    
  ],
  exports:[
    PedidoComponent
  ]
})
export class PedidoModule { }
