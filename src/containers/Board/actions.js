import actionTypes from "./actionTypes";

export function firstAction(data) {
  return { type: actionTypes.FIRST_ACTION, data: data };
}
