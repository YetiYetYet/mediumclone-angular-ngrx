import {Action, createReducer, on} from "@ngrx/store";
import {routerNavigatedAction, routerNavigationAction} from "@ngrx/router-store";

import {EditArticleStateInterface} from "../types/editArticleStateInterface";
import {editArticleAction, editArticleFailureAction, editArticleSuccessAction} from "./actions/editArticle.actions";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "./actions/getArticle.actions";



const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

const editArticleReducer = createReducer(
  initialState,
  on(editArticleAction, (state): EditArticleStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(editArticleSuccessAction, (state, action): EditArticleStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(editArticleFailureAction, (state, action): EditArticleStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors

  })),
  on(getArticleAction, (state): EditArticleStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getArticleSuccessAction, (state, action): EditArticleStateInterface => ({
    ...state,
    isLoading: false,
    article: action.article
  })),
  on(getArticleFailureAction, (state, action): EditArticleStateInterface => ({
    ...state,
    isLoading: false,
  })),

)

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
