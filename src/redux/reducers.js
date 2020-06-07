import { API_START, API_ERROR, API_SUCCESS, HIDE_ROW, UP_VOTE_ROW } from "./actions";
import {setInStorage,getFromStorage} from "../utility";

export const initialState = {
  isFetching: false,
  data: [],
  hiddenRows:getFromStorage('hiddenRows') || [], // array of string od objectIds
  upVotedRows:getFromStorage('upVotedRows') || {}, // objectId:rowData
  error: "",
};

const filterHiddenRows = (data,hiddenRows) => {
  /*filtering hidden rows */
  return  data.filter(item => hiddenRows.indexOf(item.objectID) === -1);
};

const getUpdatedRows = (data,upVotedRows) => {
  /* over ridding modified data */
  return  data.map(item => {
    return upVotedRows[item.objectID] ? upVotedRows[item.objectID] : item;
  });
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
    case API_SUCCESS:{
      let {data} = action;
      const {upVotedRows,hiddenRows} = state;
      data = data.hits;
      data = filterHiddenRows(data, hiddenRows);
      data = getUpdatedRows(data, upVotedRows);
      return { ...state, isFetching: false, data };
    }
    case HIDE_ROW: {
      let {data} = state;
      const hiddenRows = [...state.hiddenRows, action.objectID];
      setInStorage("hiddenRows", hiddenRows);
      data = filterHiddenRows(data, hiddenRows);
      return {...state, hiddenRows, data};
    }
    case UP_VOTE_ROW: {
      const {objectID} = action;
      let {data} = state;
      let row = data.find(item => item.objectID === objectID);
      row = {...row, points: row.points + 1};
      const upVotedRows = {...state.upVotedRows, [objectID]: row};
      setInStorage("upVotedRows", upVotedRows);
      data = getUpdatedRows(data,upVotedRows);
      return {...state,upVotedRows,data};
    }
    default:
      return state;
  }
}

export default rootReducer;
