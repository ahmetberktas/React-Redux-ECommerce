
const initialState = {
    isLoading: true,
    isError: false,
    products: []
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

export default productReducer