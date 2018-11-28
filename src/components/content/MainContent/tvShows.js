import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';

export default class TvShow extends React.Component {
  render() {
    const url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59';
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    const detail_url = '/TvShowDetail/';

    return (
      <Fetch 
        url={url+api_key}
      >
        {({data}) => (
          <Item.Group id="tvshows">
          {data.results.slice(0,3).map(movie =>
              <Item key={movie.id} className="tvshows_item">
                <a href={detail_url + movie.id}>
                  <Item.Image src={img_url + movie.poster_path} />  
                </a>
              </Item>
            )}
          </Item.Group>  
        )}

      </Fetch>
    )
  }
}