import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Item } from 'semantic-ui-react';

export default class TopMovies extends React.Component {
  render() {
    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=';
    let api_key = '8f2490decc0a336ae87db98a12a29a59';
    let img_url = 'https://image.tmdb.org/t/p/w250_and_h141_face/';
    let detail_url = '/MovieDetail/';

    return (
      <Fetch 
        url={url+api_key}
      >
        {({data}) => (
          
          <Item.Group id='top_movies_items'>
          {data.results.slice(3,7).map(movie =>
              <Item key={movie.id}>
                <a href={detail_url + movie.id}>
                  <Item.Image src={img_url + movie.backdrop_path} />
                  <span className='small_movie_title'>{movie.title}</span>
                </a>
              </Item>
            )}
          </Item.Group>  
          
        )}

      </Fetch>
    )
  }
}