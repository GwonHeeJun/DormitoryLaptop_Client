import { connectRouter } from "connected-react-router";
import {combineReducers} from "redux";

import menu from "./Menu/Menu.store";
import laptop from "./Laptop/Laptop.store"

const reducers = {
  menu
}

export default (history) => 
  combineReducers({
    router: connectRouter(history),
    ...reducers,
    menu,
    laptop
})