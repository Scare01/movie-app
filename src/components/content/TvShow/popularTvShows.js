import React from 'react';
import { Header } from 'semantic-ui-react';

import GetTvShows from './getTvShows';


export default class PopularTvShows extends React.Component {

  
  render() {
    const main_url = "https://api.themoviedb.org/3/tv/popular?api_key=";
    
    return (
      <>
        <Header as='h2' textAlign="center">Popular Tv Shows</Header>

        <GetTvShows 
          main_url={main_url}
        />

      </>
    )
  }
}