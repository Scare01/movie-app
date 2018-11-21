import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react'

import Movie from './movie';

export default class GetMovies extends React.Component {
  


  render() {
    const main_url=this.props.main_url;
    const api_key="8f2490decc0a336ae87db98a12a29a59";

    return (
      <Fetch 
        url={main_url+api_key}
      >

      {({ data }) => (
        <Item.Group>
          {data.results.map(movie =>
            <Movie
              movie_url={main_url}
              key={movie.id} 
              movie={movie}
            />
          )}
        </Item.Group>
      )}
      </Fetch>

    )
  }
}