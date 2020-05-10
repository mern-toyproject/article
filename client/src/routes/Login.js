import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Passport from '../components/Passport';
import Top from '../components/Top';
import './css/Join.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      email: this.state.email,
      password: this.state.password
    };

    // @route   POST /login
    // @desc    User login
    // @access  Private
    fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className='joinContainer'>
        <Top />
        <div className='main'>
          <Navigation />
          <div className='joinBox'>
            <h2>LOG IN</h2>
            <form onSubmit={this.onSubmit}>
              <input
                type='email'
                placeholder='E-MAIL'
                name='email'
                onChange={this.onChange}
              />
              <input
                type='password'
                placeholder='PASSWORD'
                name='password'
                onChange={this.onChange}
              />
              <input type='submit' value='LOGIN' />
            </form>
            <Passport />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// constructor(props) {
//   super(props);
//   this.state = {
//     email: '',
//     password: '',
//     password_dc: '',
//     nickname: ''
//   };
//   this.onChange = this.onChange.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);
// }

// onChange(e) {
//   console.log(e.target.name);
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }

// onSubmit(e) {
//   e.preventDefault();
//   const post = {
//     email: this.state.email,
//     password: this.state.password,
//     password_dc: this.state.password_dc,
//     nickname: this.state.nickname
//   };
//   // @route   POST /join
//   // @desc    Create user account
//   // @access  Private
//   fetch('/join', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(post)
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
