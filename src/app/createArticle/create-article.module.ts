import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './Components/create-article/create-article.component';
import {RouterModule} from "@angular/router";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {CreateArticleService} from "./services/create-article.service";
import {EffectsModule} from "@ngrx/effects";
import {CreateArticleEffect} from "./store/effects/create-article-effect.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
    ArticleFormModule
  ],
  providers: [
    CreateArticleService
  ]

})
export class CreateArticleModule { }
