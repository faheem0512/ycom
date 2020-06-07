import { API_START, API_ERROR, API_SUCCESS, HIDE_ROW, UP_VOTE_ROW } from "./actions";
import {setInStorage} from "../utility";
import initialState from "./initialState";

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
      const hideNext = (data.hits.length < data.hitsPerPage) || (data.page+1 === data.nbPages);
      const message = data.message;
      data = data.hits;
      data = filterHiddenRows(data, hiddenRows);
      data = getUpdatedRows(data, upVotedRows);
      return { ...state, isFetching: false, data, hideNext,message };
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
