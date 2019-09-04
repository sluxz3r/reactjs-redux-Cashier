import React, { Component } from 'react';
import '../Assets/HeaderHistory.css'
class HeaderHistory extends Component {
    render() {
        return (
            <div class='header'>
                <div class='burger'>
                    <img class='iconBurger' src='https://static.thenounproject.com/png/703781-200.png' />
                </div>
                <div class='items'>
                    <p class='textItems'>History List</p>
                </div>
            </div>
        );
    }
}

export default HeaderHistory
