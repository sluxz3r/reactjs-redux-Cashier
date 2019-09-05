import axios from 'axios';

const url = 'http://localhost:8000';

export const getTransaksi = () => {
    return {
        type: 'GET_TRANSAKSI',
        payload: axios.get(`${url}/transaksi/`),

    }
};

export const postTransaksi = (data) => {
    return {
        type: 'POST_TRANSAKSI',
        payload: axios.post(`${url}/transaksi/`, data)
    }
};