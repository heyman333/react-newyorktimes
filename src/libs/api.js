import agent from "./agent";

const fetchArticlesByPage = page =>
  agent.requests.getWithQuery("/articlesearch.json", {
    page,
    sort: "newest"
  });

export default fetchArticlesByPage;
