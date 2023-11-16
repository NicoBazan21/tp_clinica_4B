import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { adminGuard } from '../guards/admin.guard';

const routes: Routes = [
  { path: '', component: ClinicaComponent,
    children:[
      {path: '', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'administrarUsuarios',
      canActivate: [adminGuard],
      loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule) }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicaRoutingModule { }
