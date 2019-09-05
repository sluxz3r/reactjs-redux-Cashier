import React, { Component } from 'react';
import '../Assets/HistoryList.css';
import moment from 'moment'

class Login extends Component {
    render() {
        const list = this.props.list
        console.log(this.props.list);

        // console.log(mau&&JSON.parse(mau));

        return (
            <div>
                <table class="darkTable">
                    <thead>
                        <tr>
                            <th >No</th>
                            <th>ID Receipt</th>
                            <th>ID Cashier</th>
                            <th>Product</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {list &&
                        list.length > 0 &&
                        list.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index} style={{ height: '50px' }}>
                                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                        <td>#{item.id_transaksi}</td>
                                        <td style={{ textAlign: 'center' }}>{item.id_cashier}</td>
                                        <td>
                                            {(JSON.parse(item.idProd)).map(items =>
                                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                                                    <div style={{ width:'50%'}}>
                                                        <p style={{margin:'0'}}>{items.name} {items.qty}X</p>
                                                    </div>
                                                    <div style={{width:'45%'}}>
                                                        <p style={{ textAlign: 'right', margin:'0' }}>@ Rp.{items.price}</p></div>
                                                </div>)}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>Rp.{item.total}</td>
                                        <td style={{ textAlign: 'center' }}>{moment(item.created_at).format('DD-MM-YYYY')}</td>
                                    </tr>
                                </tbody>

                            )
                        })}
                </table>
            </div>
        );
    }
}

export default Login
