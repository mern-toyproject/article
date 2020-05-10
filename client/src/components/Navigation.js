import React, { Component } from 'react';
import './css/Navigation.css';

export let clickedTopic = '';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    console.log(clickedTopic);
    clickedTopic = e.target.innerText;
  }

  render() {
    const onClick = this.onClick;
    return (
      <div className='navContainer'>
        <ul>
          <li onClick={onClick}>arts</li>
          <li onClick={onClick}>arts</li>
          <li onClick={onClick}>arts</li>
          <li onClick={onClick}>arts</li>
          <li onClick={onClick}>arts</li>
          <li onClick={onClick}>arts</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
