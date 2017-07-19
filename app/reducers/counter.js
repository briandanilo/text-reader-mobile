//import * as types from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default function counter(state = initialState, action = {}) {
  console.log("welcome to the counter reducer!")
  switch (action.type) {
    case "ADD_TO_COUNTER":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}
