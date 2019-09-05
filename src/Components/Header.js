import React, { Component } from 'react';
import '../Assets/Header.css'
class Header extends Component {
    render() {
        return (
            <div class='header'>
                <div class='burger'>
                    <img class='iconBurger' src='https://static.thenounproject.com/png/703781-200.png' />
                </div>
                <div class='items'>
                    <p class='textItems'>Food Items</p>
                    <div class='search'>
                        <img class='iconSearch' src='https://image.flaticon.com/icons/png/512/55/55369.png' />
                    </div>
                </div>

                <div class='cart'>
                    <p class='textCart'>Cart <span class='sum'> {this.props.cart}</span></p>
                </div>
            </div>
        );
    }
}

export default Header
