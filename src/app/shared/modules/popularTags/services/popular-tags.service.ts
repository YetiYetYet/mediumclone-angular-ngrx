import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PopularTagType} from "../../../types/popularTag.types";
import {environment} from "../../../../../environments/environment";
import {GetPopularTagsResponseInterface} from "../types/getPopularTagsResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]>{
    const url = environment.apiUrl + '/tags';
    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => response.tags)
    )
  }
}
