import {combineReducers} from 'redux';

import login from './Login';
import product from './Product';
import transaksi from './Transaksi';
import send from './Send'

const appReducer = combineReducers({
  login,
  product,
  transaksi,
  send
});

export default appReducer;