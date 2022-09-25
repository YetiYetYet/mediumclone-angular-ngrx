import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {ArticleInterface} from "../types/article.interface";
import {environment} from "../../../environments/environment";
import {GetArticleResponceInterface} from "../types/getArticleResponceInterface";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<ArticleInterface> {

    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get(fullUrl).pipe(
      map((response: GetArticleResponceInterface) => {
      return response.article;
    }))
  }
}
