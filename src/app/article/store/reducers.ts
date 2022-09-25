import {Action, createReducer, on} from "@ngrx/store";
import {routerNavigatedAction, routerNavigationAction} from "@ngrx/router-store";

import {ArticleStateInterface} from "../types/articleStateInterface";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "./actions/getArticle.actions";


const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state): ArticleStateInterface => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action): ArticleStateInterface => ({
    ...state,
    isLoading: false,
    data: action.article,
  })),
  on(getArticleFailureAction, (state): ArticleStateInterface => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, (): ArticleStateInterface => initialState),
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
