import React from 'react';
import { Header } from 'semantic-ui-react';

import GetMovies from './getMovies';

export default class PopularTvShows extends React.Component {
  
  viewDetails = (movie) => {
    console.log(movie.id);
  }
  
  render() {
    const main_url = "https://api.themoviedb.org/3/tv/popular?api_key=";
    return (
      <>
        <Header as='h2' textAlign="center">Popular Tv Shows</Header>

        <GetMovies 
          main_url={main_url}
          
        />

      </>
    )
  }
}