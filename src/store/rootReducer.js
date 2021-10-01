import { combineReducers } from "redux";
import groups from "./reducers/groups";
import groupLocks from "./reducers/groupLocks";

export const rootReducer = combineReducers({
    groups,
    groupLocks
})