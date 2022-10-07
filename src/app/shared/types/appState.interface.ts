import {AuthStateInterface} from "../../auth/types/authState.interface";
import {FeedStateInterface} from "../modules/feed/types/feedState.interface";
import {PopularTagsStateInterface} from "../modules/popularTags/types/popularTagsState";
import {CreateArticleStateInterface} from "../../createArticle/types/createArticleStateInterface";
import {ArticleStateInterface} from "../../article/types/articleStateInterface";
import {EditArticleStateInterface} from "../../editArticle/types/editArticleStateInterface";
import {SettingsStateInterface} from "../../settings/types/settingsState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
}
