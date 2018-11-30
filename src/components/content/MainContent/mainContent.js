import React from 'react';
import { Header } from 'semantic-ui-react';

import Movies from './movies'; 
import TvShow from './tvShows';

import './mainContent.css';


export default class MainContent extends React.Component {
  render() {
    return (
      <div id='mainContent'>
        
        <div id="movies">
          <Header as='h2'>Movies</Header>
          <Movies />
        </div>  
          
        <div id='tvshows'>
          <Header as='h2' >Tv Shows</Header>
          <TvShow />
        </div>
        
      </div>
    )
  }
}