import { createAction } from "redux-actions";

import * as ArticlesAPI from "./apis";
import { FETCH_ARTICLE } from ".";

export const fetchArticlesByPage = createAction(
  FETCH_ARTICLE,
  ArticlesAPI.fetchArticlesByPage
);
