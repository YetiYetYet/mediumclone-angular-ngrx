import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../actions/getArticle.actions";
import {ArticleService} from "../../../shared/services/article.service";
import {ArticleInterface} from "../../../shared/types/article.interface";


@Injectable()
export class GetArticleEffect {

  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({slug}) => {


          return this.articleService.getArticle(slug).pipe(
            map((article: ArticleInterface) => {
              return getArticleSuccessAction({article})
            }),

            catchError(() => {
              return of(
                getArticleFailureAction())
            })
          )
        })
      );
    }
  )

  constructor(private actions$: Actions, private articleService: ArticleService,) {}

}
