import actionTypes from "./actionTypes";

export function firstReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.FIRST_ACTION:
      return action.data;
    default:
      return state;
  }
}
