import React from 'react';
import { Header, Item } from 'semantic-ui-react';

import Movie from '../Movie/movie';
import TvShow from '../TvShow/tvshow';


export default class Favorites extends React.Component {
  render() {
    const list_of_favorites = Object.keys(localStorage);
    
    return (
      <>
        <Header as="h3" textAlign="center">Favorites</Header>
        
        <Item.Group>
        {list_of_favorites.map(movie =>
          movie.includes('movie') ?
          <Movie 
            movie={JSON.parse(window.localStorage.getItem(movie))}
          /> :
          <TvShow 
            tvshow={JSON.parse(window.localStorage.getItem(movie))}
          />
        )}
        </Item.Group>
        
      </>
    )
  }
}