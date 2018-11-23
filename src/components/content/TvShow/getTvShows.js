import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react'

import TvShow from './tvshow';

export default class GetTvShows extends React.Component {
  
  render() {
    const main_url=this.props.main_url;
    const api_key="8f2490decc0a336ae87db98a12a29a59";

    

    return (
      <Fetch 
        url={main_url+api_key}
      >

      {({ data }) => (
        <Item.Group>
          {data.results.map(tvshow =>
            <TvShow
              tvshow_url={main_url}
              key={tvshow.id} 
              tvshow={tvshow}
            />
          )}
        </Item.Group>
      )}
      </Fetch>

    )
  }
}