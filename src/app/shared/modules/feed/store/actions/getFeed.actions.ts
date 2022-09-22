import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {GetFeedResponceInterface} from "../../types/getFeedResponce.interface";

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{url: string}>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponceInterface}>()
);

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_FAILURE,
);
