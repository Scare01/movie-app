import React from 'react';
import './details.css';

import Movie from './movie';

export default class MovieDetail extends React.Component {

  render() {
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    return (
      <>
        <Movie 
          movie={this.props.movie}
        />
        

      </>
    )
  }
}