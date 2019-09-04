import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Redux/store'

import Home from './Screens/Home';
import Login from './Screens/Login';
import History from './Screens/History';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <div className='background'>
      <Router>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/history'} component={History} />
        <Route exact path={'/login/'} component={Login} />
      </Router>
      </div>
      </Provider>
    )
  }
}
export default App;
