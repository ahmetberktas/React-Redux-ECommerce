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
        case ActionTypes.ADD_TO_BASKET:
            return { ...state, basket: state.basket.concat(payload) };
        case ActionTypes.UPDATE_ITEM:
            const newItems = state.basket.map((i) => {
                if ((i.id === payload)) {
                    return { ...i, amount: i.amount + 1 }
                } else {
                    return i;
                }
            })
            return { ...state, basket: newItems }
        default:
            return state;
    }
}

export default basketReducer