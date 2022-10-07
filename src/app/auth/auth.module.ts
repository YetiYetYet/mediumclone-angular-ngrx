import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";

import {AuthService} from "./services/auth.service";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/modules/backEndErrorMessages/backendErrorMessages.module";
import {PersistanceService} from "../shared/services/persistance.service";
import { LoginComponent } from './components/login/login.component';
import {LoginEffect} from "./store/effects/login.effect";
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";
import {UpdateCurrentUserEffect} from "./store/effects/updateCurrentUser.effect";
import {LogoutEffect} from "./store/effects/logout.effect";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistanceService]
})

export class AuthModule { }
