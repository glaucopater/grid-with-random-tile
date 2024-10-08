import { combineReducers } from "redux";
import { firstReducer } from "../containers/Board/boardReducers";

const reducers = combineReducers({
  first: firstReducer
});

export default reducers;
