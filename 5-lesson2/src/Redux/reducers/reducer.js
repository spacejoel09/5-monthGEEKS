import {combineReducers} from "redux";
import {calculatorReducer } from "./mainPageReducer";
import MainPageReducer from "./mainPageReducer";

import UsersReducer from "./UsersReducer";

export const rootReducer = combineReducers({
    calculator: calculatorReducer,

})