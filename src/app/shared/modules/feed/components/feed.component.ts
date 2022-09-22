import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {AppStateInterface} from "../../../types/appState.interface";
import {getFeedAction} from "../store/actions/getFeed.actions";
import {GetFeedResponceInterface} from "../types/getFeedResponce.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "../store/selectors";

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

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();

  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ =  this.store.pipe(select(errorSelector));
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

}
