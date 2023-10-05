// import { combineReducers} from "redux"
import stateReducer from "./state";
import {combineReducers} from "@reduxjs/toolkit"

export const reducers = combineReducers({
    state: stateReducer
})
