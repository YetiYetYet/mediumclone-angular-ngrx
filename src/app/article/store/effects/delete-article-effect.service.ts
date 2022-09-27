import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction} from "../actions/deleteArticle.actions";

import {ArticleService} from "../../services/article.service";
import {Router} from "@angular/router";



@Injectable()
export class DeleteArticleEffect {

  deleteArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(deleteArticleAction),
        switchMap(({slug}) => {


          return this.articleService.deleteArticle(slug).pipe(
            map(() => {
              return deleteArticleSuccessAction()
            }),
            catchError(() => {
              return of(
                deleteArticleFailureAction())
            })
          )
        })
      );
    }
  )

  redirectAfterDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/')})
    ), {dispatch: false}
  )


  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router) {}

}
