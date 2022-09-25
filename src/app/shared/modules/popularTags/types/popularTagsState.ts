import {PopularTagType} from "../../../types/popularTag.types";

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  isLoading: boolean;
  error: string | null;
}
