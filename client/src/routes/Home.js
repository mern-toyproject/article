import React from 'react';
import Axios from 'axios';
import Navigation from '../components/Navigation';
import Book from '../components/Book';
import Top from '../components/Top';
import './css/Home.css';

class Home extends React.Component {
  state = {
    isDataLoaded: false,
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const {
      data: {
        results: { books },
      },
    } = await Axios.get(
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=WWhxdT47Hy6gmIdTbaHrKNAFWw4lOGKk'
    );
    console.log(books);
    this.setState({ isDataLoaded: true, books });
  };

  render() {
    const { books, isDataLoaded } = this.state;
    return (
      <div className='homeContainer'>
        <Top />
        <div className='main'>
          <Navigation />
          <div className='books'>
            {isDataLoaded ? (
              <div className='books_book'>
                {books.map((book, key) => (
                  <Book
                    key={key}
                    title={book.title}
                    rank={book.rank}
                    description={book.description}
                    author={book.author}
                    poster={book.book_image}
                    buy={book.amazon_product_url}
                  />
                ))}
              </div>
            ) : (
              <div className='loading'>
                <h2>Loading...</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
