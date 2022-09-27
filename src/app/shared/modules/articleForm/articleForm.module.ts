import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import {BackendErrorMessagesModule} from "../backEndErrorMessages/backendErrorMessages.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  exports: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule,
  ]

})
export class ArticleFormModule {

}
