import React, { Component } from 'react';
import swal from 'sweetalert';
import '../Assets/ModalCheckout.css';

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
            check: [],
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        const id_transaksi = Date.now()
        console.log(id_transaksi)
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
                                <label className='receipt'>Receipt no: #{id_transaksi}</label>
                            </div>
                            <div className="cashier">
                                <label className='textCashier'>Cashier : Bambang</label>
                            </div>
                        </div>

                        <div className='badanModal'>
                            <p>Badan Modal</p>
                        </div>
                        <div className='buts'>
                            <button className='buttonCancels' onClick={this.closeModal} >Print</button>
                            <label>or</label>
                            <button type='submit' class="buttonAdds" >Send Email</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalCheckout;