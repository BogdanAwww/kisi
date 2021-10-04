import { combineReducers } from "redux";
import groups from "./reducers/groups";
import groupLocks from "./reducers/groupLocks";
import locks from './reducers/locks'
import unlockEvents from "./reducers/unlockEvents";

export const rootReducer = combineReducers({
    groups,
    groupLocks,
    locks,
    unlockEvents
})