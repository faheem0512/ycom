import { API_START, API_ERROR, API_SUCCESS } from "./actions";

export const initialState = {
  isFetching: false,
  data: [],
  error: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case API_START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case API_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case API_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    default:
      return state;
  }
}

export default rootReducer;
