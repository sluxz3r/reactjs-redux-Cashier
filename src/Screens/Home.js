import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import LeftBar from '../Components/LeftBar';
import ListItem from '../Components/ListItem';
import Item from '../Components/Item';
import Loading from '../Components/Loading';
import '../Assets/Home.css';

import { connect } from 'react-redux';
import { getProduct } from '../Redux/Actions/Product';

class Home extends Component {
    state = {
        sumCart: 0,
        isLoading: false,
        product: [],
        cart: [],
        total: [],
        idProd: [],
    }


    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await this.props.dispatch(getProduct());
        this.setState({
            product: this.props.product.productList,
            isLoading: false
        });
    }

    _sumCart = (index, val) => {
        this.state.cart.push({
            image: val.image,
            name: val.name,
            price: val.price,
            qty: 1,
        })
        // this.setState({
        //     total:val.price
        // })
        this.state.total = Number(this.state.total + val.price)
        // this.state.total.push(val.price)
        this.state.idProd.push({
            id_product: val.id_product,
            name: val.name,
            price: val.price,
            qty: 1
        })

        this.setState({
            cart: this.state.cart,
            sumCart: this.state.sumCart + 1,
        })
    }

    _cancel = () => {
        this.setState({
            sumCart: 0,
            cart: [],
            total: [],
            idProd: [],
        })
    }

    _plus = (index) => {
        this.state.cart[index].qty++
        this.state.idProd[index].qty++
        this.state.total = Number(this.state.total + this.state.cart[index].price)
        // this.state.total.push(this.state.cart[index].price)
        this.setState({
            cart: this.state.cart
        })
    }

    _minus = (index) => {
        if (
            !(this.state.cart[index].qty <= 1)
        ) {
            this.state.cart[index].qty--
            this.state.idProd[index].qty--
            this.state.total = Number(this.state.total - this.state.cart[index].price)
            this.setState({
                cart: this.state.cart
            })
        }
    }
    render() {
        console.log(this.state.total);
        console.log(this.state.idProd);
        
        const sum = this.state.total
        // const sum = total.reduce((total, value) => total + value, 0)
        return (
            <>
                {localStorage.jwtToken == undefined ? <Redirect to='/login' /> :
                    <div className='container'>
                        <Header cart={this.state.sumCart} />
                        <div className='content'>
                            <LeftBar />
                            {this.state.isLoading == true ?
                                <Loading /> :
                                <Item sumCart={this._sumCart} item={this.state.product} cart={this.state.cart} />}
                            <ListItem cart={this.state.cart} plus={this._plus} minus={this._minus} cancel={this._cancel} sum={sum} idProd={this.state.idProd} />
                        </div>
                    </div>}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        product: state.product,
    };
};

export default connect(mapStateToProps)(Home);
