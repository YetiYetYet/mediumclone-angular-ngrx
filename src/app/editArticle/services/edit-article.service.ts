import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ArticleInputInterface} from "../../shared/types/articleInput.interface";
import {ArticleInterface} from "../../shared/types/article.interface";
import {SaveArticleResponseInterface} from "../../shared/types/saveArticleResponseInterface";

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(private http: HttpClient) { }

  editArticle(slug: string,articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.put<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
      .pipe(
        (map((response: SaveArticleResponseInterface) => {
          return response.article;
    })))
  }
}
