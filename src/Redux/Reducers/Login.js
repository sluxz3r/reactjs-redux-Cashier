const initialState = {
    loginList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const login = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                loginList: [state.loginList, action.payload]
            };
        default:
            return state;
    };

}
export default login