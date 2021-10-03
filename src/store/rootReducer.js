import { combineReducers } from "redux";
import groups from "./reducers/groups";
import groupLocks from "./reducers/groupLocks";
import locks from './reducers/locks'
import places from "./reducers/places";

export const rootReducer = combineReducers({
    groups,
    groupLocks,
    locks,
    places
})