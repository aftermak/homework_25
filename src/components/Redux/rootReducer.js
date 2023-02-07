import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import { flagsReducer } from "./flagsReducer";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
    flags: flagsReducer,
    error: errorReducer,
    users: usersReducer,
})