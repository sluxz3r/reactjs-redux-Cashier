import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import '../Assets/Login.css';
import { connect } from 'react-redux';
import { login } from '../Redux/Actions/Login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: [],
        };
    
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {    
        const userAdd = () => {
          this.state.user.push({
            email: this.state.email,
            password: this.state.password
          });
          add()
          this.setState((prevState) => ({
            modal: !prevState.modal
          }));
        };
        let add = async () => {
          await this.props.dispatch(login(this.state.user[0]))
        };
        return (
            <div className='bodyLogin'>
                {localStorage.jwtToken != undefined ? <Redirect to='/' /> :
                <div className="loginbox">
                    <img src="https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567570643/img/avatar_ynz0bv.png" className="avatar" />
                    <h1>Login Here</h1>
                    <form>
                        <p>Email</p>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter Email"
                        onChange={(e) => this.setState({ email: e.target.value })} />
                        <p>Password</p>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        onChange={(e) => this.setState({ password: e.target.value })} />
                        <Link to='/'>
                        <button onClick={userAdd.bind(this)}>Sign In</button>
                        </Link>
                    </form>
                </div>}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      login: state.login
    };
  };
  export default connect(mapStateToProps)(Login);
