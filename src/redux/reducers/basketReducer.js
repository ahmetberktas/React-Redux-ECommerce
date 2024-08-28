import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    basket: []
}

const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BASKET_LOADING:
            return { ...state, isLoading: true }
        case ActionTypes.SET_BASKET_ERROR:
            return { ...state, isLoading: false, isError: true }
        case ActionTypes.SET_BASKET:
            return { ...state, isLoading: false, isError: false, basket: payload }
        default:
            return state;
    }
}

export default basketReducer