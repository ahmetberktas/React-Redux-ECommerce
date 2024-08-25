import { createStore, combineReducers } from "redux"; 
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";

/* Reducerları birleştirme */
const rootReducer = combineReducers({ basketReducer, productReducer });

/* Store Oluşturma */
export default createStore(rootReducer);