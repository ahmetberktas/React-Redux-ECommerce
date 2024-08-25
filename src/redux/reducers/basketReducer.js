
const initialState = {
    isLoading: true,
    isError: false,
    basket: []
}

const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

export default basketReducer