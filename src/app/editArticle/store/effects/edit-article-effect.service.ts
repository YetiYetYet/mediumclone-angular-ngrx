import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";


import {ArticleInterface} from "../../../shared/types/article.interface";


import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {EditArticleService} from "../../services/edit-article.service";
import {editArticleAction, editArticleFailureAction, editArticleSuccessAction} from "../actions/editArticle.actions";



@Injectable()
export class EditArticleEffect {
  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({slug, articleInput}) => {
        return this.editArticleService.editArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {

            return editArticleSuccessAction({article})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterEdit$ = createEffect(() => this.actions$.pipe(
      ofType(editArticleSuccessAction),
      tap(({article}) => {
        this.router.navigate(['/articles', article.slug])
      })),
    {dispatch: false}
  )



  constructor(private actions$: Actions,
              private editArticleService: EditArticleService,
              private persistenceService: PersistanceService,
              private router: Router) {}

}

