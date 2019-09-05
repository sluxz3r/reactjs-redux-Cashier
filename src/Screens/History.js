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
            <div className='container'>
                <HeaderHistory />
                <div className='content'>
                    <LeftBar />
                    <div className='menuItems'>
                        <HistoryList />
                    </div>
                </div>
            </div>
        );
    }
}

export default History
