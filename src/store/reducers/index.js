import { combineReducers } from "redux";

import counter from "./counter";
import todoLists from "./todoLists";

export default combineReducers({ counter, todoLists });
