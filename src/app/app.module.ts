import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { MetricasModule } from './metricas/metricas.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HistoricoModule } from './historico/historico.module';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { ClientesService } from './clientes.service';
import { PedidoModule } from './pedido/pedido.module';
import { AnaliseModule } from './analise/analise.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    MetricasModule,
    ConfiguracaoModule,
    UsuariosModule,
    HistoricoModule,
    IndicadoresModule,
    PedidoModule,
    AnaliseModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
