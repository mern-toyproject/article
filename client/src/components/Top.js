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
        <li>
          <form className='search_book'>
            <input
              type='text'
              name='search'
              placeholder='which one do you want to find?'
            />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Top;
