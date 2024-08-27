import { ActionTypes } from "../actionTypes/actionTypes";
const initialState = {
    isLoading: false,
    isError: false,
    products: []
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        /* Loading değeri belirlenir */
        case ActionTypes.SET_LOADING:
            return { ...state, isLoading: true }
        /* Ürünlerin değerleri belirlenir */
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload, isLoading: false, isError: false }
        /* Hata olduğunda store günceller */
        case ActionTypes.SET_ERROR:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}

export default productReducer