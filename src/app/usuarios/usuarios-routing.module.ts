import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin-guard.service';
import { AuthGuard } from '../guard/auth-guard.service';
import { LayoutComponent } from '../layout/layout.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';

const routes: Routes = [
  {path:'usuarios',component:LayoutComponent,children:[
    {path: 'form', component: UsuariosFormComponent,canActivate:[AuthGuard,AdminGuard]  }
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
