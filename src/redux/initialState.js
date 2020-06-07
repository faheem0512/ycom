import {getFromStorage} from "../utility";

export default {
    isFetching: false,
    data: [],
    hiddenRows:getFromStorage("hiddenRows") || [], // array of string od objectIds
    upVotedRows:getFromStorage("upVotedRows") || {}, // objectId:rowData
    error: "",
    hideNext:false,
    message:""
};
