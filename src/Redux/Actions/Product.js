import axios from 'axios';

// const url = 'http://localhost:8000';
const url = 'https://cashier-ari.herokuapp.com';

export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`${url}/product/`),

    }
};

export const postProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`${url}/product/`, data)
    }
};