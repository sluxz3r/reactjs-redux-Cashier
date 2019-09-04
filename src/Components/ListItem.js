import React, { Component } from 'react';
import '../Assets/ListItem.css'

class ListItem extends Component {
    render() {
        return (
            <>
                {this.props.cart == 0 ?
                    <div class='cartItem'>
                        <div class='textCart'>
                            <img class='iconItem' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579521/img/food-and-restaurant_muq55k.png' />
                            <p class='textItem'>Your Cart Is Empty</p>
                            <p class='textSub'>Please add some items from the menu</p>
                        </div>
                    </div> :
                    <div>
                        <h2>{this.props.cart}</h2>
                        <h2 onClick={this.props.cancel}>Batal</h2>
                    </div>}
            </>
        );
    }
}
export default ListItem

