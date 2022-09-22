import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";

import { FeedComponent } from './components/feed.component';
import {FeedService} from "./services/feed.service";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {reducers} from "./store/reducers";


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ],
})
export class FeedModule { }
