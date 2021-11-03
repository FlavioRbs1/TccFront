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
import { ClientesService } from './clientes/clientes.service';
import { PedidoModule } from './pedido/pedido.module';
import { AnaliseModule } from './analise/analise.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetricasService } from './metricas/metricas.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { PedidoService } from './pedido/pedido.service';
import { ChartsModule } from 'ng2-charts';
import { AnaliseSobConcessaoCartaoComponent } from './analise/analise-sob-concessao-cartao/analise-sob-concessao-cartao.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guard/auth-guard.service';
import { LoginService } from './login/login.service';
import { GestorGuard } from './guard/gestor-guard.service';
import { AdminGuard } from './guard/admin-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    
  ],
  providers: [
    ClientesService,
    MetricasService,
    PedidoService,
    LoginService,
    AuthGuard,
    GestorGuard,
    AdminGuard,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
