import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { fetchReducer } from "./reducers"

const reducers = combineReducers({ 
    dados: fetchReducer,
 })

const store = createStore(reducers, applyMiddleware(thunk))

export default store