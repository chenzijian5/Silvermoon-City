import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {reducer} from "../reducer"
require("../base/data")
export const store = createStore(reducer,window.INITIAL_DATA,applyMiddleware(thunk))
