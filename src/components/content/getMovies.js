import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react'

import Movie from './movie';

export default class GetMovies extends React.Component {
  
  viewDetails = (movie) => {
    this.props.viewDetails(movie);
  }

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