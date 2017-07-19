//import * as types from '../actions/actionTypes';

const initialState = {
  //line: ""
  //eventHistory: []
};

export default function api(state = initialState, action = {}) {
  console.log("welcome to the api reducer!")
  switch (action.type) {
    case "GOT_PET_DATA":
      return {
        ...state,
        eventHistory: action.data.slice(action.data.length-5,action.data.length)
      };
    case "ADD_EVENT_API_SUCCESS":
      return {
        ...state,
      };
    default:
      return state;
  }
}
