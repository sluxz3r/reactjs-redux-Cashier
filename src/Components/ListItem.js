import React, { Component } from 'react';
import '../Assets/ListItem.css';
import ModalCheckout from '../Components/ModalCheckout';

class ListItem extends Component {
    state = {
        cartItem: this.props.cart,
        total: null,
    }

    render() {
        const item = this.props.cart;
        return (
            <div style={{ height: '80%', width: '30%' }}>
                <div style={{ height: '80%', width: '100%', overflowY: 'auto' }}>
                    {this.props.cart == 0 ?
                        <div className='checkout'>
                            <div className='textCart'>
                                <img className='iconItem' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579521/img/food-and-restaurant_muq55k.png' />
                                <p className='textItem'>Your Cart Is Empty</p>
                                <p className='textSub'>Please add some items from the menu</p>
                            </div>
                        </div> :
                        <div className='checkout'>
                            {item &&
                                item.length > 0 &&
                                item.map((data, index) => {
                                    return (
                                        <div key={index} className='listCheck'>
                                            <div className='imgCheck'>
                                                <img className='img' src={data.image} />
                                            </div>
                                            <div className='nameQty'>
                                                <p className='textQty'>{data.name}</p>
                                                <span className="input-jumlah">
                                                    <p className="myButton" onClick={(val) => this.props.minus(index)}  >-</p>
                                                    <p className="inpud" >{data.qty}</p>
                                                    <p className="myButton" onClick={(val) => this.props.plus(index)} >+</p>
                                                </span>
                                            </div>
                                            <div className='price'>
                                                <p className='harga'>@ Rp.{data.price}</p>
                                            </div>
                                        </div>)
                                })}
                        </div>}
                </div>
                {this.props.cart == 0 ? ('') :
                    <div className='menuBawah'>
                        <div className='total'>
                            <h3 className='textTotal'>Total : </h3>
                            <h3 className='textHarga'>Rp. {this.props.sum}*</h3>
                        </div>
                        <div className='ppn'>
                            <span>*Belum termasuk ppn</span>
                        </div>
                        <div className='checkButton'>
                            <ModalCheckout total={this.props.sum} item={this.props.cart} idProd={this.props.idProd} />
                        </div>
                        <div onClick={this.props.cancel} className='cancel'>
                            <p className='textCancel'>Cancel</p>
                        </div>
                    </div>}
            </div>
        );
    }
}
export default ListItem

