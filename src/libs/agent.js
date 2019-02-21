const API_ROOT = "";

const handleErrors = err => {
  console.log("error", err);
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
    fetch(`${API_ROOT}${url}?api-key=${API_KEY}&${getQueryString(query)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(handleErrors)
};

export default {
  requests
};
