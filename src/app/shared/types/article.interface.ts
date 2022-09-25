import {ProfileInterface} from "./profile.interface";
import {PopularTagType} from "./popularTag.types";

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: PopularTagType[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
