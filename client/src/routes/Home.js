import React from 'react';
import Axios from 'axios';
import Navigation, { clickedTopic } from '../components/Navigation';
import Top from '../components/Top';
import './css/Home.css';
import Article from '../components/Article';

let url = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=0XDkuSm03JGQcVWg0Feu2IosfLcWSb71`;

class Home extends React.Component {
  state = {
    isDataLoaded: false,
    results: []
  };

  componentDidMount() {
    this.getAricles();
  }

  getAricles = async () => {
    const {
      data: { results }
    } = await Axios.get(url);
    this.setState({ isDataLoaded: true, results });
  };

  render() {
    const { results, isDataLoaded } = this.state;
    return (
      <div className='homeContainer'>
        <Top />
        <div className='main'>
          <Navigation />
          <div className='articles'>
            {isDataLoaded ? (
              <div className='articles_article'>
                {results.map((result, key) => (
                  <Article
                    title={result.title}
                    subtitle={result.abstract}
                    writer={result.byline}
                    date={result.updated_date}
                    subsection={result.subsection}
                    picture={result.multimedia[0].url}
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
