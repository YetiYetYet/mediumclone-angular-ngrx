import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CreateArticleStateInterface} from "../types/createArticleStateInterface";




export const createArticleFeatureSelector = createFeatureSelector<CreateArticleStateInterface>('createArticle')

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
)

export const errorSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);


