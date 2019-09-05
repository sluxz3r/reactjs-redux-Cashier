const initialState = {
    transaksiList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const transaksi = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSAKSI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_TRANSAKSI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_TRANSAKSI_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                transaksiList: action.payload.data.result
            };

        case 'POST_TRANSAKSI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'POST_TRANSAKSI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_TRANSAKSI_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                transaksiList: action.payload.data.result
            };
        default:
            return state;
    };

}

export default transaksi