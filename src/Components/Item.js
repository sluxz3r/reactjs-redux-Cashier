import React, { Component } from 'react';
import '../Assets/Item.css';

class Login extends Component {
    render() {
        const menu = this.props.item;
        const cart = this.props.cart;
        console.log('cart', cart);
        
        return (
            <div className='menuItem'>
                <div className='cardContainer'>
                    {menu &&
                        menu.length > 0 &&
                        menu.map((data, index) => {
                            return (
                                <div key={index} className='card' onClick={(val) => this.props.sumCart(data)}>
                                    <img className='foto' src={data.image} />
                                    <p className='nameKopi'>{data.name}</p>
                                    <p className='hargaKopi'>Rp.{data.price}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default Login
