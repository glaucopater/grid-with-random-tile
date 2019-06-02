import { combineReducers } from "redux";
import { firstReducer } from "./containers/Board/reducers";

const reducers = combineReducers({
  first: firstReducer
});

export default reducers;
