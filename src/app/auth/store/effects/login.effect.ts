import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.actions";


@Injectable()
export class LoginEffect {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/')
      })),
    {dispatch: false}
  )

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistanceService,
              private router: Router) {}

}
