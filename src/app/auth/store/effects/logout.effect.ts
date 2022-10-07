import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {logoutAction} from "../actions/sync.actions";
import {tap} from "rxjs";
import {PersistanceService} from "../../../shared/services/persistance.service";

@Injectable()
export class LogoutEffect {

  constructor(private actions$: Actions, private router: Router, private persistanceService: PersistanceService) {}

  logout$ = createEffect(() => this.actions$.pipe(ofType(logoutAction), tap(() => {
    this.persistanceService.set('accessToken', '');
    this.router.navigateByUrl('/');
  })), {dispatch: false})


}
