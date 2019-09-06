import React, { Component } from 'react';
import swal from 'sweetalert';
import '../Assets/ModalCheckout.css';
import { connect } from 'react-redux';
import { postTransaksi } from '../Redux/Actions/Transaksi';
import { postEmail } from '../Redux/Actions/Send';
import moment from 'moment'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};


class ModalCheckout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            Transaksi: [],
            receipt: moment().valueOf(),
            isEmail: false,
            email: '',
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.add()
        window.print()
        this.setState({ modalIsOpen: false })
        window.location.href = '/'
    }
    postTran = () => {
        this.add()
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    };

    add = async () => {
        const data = {
            id_transaksi: this.state.receipt,
            id_cashier: 12,
            total: this.props.total.toString(),
            idProd: JSON.stringify(this.props.idProd)
        }
        await this.props.dispatch(postTransaksi(data))
        this.setState({
            isEmail: true
        })
    };


    send = async () => {
        // const all = {
        //    this.props.total,
        //     this.props.idProd
        // }
        const sendmail = {
            email: this.state.email,
            text: JSON.stringify(this.props.idProd)
        }
        await this.props.dispatch(postEmail(sendmail))
        window.location.href = '/'
    }
    render() {

        const name = localStorage.getItem('name')
        const ppn = this.props.total * 0.1
        const total = this.props.total + ppn
        const item = this.props.item
        console.log(this.props.idProd)
        return (
            <div>
                <p class='textCancel' onClick={this.openModal}>Checkout</p>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <div className='modalCheck'>

                        <div className='kepalaModal'>
                            <div className="isiKepala">
                                <label className='cekcek'>Checkout</label>
                                <label className='receipt'>Receipt no: #{this.state.receipt}</label>
                            </div>
                            <div className="cashier">
                                <label className='textCashier'>Cashier : {name}</label>
                            </div>
                        </div>

                        <div className='badanModal'>
                            {item &&
                                item.length > 0 &&
                                item.map((data, index) => {
                                    return (
                                        <div className='tootal' key={index}>
                                            <p className='nameTot'>{data.name}</p>
                                            <p className='qtyTot'>{data.qty}x</p>
                                            <p className='priceTot'>@ Rp.{data.price}</p>
                                        </div>
                                    )
                                })}

                        </div>
                        <div className='tootals'>
                            <p className='ppn'>Ppn 10% </p>
                            <p className='ppnRight'>Rp.{ppn}</p>
                        </div>
                        <p style={{ textAlign: 'right', marginTop: '0px', marginRight: '20px', fontWeight: 'bold' }}>Total : Rp.{total}</p>
                        {this.state.isEmail == true ?
                            <form className='send'>
                                <label className='labelSend'>Email</label>
                                <input
                                    className='inputSend'
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Email..."
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                <button className='buttonSend' onClick={this.send}>Send</button>
                            </form> :
                            <div className='buts'>
                                <button className='buttonCancels' onClick={this.closeModal} >Print</button>
                                <label>or</label>
                                <button type='submit' class="buttonAdds" onClick={this.postTran}>Send Email</button>
                            </div>}
                    </div>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        transaksi: state.transaksi,
        send: state.send
    };
};
export default connect(mapStateToProps)(ModalCheckout);