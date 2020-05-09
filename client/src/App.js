import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Join from './routes/Join';
import Login from './routes/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/login' component={Login} />
        <Route path='/join' component={Join} />
        <Route path='/' exact={true} component={Home} />
      </BrowserRouter>
    );
  }
}
export default App;
