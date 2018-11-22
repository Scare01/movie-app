import React from 'react';
import { Header } from 'semantic-ui-react';
import './details.css';

import Movie from './movie';
import TvShow from './tvshow';
import GetCredits from './getCredits';

export default class MovieDetail extends React.Component {

  render() {

    const module = this.props.url_window.includes('Movies') ?
                    <Movie 
                      movie={this.props.movie}
                    /> :
                    this.props.url_window.includes('Tv') ?
                    <TvShow 
                      tvshow={this.props.movie}
                    /> :
                    null;


    return (
      <>
        {module}
        
        
        <Header as='h3'>Credits:</Header>
        <GetCredits 
          movie={this.props.movie}
        />

      </>
    )
  }
}