import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const root_reducer = combineReducers({app:reducer})

export const store=legacy_createStore(root_reducer,applyMiddleware(thunk))