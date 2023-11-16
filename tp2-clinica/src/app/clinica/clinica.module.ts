import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicaRoutingModule } from './clinica-routing.module';
import { ClinicaComponent } from './clinica.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClinicaComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
    MatToolbarModule, MatIconModule, MatListModule,
    ReactiveFormsModule
  ]
})
export class ClinicaModule { }
