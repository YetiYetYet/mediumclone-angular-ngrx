import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {combineLatest, map, Observable, Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {stringify, parseUrl} from "query-string";


import {getArticleAction} from "../../store/actions/getArticle.actions";
import {errorSelector, articleSelector, isLoadingSelector} from "../../store/selectors";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {currentUserSelector} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  article: ArticleInterface
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  articleSubscription: Subscription;
  isAuthor$: Observable<boolean>

  slug: string;


  constructor(private store: Store<AppStateInterface>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {this.article = article;});
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.error$ =  this.store.pipe(select(errorSelector));
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))]
    ).pipe(
      map(
        ([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) =>
        {
          if (!article || !currentUser) {
            return false;
        }
        return currentUser.username === article.author.username;
    }))
    //this.baseUrl = this.router.url.split('?')[0];
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

}
