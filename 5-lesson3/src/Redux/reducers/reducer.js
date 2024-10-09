import {combineReducers} from "redux";
import mainPageReducer from "./mainPageReducer";
import UsersReducer from "./UsersReducer";

export const rootReducer = combineReducers({


    UsersReducer,
    mainPageReducer

})