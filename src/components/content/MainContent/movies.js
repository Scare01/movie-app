import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';

export default class Movies extends React.Component {
  render() {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
    const api_key = '8f2490decc0a336ae87db98a12a29a59';
    const img_url_wide = 'https://image.tmdb.org/t/p/w500_and_h282_face/';
    const img_url = 'https://image.tmdb.org/t/p/w250_and_h141_face/';
    const detail_url = '/MovieDetail/';

    return (
      <Fetch 
        url={url+api_key}
      >
        {({data}) => (
          <div id='movies'>
          <Item>
            <a href={detail_url + data.results[0].id}>
              <Item.Image src={img_url_wide + data.results[0].backdrop_path} />
            </a>
            <span id='movie_title'>{data.results[0].title}</span>
          </Item>
            
          
          <Item.Group id='movies_small'>
          {data.results.slice(1,3).map(movie =>
              <Item key={movie.id}>
                <a href={detail_url + movie.id}>
                  <Item.Image src={img_url + movie.backdrop_path} />
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