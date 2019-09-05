const initialState = {
    productList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productList: action.payload.data.result
            };

        case 'POST_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'POST_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productList: action.payload.data.result
            };
        default:
            return state;
    };

}

export default product