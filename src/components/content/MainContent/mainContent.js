import React from 'react';
import { Header } from 'semantic-ui-react';

import Movies from './movies'; 
import TvShow from './tvShows';


export default class MainContent extends React.Component {
  render() {
    return (
      <>
        <Header as='h2' >Movies</Header>
          <Movies />

        <Header as='h2' >Tv Shows</Header>
          <TvShow />
      </>
    )
  }
}