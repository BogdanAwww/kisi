import { combineReducers } from "redux";
import groups from "./reducers/groups";
import groupLocks from "./reducers/groupLocks";
import locks from './reducers/locks'

export const rootReducer = combineReducers({
    groups,
    groupLocks,
    locks
})