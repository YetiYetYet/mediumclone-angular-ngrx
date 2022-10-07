import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SettingsComponent } from './components/settings.component';
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {BackendErrorMessagesModule} from "../shared/modules/backEndErrorMessages/backendErrorMessages.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  }
]

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMessagesModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
