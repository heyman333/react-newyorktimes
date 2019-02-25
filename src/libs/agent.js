const API_ROOT = "https://api.nytimes.com/svc/search/v2";
const API_AUTH_KEY = process.env.REACT_APP_API_AUHT_KEY;

const handleErrors = err => {
  throw new Error(err);
};

const getQueryString = params =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");

const requests = {
  get: url =>
    fetch(`${API_ROOT}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.jsonBody())
      .catch(handleErrors),
  getWithQuery: (url, query) =>
    fetch(
      `${API_ROOT}${url}?api-key=${API_AUTH_KEY}&${getQueryString(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .catch(handleErrors)
};

export default {
  requests
};
