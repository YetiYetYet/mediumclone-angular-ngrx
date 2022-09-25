import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import {AppStateInterface} from "../../../types/appState.interface";
import {getFeedAction} from "../store/actions/getFeed.actions";
import {GetFeedResponceInterface} from "../types/getFeedResponce.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "../store/selectors";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {stringify, parseUrl} from "query-string";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponceInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  limit: number = environment.limit;
  baseUrl: string = ""
  currentPage: number
  queryParamsSubscription: Subscription

  constructor(private store: Store<AppStateInterface>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed()
      }
    )
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ =  this.store.pipe(select(errorSelector));
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

}
