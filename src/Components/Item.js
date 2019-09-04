import React, { Component } from 'react';
import '../Assets/Item.css';

class Login extends Component {
    render() {
        const menu = this.props.item        
        return (
            <div class='menuItem'>
                <div class='cardContainer'>
                    {menu &&
                        menu.length > 0 &&
                        menu.map((data, index) => {
                            return (
                                <div key={index} class='card' onClick={this.props.sumCart}>
                                    <img class='foto' src={data.image} />
                                    <p class='nameKopi'>{data.name}</p>
                                    <p class='hargaKopi'>Rp.{data.price}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default Login
