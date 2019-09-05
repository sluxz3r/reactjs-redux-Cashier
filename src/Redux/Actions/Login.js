import axios from 'axios';

// const url = 'http://localhost:8000';
const url = 'https://cashier-ari.herokuapp.com';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data, {
            headers: {
                "authorization": "x-control-user",
            }
        }).then( res => {
            const token = res.data.result.token;
            const userid = res.data.result.userid;
            const fullname = res.data.result.fullname;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('userid', userid);
            localStorage.setItem('name', fullname);
        })
    }

};

export const logout = (userid) => {
    return {
        type: 'LOGOUT', userid,
        payload: axios.patch(`${url}/logout/${userid}`)
     
    }
};