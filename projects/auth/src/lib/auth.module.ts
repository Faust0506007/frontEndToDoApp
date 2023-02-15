import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import { RegisterComponent } from './components/register/register.component';

import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
	declarations: [LoginComponent,RegisterComponent],
	imports: [
    AppCommonModule,

    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
	exports: [
    LoginComponent,
    RegisterComponent,

    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
})
export class AuthModule {}
