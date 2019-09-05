import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HistoryList from '../Components/History';
import HeaderHistory from '../Components/HeaderHistory'
import LeftBar from '../Components/LeftBar';
import swal from 'sweetalert';
import '../Assets/History.css'
import { connect } from 'react-redux';
import { getTransaksi } from '../Redux/Actions/Transaksi';

class History extends Component {
    state = {
        transaksi:[],
        isLoading: false,
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await this.props.dispatch(getTransaksi());
        this.setState({
            transaksi: this.props.transaksi.transaksiList,
            isLoading: false
        });
    }

    render() {
        const list = this.props.transaksi.transaksiList
        return (
            <div className='container'>
                <HeaderHistory />
                <div className='content'>
                    <LeftBar />
                    <div className='menuItems'>
                        <HistoryList list={list} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transaksi: state.transaksi,
    };
};

export default connect(mapStateToProps)(History);
