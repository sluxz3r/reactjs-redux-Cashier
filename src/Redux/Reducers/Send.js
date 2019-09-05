const initialState = {
    sendList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const send = (state = initialState, action) => {
    switch (action.type) {
        case 'POS_EMAIL_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'POS_EMAIL_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POS_EMAIL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                sendList: action.payload.data.result
            };
        default:
            return state;
    };

}

export default send