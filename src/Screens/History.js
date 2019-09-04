import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HistoryList from '../Components/History';
import HeaderHistory from '../Components/HeaderHistory'
import LeftBar from '../Components/LeftBar';
import swal from 'sweetalert';
import '../Assets/History.css'
class History extends Component {
    render() {
        return (
            <div class='container'>
                <HeaderHistory />
                <div class='content'>
                    <LeftBar />
                    <div class='menuItems'>
                        <HistoryList />
                    </div>
                </div>
            </div>
        );
    }
}

export default History
