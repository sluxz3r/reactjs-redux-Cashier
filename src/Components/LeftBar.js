import React, { Component } from 'react';
import '../Assets/LeftBar.css';
import swal from 'sweetalert';

class LeftBar extends Component {
    render() {
        const del = async () => {
            const userid = localStorage.userid
            localStorage.removeItem('userid')
            localStorage.removeItem('jwtToken')
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
            <div class='leftBar'>
                <a href="/">
                    <img class='iconSendok' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579575/img/fork_eixcjp.png' />
                </a>
                <a href="/history">
                    <img class='iconList' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579578/img/clipboard_tq1syf.png' />
                </a>
                <img class='iconAdd' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579659/img/add_1_kfwkxt.png' />
                <a onClick={del.bind(this)}>
                    <img class='logout' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567582291/img/logoutt_qqf1er.png' />
                </a>
            </div>
        );
    }
}

export default LeftBar
