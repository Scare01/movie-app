import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';

export default class TvShow extends React.Component {
  render() {
    const url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59';
    const img_url_wide = 'https://image.tmdb.org/t/p/w500_and_h282_face/';
    const img_url = 'https://image.tmdb.org/t/p/w250_and_h141_face/';
    const detail_url = '/TvShowDetail/';

    return (
      <Fetch 
        url={url+api_key}
      >
        {({data}) => (
          <div id='tvshows'>
            
            <Item>
              <a href={detail_url + data.results[0].id}>
                <Item.Image src={img_url_wide + data.results[0].backdrop_path} />
                <span id='movie_title'>{data.results[0].name}</span>
              </a>
            </Item>

            <Item.Group id='tv_small'>
              {data.results.slice(1,3).map(tvshow => 
                <Item key={tvshow.id}>
                  <a href={detail_url + tvshow.id}>
                    <Item.Image src={img_url + tvshow.backdrop_path} />
                    <span id='movie_title'>{tvshow.name}</span>
                  </a>
                </Item>  
              )}
            
            </Item.Group>
          </div>
        )}

      </Fetch>
    )
  }
}


