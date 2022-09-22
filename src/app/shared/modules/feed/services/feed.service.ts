import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GetFeedResponceInterface} from "../types/getFeedResponce.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<GetFeedResponceInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponceInterface>(fullUrl);
  }
}
