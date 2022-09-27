import { Component, OnInit } from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";
import {filter, map, Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {select, Store} from "@ngrx/store";
import {editArticleAction} from "../../store/actions/editArticle.actions";
import {getArticleAction} from "../../store/actions/getArticle.actions";
import {ActivatedRoute} from "@angular/router";
import {articleSelector, errorSelector, isLoadingSelector, isSubmittingSelector} from "../../store/selectors";
import {ArticleInterface} from "../../../shared/types/article.interface";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})

export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isLoading$ : Observable<boolean>
  isSubmitting$ : Observable<boolean>;
  backendError$: Observable<BackendErrorsInterface | null>;

  slug: string

  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()


  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendError$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.initialValues$ = this.store.pipe(select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(editArticleAction({slug: this.slug, articleInput}))
  }
}
