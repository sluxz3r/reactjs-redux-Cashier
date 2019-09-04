import {combineReducers} from 'redux';

import login from './Login';
import product from './Product';

const appReducer = combineReducers({
  login,
  product
});

export default appReducer;