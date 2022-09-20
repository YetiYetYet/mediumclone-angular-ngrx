import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persitanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser})
        }),

        catchError((errorResonse: HttpErrorResponse) => {
          return of(
            registerFailureAction({errors: errorResonse.error.errors}))
        })
      )
    })
    )
  )

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/')
    })),
    {dispatch: false}
  )



  constructor(private actions$: Actions,
              private authService: AuthService,
              private persitanceService: PersistanceService,
              private router: Router) {}

}
