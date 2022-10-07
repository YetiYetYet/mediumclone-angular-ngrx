import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../shared/types/appState.interface";
import {filter, Observable, Subscription} from "rxjs";
import {currentUserSelector} from "../../auth/store/selectors";
import {CurrentUserInputInterface} from "../../auth/types/currentUserInput.interface";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";
import {isSubmittingSelector, validationErrorsSelector} from "../store/selectors";
import {updateCurrentUserAction} from "../../auth/store/actions/updateCurrentUser.actions";
import {logoutAction} from "../../auth/store/actions/sync.actions";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  form: FormGroup
  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;
  isSubmitting$: Observable<boolean>
  backendError$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeListeners()
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendError$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    })
  }

  initializeListeners() {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInputInterface)  => {
        this.currentUser = currentUser;
        this.initializeForm();
      })
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe()
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    }
    this.store.dispatch(updateCurrentUserAction({currentUserInput}))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }
}
