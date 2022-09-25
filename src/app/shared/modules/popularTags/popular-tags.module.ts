import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags.component';
import {PopularTagsService} from "./services/popular-tags.service";
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "./store/effects/getPopularTags.effects";
import {reducers} from "./store/reducers";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  exports: [
    PopularTagsComponent,
  ],
  providers: [
    PopularTagsService,
  ]
})
export class PopularTagsModule { }
