import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'',component:LayoutComponent,children:[
    { path:'home', component: HomeComponent,canActivate:[AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
