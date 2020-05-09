import React from 'react';
import './css/Top.css';

function Top() {
  return (
    <div className='top'>
      <div className='top-left'></div>
      <div className='top_logo'>
        <a href='/'>BOOKS</a>
      </div>
      <ul className='top-right'>
        <li>
          <a href='/join'>JOIN</a>
        </li>
        <li>
          <a href='/login'>LOGIN</a>
        </li>
      </ul>
    </div>
  );
}

export default Top;
