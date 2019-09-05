import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import '../Assets/ModalAdd.css';
import { postProduct } from '../Redux/Actions/Product';

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

class ModalAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            product: [],
            file: null
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    onChangeFile = (e) => {
        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0],
        })
    }
    render() {
        const productAdd = () => {
            let category = '';
            switch (this.state.category) {
                case 'Drink':
                    category = 'Drink';
                    break;
                default:
                    category = 'Food';
            }

            const dataFile = new FormData()
            dataFile.append('image', this.state.file)
            dataFile.append('name', this.state.name)
            dataFile.append('price', this.state.price)
            dataFile.append('category', category)


            add(dataFile)
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log(this.state.product);
        };
        let add = async (data) => {
            await this.props.dispatch(postProduct(data))
                .then(() => {
                    swal({
                        title: "Add Product",
                        text: `Add Product Success`,
                        icon: "success",
                        button: "OK"
                    }).then(() => {
                        window.location.href = '/';
                    })
                })
        };
        return (
            <div>
                    <img onClick={this.openModal} className='iconAdd' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567579659/img/add_1_kfwkxt.png' />


                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                    >
                        <div className='modalAdd'>
                            <div className='kepalaModal'>
                                <p>Add Item</p>
                            </div>
                            <div>
                                <form className='formModal'>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        id="name"
                                        placeholder="Name..." />
                                </form>
                                <form className='formModal'>
                                    <label>Image</label>
                                    <input 
                                        type="file"
                                        name="title"
                                        onChange={this.onChangeFile}
                                        id="title"
                                        placeholder="Image..."
                                        style={{ height: 40, fontSize: 12 }} />
                                </form>
                                <form className='formModal'>
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={(e) => this.setState({ price: e.target.value })}
                                        id="name"
                                        placeholder="Price..." />
                                </form>
                                <form className='formModal'>
                                    <label>Category</label>
                                    <select style={{
                                        color: 'white',
                                        backgroundColor: 'black',
                                        width: '100px',
                                    }}
                                        onChange={(e) => this.setState({ category: e.target.value })}>
                                        <option >Drink</option>
                                        <option>Food</option>
                                    </select>
                                </form>
                            </div>
                            <div className='but'>
                                <button className='buttonCancel' onClick={this.closeModal} >cancel</button>
                                <button type='submit' class="buttonAdd" onClick={productAdd.bind(this)} >Add</button>
                            </div>
                        </div>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Product: state.Product
    };
};
export default connect(mapStateToProps)(ModalAdd);