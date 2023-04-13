import changeTheme from "./changeTheme";
import dataFromApi from "./dataFromApi";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheme, dataFromApi
})

export default rootReducer;