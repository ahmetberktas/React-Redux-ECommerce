import { createStore, combineReducers, applyMiddleware } from "redux"; 
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

/* Reducerları birleştirme */
const rootReducer = combineReducers({ basketReducer, productReducer });

/* Store Oluşturma */
export default createStore(rootReducer, applyMiddleware(thunk));