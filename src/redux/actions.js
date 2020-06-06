export const API_START = "API_START";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

function apiStart() {
  return {
    type: API_START,
  };
}

function apiError(error) {
  return {
    type: API_ERROR,
    error,
  };
}

function apiSuccess(data) {
  return {
    type: API_SUCCESS,
    data,
  };
}

export function fetchNews(pageNo) {
  return (dispatch) => {
    dispatch(apiStart());
    var url = new URL("https://hn.algolia.com/api/v1/search");
    url.search = new URLSearchParams({ page: pageNo }).toString();
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(apiSuccess(data)))
      .catch((error) => dispatch(apiError(error)));
  };
}
