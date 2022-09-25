import {PopularTagsStateInterface} from "../types/popularTagsState";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "./actions/getPopularTags.action";

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const popularTagsReducer = createReducer(initialState,
  on(
    getPopularTagsAction, (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
      error: null,
    })
  ),
  on(
    getPopularTagsFailureAction, (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: 'Could not load popular tags',
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action:Action) {
  return popularTagsReducer(state, action);
}
