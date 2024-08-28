import { ActionTypes } from "../actionTypes/actionTypes"
import axios from "axios"

export const setLoading = () => {
    return {
        type: ActionTypes.SET_LOADING,
    }
}

export const setError = () => {
    return {
        type: ActionTypes.SET_ERROR,
    }
}

export const setProducts = (payload) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload
    }
}

/* Redux Thunk */
export const getProductData = () => (dispatch) => {
    axios
        .get("http://localhost:3000/products")
        .then((res) => dispatch(setProducts(res.data)))
        .catch((err) => dispatch(setError(res.data)));
}
