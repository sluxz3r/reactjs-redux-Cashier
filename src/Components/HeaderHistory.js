import React, { Component } from 'react';
import '../Assets/HeaderHistory.css'
class HeaderHistory extends Component {
    render() {
        return (
            <div className='header'>
                <div className='burger'>
                    <img className='iconBurger' src='https://static.thenounproject.com/png/703781-200.png' />
                </div>
                <div className='items'>
                    <p className='textItems'>History List</p>
                </div>
            </div>
        );
    }
}

export default HeaderHistory
