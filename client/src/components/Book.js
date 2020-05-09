import React from 'react';
import PropTypes from 'prop-types';
import './css/Book.css';

function Book({ title, rank, description, author, poster, buy }) {
  return (
    <div className='book'>
      <img src={poster} alt={poster} />
      <div className='book_data'>
        <h1 className='book_rank'>{rank}</h1>
        <h4 className='book_title'>{title}</h4>
        <h4 className='book_author'>{author}</h4>
        <h4 className='book_description'>{description.slice(0, 120)}...</h4>
        <a href={buy} className='book_store'>
          TO BUY
        </a>
      </div>
    </div>
  );
}

Book.prototype = {
  title: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  buy: PropTypes.string.isRequired
};

export default Book;
