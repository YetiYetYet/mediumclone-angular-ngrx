import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import { TagFeedComponent } from './components/tag-feed.component';
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popularTags/popular-tags.module";
import {FeedTogglerModule} from "../shared/modules/feedToggler/feedToogler.module";

const routes: Routes = [
  { path: 'tags/:slug', component: TagFeedComponent },
  //{ path: 'articles', component: TagFeedComponent },
];

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,

  ],
  providers: [
    TagFeedComponent
  ]

})
export class TagFeedModule { }
