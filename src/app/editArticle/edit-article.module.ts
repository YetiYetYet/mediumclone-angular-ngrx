import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './Components/edit-article/edit-article.component';
import {RouterModule} from "@angular/router";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {EditArticleService} from "./services/edit-article.service";
import {EffectsModule} from "@ngrx/effects";
import {EditArticleEffect} from "./store/effects/edit-article-effect.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {GetArticleEffect} from "./store/effects/get-article-effect.service";
import {ArticleService} from "../shared/services/article.service";
import {LoadingModule} from "../shared/modules/loading/loading.module";

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    ArticleFormModule,
    LoadingModule
  ],
  providers: [
    EditArticleService,
    ArticleService
  ]

})
export class EditArticleModule { }
