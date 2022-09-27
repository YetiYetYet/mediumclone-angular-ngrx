import { Component, OnInit } from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {select, Store} from "@ngrx/store";
import {createArticleAction} from "../../store/actions/createArticle.actions";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$ : Observable<boolean>;
  backendError$: Observable<BackendErrorsInterface | null>;
  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(state => state.createArticle.isSubmitting));
    this.backendError$ = this.store.pipe(select(state => state.createArticle.validationErrors));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
