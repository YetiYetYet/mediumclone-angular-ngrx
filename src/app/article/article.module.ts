import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";

import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";

import {ArticleComponent} from "./components/article/article.component";
import {ErrorMessageModule} from "../shared/modules/errorMessage/errorMessage.module";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {GetArticleEffect} from "./store/effects/get-article-effect.service";
import {ArticleService} from "../shared/services/article.service";
import {TagListModule} from "../shared/modules/tagList/tagList.module";


const routes = [
  {
    path: 'articles/:slug', component: ArticleComponent
  }
]



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  exports: [
    ArticleComponent
  ],
  providers: [
    ArticleService
  ],
})
export class ArticleModule { }
