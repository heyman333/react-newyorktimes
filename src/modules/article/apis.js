import agent from "../../libs/agent";

export const fetchArticlesByPage = page =>
  agent.requests.getWithQuery("/articlesearch.json", {
    page,
    sort: "newest",
  });
