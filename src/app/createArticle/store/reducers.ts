import {Action, createReducer, on} from "@ngrx/store";
import {routerNavigatedAction, routerNavigationAction} from "@ngrx/router-store";

import {createArticleAction, createArticleFailureAction, createArticleSuccessAction
} from "./actions/createArticle.actions";

import {CreateArticleStateInterface} from "../types/createArticleStateInterface";



const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const articleReducer = createReducer(
  initialState,
  on(createArticleAction, (state): CreateArticleStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(createArticleSuccessAction, (state, action): CreateArticleStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(createArticleFailureAction, (state, action): CreateArticleStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors

  })),
  on(routerNavigationAction, (): CreateArticleStateInterface => initialState),
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
