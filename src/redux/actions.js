import {API_URL} from "../utility/constants";

export const API_START = "API_START";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";
export const HIDE_ROW = "HIDE_ROW";
export const UP_VOTE_ROW = "UP_VOTE_ROW";

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
    var url = new URL(API_URL);
    url.search = new URLSearchParams({ page: pageNo }).toString();
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(apiSuccess(data)))
      .catch((error) => dispatch(apiError(error)));
  };
}

export function hideRow(objectID) {
  return {
    type: HIDE_ROW,
    objectID
  }
}
export function upVoteRow(objectID) {
  return {
    type: UP_VOTE_ROW,
    objectID
  }
}