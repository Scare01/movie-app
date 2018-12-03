import React from 'react';
import { Header } from 'semantic-ui-react';


import GetMovies from './getMovies';



export default class PopularMovies extends React.Component {

  render() {
   
    const main_url = "https://api.themoviedb.org/3/movie/popular?api_key=";

    return (
      <>
        <Header as='h2' textAlign="center">Popular Movies</Header>

        <GetMovies 
          main_url={main_url}
        />

      </>
    )
  }
}