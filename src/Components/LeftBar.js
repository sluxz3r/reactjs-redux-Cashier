import React, { Component } from 'react';
import '../Assets/LeftBar.css';
import swal from 'sweetalert';
import ModalAdd from '../Components/ModalAdd';

class LeftBar extends Component {
    render() {
        const del = async () => {
            const userid = localStorage.userid
            localStorage.removeItem('userid')
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('name')
            swal({
                title: "Logout",
                text: "Logout Success !!",
                icon: "success",
                button: "OK"
            }).then(() => {
                window.location.href = '/login/';
            })
        };
        return (
            <div className='leftBar'>
                <a href="/">
                    <img className='iconSendok' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579575/img/fork_eixcjp.png' />
                </a>
                <a href="/history">
                    <img className='iconList' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579578/img/clipboard_tq1syf.png' />
                </a>
                <ModalAdd />
                <a onClick={del.bind(this)}>
                    <img className='logout' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567582291/img/logoutt_qqf1er.png' />
                </a>
            </div>
        );
    }
}

export default LeftBar
