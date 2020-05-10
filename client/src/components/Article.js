import React from 'react';
import PropsTypes from 'prop-types';
import './css/Article.css';
function Article({ title, subtitle, writer, date, subsection, picture }) {
  return (
    <div className='article_container'>
      <div className='article_image'>
        <img src={picture} alt={picture} />
      </div>
      <div className='article_description'>
        <h1 className='article_title'>{title}</h1>
        <h2 className='article_subtitle'>{subtitle}</h2>
        <div className='article_info'>
          <h6 className='article_writer'>{writer}</h6>
          <p>|</p>
          <h6 className='article_subsection'>
            {subsection.length < 1 ? 'none' : subsection}
          </h6>
          <p>|</p>
          <h6 className='article_date'>{date.slice(0, 10)}</h6>
          <p>|</p>
          <p>🔗💬</p>
        </div>
      </div>
    </div>
  );
}

Article.PropsTypes = {
  title: PropsTypes.string.isRequired,
  subtitle: PropsTypes.string.isRequired,
  writer: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  subsection: PropsTypes.string.isRequired,
  picture: PropsTypes.string.isRequired
};
export default Article;
