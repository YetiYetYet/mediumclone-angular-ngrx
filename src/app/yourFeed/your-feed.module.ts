import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import { YourFeedComponent } from './components/your-feed.component';
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popularTags/popular-tags.module";
import {FeedTogglerModule} from "../shared/modules/feedToggler/feedToogler.module";

const routes: Routes = [
  { path: 'feed', component: YourFeedComponent },
  //{ path: 'articles', component: GlobalFeedComponent },
];

@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],

})
export class YourFeedModule { }
