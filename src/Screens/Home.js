import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import LeftBar from '../Components/LeftBar';
import ListItem from '../Components/ListItem';
import Item from '../Components/Item';
import Loading from '../Components/Loading';
import swal from 'sweetalert';
import '../Assets/Home.css';

import { connect } from 'react-redux';
import { getProduct } from '../Redux/Actions/Product';

class Home extends Component {
    state = {
        sumCart: 0,
        isLoading:false,
        product:[]
    }


    componentDidMount=async()=>{
        this.setState({ isLoading:true })
        await this.props.dispatch(getProduct());
        this.setState({
            product: this.props.product.productList,
            isLoading:false
        });
    }
    _sumCart = () => {
        this.setState({
            sumCart: this.state.sumCart + 1
        })
    }

    _cancel=()=>{
        this.setState({
            sumCart:0
        })
    }
    render() {
        console.log(this.state.product);
        
        return (
            <>
             {localStorage.jwtToken == undefined ? <Redirect to='/login' /> :
            <div class='container'>
                <Header cart={this.state.sumCart} />
                <div class='content'>
                    <LeftBar />
                    {this.state.isLoading == true ? 
                    <Loading /> :
                    <Item sumCart={this._sumCart} item={this.state.product} />}
                    <ListItem cart={this.state.sumCart} cancel={this._cancel}/>
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
