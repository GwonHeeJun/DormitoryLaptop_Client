import { connectRouter } from "connected-react-router";
import {combineReducers} from "redux";

import counter from "./Counter/Counter.store";

const reducers = {
  counter
}

export default (history) => 
  combineReducers({
    router: connectRouter(history),
    ...reducers,
    counter
})