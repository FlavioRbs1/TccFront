import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    MetricasModule,
    ConfiguracaoModule,
    UsuariosModule,
    HistoricoModule,
    IndicadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
