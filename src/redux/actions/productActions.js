import { ActionTypes } from "../actionTypes/actionTypes"

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
